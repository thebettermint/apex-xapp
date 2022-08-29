
import { AxiosResponse } from 'axios'
import React, { 
          useState, 
          createContext, 
          useContext, 
          Dispatch, 
          SetStateAction, 
          ReactElement,
          useEffect } from 'react'

import xumm from './lib/xumm'

interface IQr {
  url: string
  qrcode: string
  websocket: string
  uuid:string
}

interface IXummData {
  request:any
  baseUrl: string
  route: string
  key:string
  jwt?:string|undefined,
  payload?:any
  uuid?:string|undefined
}

interface IContextProps {
  opened: Boolean
  scanned: Boolean
  signed: Boolean
  error: Boolean
  refresh: () => void
  qr:IQr|undefined
  setQr:Dispatch<SetStateAction<IQr|undefined>>
  meta:any|undefined
  setMeta:Dispatch<SetStateAction<AxiosResponse<any, any> | undefined>>
  xummData:IXummData|undefined
  expire:undefined|number
  setXummData:Dispatch<SetStateAction<IXummData|undefined>>
  payload: (tx:any) => Promise<void>
}

const SignContext = createContext({} as IContextProps)

export const useSignContext = () => useContext(SignContext)

const SignContextProvider = (props:any) => {

  const [ websocket, setWebsocket ] = useState<undefined|WebSocket>(undefined)
  const [ opened, setOpened ] = useState<boolean>(false)
  const [ scanned, setScanned ] = useState<boolean>(false)
  const [ signed, setSigned ] = useState<boolean>(false)
  const [ rejected, setRejected ] = useState<boolean>(false)
  const [ error, setError ] = useState<boolean>(false)
  const [ qr, setQr ] = useState<IQr|undefined>(undefined)
  const [ expire, setExpire ] = useState<number|undefined>(undefined)
  const [ meta, setMeta ] = useState<AxiosResponse|undefined>(undefined)

  const [ xummData, setXummData ] = useState<IXummData|undefined>(undefined)

  const listenForExpiration = async (url:string) => {
    let ws = await xumm.openWebSocket(url)
    ws.onmessage = (event) => {
      let resp = JSON.parse(event.data);
      if(resp.expires_in_seconds) setExpire(resp.expires_in_seconds)
      if(resp.signed) ws.close();
    }  
  }

  const listenForScan = async (url:string) => {
    console.log('listening for scan...')
    let scanned = await xumm.scannedWebSocket(url)
    if (scanned instanceof Error) return setError(true)
    props.setState({state:'scanned', response: scanned})
    setScanned(true)
  }

  const listenForSign = async (url:string) => {
    console.log('listening for sign...')
    let signed:any = await xumm.signedWebSocket(url)
    if (signed instanceof Error) return setError(true)

    if (!xummData) return
    const payload_meta = await xumm.getMetadata(xummData)

    props.setState({state:'signed', response: payload_meta?.data.data})
    setSigned(true)
  }

  const handlePayload = async (tx:any) => {
    if (xummData ==undefined) return 
    let data = xummData
    let jwt = await xumm.init(data)

    data.jwt = jwt ? jwt : undefined 
    data.payload = { txjson: tx } 

    const payload_data = await xumm.payload(data)
    data.uuid = payload_data ? payload_data.data.uuid: undefined 
    const payload_meta = await xumm.getMetadata(data)

    console.log(payload_meta?.data.data)
    setMeta(payload_meta?.data.data)
    
    let qr = { 
        url: payload_data ? payload_data.data.next.always: undefined,
        qrcode: payload_data ? payload_data.data.refs.qr_png: undefined,
        websocket:payload_data ? payload_data.data.refs.websocket_status: undefined,
        uuid:payload_data ? payload_data.data.uuid: undefined}

    setQr(qr)
}

    const refresh = () => {
      setError(false)
      setScanned(false)
      setSigned(false)
      if (!xummData) return
      handlePayload(xummData.request)
    }

  useEffect(() => { 
    if (!qr) return
    listenForExpiration(qr.websocket)
    listenForScan(qr.websocket)
    listenForSign(qr.websocket)
  }, [qr])

  useEffect(() => { 
    if (!xummData) return
    handlePayload(xummData.request)
  }, [xummData])

  return (
    <SignContext.Provider value={{ 
                                    opened:opened,
                                    scanned:scanned,
                                    signed:signed,
                                    error:error,
                                    refresh:refresh,
                                    payload:handlePayload,
                                    qr:qr,
                                    setQr:setQr,
                                    meta:meta,
                                    setMeta:setMeta,
                                    xummData:xummData,
                                    setXummData:setXummData,
                                    expire:expire
                                    }}>
        {props.children}
    </SignContext.Provider>
  )
}

export default SignContextProvider