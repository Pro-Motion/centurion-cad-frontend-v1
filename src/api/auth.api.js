// 'use client';
import { instanceAPI, Super } from './super'

class Auth extends Super {
  constructor({ baseEndpoint }) {
    super({ baseEndpoint })
  }

  async refreshAccessToken() {
    const response = await this.GET({ endpoint: `/auth/refresh` })
    return response.data
  }

  refreshInterceptor() {
    instanceAPI.interceptors.response.use(
      (response) => {
        return response
      },

      async (error) => {
        const originalRequest = error.config
        const status = error.response.data.code
        if (status === 401 && !originalRequest._retry) {
          console.log('i retry')
          originalRequest._retry = true
          await refreshAccessToken()
          return instanceAPI(originalRequest)
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
    return this.GET({ endpoint: `/current?id=2` })
  }
  //  async refresh(refreshToken: string) {
  //   const tokens = await this.POST({ endpoint: "/refresh", body: { refreshToken } });
  //   return tokens;
  // }
}
const authApi = new Auth({ baseEndpoint: '/auth' })
export { authApi }
