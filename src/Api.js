import fetch from 'isomorphic-fetch'

//convert data object to query string parameters
const getQueryString = (queryParams) => {
  let arr =  Object.keys(queryParams)
    .map(k => {
      let value = queryParams[k]
      //Convert an object to a json string
      if(typeof value === 'object') {
        value = JSON.stringify(value)
      }
      return encodeURIComponent(k) + '=' + encodeURIComponent(value)
    })

  return '?' + arr.join('&')
}

//Check to make sure we have a valid response, otherwise, throw and error
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function get(url) {
  let opts = {
    method: 'GET',
  }
  return fetch(url, opts)
    .then(checkStatus)
}
export function post(url, data) {
  url += getQueryString(data)
  let opts = {
    method: 'POST'
  }
  return fetch(url, opts)
    .then(checkStatus)
}
