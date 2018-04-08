const discord = require('discord.js');
const client = new discord.Client();
const token = 'https://discordapp.com/developers/applications/me/430109884361474069'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(token);
