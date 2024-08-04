// import store from './../store/index.js'
// import store from './../store/index.js'
import store from './../store/index'
import axios from 'axios'

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
}
const CREATE_HTTP_DATA = {
  version: 1,
  type: 'aggr',
}
// console.log('store', store)

const createHttp = ({type='', version=1, options={}}) => {

  const http = axios.create({
    baseURL: `https://ahasoft-salon-admin-http-aggregator-dev.azurewebsites.net/api/${type}/v${version}`,
    headers: DEFAULT_HEADERS,
    ...(options?.responseType && {responseType: options.responseType})
  })

  const setRequestHeaders = () => {
    console.log('store', this.$store)

    // const token = store
    // console.log('storelelsls', token)
  }
  axios.interceptors.request.use(setRequestHeaders())

  return http
}

export const createCmdHttp = () => {
  return createHttp({...CREATE_HTTP_DATA, type: 'cmd'})
}

export const createReadHttp = () => {
  return createHttp({...CREATE_HTTP_DATA, type: 'read'})
}

export const createAggrHttp = () => {
  return createHttp({...CREATE_HTTP_DATA, type: 'aggr'})
}