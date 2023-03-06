import http from './httpService';

const apiEndpoint = '/withdrawals';

export function withdraw(info, token) {
  return http.post(
    `${apiEndpoint}`,
    {
      type: info.type,
      bankName: info.bankName,
      accountNumber: info.accountNumber,
      accountName: info.accountName,
      amount: info.amount,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function getWithdrawals(token) {
  return http.get(`${apiEndpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getWithdrawalById(id, token) {
  return http.get(`${apiEndpoint}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function processWithdrawal(id, action, token) {
  return http.patch(
    `${apiEndpoint}/${id}/process`,
    { action: action },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
