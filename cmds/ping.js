const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send(`${message.author}, **я онлайн!** 💬`);
};
module.exports.help = {
    name: "ping"
};