const regCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;

const checkEmail = async (value: string) => {
  let results = value.match(regCheck);
  if (!results) return { status: false, msg: 'invalid email format' };

  let response = await accountService.checkEmail({ email: value });
  if (response.exists) return { status: false, msg: 'email already registered' };

  return { status: true, msg: null };
};

export default checkEmail;
