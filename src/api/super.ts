import { LocalStorage } from "@/helpers/localStorage.helper";
import axios from "axios";

//
export const instanceAPI = axios.create({
  baseURL: "",
});

//
interface SuperClass {
  baseEndpoint: string;
  contentType: string;
  POST: (params: HTTPMethodParams) => Promise<object>;
  GET: (params: HTTPMethodParams) => Promise<object>;
  PUT: (params: HTTPMethodParams) => Promise<object>;
  DELETE: (params: HTTPMethodParams) => Promise<object>;
  _fetchTo: (params: HTTPMethodParams) => Promise<object>;
}
//
interface HTTPMethodParams {
  endpoint: string;
  body: object;
  query: object;
  needFullResponse: boolean;
  options: object;
}
//
interface Constructor {
  baseEndpoint: string;
}
//  - - - - - - - - - - - - - - - - - -
class Super implements SuperClass {
  static INSTANSE = axios.create({
    baseURL: false ? "https://orch.ldv.com.ua/api/v0" : "http://localhost:9990/api/v0",
  });
  baseEndpoint: string;
  contentType: string;
  constructor({ baseEndpoint }: Constructor) {
    this.baseEndpoint = baseEndpoint;
    this.contentType = "application/json";
  }

  public async GET({ endpoint = "", query = {}, needFullResponse = false, options = {} }) {
    const response = await this._fetchTo({
      method: "GET",
      endpoint,
      query,
      needFullResponse,
      options,
    });

    return response;
  }
  // - - - - - - - - - - - -
  public async POST({
    endpoint = "",
    body = {},
    query = {},
    needFullResponse = false,
    options = {},
  }) {
    return this._fetchTo({
      method: "POST",
      endpoint,
      body,
      needFullResponse,
      query,
      options,
    });
  }
  // - - - - - - - - - - - -
  public async PUT({
    endpoint = "",
    body = {},
    query = {},
    needFullResponse = false,
    options = {},
  }) {
    return this._fetchTo({
      method: "PUT",
      endpoint,
      body,
      needFullResponse,
      query,
      options,
    });
  }
  // - - - - - - - - - - - -
  public async DELETE({
    endpoint = "",
    body = {},
    query = {},
    needFullResponse = false,
    options = {},
  }) {
    return this._fetchTo({
      method: "DELETE",
      endpoint,
      body,
      needFullResponse,
      query,
      options,
    });
  }
  //  - - - - - - - - - - - -
  async _fetchTo({
    method = "GET",
    endpoint = "",
    body = {},
    query = {},
    needFullResponse = false,
    options = {},
  }) {
    const formationURL = `${this.baseEndpoint}${endpoint}`;
    try {
      const response = await Super.INSTANSE({
        method,
        url: formationURL,
        data: body,
        params: query,
      });

      // if()
      if (!needFullResponse) {
        return response.data;
      }
      return response;
    } catch (e: any) {
      return Promise.reject(e);
    }
  }
}

export { Super };
