import { Super } from "./super";

class Fire extends Super {
  constructor() {
    super({ baseEndpoint: "/fire" });
  }
}

export { Fire };
