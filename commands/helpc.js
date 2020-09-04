const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("**DISCORD BOT COMMANDS**")
        .setColor("#FF0000")
        .setThumbnail(botIcon)
        .addField("*play", "Lets play some music (music bot)")
        .addField("*resume", "plays the music back when you paused it (music bot)")
        .addField("*skip", "skipping a song (music bot)")
        .addField("*leave", "Leaving you alone! (music bot)")
        .addField("*volume", "volume of the music bot")
        .addField("*queue", "Queue (music bot)")
        .addField("*search", "searching for songs (music bot)")
        .addField("*pause", "sets the bot in pause mode *resume to cancel the pause mode and starts playing music again")
        .addField("*rps", "choose between rock, paper, scissor")
        .addField("*hello", "hello there")
        .addField("*Info", "Information about the bot")
        .addField("*serverinfo", "Info about the server")
        .addField("-","-")
        .addField("More commands in the future! stay tuned (:","-")
        

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "helpc",
    description: "Info about the bot"
}