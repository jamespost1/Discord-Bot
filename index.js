const Discord = require("discord.js")

const config = require('./config.json');

const TOKEN = config.token

const keep_alive = require('./keep_alive.js')

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on('ready', () =>{
    console.log("Logged in!")
})

client.on('message', msg => {
    if (msg.content === 'hello' || msg.content === 'hey' || msg.content === 'hi') {
      msg.reply('hello friend');
    }
    })

client.login(TOKEN)