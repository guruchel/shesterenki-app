import axios from "axios";
import { API_URL, TIMEOUT } from "../constants/constants";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});
