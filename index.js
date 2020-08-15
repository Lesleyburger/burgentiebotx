const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js")

  if (jsFiles.length <= 0) {
    console.log("couldnt find files");
    return;
  }

  jsFiles.forEach((f, i) => {

    var fileGet = require(`./commands/${f}`);
    console.log(`the file ${f} has been loaded`);

    bot.commands.set(fileGet.help.name, fileGet);

  })

});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online!`)

  bot.user.setActivity("being lazy", { type: "PLAYING" });

});

bot.on("guildMemberAdd", member => {

  const channel = member.guild.channels.find("name", "👋🏼〕welcome");
  if (!channel) console.log("can't find the channel.");

  var role = member.guild.roles.find("name", "Burgermember");

  if (!role) return;

  member.addRole(role);

  var joinEmbed = new discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setDescription(`**Hello** ${member.user}, **Welcome to the server**.`)
    .setColor("#0000FF")
    .setTimestamp()
    .setFooter("Person joined.");

  channel.send(joinEmbed);

});

bot.on("guildMemberRemove", member => {

  const channel = member.guild.channels.find("name", "📌action-log");
  if (!channel) console.log("can't find the channel.");

  var joinEmbed = new discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setColor("#FF0000")
    .setTimestamp()
    //.setFooter("Person Left.")
    .addField("Person Left", "Thanks for being a good BurgerMember")

  channel.send(joinEmbed);

});

bot.on("message", async message => {

  // als bot bericht stuurt stuur dan return
  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botConfig.prefix
    };
  }

  var prefix = prefixes[message.guild.id].prefixes;

  //var prefix = botConfig.prefix;

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  var arguments = messageArray.slice(1);


  var commands = bot.commands.get(command.slice(prefix.length));


  var options = {
    active: active
  }


  if (commands) commands.run(bot, message, arguments, options);

});


bot.login(process.env.token);