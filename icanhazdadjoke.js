const fs = require('fs')
const fetch = require('node-fetch')
const inputArgs = process.argv.slice(2)
const modeDev = inputArgs[0] === '-d' ? true : false
const queryString = require('querystring')
const url = require('url')

const ICANHAZDADJOKE_URL = 'https://icanhazdadjoke.com/'


const dadjokeGetter = async function() {
  const res = await fetch(ICANHAZDADJOKE_URL, {
    headers: {
      'Accept': 'application/json'
    }
  })
  const data = await res.json()
  return {
    data
  }
}

if (inputArgs[0] === '-d') {
  const test = async function() {
    console.log((await dadjokeGetter()).data)
  } 
  test()
}

module.exports = dadjokeGetter;
