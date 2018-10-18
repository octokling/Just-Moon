const ytdl = require('ytdl-core');
const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

const content = new Discord.Client()



var prefix = ""
bot.on("ready", function () {


console.log(bot.users.displayName + " est connecté");
})
exports.run = async (client, message, args, ops) => {
	if (!message.member.voiceChannel) return message.channel.reply("Merci de te connecté à un des vocales !")
if (message.guild.me.voiceChannel) return message.channel.send("Désoler , le n'arrive pas à rejoindre ce vocale , essayez en un autre !")
if (!args[0]) return message.channel.reply("Désoler , l'url à était soit incorrect , soit supprimer .")
let validate = await ytdl.validateURL(args[0]);
if (!validate) return message.channel.reply("Désoler , mais je ne peut pas vous lire cette vidéo :/")
let info = await ytdl.getInfo(args[0]);
let connection = await message.member.voiceChannel.join();
let dispatcher = await connection.play(ytdl(args[0, { filter: 'audiooly' }]));
message.channel.send("Vous êtes en train d'écouter : " + ${info.title});

}