import fs from 'fs';
import sendEmail from '../helpers/sendEmail';
import handlebars from 'handlebars';
import { User } from 'prisma/generated/client';
import { Invoice } from 'prisma/generated/client';
import path from 'path';

const assetPath = {
  banner: path.resolve('src', 'components/Assets/images/png/email/banner-email.png'),
  twitter: path.resolve('src', 'components/Assets/images/png/email/twitter_purp.png'),
  github: path.resolve('src', 'components/Assets/images/png/email/github_purp.png'),
  discord: path.resolve('src', 'components/Assets/images/png/email/discord_purp.png'),
  facebook: path.resolve('src', 'components/Assets/images/png/email/facebook_purp.png'),
  telegram: path.resolve('src', 'components/Assets/images/png/email/telegram_purp.png'),
  heart: path.resolve('src', 'components/Assets/images/png/email/heart_purp.png'),
};

const sendVerificationEmail = async (user: User, origin: any) => {
  try {
    const verifyUrl = `${origin}/verify-email?token=${user.verificationToken}`;

    const filePath = path.resolve('src', 'components/Assets/templates/verify.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
      username: user.username,
      verificationToken: user.verificationToken,
      date: Date.now(),
      url: verifyUrl,
    };
    const htmlToSend = template(replacements);

    await sendEmail({
      to: user.email,
      subject: 'Welcome to checksum - Verify Your Email',
      attachments: [
        {
          filename: 'banner.png',
          path: assetPath.banner,
          cid: 'banner', //same cid value as in the html img src
        },
        {
          filename: 'twitter.png',
          path: assetPath.twitter,
          cid: 'twitter', //same cid value as in the html img src
        },
        {
          filename: 'github.png',
          path: assetPath.github,
          cid: 'github', //same cid value as in the html img src
        },
        {
          filename: 'facebook.png',
          path: assetPath.facebook,
          cid: 'facebook', //same cid value as in the html img src
        },
        {
          filename: 'telegram.png',
          path: assetPath.telegram,
          cid: 'telegram', //same cid value as in the html img src
        },
        {
          filename: 'discord.png',
          path: assetPath.discord,
          cid: 'discord', //same cid value as in the html img src
        },
        {
          filename: 'heart.png',
          path: assetPath.heart,
          cid: 'heart', //same cid value as in the html img src
        },
      ],
      html: htmlToSend,
    });
  } catch (error) {
    console.log(error);
  }
};

const sendAlreadyRegisteredEmail = async (email: any, origin: any) => {
  try {
    let message;
    if (origin) {
      message = `<p>If you don't know your password please visit the <a href="${origin}/account/forgot-password">forgot password</a> page.</p>`;
    } else {
      message = `<p>If you don't know your password you can reset it via the <code>/account/forgot-password</code> api route.</p>`;
    }

    await sendEmail({
      to: email,
      subject: 'Sign-up Verification API - Email Already Registered',
      attachments: null,
      html: `<h4>Email Already Registered</h4>
               <p>Your email <strong>${email}</strong> is already registered.</p>
               ${message}`,
    });
  } catch (error) {
    console.log(error);
  }
};

const sendInvoiceEmail = async (invoice: Invoice, email: string, user: User, origin: any) => {
  try {
    const invoiceURL = `${origin}/invoices/pay?id=${invoice.id}`;

    const filePath = path.resolve('src', 'components/Assets/templates/invoice.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
      username: user.username,
      date: Date.now(),
      url: invoiceURL,
    };
    const htmlToSend = template(replacements);

    await sendEmail({
      to: email,
      subject: `checksum - Received Invoice from ${user.username}`,
      attachments: [
        {
          filename: 'banner.png',
          path: assetPath.banner,
          cid: 'banner', //same cid value as in the html img src
        },
        {
          filename: 'twitter.png',
          path: assetPath.twitter,
          cid: 'twitter', //same cid value as in the html img src
        },
        {
          filename: 'github.png',
          path: assetPath.github,
          cid: 'github', //same cid value as in the html img src
        },
        {
          filename: 'facebook.png',
          path: assetPath.facebook,
          cid: 'facebook', //same cid value as in the html img src
        },
        {
          filename: 'telegram.png',
          path: assetPath.telegram,
          cid: 'telegram', //same cid value as in the html img src
        },
        {
          filename: 'discord.png',
          path: assetPath.discord,
          cid: 'discord', //same cid value as in the html img src
        },
        {
          filename: 'heart.png',
          path: assetPath.heart,
          cid: 'heart', //same cid value as in the html img src
        },
      ],
      html: htmlToSend,
    });
  } catch (error) {
    console.log(error);
  }
};

const sentInvoiceEmail = async (invoice: Invoice, email: string, user: User, origin: any) => {
  try {
    const invoiceURL = `${origin}/invoices/view?id=${invoice.id}`;

    const filePath = path.resolve('src', 'components/Assets/templates/sentInvoice.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
      username: user.username,
      date: Date.now(),
      url: invoiceURL,
      emailAddress: email,
    };
    const htmlToSend = template(replacements);

    await sendEmail({
      to: user.email,
      subject: 'Update from checksum - Sent Invoice',
      attachments: [
        {
          filename: 'banner.png',
          path: assetPath.banner,
          cid: 'banner', //same cid value as in the html img src
        },
        {
          filename: 'twitter.png',
          path: assetPath.twitter,
          cid: 'twitter', //same cid value as in the html img src
        },
        {
          filename: 'github.png',
          path: assetPath.github,
          cid: 'github', //same cid value as in the html img src
        },
        {
          filename: 'facebook.png',
          path: assetPath.facebook,
          cid: 'facebook', //same cid value as in the html img src
        },
        {
          filename: 'telegram.png',
          path: assetPath.telegram,
          cid: 'telegram', //same cid value as in the html img src
        },
        {
          filename: 'discord.png',
          path: assetPath.discord,
          cid: 'discord', //same cid value as in the html img src
        },
        {
          filename: 'heart.png',
          path: assetPath.heart,
          cid: 'heart', //same cid value as in the html img src
        },
      ],
      html: htmlToSend,
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  sendVerificationEmail,
  sendAlreadyRegisteredEmail,
  sentInvoiceEmail,
  sendInvoiceEmail,
};
