import http from './httpService';

const apiEndpoint = '/subjects';

export function getSubjects() {
  return http.get(`${apiEndpoint}`);
}
