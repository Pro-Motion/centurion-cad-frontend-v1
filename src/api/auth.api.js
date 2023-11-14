// 'use client';
import { Super } from './super'

class Auth extends Super {
  constructor({ baseEndpoint }) {
    super({ baseEndpoint })
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
  }
  //  async refresh(refreshToken: string) {
  //   const tokens = await this.POST({ endpoint: "/refresh", body: { refreshToken } });
  //   return tokens;
  // }
}
const authApi = new Auth({ baseEndpoint: '/auth' })
export { authApi }
