const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
    if(!message.member.permissions.has("ADMINSTATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription("**Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın !**").setColor("RANDOM"))
    /////Bu Altyapı Yrnex'e Aittir İzinsiz Paylaşılması Durumunda Telif Haklarımız Bulunmaktadır !
  
  let embed = new Discord.MessageEmbed()
  .addField('**🤖 BotList Mesaj 🤖**',`
  **\n▫ Bot Eklemek için ;**
  **\n▫ !bot-ekle \`\Bot id\`\ \`\prefix\`\**
  **\n▫ 📛 Bot Ekleme Kuralı 10 Sunucu + 5K Kullanıcı**`)
  .setColor("BLACK")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botlist-mesaj"],
  permLevel: 0
};

exports.help = {
  name: "botlist-mesaj",
  description: "botlist-mesaj",
  usage: "botlist-mesaj"
};