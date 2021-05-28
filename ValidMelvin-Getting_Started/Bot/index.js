const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Your test client is online`);
});

client.on('message', message => {
  if (message.content === 'hello') {
    message.channel.send("Hi" + message.author);
  }
});

client.login('enter your bot token here');