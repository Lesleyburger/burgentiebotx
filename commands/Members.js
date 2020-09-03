const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.RichEmbed()
    .setColor("#00FF00")
    .setDescription(`**there are** **__${message.guild.memberCount}__** **members in the server.**`)
    .setImage("https://i.imgur.com/ir5JMys.gif")
    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "members",
    description: "shows you how many members in the server are.",
    usage: "*members"
}