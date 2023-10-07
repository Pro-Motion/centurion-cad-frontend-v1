import type { AxiosError, AxiosResponse } from 'axios'
import { Super } from '../super'
import { LocalStorage } from '@/helpers/localStorage.helper'

class Interceptors extends Super {
  public static SETUP(store: any) {
    this.INSTANSE.interceptors.request.use(this.requestFulfilled, this.requestRejected)
    this.INSTANSE.interceptors.response.use(this.responseFulfilled, (err: any) =>
      this.responseRejected(err, store)
    )
  }
  // REQUEST
  private static requestFulfilled(config: any) {
    const token = LocalStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token // for Spring Boot back-end
    }
    return config
  }
  private static requestRejected(err: AxiosError) {
    return Promise.reject(err)
  }
  // RESPONSE
  private static responseFulfilled(res: AxiosResponse) {
    return res
  }
  private static async responseRejected(err: any, store: any) {
    const originalConfig = err.config

    if (originalConfig?.url !== '/auth/login' && err.response) {
      // ACCESS TOKEN EXPIRED
      if (
        err.response.status === 403 &&
        err.response.data?.message?.includes('ACCESS token expired') &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true
        const oldRefreshToken = LocalStorage.getItem('refreshToken')
        try {
          const {
            data: { accessToken, refreshToken }
          } = await this.INSTANSE.post('/auth/refresh', { refreshToken: oldRefreshToken })
          console.log('accessToken', accessToken, 'refreshToken', refreshToken)
          console.log(store)
          store.REFRESH({ accessToken, refreshToken })
        } catch (err) {
          store.LOGOUT()
          return Promise.reject(err)
        }
      }
      if (err.response.status === 401) {
        store.LOGOUT()
        return Promise.reject(err)
      }
    }
    return Promise.reject(err)
  }
}

export default Interceptors
