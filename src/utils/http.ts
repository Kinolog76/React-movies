import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_ACCESS_TOKEN;
import { AxiosRequestConfig, AxiosResponse, AxiosData } from "@/utils/models/axios";

//* Популярные фильмы
export async function getPopularMovies(page: string = "1"): Promise<AxiosData> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${API_URL}movie/popular`,
    params: { language: "en", page: page },
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  try {
    const response: AxiosResponse = await axios.request(options);
    console.log("getPopularMovies", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    throw new Error("Failed to fetch popular movies");
  }
}
