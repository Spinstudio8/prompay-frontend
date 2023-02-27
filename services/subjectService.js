import http from './httpService';

const apiEndpoint = '/subjects';

export function getSubjects(token) {
  return http.get(`${apiEndpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
