import React, { useState, useEffect, useRef, ReactElement } from 'react';
import style from './index.module.scss';
import FormInput from '../Input/FormInput';
import Button from 'src/components/Button';
import ModalHeader from './ModalHeader';

import XummComponent from '../Xumm';
import { xrpToDrops } from 'xrpl';

const MintStatusModal = (props: any) => {
  const [QR, setQR] = useState<any>(undefined);
  const [status, setStatus] = useState<any>(undefined);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3000';

  const handleClick = () => {
    setStatus('init');
    setQR(true);
  };

  useEffect(() => {
    if (status == undefined) return;
    console.log(status);
    if (status.state == 'signed') setStatus(undefined);
  }, [status]);

  return (
    <>
      <ModalHeader close={props.close} title={props.title} data={props.data} />
      <div className={style.modalContent}>
        <form action="">
          <div className={`${style.sectionTitle} ${style.blank}`}></div>

          {QR && status ? (
            <>
              <XummComponent
                request={{
                  TransactionType: 'Payment',
                  Destination: props.data.publicAddress,
                  Amount: xrpToDrops('100'),
                }}
                xumm_api_key={process.env.NEXT_PUBLIC_XUMM_KEY || ''}
                baseUrl={apiEndPoint}
                route={'api'}
                setState={setStatus}
                showButtons={false}
                showQR={true}
                show={true}
                header={false}
                size={200}
              />
            </>
          ) : (
            <>
              <div className={style.statusContainer}>
                <div className={style.title}>STATUS</div>
                <div className={style.content}>{props.data.status.toUpperCase()}</div>
              </div>

              <div className={style.statusContainer}>
                <div className={style.title}>LAST UPDATED</div>
                <div className={style.content}>{props.data.updatedAt}</div>
              </div>

              <div className={style.statusContainer}>
                <div className={style.title}>ADDRESS</div>
                <div className={style.content}>{props.data.publicAddress}</div>
              </div>

              <div className={style.statusContainer}>
                <div className={style.title}>TOKENID</div>
                <div className={style.content}>{props.data.tokenId}</div>
              </div>

              <div className={style.statusContainer}>
                <div className={style.title}>UUID</div>
                <div className={style.content}>{props.data.uuid}</div>
              </div>
            </>
          )}
          {QR ? null : (
            <div className={style.buttonContainer}>
              <Button
                className={style.button}
                type="winner"
                theme="light"
                height={36}
                onClick={handleClick}>
                SELECT WINNER
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default MintStatusModal;
