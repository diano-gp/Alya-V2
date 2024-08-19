
const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Star_King0" //ur yt chanel name
global.socialm = "GitHub: STAR-KING0" //ur github or insta name
global.location = "Nigeria, Lagos" //ur location

//new
global.botname = 'Alya-v2' //ur bot name
global.ownernumber = ['2348100835767'] //ur owner number, dont add more than one
global.ownername = '🌟STAR KING' //ur owner name
global.websitex = "https://youtube.com/@star_king0?si=Rjlqnue51sHnR6Mj"
global.wagc = "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D"
global.themeemoji = '🌸'
global.wm = "Alya-v2."
global.botscript = 'https://github.com/STAR-KING0/Alya-v2' //script link
global.packname = "Sticker By"
global.author = "🌟STAR KING\n\n+2348100835767"
global.creator = "2348100835767@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348100835767"] // Premium User

//channel id
global.xchannel = {
	jid: 'https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});