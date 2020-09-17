const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const fetch = require("node-fetch")

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

app.use('/', (req, res) => {
  res.sendStatus(200)
})

client.on('ready', () => {
  console.log('I am rdy')
})

client.on('message', message => {
  if (message.content === 'ping') {
    console.log(await getPlaylistInfo())
    message.channel.send('pong')
  }
})

const getPlaylistInfo = async function() {
  const res = await fetch(`${YOUTUBE_URL}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&maxResults=50&playlistId=PLw5j-P6Ze1HFKleuhYGHro6pqi-AJFCMK`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

client.login(process.env.BOT_TOKEN);
