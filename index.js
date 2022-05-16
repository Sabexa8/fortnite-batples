require("dotenv").config();
const fs = require("fs");
const Discord = require('discord.js');
require('dotenv').config();

const { Client, Intents, Collection } = require("discord.js");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES 
  ],

  partials: [
    'MESSAGE', 'CHANNEL', 'REACTION',]
});

//RICH PRESENCE-ACTIVITY
client.on("ready", async() => {
client.user.setActivity({ name: "LS Mods", type: "LISTENING" })
})

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith (".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith (".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  
  
  
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, commands));
  } else {
    client.on(event.name, (...args) => event.execute(...args, commands));
  }
}


client.login(require('./.env').token);