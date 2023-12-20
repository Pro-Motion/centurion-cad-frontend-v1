import { LocalStorage } from '@/helpers/localStorage.helper'
import axios from 'axios'

//
export const instanceAPI = axios.create({
  baseURL: '',
  withCredentials: true
})

//  - - - - - - - - - - - - - - - - - -
class Super {
  static INSTANSE = axios.create({
    baseURL: true ? 'https://orch.ldv.com.ua/api/v0' : 'http://localhost:9990/api/v0'
  })

  constructor({ baseEndpoint }) {
    this.baseEndpoint = baseEndpoint
    this.contentType = 'application/json'
  }

  async GET({ endpoint = '', query = {}, needFullResponse = false, options = {} }) {
    const response = await this._fetchTo({
      method: 'GET',
      endpoint,
      query,
      needFullResponse,
      options
    })

    return response
  }
  // - - - - - - - - - - - -
  async POST({ endpoint = '', body = {}, query = {}, needFullResponse = false, options = {} }) {
    return this._fetchTo({
      method: 'POST',
      endpoint,
      body,
      needFullResponse,
      query,
      options
    })
  }
  // - - - - - - - - - - - -
  async PUT({ endpoint = '', body = {}, query = {}, needFullResponse = false, options = {} }) {
    return this._fetchTo({
      method: 'PUT',
      endpoint,
      body,
      needFullResponse,
      query,
      options
    })
  }
  // - - - - - - - - - - - -
  async DELETE({ endpoint = '', body = {}, query = {}, needFullResponse = false, options = {} }) {
    return this._fetchTo({
      method: 'DELETE',
      endpoint,
      body,
      needFullResponse,
      query,
      options
    })
  }
  //  - - - - - - - - - - - -
  async _fetchTo({
    method = 'GET',
    endpoint = '',
    body = {},
    query = {},
    needFullResponse = false,
    options = {}
  }) {
    const formationURL = `${this.baseEndpoint}${endpoint}`
    try {
      const response = await Super.INSTANSE({
        method,
        url: formationURL,
        data: body,
        params: query
      })

      // if()
      if (!needFullResponse) {
        return response.data
      }
      return response
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export { Super }
