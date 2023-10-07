import { Super } from "./super";

class Police extends Super {
  constructor() {
    super({ baseEndpoint: "/police" });
  }
}

export { Police };
