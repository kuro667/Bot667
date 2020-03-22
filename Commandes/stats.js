const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;


    message.channel.send({
        embed: {
            color: 0xe482f3,
            title: `Statistique de l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [

                {
                    name: "Crée le :",
                    value: moment.utc(membre.user.createdAt).format("L")
                },
                {
                    name: "Joue à :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                },
                {
                    name: "Rejoin le :",
                    value: moment.utc(membre.joinAt).format("L")
                }
            ],
            footer: {
                text: `Information de lutilisateur ${membre.user.username}`
            }
        }
    })
};

module.exports.help = {
    name: "stats"
}