//Check password format

const regCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g;

const checkPassword = (value: string) => {
  let results = value.match(regCheck);
  if (!results)
    return {
      status: false,
      msg: 'Password must be at least 6 characters, no more than 20 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.',
    };

  return { status: true, msg: null };
};

export default checkPassword;
