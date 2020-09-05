const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var user;
    user = message.mentions.users.first(); //mentioned user, if any
    if (!user) { //if no one is mentioned
    if (!args[0]) { //if the command is only "!avatar". I.e. no one is mentioned and no id is specified
    user = message.author;
    getuseravatar(user);
    } else { //if a user id IS specified (need developer mode on on discord to get it)
    var id = args[0]
    client.fetchUser(id).then(user => {
    getuseravatar(user) //get avatar of the user, whose id is specified
    
    }).catch(error => console.log(error))
    
    }
    
    } else { //if someone IS mentioned
    getuseravatar(user);
    }
    function getuseravatar(user) {
    var embed = new discord.RichEmbed()
    .setColor("RANDOM") //can specifiy color of embed here
    .setImage(user.avatarURL)
    message.channel.send(embed)
    
    }
    
}

module.exports.help = {
    name: "avatar",
    description: "Someone's avatar"
}