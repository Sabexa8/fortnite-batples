const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName("servinfo")
  .setDescription("Server Info"),
  async execute(interaction) {
    const discordEmbed = new MessageEmbed()
    .setColor('#ffffff')
    .setTitle('Information about TopGear & How to start playing')
    .setDescription('In order to join TopGear RP. You can Type "TopGear RP" In the search bar, or you can directly connect by doing. "F8, connect 181.214.240.161:30120". \nThank you for choosing TopGear!')
    
    interaction.reply({
      embeds: [discordEmbed],
      content:"Here is the information regarding the server",
      ephemeral: true
    });
  }
  
  
}