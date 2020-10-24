const fs = require('fs')
const fetch = require('node-fetch')
const inputArgs = process.argv.slice(2)
const modeDev = inputArgs[0] === '-d' ? true : false
const queryString = require('querystring')
const url = require('url')


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

const convertChecker = function(sentence) {
	const senArray = sentence.split(" ")
	return senArray.filter(function(word) {
		return word.toLowerCase() === "i" || word.toLowerCase() === "my"
	}.length > 0
}

const converter = function(sentence) {
	const senArray = sentence.split(" ")
	senArray.map(function(word) {
		if (word.toLowerCase() === "i") {
			return "***WE***"
		} else if (word.toLowerCase() === "my") {
			return "***OUR***"
		} else {
			return word
		}
	}
}


if (inputArgs[0] === '-d') {
  const test = async function() {
    console.log((await dadjokeGetter()).data)
  } 
  test()
}

module.exports.converter = converter;
module.exports.convertChecker = convertChecker;
