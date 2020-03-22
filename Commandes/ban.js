const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("T'as pas la perm miskin :3");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Tu dois mention reuf");

    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send("Pas trouvé");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Miskin pas les perms");

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} est ban par ${message.author.username}`);

        message.mentions.users.first().send(`Miskin tu t'es fais ban du sang **${message.guild.name}** par *${message.author.username}`).catch(console.error);

    });
};
//kick
module.exports.help = {
    name: "ban"
};