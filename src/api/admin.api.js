import { Super } from './super'

class Admin extends Super {
  constructor() {
    super({ baseEndpoint: '/admin' })
  }

  public async createUser(userData: { email: string; subRoles: [string]; mainRole: string }) {
    return this.POST({ endpoint: '/user', body: userData })
  }
}
const adminApi = new Admin()
export { adminApi }
