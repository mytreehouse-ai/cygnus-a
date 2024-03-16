import { env } from "@/env.mjs";
import axios, { InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_OPENRED_BASEAPI_URL,
});

function checkQueryParamsAndClean(config: InternalAxiosRequestConfig<any>) {
  if (config.params) {
    Object.keys(config.params).forEach((key) => {
      if (config.params[key] === null || config.params[key] === undefined) {
        delete config.params[key];
      }
    });

    const publicListingsEndpoint =
      config.url === "https://openred-api.kmcc-app.cc/properties/public";

    /**
     * 1 - for Available
     * 2 - for Under Offer
     * 3 - for Sold
     * 4 - Delisted property
     */
    if (!config.params?.property_status && publicListingsEndpoint) {
      // Query only all properties that is available.
      config.params.property_status = 1;
    }

    if (!config.params?.page_size) {
      config.params.page_size = 15;
    }
  }
}

apiClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // For example, you can set the auth token here if it's needed for every request

    // const token = localStorage.getItem("authToken");

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    checkQueryParamsAndClean(config);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login or refresh the token
    }

    return Promise.reject(error);
  },
);

export default apiClient;
