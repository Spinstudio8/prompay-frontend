import http from './httpService';

const apiEndpoint = '/admin';

export function getOverview(token) {
  return http.get(`${apiEndpoint}/overview`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getAdminUsers(token) {
  return http.get(`${apiEndpoint}/admin-users`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
