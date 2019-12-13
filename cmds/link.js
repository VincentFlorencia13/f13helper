const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Ссылка на приглашение бота на ваш Discord сервер')
	.setURL('https://discordapp.com/oauth2/authorize?client_id=655052033824391189&permissions=8&scope=bot')
    .setColor('#ff0003')
    .setAuthor('Florencia-13 Helper Inc.', 'http://okeygeek.ru/wp-content/uploads/2017/10/unnamed-3.png', 'https://vk.com/f13helper')
    .setFooter('Система модерации Discord серверов © Florencia-13 Helper, 2019');
    bot.send(embed);

};
module.exports.help = {
    name: "link"
};



