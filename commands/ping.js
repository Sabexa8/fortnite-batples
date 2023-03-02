const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName("password")
  .setDescription("password instructions"),
  async execute(interaction) {
    const discordEmbed = new MessageEmbed()
    .setColor('#ffffff')
    .setTitle('We have changed password system for modifications')
    .setDescription('For Redux Password now you have to dm the bot. (You need to write **Redux Pass** to the bot.)\n\nДля пароля Redux теперь вам нужно отправить сообщение боту. (Вам нужно написать **Redux Pass** боту.)')
    
    interaction.reply({
      embeds: [discordEmbed],
      content:"Here is the information regarding password",
      ephemeral: true
    });
  }
  
  
}