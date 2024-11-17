import axios from 'axios';
import FormData from 'form-data';
import { TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM } from '../config';

export const sendSMS = (to: string, message: string) => {
  const form = new FormData();
  form.append('To', `+1${to}`);
  form.append('From', TWILIO_FROM);
  form.append('Body', message);

  return axios.post(
    `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`,
    form,
    {
      auth: {
        username: TWILIO_SID,
        password: TWILIO_TOKEN,
      },
    },
  );
};
