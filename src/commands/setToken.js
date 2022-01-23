const fs = require('fs')

module.exports = (message, args) => {
    console.log("running -- token --")
    if(args.length == 1)
    { 
       let file = fs.readFileSync('./config.json');
       let config = JSON.parse(file);
       config.token = args[0]
       console.log(config.token)
       fs.writeFileSync("./config.json", JSON.stringify(config))
    }
    else
    {
        message.channel.send("aaa") 
    }
}