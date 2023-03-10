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
