import { Super } from './super'

class Civilian extends Super {
  constructor() {
    super({ baseEndpoint: '/civilian' })
  }
  // getAllBrands() {}
}

export { Civilian }
