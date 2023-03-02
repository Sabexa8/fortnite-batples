const Discord = require('discord.js')

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
       const {guild} = member 
       const newMemberEmbed = new Discord.MessageEmbed()
        
        .setColor("RANDOM")
        .setTitle("")  
        .setDescription('Joined TopGear `👋` ')
        .setAuthor({ name: `${member.user.username}`, iconURL: member.user.avatarURL({ dynamic: true }) })
        .setTimestamp()
        .setFooter(`Users: ${member.guild.memberCount}`)

        member.guild.channels.cache.get("1080682124845256704").send({ embeds: [newMemberEmbed] })
    }
    }

