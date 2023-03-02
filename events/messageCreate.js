const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    once: false,
    execute(message, client) {
        
        //Code For #Your-Ideas 
        if(message.author.bot) return;
        if(message.channel.id == "1080682434707861554"){ 
        if(message.member.roles.cache.get ('813292425123856404'))  {
            
              const embed = new Discord.MessageEmbed()
              
              .setAuthor({ name: `${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
              .setDescription ("\`\`\`" + `${message.content}` + "\`\`\`")
              .setColor('RANDOM')
              
                  
              message.channel.send({embeds: [embed]})
              

              .then(msg =>{ setTimeout(() => message.delete(), 1100)
                  msg.react("<a:thumbsup:1080685465105076244>");
                  msg.react("<a:thumbsdown:1080685463452516432>");
                })
            } 
        }
        //Ends Here

        //Screenshot Code
        if(message.author.bot) return;
        if(message.channel.id === "1080683090722173051") {
        if(message.content === "1"){
   
             } else {
       
        const images = (message.attachments);
  
        const embed = new Discord.MessageEmbed()
        
        if(!message.attachments.first()) return 
        
        const att = new Discord.MessageAttachment(message.attachments.first().url, "img.png")
  
        embed.setAuthor({
        name: `${message.member.user.username}#${message.member.user.discriminator}`,
         iconURL: message.member.user.displayAvatarURL({ size: 4096, dynamic: true })
        
        })
  
        embed.setImage("attachment://img.png")
        message.channel.send({ 
        embeds: [embed] , files: [att]}).then(msg =>{ setTimeout(() => message.delete(), 1000)
        msg.react("<a:thumbsup:1080685465105076244>");
        msg.react("<a:thumbsdown:1080685463452516432>");                                             
                                                  })
       .catch((err) => console.log(err));
                                                } }
        //End
        
        //Help Reply
        if  (message.channel.id == "813289254654443551") {
        if  (message.content.includes('know') || message.content.includes('help') || message.content.includes('how') && !message.author.bot)
                
        message.reply('If you need assistance, Create a ticket <#866921342229282816>')
                  .then(() => console.log(`Replied to message "${message.content}"`))
                  .catch(console.error); }
                  
        //End


        //DM Script for the Bot
        if(message.content == "Help" || message.content == "help"){
        message.author.send("What is your question? \n Type: `Server info` \n`Creating Ticket` \n`Application Filling` \n`Donations`")
        }
    

        if(message.content == "Server info"){
        message.author.send("`In order to join TopGear RP. You can Type TopGear RP In the search bar, or you can directly connect by doing. F8, connect 181.214.240.161:30120 \nThank you for choosing TopGear!`")
        }
        
        if(message.content == "Creating Ticket"){
            message.author.send("`If you need assistance, Create a ticket` <#866921342229282816>")
            }
        
        if(message.content == "Application Filling"){
            message.author.send("")
                }
        
        if(message.content == "Donations"){
            message.author.send("")
                        }
        
            }
        
        //End Here
        
    
    }
    

