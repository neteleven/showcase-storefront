import axios from 'axios'
import { ACCESS_TOKEN } from '../constants/localstorage'
import { getLanguageFromLocalStorage } from '../context/language-provider'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

// console.log(api)

api.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)
  const tenant = localStorage.getItem('tenant')
  request.url = request.url.replaceAll('{tenant}', tenant)
  const { headers } = request
  if (headers) {
    headers.Authorization = `Bearer ${accessToken}`
    headers['Accept-Language'] = headers['Accept-Language'] || getLanguageFromLocalStorage()
    headers['Content-Language'] = getLanguageFromLocalStorage()
  }
  return request
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
    // return Promise.resolve(error)
  }
)

export { api }
