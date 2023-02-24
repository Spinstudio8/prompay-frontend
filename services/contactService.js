import http from './httpService';
import { getJwt } from './authService';

const apiEndpoint = '/messages';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getJwt()}`,
  },
};

export function receiveMessage(body) {
  return http.post(
    `${apiEndpoint}/receive`,
    {
      fullName: body.fullName,
      email: body.email,
      subject: body.subject,
      telephone: body.telephone,
      message: body.message,
    },
    config
  );
}

export function sendEmail(mail) {
  return http.post(
    apiEndpoint,
    {
      to: mail.emailList,
      subject: mail.subject,
      text: mail.text,
    },
    config
  );
}
