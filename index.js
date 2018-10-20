const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

const content = new Discord.Client()



var prefix = ""
bot.on("ready", function () {
bot.user.setAvatar("Avatar 1.png")
bot.user.setUsername("Just'Moon bot")

console.log(bot.users.displayName + " est connecté");
})





bot.login(process.env.token)
