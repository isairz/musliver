import fetch from 'isomorphic-fetch'
import { serverConfig } from '../../config'

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
  ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || serverConfig.port}/api`)
  : '/api'

export default function callApi (endpoint, method = 'get', body, isJson = true) {
  return fetch(`${API_URL}/${endpoint}`, {
    // headers: isJson ? { 'content-type': 'application/json' } : {},
    method,
    body: isJson ? JSON.stringify(body) : body,
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }

    return json
  })
  .then(
    response => response,
    error => error
  )
}
