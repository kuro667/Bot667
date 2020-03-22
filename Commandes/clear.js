const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.sen("T'as pas les perms poto").catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Miskin pas les peeerms").catch(console.error);

    if(!args[0]) return message.channel.send("Faut mettre le nombre de message à suppr mamene");

    if(isNaN(args[0])) return message.channel.send("Faut mettre un chiffre mec");

    message.channel.bulkDelete(args[0]);

    message.channel.send(`T'as suppr ${args[0]} messages poto`);
};

module.exports.help = {
    name: "clear"
}