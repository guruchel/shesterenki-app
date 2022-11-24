import axios from "axios";
import { BASE_URL, TIMEOUT } from "../constants/constants";
export const axiosInstance = () => {
  const config = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
  return config;
};
export const axiosGears = axiosInstance();
