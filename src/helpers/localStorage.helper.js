export class LocalStorage {
  static setAuthTokens({ accessToken, refreshToken }) {
    this.setItem('accessToken', accessToken, 'setuath')
    this.setItem('refreshToken', refreshToken, 'setuath')
  }

  static getItem(key) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (e) {
      console.error(e)
    }
  }

  static setItem(key, value, who) {
    try {
      const serializedData = JSON.stringify(value)
      localStorage.setItem(key, serializedData)
    } catch (e) {
      console.error(e)
    }
  }
  static removeItem(key) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error(e)
    }
  }
}
