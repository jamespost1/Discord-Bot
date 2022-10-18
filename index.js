const Discord = require("discord.js")

const TOKEN = "MTAyNjUzNTA4MzE3NzQxNDc1Ng.GAH_1j.CndddAt96ZYNH4LSM_wGK40wLq0aLKyIb5vgFc"


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () =>{
    console.log('Logged in!')
})

client.on("message.Create", (message) =>{
    if(message.content == "Hi Bot!") {
        message.reply("Hello! It's me!")
    }
})

client.login(TOKEN)