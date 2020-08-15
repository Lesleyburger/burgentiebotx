const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**DISCORD BOT INFO**")
        .setColor("#FF0000")
        .addField("Bot name", bot.user.username)
        .addField("made on", bot.user.createdAt)
        .addField("IMPORTANT!!", "❌**(USE *helpc for commands)** admins **(USE *helpca)**❌")
        .addField("created by", "__**Burgentie#6969**__")
        .setThumbnail(botIcon);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info",
    description: "Info about the bot"
}