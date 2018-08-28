const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} Büyünüzü Hazırlamayı Tamamladı !!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('**Şu anki pingim  ' + client.ping + ' ms**');
  }

    if (message.content === 'sa') {
    message.reply('as');
  }

  if (message.content === prefix + 'avatarım') {
	message.channel.send(message.author.avatarURL);
  }

  if (message.content === prefix + 'reboot') {

	  if (message.author.id === "393485769660039169") {
		  message.channel.send('**[BlackMagiCc[BOT] Yeniden Başlatılıyor...**]').then(msg => {
			  console.log('___[BOT][BlackMagiCc] Yeniden Başlatılıyor...___')
			  process.exit(0);
		  });
	  } else
		  message.channel.send('***Üzgünüm Ama Bu Komutu Sadece Yapımcım Kullanabilir***')
  }


});

client.login(ayarlar.token);
