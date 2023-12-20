class Authorization {
  provateRoutes
  restrictedRoutes
  constructor({ privateRoutes = ['Home'], restrictedRoutes = ['Login'] }) {
    this.provateRoutes = privateRoutes
    this.restrictedRoutes = restrictedRoutes
  }
  isOnPrivateRoute(currentLocation) {
    return false
  }
  isOnRestrictedRoute(currentLocation) {
    return false
  }
  async checkCurrentUser() {
    return { user: '' }
  }
}

export default Authorization
