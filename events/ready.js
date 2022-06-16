const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9");
require("dotenv").config();
const Discord = require("discord.js")


module.exports = {
    name: "ready",
    once: true,
    execute(client, commands) {
        console.log("The LS-Bot is Online")
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
         
        let g = await client.guilds.cache.get('907999231879565342')
        const channel = await g.channels.cache.get('908004824602259486')
        const sendMessage = await channel.send({
         
            content: 'Important Server Information', //Message to be sent as a text
            embeds: [{
            title: 'We have changed the system, now everythings better', 
            description: '**`🔒` • Changed password system for modifications**\n\nFor Redux Password now you have to write to the bot.\n\n`🆘` **• Need help or have a question?** Contact <#921883672150413323> they will point you in the appropriate direction for resolving your game.',
            color: '#ffffff',
            image: {url: 'https://cdn.discordapp.com/attachments/971238538379157534/987078007862730752/IMG_7202.gif'}, 
            footer: { text: 'The server Administration wishes everyone a great day' } ,
            author: ''
            
          }]
          }) 
        
        //TO EDIT BOTS OWN MESSAGE
        //.then(x => x.edit('content'));
    
        sendMessage.react('<a:2518discordanimatedlogo:949867372297220126>')
        setTimeout(() => sendMessage.delete(), 1800000)
        
    
        }, 
        1800000)

      }
    
  
    }
    