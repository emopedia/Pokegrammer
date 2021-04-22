const Discord = require('discord.js')
const client = new Discord.Client()

const PREFIX = '/g';
const memberCount = require('./member-count')

const fs = require('fs');
const privateMessage = require('./private-message')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}
    

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("${message.guild.memberCount} members in ${client.guilds.size} servers", {
      type: "WATCHING",
        
    });
 });

client.on('message', message => {
 
    
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
});

bot_secret_token = "HIDDEN"

client.login(bot_secret_token)
