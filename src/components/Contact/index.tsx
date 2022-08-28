import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import Input from '../Input';
import Button from '../Button';

import emailjs from 'emailjs-com';

const Result = () => {
  return (
    <p className={styles.successMsg}>
      Your Message has been successfully sent. We will contact you soon.
    </p>
  );
};

const ErrorMsg = () => {
  return (
    <p className={styles.errorMsg}>
      Something went wrong. Make sure to include all information above.
    </p>
  );
};

const Contact = () => {
  const [result, showresult] = useState<boolean>(false);
  const [error, showerror] = useState<boolean>(false);

  const orgRef = useRef<any>(null);
  const firstRef = useRef<any>(null);
  const lastRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = () => {
    if (
      !orgRef.current ||
      !firstRef.current ||
      !lastRef.current ||
      !emailRef.current ||
      !aboutRef.current
    )
      return showerror(true);

    if (
      orgRef.current.value === '' ||
      firstRef.current.value === '' ||
      lastRef.current.value === '' ||
      emailRef.current.value === '' ||
      aboutRef.current.value === ''
    )
      return showerror(true);

    let data = {
      org: orgRef.current.value,
      first: firstRef.current.value,
      last: lastRef.current.value,
      email: emailRef.current.value,
      about: aboutRef.current.value,
    };

    if (process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID)
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          data,
          process.env.NEXT_PUBLIC_USER_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            resetForm();
            showresult(true);
          },
          (error) => {
            console.log(error.text);
            showerror(true);
          }
        );
  };

  const resetForm = () => {
    if (
      !orgRef.current ||
      !firstRef.current ||
      !lastRef.current ||
      !emailRef.current ||
      !aboutRef.current
    )
      return;

    firstRef.current?.clear();
    orgRef.current?.clear();
    firstRef.current?.clear();
    lastRef.current?.clear();
    emailRef.current?.clear();
    aboutRef.current.value = '';
  };

  setTimeout(() => {
    showresult(false);
    showerror(false);
  }, 5000);

  return (
    <form className={styles.form}>
      <div className={styles.title}>get in touch</div>

      <div className={styles.row}>
        <Input
          ref={firstRef}
          className={styles.input}
          type="text"
          value=""
          placeholder="first name"
          label="first name"
          /*               onChange={handleChange} */
        />
        <Input
          ref={lastRef}
          className={styles.input}
          type="text"
          value=""
          placeholder="last name"
          label="last name"
          /*               onChange={handleChange} */
        />
      </div>
      <Input
        ref={orgRef}
        className={styles.input}
        type="text"
        value=""
        placeholder="organization name"
        label="organization name"
        /*               onChange={handleChange} */
      />
      <Input
        ref={emailRef}
        className={styles.input}
        type="text"
        value=""
        placeholder="email"
        label="email"
        /*               onChange={handleChange} */
      />
      <textarea
        ref={aboutRef}
        className={styles.textarea}
        placeholder="tell us about you"
        /*               onChange={handleChange} */
      />

      <Button
        type="secondary"
        theme={'light'}
        height={'36px'}
        width={'120px'}
        onClick={() => sendEmail()}
        className={styles.button}>
        <div>submit</div>
      </Button>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
      <div className="rn-form-group">{error ? <ErrorMsg /> : null}</div>
    </form>
  );
};

Contact.defaultProps = {
  theme: 'dark',
};

export default Contact;
