const logger = (message: any, type?: string) => {
  if (process.env.NODE_ENV == 'production') return;
  console.log(type, ' : ', message);
};

export default logger;
