export class LocalStorage {
  public static getItem(key: string) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (e) {
      console.error(e);
    }
  }

  public static setItem(key: string, value: any): void {
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
