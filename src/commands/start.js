const fs = require("fs")
module.exports = (message, args) => {  
    fileName = message.author.id + ".json"
    fs.readdirSync("./src/ressources/usersData/").forEach(file => {
        if(file === fileName)
        {
            message.channel.send("found it!")
            return;
        }
    });
    let player = {
        "Name": message.author.username,
        "Stats": {
            "HP": 50,
            "POW": 10,
            "DEF": 10,
            "ACC": 0,
            "EVA": 0
        }
    }
    message.channel.send("Created a new player with these stats:")
    message.channel.send("Name: " + player.Name)
    message.channel.send("Health: " + player.Stats.HP)
    message.channel.send("Power: " + player.Stats.POW)
    message.channel.send("Defense: " + player.Stats.DEF)
    message.channel.send("Accuracy: " + player.Stats.ACC)
    message.channel.send("Evasion: " + player.Stats.EVA)
}