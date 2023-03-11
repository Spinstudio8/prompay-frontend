import http from './httpService';

const apiEndpoint = '/settings';

export function userResetPassword(password, token) {
  return http.post(
    apiEndpoint + '/reset-password',
    {
      currentPassword: password.currentPassword,
      newPassword: password.newPassword,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function getAllSettings(token) {
  return http.get(apiEndpoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function savePlatformSettings(id, data, token) {
  return http.post(
    `${apiEndpoint}/${id}/save`,
    { data: data },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
