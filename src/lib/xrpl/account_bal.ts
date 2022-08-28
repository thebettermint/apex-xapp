import { Client } from 'xrpl';
import { currencyHexToUTF8 } from '../utils/hexConversion';


interface ICurrency {
  currency: string
  value: string
  issuer?:string
}


const account_balance = async (api:Client|undefined, account:string) => {

  try {
    if (api == undefined) return undefined
    let response = await api.getBalances(account);

    let processResponse = response.map((obj:ICurrency) => {
      if (obj && obj.currency) obj.currency = currencyHexToUTF8(obj.currency)
      return obj
    })

    return processResponse;

  } catch(error:any) {
    return Error(error)
  }
}


export default account_balance