const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**DISCORD SERVER INFO**")
        .setColor("#FF0000")
        .setThumbnail(icon)
        .addField("Server Name", message.guild.name)
        .addField("total members", message.guild.memberCount)
        .addField("Created On", message.guild.createdAt)
        .addField("you joined the server", message.member.joinedAt)
        .addField("created by", "__**Burgentie#6969**__");

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "serverinfo",
    description: "Info about the server"
}