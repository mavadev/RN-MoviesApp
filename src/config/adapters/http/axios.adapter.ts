import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options{
  baseUrl: string;
  params: Record<string,string>
}

export class AxiosAdaptter implements HttpAdapter {

  private axiosInstance: AxiosInstance;

  constructor(options:Options){
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params
    })
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data

    } catch (err) {
      throw new Error(`Error fetching get: ${err}`)
    }
  }
  
}