const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry you do not have permissions for this command");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Give me an user or the user is not in this server!");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you can not give this person warns.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Give me the reason.");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warn")
        .setColor("#e60000")
        .addField("Warned user", user)
        .addField("Warned by", message.author)
        .addField("total warns:", warns[user.id].warns)
        .addField("Reason:", reason);

    var warnChannel = message.guild.channels.find(`name`, "📌action-log");
    if (!warnChannel) return message.guild.send("can't find the channel");

    warnChannel.send(warnEmbed);

    if(warns[user.id].warns == 3){

        var warnbericht = new discord.RichEmbed()
        .setDescription("WATCH OUT" + user)
        .setColor("#e60000")
        .addField("message", "You've only 1 warning left, be carefull after this warn you'll get banned.");

        message.channel.send(warnbericht);

    } else if (warns[user.id].warns == 4){

        message.guild.member(user).ban(reason);
        message.channel.send(`${user} got banned!`)

    }

}

module.exports.help = {
    name: "warn",
    description: "warn a person (4warns are max)"
}