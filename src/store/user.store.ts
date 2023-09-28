import { defineStore } from "pinia";
import { LocalStorage } from "@/helpers/localStorage.helper";

// interface UserCredentials extends UserData {
//   password: string;
//   confirmPassword: string;
// }
// enum SUB_ROLES {
//   CIV = "POLICE",
//   POLICE = "POLICE",
//   DISPATCH = "DISPATCH",
//   FIRE = "FIRE",
// }
// type SubRolesStrings = "CIV" | "POLICE" | "DISPATCH" | "FIRE";
interface State {
  userInfo: {
    id: string;
    email: string;
    name: string;
    dateOfBirth: string;
    roles: { subRoles: [] | string[]; mainRole: string };
    status: string;
    verified: boolean;
    mfaEnable: boolean;
  };
  session: { accessToken: string; refreshToken: string; IS_AUTHORIZE: boolean };
}

interface ILogin {
  id: string;
  email: string;
  name: string;
  dateOfBirth: string;
  roles: { subRoles: [] | string[]; mainRole: string };
  accessToken: string;
  refreshToken: string;
  status: string;
  verified: boolean;
  mfaEnable: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    userInfo: {
      id: "",
      email: "",
      name: "",
      dateOfBirth: "",
      roles: { subRoles: [], mainRole: "" },
      status: "",
      verified: false,
      mfaEnable: false,
    },

    session: {
      accessToken: "",
      refreshToken: "",
      IS_AUTHORIZE: false,
    },
  }),
  getters: {
    getUserData(): State {
      return { session: this.session, userInfo: this.userInfo };
    },
    getUserAuthStatus(): [IS_AUTHORIZE: boolean] {
      return [this.session.IS_AUTHORIZE];
    },
  },
  actions: {
    LOGIN({
      accessToken,
      refreshToken,
      id,
      mfaEnable,
      email,
      name,
      dateOfBirth,
      roles: { subRoles, mainRole },
      status,
      verified,
    }: ILogin) {
      // SESSION OPERATIONS
      this.session.IS_AUTHORIZE = true;
      this.session.accessToken = accessToken;
      this.session.refreshToken = refreshToken;
      LocalStorage.setItem("accessToken", accessToken);
      LocalStorage.setItem("refreshToken", refreshToken);

      // USER OPERATIONS
      this.userInfo = {
        id,
        mfaEnable,
        email,
        name,
        dateOfBirth,
        roles: { subRoles, mainRole },
        status,
        verified,
      };
      return;
    },

    LOGOUT() {
      // SESSION OPERATIONS
      this.session.IS_AUTHORIZE = false;
      this.session.accessToken = "";
      this.session.refreshToken = "";
      LocalStorage.removeItem("accessToken");
      LocalStorage.removeItem("refreshToken");

      // USER OPERATIONS
      this.userInfo = this.$state.userInfo;
      return;
    },

    REFRESH({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) {
      this.session.IS_AUTHORIZE = true;
      this.session.accessToken = accessToken;
      this.session.refreshToken = refreshToken;
      //
      LocalStorage.setItem("accessToken", accessToken);
      LocalStorage.setItem("refreshToken", refreshToken);
    },
    //
    // ACTIVATE() {
    //   return;
    // },

    UPDATE({
      accessToken,
      refreshToken,
      id,
      mfaEnable,
      email,
      name,
      dateOfBirth,
      roles: { subRoles, mainRole },
      status,
      verified,
    }: ILogin) {
      // SESSION OPERATIONS
      this.session.IS_AUTHORIZE = true;
      this.session.accessToken = accessToken;
      this.session.refreshToken = refreshToken;
      LocalStorage.setItem("accessToken", accessToken);
      LocalStorage.setItem("refreshToken", refreshToken);

      // USER OPERATIONS
      this.userInfo = {
        id,
        mfaEnable,
        email,
        name,
        dateOfBirth,
        roles: { subRoles, mainRole },
        status,
        verified,
      };
      return;
    },
  },
});
