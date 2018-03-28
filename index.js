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

client.login('NDI4NjMzNjA2MjA3MDQ1NjMy.DZ178Q.SrZwICZ_BoR2NcwliKPf294Mxk4');


