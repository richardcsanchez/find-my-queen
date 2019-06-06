require('es6-promise').polyfill()
const isofetch = require('isomorphic-fetch')

function fetch(path, method, data) {
  const options = {}

  if (method.toUpperCase() !== 'GET') {
    options['body'] = JSON.stringify(data)
  }

  return isofetch(`http://localhost:3001/${path}`, {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    ...options
  }).then(response => response.json())
}

export default fetch
