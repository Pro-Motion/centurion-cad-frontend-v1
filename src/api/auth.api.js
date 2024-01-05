// 'use client';
import { Super } from './super'

class Auth extends Super {
  constructor({ baseEndpoint }) {
    super({ baseEndpoint })
  }

  async refreshAccessToken(refreshToken) {
    const response = await this.POST({
      endpoint: `/refresh`,
      body: { oldRefreshToken: refreshToken }
    })

    return response
  }
  //  endpoint: `/refresh?oldRefreshToken=${JSON.parse(refreshToken)}`
  accesInterceptor() {
    Super.INSTANCE.interceptors.request.use(
      async (config) => {
        const accessToken = localStorage.getItem('accessToken')
        config.headers = {
          Authorization: `Bearer ${JSON.parse(accessToken)}`
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
  }

  refreshInterceptor() {
    Super.INSTANCE.interceptors.response.use(
      (response) => {
        return response
      },

      async (error) => {
        const originalRequest = error.config
        const status = error.response.data.code
        const refresh = JSON.parse(localStorage.getItem('refreshToken'))
        if (status === 403 && !originalRequest._retry) {
          originalRequest._retry = true
          const data = await this.refreshAccessToken(refresh)
          localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
          localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken))
          return Super.INSTANCE(originalRequest)
        }
        return Promise.reject(error)
      }
    )
  }

  async login(credentials) {
    const user = await this.POST({ endpoint: '/login', body: credentials })
    return user
  }

  async activate(credentials) {
    return this.POST({ endpoint: '/activate', body: credentials })
  }
  async current(userId) {
    return this.GET({ endpoint: `/current?id=${userId}` })
  }
  //  async refresh(refreshToken: string) {
  //   const tokens = await this.POST({ endpoint: "/refresh", body: { refreshToken } });
  //   return tokens;
  // }
}
const authApi = new Auth({ baseEndpoint: '/auth' })
export { authApi }
