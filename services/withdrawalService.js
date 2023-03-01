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
