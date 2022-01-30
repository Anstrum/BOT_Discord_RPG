const canvas = require("canvas")
const discord = require("discord.js")
module.exports = async (message, args) => {
    let profile = canvas.createCanvas(250, 400)
    let ctx = profile.getContext('2d')
    let background = await canvas.loadImage("./src/ressources/assets/LegendaryPlayerBack.png")
    ctx.drawImage(background, 0, 0, profile.width, profile.height)
    let playerIcon = await canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }))
    ctx.font = 'bold 30px sans-serif';
    ctx.fillStyle = '#ffffff';
    let i = 30
    let nameWidth = ctx.measureText(message.author.username).width
    console.log(nameWidth)
    while(nameWidth > 320)
    {
        i--
        let text = 'bold ' + i.toString() + 'px sans-serif'
        ctx.font = text;
        console.log("test")
        nameWidth = ctx.measureText(message.author.username).width
        console.log(nameWidth)
    }
	ctx.fillText(message.author.displayName, 125 - nameWidth / 2, 35);
    ctx.arc(125, 145, 75, 0, 2 * Math.PI, true);
    ctx.arc(125, 145, 76, 0, 2 * Math.PI, true);
    ctx.arc(125, 145, 77, 0, 2 * Math.PI, true);
    ctx.arc(125, 145, 78, 0, 2 * Math.PI, true);
    ctx.stroke(); 
    ctx.beginPath();
	ctx.arc(125, 145, 75, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
    ctx.drawImage(playerIcon, 50, 70, 150, 150)
    let print = new discord.MessageAttachment(profile.toBuffer(), "profile.png")
    message.channel.send({files: [print]})
}