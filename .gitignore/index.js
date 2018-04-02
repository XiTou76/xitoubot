const Discord = require("discord.js")

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Branle Le Maitre XiTou, *help");
    console.log("Le bot a bien été connecté")
})

bot.login("NDMwNDg0NTk3Mjk4NjkyMTI2.DaQ96A.MCGqVDojG1bvcsGxXMphy2APi3M");
