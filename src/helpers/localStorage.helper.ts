export class LocalStorage {
  public static setAuthTokens({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    this.setItem("accessToken", accessToken, "setuath");
    this.setItem("refreshToken", refreshToken, "setuath");
  }

  public static getItem(key: string) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (e) {
      console.error(e);
    }
  }

  public static setItem(key: string, value: any, who: string): void {
    try {
      const serializedData = JSON.stringify(value);
      localStorage.setItem(key, serializedData);
    } catch (e) {
      console.error(e);
    }
  }
  public static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }
}
