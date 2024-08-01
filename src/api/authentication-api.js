import { createAggrHttp, createCmdHttp } from './../service/http'

// const cmdHttp = createCmdHttp()
const aggrHttp = createAggrHttp()
export const loginSubcribe = async(country, payload) => {
  return await aggrHttp.post('/auth/login/Subscriber?' + country, payload)
}

