import { createCmdHttp } from './../service/http'

const cmdHttp = createCmdHttp()
export const loginSubcribe = async(country, payload) => {
  return await cmdHttp.post('/auth/login/Subscriber?' + country, payload)
}

