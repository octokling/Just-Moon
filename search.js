const search = require("yt-search");
exports.run = (client, message, args ops) => {
	search(args.join(' '), function(err, res) => {
	if (err) return message.channel.send("Une erreur est survenue , merci d'en parler à Octokling");
	let videos = res.videos.slice(0, 10);
	let reps = "";
	for (war i in videos) {
		reps += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;

	}	
	resp += `\n Choisis un numéro entre \`1-$videos.lenght}\`pour choisir une musique`;
message.channel.send(reps);
const filter = m => !isNaN(m.content) && m.content > 0
const collector = message.channel.createMessageCollector(filter);
collector.videos = videos;
let commandFile = require("./play.js")
commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);

	});
}