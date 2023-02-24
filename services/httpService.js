import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
//console.log(process.env.REACT_APP_API_URL);

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // if it's an unexpected error
  if (!expectedError) {
    toast('An unexpected error occurred.', { className: 'toast-style' });
  }

  return Promise.reject(error); // the error is sent to the catch block
});

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};

export default httpService;
