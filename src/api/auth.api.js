// 'use client';
import { Super } from './super'

class Auth extends Super {
  constructor({ baseEndpoint }) {
    super({ baseEndpoint })
  }

  async refreshAccessToken(refreshToken) {
    const response = await this.GET({
      endpoint: `/refresh`,
      body: { refreshToken }
    })
    return response.data
  }

  refreshInterceptor() {
    Super.INSTANCE.interceptors.response.use(
      (response) => {
        return response
      },

      async (error) => {
        const originalRequest = error.config
        const status = error.response.data.code

        if (status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          await this.refreshAccessToken()
          return Super.INSTANCE(originalRequest)
        }
        return Promise.reject(error)
      }
    )
  }

  //
  async login(credentials) {
    const user = await this.POST({ endpoint: '/login', body: credentials })
    return user
  }

  async activate(credentials) {
    return this.POST({ endpoint: '/activate', body: credentials })
  }
  async current() {
    return this.GET({ endpoint: `/current` })
    //add queryparams
  }
  //  async refresh(refreshToken: string) {
  //   const tokens = await this.POST({ endpoint: "/refresh", body: { refreshToken } });
  //   return tokens;
  // }
}
const authApi = new Auth({ baseEndpoint: '/auth' })
export { authApi }
