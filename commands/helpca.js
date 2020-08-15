const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the permissions to use this command");

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**BOT COMMANDS ONLY ADMIN PERMISSIONS**")
        .setColor("#FF0000")
        .setThumbnail(botIcon)
        .addField("*ban", "ban someone!")
        .addField("*kick", "kick someone!")
        .addField("*warn", "warn someone! = after 4 warns the user will get banned.")
        .addField("*prefix", "Prefix of the bot")
        .addField("*poll", "create a poll where people can vote!")
        .addField("*announcement", "this is how the command works: this is how the command works: *announcement Title // Message // Color // Channel");
        

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "helpca",
    description: "commands in the server for aminds"
}