onst Discord = require("discord.js");
const bot = new Discord.Client();
//UPTIME ROBOT
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express ();
app.get("/", (request, response) => {
  console.log("pinging");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {
             
http.get('https://esawabot.glitch.me/')
}, 280000);

const prefix = "!!";
bot.on("ready", () => {
  bot.user.setActivity (".help | Watching student")
  console.log(`$(bot.user.tag) bot is online`);
});

bot.on("message", async message => {
  if (!message.guild) return;
  if (!message.content.starWith(prefix)) return;
  if (!message.author.bot) return;
  if (!message.channel.type === "dm") return;
  
  
  //commands
  if (message.content === `${prefix}ping`) {
    message.channel.send(":ping_pong: PONG!");
  }
});


bot.login(process.env.TOKEN);
