// Recode By TestGanz - 2023 ✓
// Jangan di ubah kalo kagak tau artinya nanti error !!!
//=========================================================⫹⫺

//=======================⟨ Module ⟩==========================//
const chain = require('lodash')
const _ = require('lodash')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require("chalk")
//==========================================================//

// APIkey - OPEN-AI
//======================================================//
global.keyopenai = "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"
global.keyai = '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'
//======================================================//

// API Rest - Penyetujuan Akses Fitur Berbasis APIkey
//======================================================//
global.APIs = {
 alfa: 'https://api.zeeoneofc.my.id',
 didin: 'https://api-didinbotz.herokuapp.com',
 zeon:	'https://api.zeeoneofc.xyz',
 nrtm: 'https://nurutomo.herokuapp.com',
 rey: 'https://server-api-rey.herokuapp.com',
 xteam: 'https://api.xteam.xyz',
 zahir: 'https://zahirr-web.herokuapp.com',
 lol: 'https://api.lolhuman.xyz',
 zenz: "https://api.zahwazein.xyz",
 dhnjing: 'https://dhnjing.xyz',
 neoxr: 'https://neoxr-api.herokuapp.com',
 zeks: 'https://api.zeks.me',
 pencarikode: 'https://pencarikode.xyz',
 ana: 'https://anabotofc.herokuapp.com/',
 amel: 'https://melcanz.com',
 zahwa: 'https://api.zahwazein.xyz',
 hardianto: 'https://hardianto.xyz',
 botstyle: 'https://botstyle-api.herokuapp.com',
 adiisus: 'https://adiixyzapi.herokuapp.com',
 kanx: 'https://kannxapi.herokuapp.com/', 
 violetics : 'https://violetics.pw',
 ziy : 'https://ziy.herokuapp.com',
 males : 'https://malesin.xyz',
 pasha : 'https://api.nataganz.com',
 reysekha : 'https://web-production-d795.up.railway.app/',
 rey : 'https://web-production-d795.up.railway.app/',
 botcahx : 'https://api.tiodevhost.my.id/'
}
//======================================================//

// APIkey - Penyaluran Akses API Terhadap Fitur
//======================================================//
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'Hu8LfUan',
	'https://api.zeeoneofc.xyz': 'dhmDlD5x',
	'https://api.zahwazein.xyz': 'zenzkey_66953076a302',
	'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': '09b723b1fee8877ff7a8c347',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy',
  'https://api.nataganz.com' : 'Pasha'
}
//======================================================//

// Dokumen File
//======================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//======================================================//

// Setting - Automatic Bot
//======================================================//
global.autoReadAll = true // auto lihat chat pribadi, grup dan status ( 3 Reader )
global.autoread = true // auto read pesan / chat
global.antitags = true // anti tag dari beberapa member maupun bot lain
global.autoreadpmngc = true // auto lihat chat pribadi dan grup
global.autoplaymusic = true, // auto memutar musik dalam grup maupun pribadi
global.autoReadGc = true // auto lihat pesan yang ada pada grup
global.autoReadPc = true // auto lihat pesan yang ada pada chat pribadi
global.available = true // auto online = true, manual = false
global.autoTyping = true //auto ketik di grup maupun chat pribadi ( Fake )
global.autoRecord = true //auto merekam suara di chat pribad maupun grup ( Fake )
//======================================================//

// Running Database ✓
//======================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
//======================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//======================================================//
const { Low, JSONFile } = low
const { mongoDB } = ('./lib/mongoDB.js')
//======================================================//

//======================================================//
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/dtb.json`)
)
//======================================================//
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    save: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
  global.data = global.db.data
  global.chats = global.data.chats
  global.users = global.data.users
  global.database = global.data.database
  global.game = global.data.game
  global.settings = global.data.settings
  global.others = global.data.others
  global.save = global.data.save
  global.sticker = global.data.sticker
}
loadDatabase()
//======================================================//
// save database setiap 0 detik !!!
//======================================================//
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 1 * 1000)
//======================================================//

//======================================================//
// Database Limit - Settings !
//======================================================//
global.limitawal = {
    rakyat: "infinity", // Limit Pengguna Premium !!!
    free: 10 // Limit Pengguna Gratis !!!
}
//======================================================//

// Penambahan Terhadap Menu Maupun Balasan Pada Fitur !
//======================================================//
global.namabot = "Tᴇsᴛ - AI"
global.botName = "Tᴇsᴛ - AI"
global.namaowner = "TestGanz"
global.ownerName = "TestGanz"
global.botname = 'Tᴇsᴛ - AI'
global.email = 'ad037317@gmail.com' // bebas
global.namaweb = 'Whatsapp' // Nama Website ⟨ Arahan/Ajakan ⟩
global.region = 'Indonesia' 
global.github = '-' //terserah 
global.mygc = 'https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz' // link gc 
global.myig = '-' // terserah 
global.themeemoji = "❑"
global.ultah = 'Oktober 09, 2180' // ulang tahun bot nya
global.timezone = "Asia/Jakarta"
global.packname = '© TᴇsᴛGᴀɴᴢ' //sticker wm ubah
global.author = 'Fʀᴏᴍ Iɴᴅᴏɴᴇsɪᴀɴ' //sticker wm ganti nama kalian
global.myweb = "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz"
global.footer_text = "© TᴇsᴛGᴀɴᴢ"
global.footer = "© TᴇsᴛGᴀɴᴢ"
global.ttname = '© TᴇsᴛGᴀɴᴢ'
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.thumb = fs.readFileSync('./image/foto.jpg')
global.mnfs = fs.readFileSync('./image/menfess.jpg')
global.premium = ['6289512696170']
global.ownernomer = ['6289512696170']
global.rkyt = ['6289512696170']
global.ownerNumber = ["6289512696170@s.whatsapp.net"]
global.unikolpsi = ['6289512696170']
global.owner = ['6289512696170']
global.sessionName = `@T-Runner°2023` // Jangan di ubah nanti error !!!
global.background = "" //maks size 100kb agar welcome nya gk lemot
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '#']
global.sp = ''
//======================================================//

// Pemberitahuan Balasan Terhadap Fitur/Akses Terlarang !
//======================================================//
global.mess = {
    done: '🍁 *Sᴇʟᴇsᴀɪ Kᴀᴋ* 🍁\n\n   Jᴀɴɢᴀɴ ʟᴜᴘᴀ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ʏᴀ ᴋᴀᴋ :\n⊙═════════════════════⊙\n❐ https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz\n⊙═════════════════════⊙',
    wait: '_⌛ Tᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ ʏᴀ ᴋᴀᴋ..._',
    admin: '_Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ Aᴅᴍɪɴ ɢʀᴜᴘ ʏᴀ ᴋᴀᴋ !_',
    botAdmin: '_Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ᴀᴋᴜ sᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ Aᴅᴍɪɴ ᴅɪ ɢʀᴜᴘ ɪɴɪ !_',
    owner: '_Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀᴋᴜ sᴀᴊᴀ ʏᴀ ᴋᴀᴋ, Kᴀᴋᴀᴋ sᴇʙᴀɢᴀɪ ᴘᴇɴɢɢᴜɴᴀ ᴛɪᴅᴀᴋ ᴅɪᴘᴇʀʙᴏʟᴇʜᴋᴀɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ. Jɪᴋᴀ ᴋᴀᴋᴀᴋ ᴍᴀᴋsᴀ ᴀᴋᴜ ᴍᴀʀᴀʜ ɴɪʜ 😾_',
    nsfw: '_Hᴀɪ ᴋᴀᴋ, Mᴀᴀғ ʏᴀ ᴋᴀᴋ ғɪᴛᴜʀ ɪɴɪ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴀʀᴇɴᴀ ғɪᴛᴜʀ NSFW ʙᴇʟᴜᴍ ᴅɪᴀᴋᴛɪғᴋᴀɴ !_',
    ban: ' ⌈ 𝘽 𝘼 𝙉 𝙉 𝙀 𝘿 ⌋\n\n𝑯𝒂𝒊 𝒌𝒂𝒌, 𝑴𝒂𝒂𝒇 𝒚𝒂 𝒌𝒂𝒎𝒖 𝒕𝒆𝒍𝒂𝒉 𝒅𝒊 𝒃𝒂𝒏𝒏𝒆𝒅 𝒐𝒍𝒆𝒉 𝒐𝒘𝒏𝒆𝒓𝒌𝒖 𝒅𝒆𝒏𝒈𝒂𝒏 𝒂𝒍𝒂𝒔𝒂𝒏 :\n⊙═════════════════════⊙\n◈ 𝗦𝗽𝗮𝗺 𝗯𝗼𝘁 𝘁𝗮𝗻𝗽𝗮 𝗷𝗲𝗱𝗮.\n◈ 𝗠𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝘁𝗶𝗱𝗮𝗸 𝗺𝗲𝗺𝗮𝘁𝘂𝗵𝗶 𝗮𝘁𝘂𝗿𝗮𝗻 𝘆𝗮𝗻𝗴 𝗮𝗱𝗮 (𝗠𝗮𝗸𝘀𝗮 𝗠𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗙𝗶𝘁𝘂𝗿 𝗬𝗮𝗻𝗴 𝗧𝗶𝗱𝗮𝗸 𝗕𝗼𝗹𝗲𝗵).\n◈ 𝗧𝗲𝗿𝗹𝗮𝗹𝘂 𝗲𝗴𝗼𝗶𝘀 𝗱𝗮𝗹𝗮𝗺 𝗽𝗲𝗺𝗯𝘂𝗷𝘂𝗸𝗮𝗻 𝗯𝗼𝘁 𝗸𝗲𝗱𝗮𝗹𝗮𝗺 𝗴𝗿𝘂𝗽.\n◈ 𝗧𝗲𝗹𝗮𝗵 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁 𝗱𝗲𝗻𝗴𝗮𝗻 𝗸𝗮𝘁𝗮 𝗹𝗮𝗶𝗻 "𝗧𝗲𝗹𝗲𝗽𝗼𝗻/𝗩𝗰 𝗯𝗼𝘁 𝗱𝗲𝗻𝗴𝗮𝗻 𝘀𝗽𝗮𝗺𝗺𝗲𝗿".\n◈ 𝗠𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗲𝗲𝗻𝗮𝗸𝗻𝘆𝗮 𝗱𝗲𝗻𝗴𝗮𝗻 𝗸𝗮𝘁𝗮 𝗹𝗮𝗶𝗻 "𝗦𝗽𝗮𝗺 𝗳𝗶𝘁𝘂𝗿 𝗽𝗼𝗿𝗻/𝗽𝗲𝗻𝗰𝗮𝗿𝗶𝗮𝗻 𝗴𝗮𝗺𝗯𝗮𝗿 𝘀𝗲𝗰𝗮𝗿𝗮 𝗦𝗽𝗮𝗺".\n⊙═════════════════════⊙\n\n⫹⫺ 𝗖𝗮𝗿𝗮 𝗮𝗴𝗮𝗿 𝗯𝗲𝗯𝗮𝘀 𝗱𝗮𝗿𝗶 𝗯𝗮𝗻𝗻𝗲𝗱 :\n\n⌈ *ᎠᎪͲᎪ ᏢᎬΝᏀᏀႮΝᎪ ᏴᎪΝΝᎬᎠ* ⌋\n❑ Nᴀᴍᴀ :\n❑ Dᴀʀɪ ɢʀᴜᴘ ᴍᴀɴᴀ  :\n❑ Mᴀsᴜᴋᴀɴ ɴᴏᴍᴏʀ ᴛᴇʟᴇᴘᴏɴ ʏᴀɴɢ ᴅɪ ʙᴀɴ :\n❑ Aʟᴀsᴀɴ ᴀᴘᴀ ᴀɢᴀʀ ʙᴀɴɴᴇᴅ ᴅɪ ʙᴇʙᴀsᴋᴀɴ  :\n\n⫹ *ɪsɪ ᴅᴀᴛᴀ ᴅɪ ᴀᴛᴀs sᴇʙᴀɢᴀɪ ᴘᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ɪɴɢɪɴ ʙᴇʙᴀs ᴅᴀʀɪ ʙᴀɴɴᴇᴅ* ⫺\n⫹ *ᴋɪʀɪᴍ ᴍᴇʟᴀʟᴜɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ ᴛᴜɴɢɢᴜ ʀᴇsᴘᴏɴ ᴏᴡɴᴇʀᴋᴜ* ⫺',
    error: '_Mᴀᴀғ ᴛᴇʀᴊᴀᴅɪ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ, Cᴏʙᴀ ʟᴀɢɪ ɴᴀɴᴛɪ !_',
    group: '_Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ ʏᴀ ᴋᴀᴋ. Sɪʟᴀʜᴋᴀɴ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ :_\n\n⊙═════════════════════⊙\n❐ https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz\n⊙═════════════════════⊙',
    pc: '*Hᴀɪ ᴋᴀᴋ, ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ !!!*',
    Limit: '_Hᴀɪ ᴋᴀᴋ, Mᴀᴀғ ʏᴀ ʟɪᴍɪᴛ ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ʜᴀʙɪs sɪʟᴀʜᴋᴀɴ ᴛᴜɴɢɢᴜ 1 ʜᴀʀɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴀᴛᴀᴜ ᴋᴀᴋᴀᴋ ʙɪsᴀ ᴋᴏᴋ ʟɪᴍɪᴛ ᴜɴʟɪᴍɪᴛᴇᴅ ᴅᴇɴɢᴀɴ sᴇᴡᴀ ʙᴏᴛ ɪɴɪ, Sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ_ : *#sᴇᴡᴀ* !!!',
}
//======================================================//

// Gambar Tambahan ⟨ Berfungsi Hanya Untuk Fitur Tertentu ⟩
//======================================================//
global.kurome = { url: 'https://a.uguu.se/faLPPBPP.mp4' }
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
//======================================================//

//——————————————「 Batas Akhir 」——————————————\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
//—————————————————————————————————————//
