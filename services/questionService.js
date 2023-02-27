import http from './httpService';

const apiEndpoint = '/questions';

export function addQuestion(data, token) {
  return http.post(
    apiEndpoint,
    {
      subject: data.subject,
      description: data.description,
      question: data.question,
      options: data.options,
      answer: data.answer,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function getQuestions(token) {
  return http.get(`${apiEndpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
