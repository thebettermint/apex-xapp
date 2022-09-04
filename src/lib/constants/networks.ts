export var DEFAULT_MAINNET = 'wss://xrplcluster.com';
export var DEFAULT_TESTNET = 'wss://s.altnet.rippletest.net:51233';
export var DEFAULT_DEVNET = 'wss://s.devnet.rippletest.net:51233';
export var DEFAULT_HOOKSNET = 'wss://hooks-testnet.xrpl-labs.com';
export var DEFAULT_NFTDEV = 'wss://xls20-sandbox.rippletest.net:51233';

export const availableNetworks = {
  ws: {
    mainnet: [
      'wss://xrplcluster.com/',
      'wss://xrpl.ws/',
      'wss://s1.ripple.com/',
      'wss://s2.ripple.com/',
      'wss://x1.sologenic.org',
    ],
    testnet: ['wss://s.altnet.rippletest.net:51233'],
    devnet: ['wss://s.devnet.rippletest.net:51233'],
    xls20: ['wss://xls20-sandbox.rippletest.net:51233'],
    hooks: ['wss://hooks-testnet.xrpl-labs.com'],
  },
  rpc: {
    mainnet: [
      'https://xrplcluster.com/',
      'https://xrpl.ws/',
      'https://s1.ripple.com:51234/',
      'https://s2.ripple.com:51234/',
    ],
    testnet: ['https://s.altnet.rippletest.net:51234/'],
    devnet: ['https://s.devnet.rippletest.net:51234/'],
  },
};

export const chainID = {
  mainnet: 1,
  testnet: 2,
  devnet: 4,
  xls20: 8,
  hooks: 16,
};

export const networks = [
  {
    name: 'mainnet',
    wss: 'wss://xrplcluster.com',
    rpc: 'https://xrplcluster.com/',
    id: chainID.mainnet,
    explorer: 'https://bithomp.com/explorer/',
    editable: false,
  },
  {
    name: 'testnet',
    wss: 'wss://s.altnet.rippletest.net:51233',
    rpc: 'https://s.altnet.rippletest.net:51234/',
    id: chainID.testnet,
    explorer: 'https://test.bithomp.com/explorer/',
    editable: false,
  },
  {
    name: 'devnet',
    wss: 'wss://s.devnet.rippletest.net:51233',
    rpc: 'https://s.devnet.rippletest.net:51234/',
    id: chainID.devnet,
    explorer: 'https://nft-devnet.xrpl.org/',
    editable: false,
  },
  {
    name: 'hooks',
    wss: 'wss://hooks-testnet-v2.xrpl-labs.com',
    rpc: 'wss://hooks-testnet-v2.xrpl-labs.com',
    id: chainID.hooks,
    docs: 'wss://hooks-testnet-v2.xrpl-labs.com',
    qr: 'https://xumm.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8cf85d25-b3ad-4241-99ab-f6172b93b193%2FqrCode_(7).png?table=block&id=2af80da7-875d-49cc-b1da-78fec65ff3b6&spaceId=eb8866e3-4311-4e85-a4c2-0ecfe166ea3c&width=290&userId=&cache=v2',
    explorer: 'https://hooks-testnet-v2-explorer.xrpl-labs.com/',
    editable: false,
  },
  {
    name: 'nft',
    wss: 'wss://xls20-sandbox.rippletest.net:51233',
    rpc: 'http://xls20-sandbox.rippletest.net:51234',
    id: chainID.xls20,
    docs: '',
    qr: '',
    explorer: 'https://xls20.bithomp.com/',
    editable: false,
  },
];
