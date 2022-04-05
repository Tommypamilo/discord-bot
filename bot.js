const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});



client.on('ready', () => {
    console.log('Thief is ready to work');

});




client.login('OTYwODc1ODY3NzU4ODE3Mzgw.YkwzYw.1ntOZtaUVOgd4vOVuZ0SIT-kAes');