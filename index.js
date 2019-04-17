const Discord = require('discord.js');
const client = new Discord.Client();

client.login("token").then(() => {
    console.log("I am ready");
    var guild = client.guilds.get('guildid');
    if(guild && guild.channels.get('channelid')){
        guild.channels.get('channelid').send("Good Morning").then(() => client.destroy());
    } else {
        console.log("nope");
        //if the bot doesn't have guild with the id guildid
        // or if the guild doesn't have the channel with id channelid
    }
    client.destroy();
});