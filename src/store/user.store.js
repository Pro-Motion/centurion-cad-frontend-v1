import { defineStore } from 'pinia'
import { LocalStorage } from '@/helpers/localStorage.helper'
// import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      id: '',
      email: '',
      name: '',
      dateOfBirth: '',
      roles: { subRoles: [], mainRole: '' },
      status: '',
      verified: false,
      mfaEnable: false
    },

    session: {
      accessToken: '',
      refreshToken: '',
      IS_AUTHORIZE: false
    }
  }),

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
      verified
    }) {
      // SESSION OPERATIONS
      this.session.IS_AUTHORIZE = true
      this.session.accessToken = accessToken
      this.session.refreshToken = refreshToken

      console.log('ACCESS', accessToken, 'REFRESH', refreshToken)
      LocalStorage.setAuthTokens({ accessToken, refreshToken })

      // USER OPERATIONS
      this.userInfo = {
        id,
        mfaEnable,
        email,
        name,
        dateOfBirth,
        roles: { subRoles, mainRole },
        status,
        verified
      }
      return
    },

    LOGOUT() {
      alert('logout')
      // SESSION OPERATIONS
      this.session.IS_AUTHORIZE = false
      this.session.accessToken = ''
      this.session.refreshToken = ''
      LocalStorage.removeItem('accessToken')
      LocalStorage.removeItem('refreshToken')

      // USER OPERATIONS
      this.userInfo = this.$state.userInfo

      // router.push('/auth/login')
      return
    },

    REFRESH({ accessToken, refreshToken }) {
      this.session.IS_AUTHORIZE = true
      this.session.accessToken = accessToken
      this.session.refreshToken = refreshToken
      //
      LocalStorage.setAuthTokens({ accessToken, refreshToken })
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
      verified
    }) {
      // SESSION OPERATIONS
      this.session.IS_AUTHORIZE = true
      this.session.accessToken = accessToken
      this.session.refreshToken = refreshToken
      LocalStorage.setAuthTokens({ accessToken, refreshToken })

      // USER OPERATIONS
      this.userInfo = {
        id,
        mfaEnable,
        email,
        name,
        dateOfBirth,
        roles: { subRoles, mainRole },
        status,
        verified
      }
      return
    }
  }
})
