module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed()
  .setTitle("Help Menu")
  .setDescription("Hello! Please read the commands below to learn to use me!")
  .addField("And then:", "There was light")
  .setColor("GREEN")
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send({embed: em})
}

module.exports.help = {
"name": "help"
