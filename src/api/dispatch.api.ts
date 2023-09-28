import { Super } from "./super";

class Dispatch extends Super {
  constructor() {
    super({ baseEndpoint: "/dispatch" });
  }
}

export { Dispatch };
