import { MoviesData } from "./moviesData";

export interface AxiosRequestConfig {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  params?: Record<string, string | number>;
  headers?: Record<string, string | number | boolean>;
}

export interface AxiosData {
  page: number;
  results: MoviesData[];
  total_pages: number;
  total_results: number;
}

export interface AxiosResponse {
  data: AxiosData;
}
