import options from './../../constant/options'
import { loginSubcribe } from './../../api/authentication-api'
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
const state = {}
const getters = {}
const mutations = {}
const actions = {
  async loginSubcribe({commit}, data) {
    const payload = {
      userId: data.user_id,
      password: data.password,
      solutionId: process.env.SOLUTION_ID
    }
    const culture = getCulture('VN')
    console.log('culture', culture)

    const response = await loginSubcribe(culture, payload)
    console.log('response', response)

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}