const fs = require('fs')
const fetch = require('node-fetch')
const inputArgs = process.argv.slice(2)
const modeDev = inputArgs[0] === '-d' ? true : false
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'
const YOUTUBE_API_KEY = modeDev ? JSON.parse(fs.readFileSync('./.api_secret.json'))['YOUTUBE_API_KEY'] : process.env.YOUTUBE_API_KEY
const groovyGen = require('./groovyCommandGenerator')
const queryString = require('querystring')
const url = require('url')

const YoutubeAPIGetter = async function(youtubeUrl) {
  const parsedUrl = url.parse(youtubeUrl)
  const parsedQueryString = queryString.parse(parsedUrl.query)

  const res = await fetch(`${YOUTUBE_URL}?key=${YOUTUBE_API_KEY}&part=snippet&maxResults=50&playlistId=${parsedQueryString['list']}`)
  const data = await res.json()
  return {
    data
  }
}

if (inputArgs[0] === '-d') {
  const test = async function() {
    console.log(groovyGen((await YoutubeAPIGetter()).data))
  }
  test()
}

module.exports = YoutubeAPIGetter;