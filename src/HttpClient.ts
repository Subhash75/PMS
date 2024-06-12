/*
axios custom instance which uses react query to fetch data
supports all custom modification to request and response
use Abort Controller to manually cancel requests or to prevent race conditions
also supports responseType change for handling binary data
*/

import axios from "axios";

interface RequestObjTypes {
  data: object;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  isFormEncoded?: boolean;
  responseType?: "blob" | "json";
}

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
    }
    return Promise.reject(error);
  }
);

const HttpClient = async (
  url: string = "",
  options: RequestObjTypes = { data: {}, method: "GET", responseType: 'json' },
  signal?: AbortSignal,
  timeout?: number
) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const userToken =
    sessionStorage.getItem("token") && sessionStorage.getItem("token");

  let fullPath = `${baseUrl}${url}`;

  if (userToken) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userToken}`;
  }

  axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

  if (options.data instanceof FormData) {
    axiosInstance.defaults.headers.common["Content-Type"] =
      "multipart/form-data";
  }

  if (options.isFormEncoded) {
    axiosInstance.defaults.headers.common["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  return await axiosInstance({
    url: fullPath,
    method: options.method,
    signal,
    data: options.data,
    timeout: timeout ?? 30000,
    responseType: options.responseType,
  })
    .then((response) => {
      return {
        data: response?.data?.data,
        message: response?.data?.message,
        status: response?.data?.status,
      };
    })
    .catch((err) => {
      throw err;
    });
};

export default HttpClient;
