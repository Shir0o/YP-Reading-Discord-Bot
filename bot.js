const Discord = require('discord.js');
const auth = require('./auth.json');
const ytdl = require('ytdl-core');  
const music = require('discord.js-musicbot-addon');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === '!join') {
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => {
        console.log('Connected!')

        // connection.playStream(ytdl(
        //   'https://www.youtube.com/watch?v=ZlAU_w7-Xp8',
        //   { filter: 'audioonly' })
        // );

        music.start(client, {
            youtubeKey: "AIzaSyCm6xGkRvtGMf_ASCsrjJK40srs6FLGMNM"
        });
    })
    .catch(console.error);
  }
});

client.login(auth.token);