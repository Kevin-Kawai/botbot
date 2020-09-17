const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const youtubeApiGetter = require('./youtubeAPIGetter');
const groovyGen = require('./groovyCommandGenerator')

app.use('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => console.log(`listening on ${port}`))


const init = async function() {
  return groovyGen((await youtubeApiGetter()).data)
}

client.on('ready', () => {
  console.log('I am rdy')
})

client.on('message', message => {
  if (message.content === 'ping') {
    init()
    message.channel.send(init())
  }
})

client.login(process.env.BOT_TOKEN);
