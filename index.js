const express = require("express");
const app = express();
const keep_alive = require('./keep_alive.js')

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("message", message => {
  if (message.content === "sam") {
    message.channel.send("what");
  } else if (message.content === "why?") {
    message.channel.send("it is what it is");
  } else if (message.content === "hi") {
    message.channel.send("whatchu doing");
  } else if (message.content === "wdym") {
    message.channel.send("you don't need to know");
  } else if (message.content === "?") {
    message.channel.send("L");
  } else if (message.content === "pls") {
    message.channel.send("imagine begging");
  } else if (message.content === "nah, I'd win") {
    message.channel.send("do you really like that kitkat");
  } else if (message.content === "sam baby girl") {
    message.channel.send("stfu");
  } else if (message.content === "oi") {
    message.channel.send("yo");
  } else if (message.content === "sam help") {
    message.channel.send("why are you asking for my help? go solve your problems by your own idc");
  } else if (message.content === "nigga") {
    message.channel.send("stfu nigger");
  } else if (message.content === "fuck u sam") {
    message.channel.send("wanna do it? come to ur mom's room Im there");
  } else if (message.content === "i will fuck ur ass") {
    message.channel.send("wanna do it? come to ur mom's room Im there");
  }
});

client.login(process.env.token);
const mySecret = process.env['token'];
