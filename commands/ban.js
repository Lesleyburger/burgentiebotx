const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  try {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("Couldn't found the user you mention");

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions to use this command");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't ban this user.");

    var ban = new discord.RichEmbed()
      .setDescription("Ban")
      .setColor("#e60000")
      .addField("Banned user", banUser)
      .addField("Banned by", message.author)
      .addField("Reason:", reason);

    var banChannel = message.guild.channels.find(`name`, "📌action-log");
    if (!banChannel) return message.guild.send("can't find the channel");

    message.guild.member(banUser).ban, (reason);

    banChannel.send(ban);

  } catch (error) {

    return message.channel.send("give me a name please.");

  }

  return;
}

module.exports.help = {
  name: "ban",
  description: "ban people"
}