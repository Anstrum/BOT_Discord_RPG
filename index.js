const discord = require('discord.js');
const fs = require("fs")
let commandList = require('./src/commandList')
let config = JSON.parse(fs.readFileSync("./config.json"))
const canvas = require("canvas");
const client = new discord.Client({ intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", function () {
    console.log("Up for work!");
})


client.on("messageCreate", function (message) {
    if(message.author == client.user)
    {
        return
    }
    config = JSON.parse(fs.readFileSync("./config.json"))
    if(message.content.startsWith(config.token))
    {
        let userMessage = message.content.split(' ')
        let commandName = userMessage[0].substr(1, userMessage[0].length)
        let args = userMessage.slice(1)
        for(let myCommand of commandList)
        {
            if(myCommand.name === commandName)
            {
                myCommand.command(message, args)
                return
            }
        }
    }
})


client.login("OTMzMTUyMjU1NDI1Nzc3NzQ0.YedXwg.wqkFBPIb5IQ1lzy55d2U_Cm6OeQ");