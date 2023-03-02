const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9");
require("dotenv").config();
const Discord = require("discord.js")


module.exports = {
    name: "ready",
    once: true,
    execute(client, commands) {
        console.log("The Bot is Online")
        const CLIENT_ID = client.user.id;

        const rest = new REST ({
          version: "9"
        }).setToken(process.env.TOKEN);
        (async () => {
          try {
            if (process.env.ENV === "production") {
              await rest.put(Routes.applicationCommands(CLIENT_ID), {
                body: commands
              });
              console.log("Successfully registered commands globally.")
            } else{
              await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID)
                             , {
                body: commands
              });
              console.log("Successfully registered commands locally.");
            }
          } catch (err) {
            if (err) console.error(err);
          }
        })(); 
        
        //Sending Bots message by itself
        
        //setTimeout
        setInterval(async () => {
         
        let g = await client.guilds.cache.get('813288031905382410')
        const channel = await g.channels.cache.get('813289254654443551')
        const sendMessage = await channel.send({
         
            content: 'Important Server Information', //Message to be sent as a text
            embeds: [{
            title: 'Why choose TopGear? The best RP server on the platform.', 
            description: '**`📢` • How to start playing**\n\nIn order to join TopGear RP. You can Type "TopGear RP" In the search bar, or you can directly connect by doing. " F8, connect 181.214.240.161:30120" \n\n`🆘` **• Need help or have a question?** If you need assistance, Create a ticket <#866921342229282816>',
            color: '#ffffff',
            image: {url: ''}, 
            footer: { text: 'Thank you for choosing TopGear!' } ,
            author: ''
            
          }]
          }) 
        
        //TO EDIT BOTS OWN MESSAGE
        //.then(x => x.edit('content'));
    
        sendMessage.react('<:tg:1080686311062650901>')
        setTimeout(() => sendMessage.delete(), 1800000)
        
    
        }, 
        1800000)

      }
    
  
    }
    