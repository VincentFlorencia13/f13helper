const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("‼ **Данная команда не доступна для вашего уровня доступа!**");
    if(!args[0]) return message.channel.send(`${message.author}, **укажите текст фейк-сообщения.** 🚫`).then(msg => msg.delete(2000));
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
    name: "fakemsg"
};