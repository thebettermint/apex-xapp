const currencyHexToUTF8 = (code: string) => {
  try {
    if (code.length === 3) return code;

    let decoded = new TextDecoder().decode(hexToBytes(code));
    let padNull = decoded.length;

    while (decoded.charAt(padNull - 1) === '\0') padNull--;

    return decoded.slice(0, padNull);
  } catch (error) {
    console.log(error);
  }
};

const hexToBytes = (hex: string) => {
  let bytes = new Uint8Array(hex.length / 2);

  for (let i = 0; i !== bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }

  return bytes;
};

const currencyUTF8ToHex = (code: string) => {
  if (/^[a-zA-Z0-9\?\!\@\#\$\%\^\&\*\<\>\(\)\{\}\[\]\|\]\{\}]{3}$/.test(code)) return code;

  if (/^[A-Z0-9]{40}$/.test(code)) return code;

  let hex = '';

  for (let i = 0; i < code.length; i++) {
    hex += code.charCodeAt(i).toString(16);
  }

  return hex.toUpperCase().padEnd(40, '0');
};

export { currencyHexToUTF8, hexToBytes, currencyUTF8ToHex };
