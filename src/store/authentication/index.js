import options from './../../constant/options'
import { loginSubcribe } from './../../api/authentication-api'

//ViewModel
import UserAccountViewModel from './../../view-model/authentication/user-account-view-model.js'

const countries = [
  { country_code:'',   timezone:'+00:00', date_format: options.standard_format.ymd, culture: '' },
  { country_code:'KR', timezone:'+09:00', date_format: options.standard_format.ymd, culture: options.culture_type.korean },
  { country_code:'VN', timezone:'+07:00', date_format: options.standard_format.ymd, culture: options.culture_type.english }
]
const getCulture = (country) => {
  const c = countries.find(x => x.country_code === country)
  const r = (c) ? c.culture : ''
  return r
}

const getAccessTokenInStore = () => {
  try {
    return localStorage.getItem('apiToken')
  } catch (error) {
    return ''
  }
}

const getRefreshTokenFromStore = () => {
  try {
    return localStorage.getItem('refreshToken')
  } catch (error) {
    return ''
  }
}
const state = {
  shopInfo: {},
  userInfo: {},
  isLoading: false,
  isLoggedIn: false,
  user: null,
  shop: null,
  apiToken: getAccessTokenInStore(),
  refreshToken: getRefreshTokenFromStore,
  

}
const getters = {}
const mutations = {
  setShopBasicInfo(state, shopInfo) {
    state.shopInfo = shopInfo
  },

  setUserShopInfo(state, userAuth) {
    state.userInfo = userAuth
  },

  setApiToken(state, apiToken) {
    state.apiToken = apiToken
  },
  
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken
  },

  setLoadingData(state, isLoading) {
    state.isLoading = isLoading
  },

  setLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  }
}
const actions = {
  async setLoginUser({dispatch, commit}, userAccountViewModel = {}) {
    await dispatch('setUserLogin', {
      userAuthInfo: userAccountViewModel.userAuthInfo,
      userShopInfo: userAccountViewModel.shopBasicInfo
    })
    dispatch('setRefreshTokenAndApiToken', {
      userAccountViewModel
    })

    commit('setLoadingData', true)
  },

  setRefreshTokenAndApiToken({commit}, userAccount) {
    console.log('data', userAccount)
    commit('setApiToken', userAccount.userAccountViewModel.userAuthInfo.authToken)
    commit('setRefreshToken', userAccount.userAccountViewModel.userAuthInfo.refreshToken)

    localStorage.setItem('apiToken', userAccount.userAccountViewModel.userAuthInfo.authToken)
    localStorage.setItem('refreshToken', userAccount.userAccountViewModel.userAuthInfo.refreshToken)
  },

  setUserLogin({commit}, loginData) {
    commit('setLoggedIn', true)
    commit('setShopBasicInfo', loginData.userShopInfo)
    commit('setUserShopInfo', loginData.userAuthInfo)
  },

  async loginSubcribe({commit, dispatch}, data) {
    const payload = {
      userId: data.user_id,
      password: data.password,
      solutionId: 3002
    }
    const culture = getCulture('VN')
    console.log('culture', culture)

    const response = await loginSubcribe(culture, payload)
    dispatch('setLoginUser', response?.data?.result)
    return response
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}