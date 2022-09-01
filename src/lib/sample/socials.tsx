import { QRCodeCanvas } from 'qrcode.react';
import NFTQrCode from 'src/components/Assets/images/jpg/NFTQrCode.jpg';

import Image from 'next/image';

import styles from 'src/styles/index.module.scss';

export default [
  {
    title: 'xls20d network',
    desc: 'This is a code for adding the xls20d network node to your xumm mobile application',
    url: '',
    comp: <Image src={NFTQrCode} width={240} height={240} className={styles.qrCode} />,
  },
  {
    title: 'our webapp',
    desc: 'share our webapp',
    url: 'https://apex-xapp-six.vercel.app/',
    comp: (
      <QRCodeCanvas
        value={'https://apex-xapp-six.vercel.app/'}
        level={'H'}
        size={240}
        className={styles.qrCode}
      />
    ),
  },
  {
    title: 'our xApp',
    desc: 'This is a code for adding our sandboxed xApp to your xumm mobile application',
    url: 'https://xumm.app/detect/xapp:intercoder.apexdemo',
    comp: (
      <QRCodeCanvas
        value={'https://xumm.app/detect/xapp:intercoder.apexdemo'}
        level={'H'}
        size={240}
        className={styles.qrCode}
      />
    ),
  },
  {
    title: 'linktree',
    desc: 'This is a code for accessing whirledlabs projects',
    url: 'https://linktr.ee/whirledlabs',
    comp: (
      <QRCodeCanvas
        value={'https://linktr.ee/whirledlabs'}
        size={240}
        level={'H'}
        className={styles.qrCode}
      />
    ),
  },
];
