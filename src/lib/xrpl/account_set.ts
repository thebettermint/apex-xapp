import { Client, Wallet } from 'xrpl';
import { AccountSetAsfFlags, AccountSetTfFlags } from 'xrpl';

const account_set = async ({
  api,
  key,
  domain,
  flags,
  setFlags,
  transferRate,
  tickerSize,
  config,
}: {
  api: Client | undefined;
  key: string;
  domain: string;
  flags: string;
  setFlags: string;
  transferRate: number;
  tickerSize: number;
  config: string;
}) => {
  try {
    if (api == undefined) return undefined;

    let wallet = Wallet.fromSecret(key);
    let address = wallet.classicAddress;

    let tx: any;

    if (config == 'hot') tx = hotWalletConfig(address);
    if (config == 'cold') tx = coldWalletConfig(address);

    if (config != 'cold' && config != 'hot')
      tx = {
        TransactionType: 'AccountSet',
        Account: address,
        TransferRate: transferRate,
        TickSize: tickerSize,
        Domain: domain,
        SetFlag: setFlags,
        Flags: flags,
      };

    let opts = {
      autfill: true,
      failhard: true,
      wallet: wallet,
    };

    let response = await api.submitAndWait(tx, opts);

    console.log(response);

    return response;
  } catch (error: any) {
    return Error(error);
  }
};

const coldWalletConfig = (publicAddress: string) => {
  // Configure issuer (cold address) settings ----------------------------------
  return {
    TransactionType: 'AccountSet',
    Account: publicAddress,
    TransferRate: 0,
    TickSize: 5,
    //Domain: '6578616D706C652E636F6D', // "example.com"
    SetFlag: AccountSetAsfFlags.asfDefaultRipple,
    // Using tf flags, we can enable more flags in one transaction
    Flags: AccountSetTfFlags.tfDisallowXRP | AccountSetTfFlags.tfRequireDestTag,
  };
};

const hotWalletConfig = (publicAddress: string) => {
  return {
    TransactionType: 'AccountSet',
    Account: publicAddress,
    //Domain: '6578616D706C652E636F6D', // "example.com"
    // enable Require Auth so we can't use trust lines that users
    // make to the hot address, even by accident:
    SetFlag: AccountSetAsfFlags.asfRequireAuth,
    Flags: AccountSetTfFlags.tfDisallowXRP,
  };
};

export default account_set;
