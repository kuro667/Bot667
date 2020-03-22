const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("T'aS paS lEs PeRms");
    }

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Miskinette pas les perms");
    }

    if(!args[0]) return message.channel.send("Met un grade filou")

    let membre = message.guild.member(message.mentions.users.first());
    let demande = args[1];
    let role = message.guild.roles.find(x => x.name === `${demande}`);

    membre.addRole(role).catch(console.log.error);
    message.channel.send(`${membre} a maintenant le rôle ${demande}`);


};

module.exports.help = {
    name: "addrole"
}