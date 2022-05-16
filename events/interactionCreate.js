const { getPasteUrl, PrivateBinClient } = require('@agc93/privatebin');

module.exports = {
    name: "interactionCreate",
    
    async execute(interaction, client) {
       
            if (!interaction.isCommand()) return;
          
            const command = interaction.client.commands.get(interaction.commandName);
          
            if (!command) return;
            try {
              await command.execute(interaction);
            } catch(err) {
              if (err) console.error(err);
          
              await interaction.reply({
                content: "An error occured while executing this command.",
                epheral: true,
              });
        
            
            }
          }
        }
 