const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if(msg.content === 'fe' || msg.content ==='lu')
    {
        msg.reply('He is a bro');
    }
    
});

client.login('api-token');
