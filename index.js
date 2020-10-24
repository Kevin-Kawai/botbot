const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const youtubeApiGetter = require('./youtubeAPIGetter');
const groovyGen = require('./groovyCommandGenerator')
const icanhazdadjoke = require('./icanhazdadjoke');

const { converter, convertChecker } = require('./ourChangerConverter.js');

app.use('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => console.log(`listening on ${port}`))

const init = async function(urlString) {
  // return await groovyGen((await youtubeApiGetter(urlString)).data)
  return await icanhazdadjoke()
}

client.on('ready', () => {
  console.log('I am rdy')
})

client.on('message', message => {
  if (message.content.split(' ')[0] === 'botbot') {
    init()
      .then((data) => {
        console.log(data)
        client.channels.cache.find((channel) => { return channel.name === 'general'}).send(data.data.joke)
      })
  }
  if (convertChecker) {
    client.channels.cache.find((channel) => { return channel.name === 'general'}).send(converter(message))
  }
})

client.login(process.env.BOT_TOKEN);

// init(message.content.split(' ')[1]).then((res) => {
  // console.log(res)
  // client.channels.cache.find((channel) => { return channel.name === 'music'}).send(res)
// })
