const Discord = require("discord.js")

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Branle Le Maitre XiTou, *help");
    console.log("Le bot a bien été connecté")
})

bot.login("NDMwNDg0NTk3Mjk4NjkyMTI2.DaQ96A.MCGqVDojG1bvcsGxXMphy2APi3M");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Salut potos :) ");
        console.log("Commande Salut effectué");
    }

    if (message.content === "Ping"){
        message.reply("Pong :) ");
        console.log("commande Ping éffectuer");
    }
});
