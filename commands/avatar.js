const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let user;

if (message.mentions.first()) {
    user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    } 

    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
    
    const embed = new discord.MessageEmbed()
    .setTitle(`${user.tag} avatar`)
    .setDescription(`[avatar URL of **${user.tag}**](${avatar})`)
    .setColor("0x1d1d1d")
    .setImage(avatar)

    return message.channel.send(embed)
}

module.exports.help = {
    name: "avatar",
    description: "Someone's avatar"
}