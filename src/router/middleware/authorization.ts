class Authorization {
  provateRoutes: string[]
  restrictedRoutes: string[]
  constructor({ privateRoutes = ['Home'], restrictedRoutes = ['Login'] }) {
    this.provateRoutes = privateRoutes
    this.restrictedRoutes = restrictedRoutes
  }
  public isOnPrivateRoute(currentLocation: string): boolean {
    return false
  }
  public isOnRestrictedRoute(currentLocation: string): boolean {
    return false
  }
  public async checkCurrentUser(): Promise<{ user: string }> {
    return { user: '' }
  }
}

export default Authorization
