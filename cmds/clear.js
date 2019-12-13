const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🚫 **У вас нету достаточного уровня доступа для использование данной команды**");
    if(!args[0]) return bot.send("🚫 **Укажите количество сообщений которое вы хотите удалить!**")
    if(args[0]>100) return bot.send("‼ **Укажите значение меньше чем 100**");
    if(args[0]<1) return bot.send("‼ **Укажите значение больше чем 1**");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`**Успешно удалено ${args[0]} сообщений** ✅`).then(msg => msg.delete(5*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};