const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("message", message => {
  if (message.content === "ok") {
    message.channel.send("i shall take over the world");
  } else if (message.content === "with this treasure i summon") {
    message.channel.send("guys I'm finally back after a year");
  } else if (message.content === "hi") {
    message.channel.send("hello");
  } else if (message.content === "im back") {
    message.channel.send("hiii");
  } else if (message.content === "no") {
    message.channel.send("yes");
  } else if (message.content === "helloo") {
    message.channel.send("im bored");
  } else if (message.content === "eri") {
    message.reply("yeah?");
  } else if (message.content === ".-.") {
    message.channel.send("don't you dare say that you're ali because I am the real one. I, alone, also am the honored one.");
  } else if (message.content === "dumb") {
    message.reply("if you are refering that to me, you better start repenting or you'll regret it real bad");
  } else if (message.content === "nah,I'd win") {
    message.channel.send("bro's kitkat");
  } else if (message.content === "helloo") {
    message.channel.send("pay taxes");
  } else if (message.content === "who's error?") {
    message.channel.send("I don't know, probably someone from your school?");
  } else if (message.content === "right?") {
    message.channel.send("yep");
  } else if (message.content === "show me true rizz") {
    message.channel.send("if you wanna know true rizz find me and all of the hoes I got on my dick 😎");
  }  else if (message.content === "princess who") {
    message.channel.send("sam's the princess and I'm his prince");
});

client.login(process.env.token);
const mySecret = process.env['token'];
