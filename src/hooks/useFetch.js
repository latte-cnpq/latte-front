import axios from 'axios';
import { useCallback } from 'react';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACK_URL;

const useAxios = () => {
  const fetchData = useCallback(async ({ url, method, body = null, headers = null }) => {
    return axios[method](url, body, JSON.parse(headers));
  }, []);

  return { fetchData };
};

export default useAxios;
