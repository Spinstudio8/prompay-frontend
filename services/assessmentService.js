import http from './httpService';

const apiEndpoint = '/assessment';

export function startAssessment(token) {
  return http.get(`${apiEndpoint}/start`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function submitAssessment(assessmentAnswer, token) {
  return http.post(
    `${apiEndpoint}/submit`,
    {
      assessmentData: assessmentAnswer,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
