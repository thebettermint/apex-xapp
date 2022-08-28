import { Wallet } from 'xrpl';
import { currencyUTF8ToHex } from './hexConversion.ts';


const payment = async ([api, key, destination, amount, code, issuer]) => {

  await api.connect()
  console.log('Connected')
  
  let signer = Wallet.fromSecret(key)

  let currency_code = code
  if (code > 3) currency_code = currencyUTF8ToHex(code)

    let send_token_tx = {
      TransactionType: "Payment",
      Account: signer.classicAddress,
      Amount: {
        currency: currency_code,
        value: amount,
        issuer: issuer
      },
      Destination: destination
    }

    let send_tx_opts = {
      autfill: true,
      failhard: true,
      wallet: signer
    }


  let send = await api.submitAndWait(send_token_tx, send_tx_opts)
  console.log(send)

  // Check balances ------------------------------------------------------------
  console.log("Getting address balances...")

  let self_balances = await api.request({
    command: "account_lines",
    account: signer.classicAddress,
    ledger_index: "validated"
  })

  console.log(self_balances.result)
  console.log("Getting destination address balances...")

  let destination_balances = await api.request({
    command: "account_lines",
    account: destination,
    ledger_index: "validated"
  })

  console.log(destination_balances.result)

  api.disconnect()
}


export default payment;