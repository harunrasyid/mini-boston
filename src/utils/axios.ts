import axios from "axios";

const BASE_URL = import.meta.env.VITE_MBTA_URL;
const API_KEY = import.meta.env.VITE_MBTA_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: Number(10000),
  headers: {
    "x-api-key": API_KEY,
  },
});

export default axiosInstance;
