// 'use client';
import { Super } from './super'
interface Constructor {
  baseEndpoint: string
}
interface LoginParams {
  email: string
  password: string
}
interface ActivateParams {
  firstName: string
  lastName: string
  dateOfBirth: string
  email: string
  password: string
}
class Auth extends Super {
  constructor({ baseEndpoint }: Constructor) {
    super({ baseEndpoint })
  }

  //
  public async login(credentials: LoginParams) {
    const user = await this.POST({ endpoint: '/login', body: credentials })
    return user
  }

  public async activate(credentials: ActivateParams) {
    return this.POST({ endpoint: '/activate', body: credentials })
  }
  public async current() {
    return this.GET({ endpoint: `/current` })
  }
  // public async refresh(refreshToken: string) {
  //   const tokens = await this.POST({ endpoint: "/refresh", body: { refreshToken } });
  //   return tokens;
  // }
}
const authApi = new Auth({ baseEndpoint: '/auth' })
export { authApi }
