const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the permissions to use this command");

    var poll = args.join(' ');
    if (!poll) return message.channel.send("no poll given, please provide a poll");

    var pollEmbed = new discord.RichEmbed()
        .setTitle("New poll has been created! React with 👍 or 👎 ")
        .setColor("#FF0000")
        .addField("poll", poll)
        .addField("created by:", message.author);

    var pollChannel = message.guild.channels.find("name", "⭐〕announcements");
    if(!pollChannel) return message.channel.send("Couldn't find the channel");

    pollChannel.send(pollEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

}

module.exports.help = {
    name: "poll",
    description: "create a poll where people can vote! **[ADMIN PERMISSIONS**]"
}