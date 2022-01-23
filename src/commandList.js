module.exports = [
    {
        name:"token",
        command: require("./commands/setToken")
    },
    {
        name:"start",
        command: require("./commands/start")
    },
    {
        name:"profile",
        command: require("./commands/profile")
    },
    {
        name:"channel",
        command: require("./commands/setChannel")
    }
]