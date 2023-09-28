// 'use client';
import { Super } from "./super";
interface Constructor {
  baseEndpoint: string;
}
interface LoginParams {
  email: string;
  password: string;
}

class Auth extends Super {
  constructor({ baseEndpoint }: Constructor) {
    super({ baseEndpoint });
  }

  //
  public async login(credentials: LoginParams) {
    const user = await this.POST({ endpoint: "/login", body: credentials });
    return user;
  }
  public async current() {
    console.log();

    const currentUser = await this.GET({ endpoint: `/current` });

    return currentUser;
  }
  // public async refresh(refreshToken: string) {
  //   const tokens = await this.POST({ endpoint: "/refresh", body: { refreshToken } });
  //   return tokens;
  // }
}
const authApi = new Auth({ baseEndpoint: "/auth" });
export { authApi };
