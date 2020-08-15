module.exports.run = async (bot, message, args) => {

    // rps rock paper sciccor

    if (!args[0]) return message.channel.send("use: rps <rock, paper, sciccor>");

    var options = ["rock", "paper", "sciccor"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0] == "rock"){

        if (result == "paper") {

            message.channel.send(`I got ${result} :notepad_spiral:, i won`);

        } else if (result == "scissor") {
            message.channel.send(`I got ${result} :scissors:, you won`);
        } else if (result == "rock") {
            message.channel.send(`I got ${result} :moyai:, we draw`);
        }

    }
    else if (args[0] == "paper") {

        if (result == "scissor") {

            message.channel.send(`I got ${result} :scissors:, i won`);

        } else if (result == "rock") {
            message.channel.send(`I got ${result} :moyai:, you won`);
        } else if (result == "paper") {
            message.channel.send(`I got ${result} :notepad_spiral:, we draw`);
        }

    }
    else if (args[0] == "scissor") {

        if (result == "rock") {

            message.channel.send(`I got ${result} :moyai: , i won`);

        } else if (result == "paper") {
            message.channel.send(`I got ${result} :notepad_spiral: , you won`);
        } else if (result == "sciccor") {
            message.channel.send(`I got ${result} :scissors: , we draw`);
        }

    }

}

module.exports.help = {
    name: "rps",
    description: " rps choose between >Rock Paper scissor<"
}