// npx nodemon index.js
//permet de lancer le bot a chaque save

const discord = require('discord.js');
const token = "&"
const canvas = require("canvas");
const client = new discord.Client({ intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES] });


client.on("ready", function () {
    console.log("Up for work!");
})


client.on("messageCreate", function (message) {
    if(message.author === client.user)
    {
        return;
    }
    if(message.content.startsWith(token))
    {
        message.reply("Oui")
    }
})



client.login("OTMzMTUyMjU1NDI1Nzc3NzQ0.YedXwg.5PabllkSHqWaK-wWMlKUKZp7NmY");