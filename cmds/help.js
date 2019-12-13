const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
 let embed = new Discord.RichEmbed()
  .setDescription("**Помощь по командам | Florencia-13 Helper**")
  .setColor('#ff0003')
  .setAuthor('Florencia-13 Helper Inc.', 'http://okeygeek.ru/wp-content/uploads/2017/10/unnamed-3.png', 'https://vk.com/f13helper')
  .addField("**+ping**","• Узнать статус бота (Онлайн / Оффлайн)")
  .addField("**+link**","• Отправить ссылку на приглашение бота на ваш Discord сервер")
  .addField("**+fakemsg [text]**","• Написать фейк-сообщение от бота [For Moderator]")
  .addField("**+clear [кол-во сообщений]**","• Удалить определенное кол-во сообщений [For Moderator]")
  .setFooter('Система модерации Discord серверов © Florencia-13 Helper, 2019');
  bot.send(embed);

};
module.exports.help = {
    name: "help"
};