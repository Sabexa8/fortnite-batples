const Discord = require('discord.js')

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
       const {guild} = member 
       const newMemberEmbed = new Discord.MessageEmbed()
        
        .setColor("#00000")
        .setTitle("")  
        .setDescription('Joined LS Mods `💖` ')
        .setAuthor({ name: `${member.user.username}`, iconURL: member.user.avatarURL({ dynamic: true }) })
        .setTimestamp()
        .setFooter(`USERS: ${member.guild.memberCount}`)

        member.guild.channels.cache.get("950144081126916176").send({ embeds: [newMemberEmbed] })
    }
    }

