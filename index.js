const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use('/', (req, res) => {
  res.sendStatus(200)
})

client.on('ready', () => {
  console.log('I am rdy')
})

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong')
  }
})

client.login(process.env.BOT_TOKEN);
