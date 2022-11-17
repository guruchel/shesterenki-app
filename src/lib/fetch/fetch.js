import { axiosInstance } from "../http";

export const fetchPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};
