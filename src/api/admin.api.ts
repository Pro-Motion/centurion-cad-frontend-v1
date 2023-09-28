import { Super } from "./super";

class Admin extends Super {
  constructor() {
    super({ baseEndpoint: "/admin" });
  }
}

export { Admin };
