import axios from "axios";
import { useState } from "react";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const useAxios = () => {
  const [error, setError] = useState(null);

  const get = async (url, params = {}) => {
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  const post = async (url, data) => {
    try {
      axiosInstance.interceptors.request.use(
        (config) => {
          if (config.headers)
            config.headers.Authorization =
              "Bearer " + process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

          return config;
        },
        (error) => Promise.reject(error)
      );

      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  return { get, post, error };
};

export default useAxios;
