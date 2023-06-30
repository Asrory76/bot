/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/628812258855
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'woaibeijingtiananmen',
}

// Other
global.footer = [`_`]
global.gmail = [`_`]
global.instagram = [`_`]
global.script = [`CHT OWNER`]
global.gcbot = ['https://chat.whatsapp.com/BF5nQa0PTwH7jUVNKXaWa2']
global.ownername = ['YT ZAN']
global.botname = ['FERDI BOT ']
global.owner = ['6285752083533']
global.premium = ['6285752083533']
global.packname = 'BY FERDI'
global.author = 'WhatsApp Bot'
global.sessionName = 'frons'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: `✓ Success`,
    admin: `Fitur Khusus Admin Group!`,
    botAdmin: `Bot Harus Menjadi Admin Terlebih Dahulu!`,
    owner: `Fitur Khusus Owner Bot`,
    group: `Fitur Digunakan Hanya Untuk Group!`,
    private: `Fitur Digunakan Hanya Untuk Private Chat!`,
    downgc: `_*Fitur ini Tidak Bisa Di Gunakan Di Private Chat!*_\n\n_Join Group Bot Untuk Menggunakan Fitur ini._\n\n\n*Link Gc* : ${gcbot}`,
    bot: `Fitur Khusus Pengguna Nomor Bot`,
    wait: `Loading...`,
    endLimit: `Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12`,
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
