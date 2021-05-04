  const Discord = require("discord.js"),
client = new Discord.Client();

exports.run = async (client, message, args) => {
message.channel.send('Pong!'+ 'client.ws.ping')
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini ölçer.',
  usage: 'ping'
}
/////Bu Altyapı Yrnex'e Aittir İzinsiz Paylaşılması Durumunda Telif Haklarımız Bulunmaktadır !