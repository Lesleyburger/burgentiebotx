const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have permissions for this command");

    if(!args[0]) return message.reply("use: *prefix <prefix here>");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) =>{
        if(err) return console.log(err);
    });

    var stringEmbed = new discord.RichEmbed()
    .setColor("#F0000")
    .setTitle("Prefix")
    .setDescription(`Prefix got changed to: ${args[0]}`)
    .addField("Changed by:", message.author);

    message.channel.send(stringEmbed);

}

module.exports.help = {
    name: "prefix",
    description: "Prefix of the bot"
}