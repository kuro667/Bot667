const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("T'as pas la perm miskin :3");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Tu dois mention reuf");

    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send("Pas trouvé");
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Miskin pas les perms");

    kick.kick().then(member => {

        message.channel.send(`${member.user.username} est kick par ${message.author.username}`);

        message.mentions.users.first().send(`Miskin tu t'es fais kick du sang **${message.guild.name}** par *${message.author.username}`).catch(console.error);

    });
};

module.exports.help = {
    name: "kick"
};