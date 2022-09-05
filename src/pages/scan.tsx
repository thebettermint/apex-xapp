import type { NextPage } from 'next';
import Head from 'next/head';

import target from '../styles/visual.module.scss';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

import Button from 'src/components/Button';
import Spinner from 'src/components/Spinner';
import xappService from 'src/services/xapp.service';

interface NFT {
  Flags: number;
  Issuer: String;
  NFTokenID: string;
  NFTokenTaxon: number;
  TransferFee: number;
  URI: string;
  nft_serial: number;
}

const Scan: NextPage = () => {
  const storeContext = useStoreContext();

  const [wallet, setWallet] = useState<undefined | string>(undefined);
  const [image, setImage] = useState<undefined | string>(undefined);
  const [balance, setBalance] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isScanning, setIsScanning] = useState<any>(false);
  const [isConsumed, setIsConsumed] = useState<boolean>(false);

  const openScanner = async () => {
    setIsScanning(true);
    xappService.openScanner();
    let data = await xappService.scanStatus();
    console.log(data);
  };

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
          <div>Scan</div>
        </div>
        <div className={target.wrapper}>
          {isLoading ? (
            <div className={target.inner}>
              <Spinner />
              <div className={target.msg}>loading</div>
            </div>
          ) : isScanning ? (
            <div className={target.inner}>
              <Spinner />
              <div className={target.msg}>scanning</div>
            </div>
          ) : (
            <div className={target.inner}>
              <div className={target.msg}>imagine...</div>
              <div className={target.help}>
                you are responsible for ticket admissions for a local event... Ask a friend [ person
                next to you ] if they would like to enter the event...
              </div>
              <div className={target.help}>
                Hint: Scan their NFT and then ask them to click the refresh button in the bottom
                right corner. Their NFT status should change...
              </div>
              <div className={target.buttonContainer}>
                <Button
                  className={target.button}
                  type="primary"
                  theme="light"
                  height={40}
                  onClick={openScanner}>
                  <div className={target.buttonText}>OPEN SCANNER</div>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Scan;
