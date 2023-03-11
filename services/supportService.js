import http from './httpService';

const apiEndpoint = '/support';

export function sendProblemReport(data, token) {
  return http.post(
    `${apiEndpoint}/report-problem`,
    {
      area: data.area,
      details: data.details,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
