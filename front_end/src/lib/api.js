import Axios from "axios";
import { API_URL } from "appConstants/urlConstants";
import { toast } from "react-toastify";

function requestInterceptor(config) {
  config.headers.Accept = "application/json";
  config.headers.Accept = "application/json";
  return config;
}

export const api = Axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.error ||
      error.message ||
      "Someting went wrong!";
    toast.error(message);

    return Promise.reject({ message });
  }
);
