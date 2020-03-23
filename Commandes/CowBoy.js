const Discord = require("discord.js");

client.on("message", message => {
    if (message.content.startsWith("Lewho ?")) message.channel.send("Lewho est un cowboy attend qu'il t'attrape")
})