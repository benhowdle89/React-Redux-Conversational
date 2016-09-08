require('es6-promise').polyfill()
import fetchAPI from 'isomorphic-fetch'

const API_URL = 'http://localhost/api'

export const fetch = (url, opts = {}) => {
    let headers = {
            'Content-Type': 'application/json'
        }

    let body = opts.body || null

    let params = {
        headers
    }

    if(body){
        params.body = JSON.stringify(body)
        params.method = 'POST'
    }

    return fetchAPI(`${API_URL}${url}`, params).then(response => response.json()).then(json => {
        return json
    }).catch(error => {
        console.error(error)
    })
}
