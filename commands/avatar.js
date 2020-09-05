const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var user = message.mentions.users.first();

    var embed = new discord.RichEmbed()
        .setImage(user.avatarURL)
        .setColor('#275BF0')

    return message.channel.send(embed);
}

module.exports.help = {
    name: "avatar",
    description: "avatar of from a user"
}