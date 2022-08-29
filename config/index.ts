import env from './env';

const nodes = {
  sb: {
    ip: env['SB_NODE_IP'] || '0.0.0.0',
    port: env['SB_NODE_PORT'] || 9650,
  },
  fl: {
    ip: env['FL_NODE_IP'] || '0.0.0.0',
    port: env['FL_NODE_PORT'] || 9650,
  },
  xrpl: {
    ip: env['XRPL_NODE_IP'] || '0.0.0.0',
    port: env['XRPL_NODE_PORT'] || 9650,
  },
};

export default {
  run: env['NODE_ENV'],
  email: {
    address: env['EMAIL_ADDR'],
    password: env['EMAIL_PASS'],
    host: env['EMAIL_HOST'] || 'smtp.gmail.com',
    port: env['EMAIL_PORT'] || 587,
  },
  db: {
    port: env['DB_PORT'] || 27017,
    name: env['DB_NAME'],
    container: env['DB_CT_NAME'],
    user: env['DB_ROOT_KEY'] || 'root',
    pass: env['DB_ROOT_SECRET'] || 'password',
    uri: env['DB_URI'],
  },
  wallet: {
    address: env['WALLET_ADDRESS'],
    secret: env['WALLET_SECRET'],
  },
  api: {
    key: env['API_KEY'],
    secret: env['API_SECRET'],
  },
  jwt: {
    secret: env['JWT_SECRET'],
  },
  nodes: {
    sb: Object.assign(nodes.sb, {
      rpc: `http://${nodes.sb.ip}:${nodes.sb.port}/ext/bc/C/rpc`,
    }),
    fl: Object.assign(nodes.fl, {
      rpc: `http://${nodes.fl.ip}:${nodes.fl.port}/ext/bc/C/rpc`,
    }),
    xrpl: Object.assign(nodes.xrpl, {
      rpc: `http://${nodes.xrpl.ip}:${nodes.xrpl.port}`,
    }),
  },
  xumm: {
    key: env['API_KEY'] || '',
    secret: env['API_SECRET'] || '',
  },
};
