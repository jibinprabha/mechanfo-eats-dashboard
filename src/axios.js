/* eslint-disable no-unused-vars */
import axios from "axios";

import { baseUrl } from "./Constants/Constant";
let token = localStorage.getItem('accessToken')
const instance = axios.create({
    baseURL: baseUrl}
  );

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // Handle 401 error (e.g., redirect to login, refresh token, etc.)
      console.log('Unauthorized access - maybe redirect to login?');

      // For example, you might want to refresh the token here
      // Or you might want to log out the user and redirect them to the login page

      // Example: redirect to login page
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export default instance
