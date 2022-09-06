import type { NextPage } from 'next';
import Head from 'next/head';

import target from '../styles/visual.module.scss';

import { useStoreContext } from '../context/store';
import { useState, useEffect, useRef } from 'react';

import Spinner from 'src/components/Spinner';

const Monitor: NextPage = () => {
  const storeContext = useStoreContext();

  //const ws = useRef<any>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [stream, setStream] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleMessage = async (event: any, ws: WebSocket) => {
    if (isPaused) return;
    let response = JSON.parse(event.data);

    if (response.type == 'error') return console.log(response);
    if (response.type == 'success') return;
    if (response.type == 'ping') return ws.send(JSON.stringify({ type: 'pong' }));
    if (response.type == 'history') return setStream(response.data);
    if (response.type == 'init') return setStream((prev: any) => [...prev, response.data]);
    if (response.type == 'update') {
      return setStream((prev) => {
        let newStream = prev.map((unit) => {
          console.log(unit);
          if (response.data.uuid === unit.uuid) return response.data;
          return unit;
        });
        return newStream;
      });
    }
  };

  const handleOpen = (ws: WebSocket) => {
    ws.send(
      JSON.stringify({
        type: 'history',
      })
    );
    ws.send(
      JSON.stringify({
        type: 'subscribe',
      })
    );
  };

  useEffect(() => {
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL || '');

    ws.onopen = () => handleOpen(ws);
    ws.onmessage = (e: any) => handleMessage(e, ws);
    ws.onclose = () => console.log('WS: Disconnected');
    ws.onerror = (e: any) => console.error('WS: Error', e);

    return () => {
      ws.close();
    };
  }, []);

  /*   useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e: any) => handleMessage(e);
  }, [isPaused]); */

  return (
    <>
      <Head>
        <title>apex-xapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={target.page}>
        <div className={`${target.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>Monitor</div>
        </div>
        <div className={target.wrapper}>
          {stream.length > 0 ? (
            <div className={target.inner}>
              <div className={target.streamWrapper}>
                {stream.map((item: any, index: number) => {
                  return (
                    <div key={index} className={`${target.unit} ${target[item.status]}`}>
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : isLoading ? (
            <div className={target.inner}>
              <Spinner />
              <div className={target.msg}>loading</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Monitor;
