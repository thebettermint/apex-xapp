const nodemailer = require('nodemailer');
import config from 'config';

const emailFrom = config.email.address;
const smtpOptions = {
  host: config.email.host,
  port: config.email.port || 587,
  auth: {
    user: config.email.address,
    pass: config.email.password,
  },
};

const sendEmail = async ({
  to,
  subject,
  attachments,
  html,
}: {
  to: any;
  subject: any;
  attachments: any;
  html: any;
}) => {
  const from = emailFrom;
  const transporter = nodemailer.createTransport(smtpOptions);
  await transporter.sendMail({ from, to, subject, html, attachments });
};

export default sendEmail;
