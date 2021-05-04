const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const botlistAyar = require("../botlistAyar.json");
const db = require('quick.db')
exports.run = async (client, message, args) => {
let boteklemeKanal = botlistAyar.botekleKanalID
let botLog = botlistAyar.botLogID
if(message.channel.id !== boteklemeKanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: **Bot ekletmek için <#831128385467580426> kanalından kullanabilirsin.**`))
  let botID = args[0];
if(!botID) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: **Bot ekletmek için botunun \`ID\`'sini girmen gerek!**`))
let prefix = args[1];
  if(!prefix) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: **Bot ekletmek için botunun \`Prefix\`'sini girmen gerek!**`))
let uye = message.author
message.channel.send(`:white_check_mark: Botunuz Sisteme başarıyla eklendi.`).then(msgg =>  msgg.delete({timeout : '2000'}));
  message.delete();
  //DB Kısım
    db.set(`sahip_${message.author.id}`, botID)
  //Db Kısım
  const msg = await client.channels.cache.get(botLog).send(new Discord.MessageEmbed().setDescription(`**🎉 ${message.author} adlı kişinin botu sıraya eklendi.Botun Prefixi \`${prefix}\` & Botun ID'si \`${botID}\`

[[0 perm]](https://discord.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=0) | [[8 perm]](https://discord.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=8)
**
`))
  

        let collector = msg.createReactionCollector((reaction, user) => user.id !== message.author.id);

        await msg.react('✅') //member emojisi
        await msg.react('❌') //ungestired emojisi

        collector.on("collect", async(reaction) => {
            if (reaction.emoji.name == '✅') { //ungestired
msg.edit(`:white_check_mark: <@${botID}> Adlı bot onaylandı.${message.author} Tebrikler :tada: `)
              message.author.send(`${message.author} Merhabalar :hugging: <@${botID}> Adlı Botunuz Onaylandı.Tebrikler :tada:`)
            }
                      if (reaction.emoji.name == '❌') { //ungestired
msg.edit(`:x: <@${botID}> Adlı bot reddedildi.Sebepini yetkililerden öğrenebilirsin.`)
                                      message.author.send(`${message.author} Merhabalar :hugging: <@${botID}> Adlı Botunuz Reddedildi.Nedenini öğrenmek için sunucumuzdaki yetkililere yazabilirsin.`)

            }
        })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ekle" , "bot-ekle"],
  permLevel: 0
};

exports.help = {
  name: 'botekle',
  description: '',
  usage: ''
}
/////Bu Altyapı Yrnex'e Aittir İzinsiz Paylaşılması Durumunda Telif Haklarımız Bulunmaktadır !