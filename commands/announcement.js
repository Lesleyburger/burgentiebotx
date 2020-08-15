const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    // !announcement Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the permissions to use this command");

    // Met dit gaan we tekst splitsen.
    var splitser = "//";

    // Nakijken als men wel gegevens meegeeft.
    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Use")
            .setColor("#00ee00")
            .setDescription(`this is how the command works: \n *announcement Title ${splitser} Message ${splitser} Color ${splitser} Channel`);

        return message.channel.send(useMessage);

    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the permissions to use this command");

    // Verkrijg al de args en splits ze met de splitser.
    args = args.join(" ").split(splitser);

    // Nakijken als je channel meegeeft of een kleur. Dit plaatsen we hier om een error te voorkomen bij de trim later.
    if (args[2] == undefined) args[2] = "#eeeeee";
    if (args[3] == undefined) args[3] = "⭐〕announcements";

    // Opties die gezet worden als er iets niet wordt meegeven.
    // Voor het kanaal halen we de spaties weg.
    var options = {

        titel: args[0] || "announcement",
        bericht: args[1] || "no content given",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    // Verkrijgen van wie het bericht aanmaakt.
    var announcer = message.author;

    // Het bericht wat wordt verzonden.
    var announcementMessage = new discord.RichEmbed()
        .setTitle("Announcement:")
        .setColor(options.kleur)
        .setDescription(`Message from: ${announcer} \n\n ${options.titel} \n\n ${options.bericht} \n`)
        .setTimestamp();

    // Kanaal krijgen waar het verzonden moet worden.
    var announceChannel = message.guild.channels.find(`name`, options.kanaal);
    if (!announceChannel) return message.channel.send("Can't find the channel");

    // Zenden van het bericht.
    announceChannel.send(announcementMessage);

}

module.exports.help = {
    name: "announcement",
    description: "this is how the command works: this is how the command works: *announcement Title // Message // Color // Channel **[ADMIN PERMISSIONS**]"
}