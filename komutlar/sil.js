const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")
const db = require('quick.db')

exports.run = async(client, message, args) => {

    let prefix = "!" || ayarlar.prefix || db.fetch(`prefix_${message.guild.id}`)

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setDescription("**Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın !**").setColor("RANDOM"))

    let sa = args[0]

    if(!sa) {
        const muckmuck = new Discord.MessageEmbed()
        .setDescription(`**1 - 100 Arasında Bir Sayı Girmelisin ! Örnek Kullanım; !sil 50**`)
        .setColor("RANDOM")
        message.channel.send(muckmuck)
    }

    message.channel.bulkDelete(sa).then(() => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Başarıyla ${sa} Mesaj Silindi !**`)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sil'],
    permlvl: 0
}

exports.help = {
    name: "sil"
}
/////Bu Altyapı Yrnex'e Aittir İzinsiz Paylaşılması Durumunda Telif Haklarımız Bulunmaktadır !