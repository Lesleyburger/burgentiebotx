const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**DISCORD TOTAL MEMBERS**")
        .setColor("#FF0000")
        .setThumbnail(icon)
        .addField("there are a total of", message.guild.memberCount, "people in the server")

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "members",
    description: "how many people are in the server"
}