const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    once: false,
    execute(message, client) {
        
        ///Code For #Your-Ideas 
        if(message.author.bot) return;
        if(message.channel.id == "957742360576524328"){ 
        if(message.member.roles.cache.get ('908005181524934706'))  {
            
              const embed = new Discord.MessageEmbed()
              
              .setAuthor({ name: `${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
              .setDescription ("\`\`\`" + `${message.content}` + "\`\`\`")
              .setColor('RANDOM')
              
                  
              message.channel.send({embeds: [embed]})
              

              .then(msg =>{ setTimeout(() => message.delete(), 1100)
                  msg.react("<a:thumbsup:950551889609641994>");
                  msg.react("<a:thumbsdown:950551877349699684>");
                })
            } 
        }
        ///Ends Here

        ///SCREENSHOT CODE
        if(message.author.bot) return;
        if(message.channel.id === "950542814092091482") {
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
        msg.react("<a:thumbsup:950551889609641994>");
        msg.react("<a:thumbsdown:950551877349699684>");                                             
                                                  })
       .catch((err) => console.log(err));
                                                } }
        ///ENDS HERE
        
        if  (message.channel.id == "908004824602259486") {
        if  (message.content.includes('know') || message.content.includes('help') || message.content.includes('how') && !message.author.bot)
                
        message.reply('If you need assistance, Create a ticket <#921883672150413323>')
                  .then(() => console.log(`Replied to message "${message.content}"`))
                  .catch(console.error); }
                  
        if  (message.channel.id == "908004824602259486") {
        if  (message.content.includes('pamashi') || message.content.includes('xelp') || message.content.includes('хелп') || message.content.includes('как') || message.content.includes('Как') || message.content.includes('не работает') || message.content.includes('დამეხმარეთ') || message.content.includes('помощь') && !message.author.bot)
            
        message.reply('Создайте тикет, если вам нужна помощь <#921883672150413323>')
              .then(() => console.log(`Replied to message "${message.content}"`))
              .catch(console.error); }
//END


//DM Script for the Bot
       if(message.content == "Redux Pass"){
        message.author.send("**Which redux do you need?** \n\n**Какой редукс вам нужен?**\n\n```Write .4 or .5 or .6 or .7 or .8 or .9``` ")
        }
    

        if(message.content == ".4"){
        message.author.send("Redux .4 password - `BioN292PaS2-02xz1-42SeA`")
        }
        
        if(message.content == ".5"){
            message.author.send("Redux .5 password - `Pnr4-2846249-Ksj3bva`")
            }
        
        if(message.content == ".6"){
            message.author.send("Redux .6 password - `x8Nj9fwr-naQ41k-y2Auh7`")
                }
        
        if(message.content == ".7"){
            message.author.send("Redux .7 password - `sdf64rw-gdbx2mzq-lsrdx07`")
                        }
        if(message.content == ".8"){
            message.author.send("Redux .8 password - `yrgvb-907sph84s-wrs`")
        }
        if(message.content == ".9"){
            message.author.send("Redux .9 password - `klb009-dasxc83-kye742`")
                                        }
        if(message.content == "1.0"){
            message.author.send("Redux 1.0 password - `LS973-bghKJd-9634G`")
                                         }
            }
        
    
    }
    

