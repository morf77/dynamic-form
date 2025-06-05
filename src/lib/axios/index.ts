import axios, { AxiosRequestConfig } from 'axios';
import { globalConfig } from '../../constants/config';
// import { toast } from 'react-toastify';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: globalConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
};

const axiosInstance = axios.create(axiosRequestConfig);

axiosInstance.interceptors.request.use(
  async requestConfig => {
    console.log('before request axios', requestConfig);
    return requestConfig;
  },
  error => Promise.reject(error)
);

// const toaster = (message: string) => {
//   typeof window !== 'undefined' && toast.error(message);
// };

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error?.response?.status) {
      case 400:
        break;

      case 401:
        // signOut();

        break;

      case 403:
        break;

      case 404:
        break;

      case 408:
        break;

      case 422:
        break;

      case 429:
        break;

      case 500:
        break;
      case 502:

      case 503:

      case 504:
        break;

      default:
        // toaster(error?.response?.data?.error?.message);
        break;
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
