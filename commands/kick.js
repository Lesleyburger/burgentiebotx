const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!kickUser) return message.channel.send("Couldn't found the user you mention");

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions to use this command");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't ban this user.");

    var kick = new discord.RichEmbed()
      .setDescription("Kick")
      .setColor("#e60000")
      .addField("Kicked user", kickUser)
      .addField("Kicked by:", message.author)
      .addField("Reason:", reason);

    var kickChannel = message.guild.channels.find(`name`, "📌action-log");
    if (!kickChannel) return message.guild.send("can't find the channel");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

  return;

}

module.exports.help = {
  name: "kick",
  description: "kick people"
}