import Yup from "yup";
import { AUTH_REGEX } from "../regex/auth";

// = = = = = = = = = COMMON REFS = = = = = = = = =

// - - - - AUTH - - - -
const AUTH_REFS = {
  password: Yup.string().matches(AUTH_REGEX.PASSWORD),
  email: Yup.string().email().matches(AUTH_REGEX.EMAIL),
};
// - - - -  USER - - - -

export { AUTH_REFS };
