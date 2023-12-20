import { Super } from './super'

class Admin extends Super {
  constructor() {
    super({ baseEndpoint: '/admin' })
  }

  async createUser(userData) {
    return this.POST({ endpoint: '/user', body: userData })
  }
}
const adminApi = new Admin()
export { adminApi }
