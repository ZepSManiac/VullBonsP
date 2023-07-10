// Recode By TestGanz ✓
//==============================⫹⫺

//==========================================================\\
         // Izin Akses Penyimpanan Dari Config/Setting \\
//==========================================================\\
require('./settings')
//==========================================================//

//====================================\\
  // Deteksi QR Dan Pengeluaran Sinyal \\
//====================================\\
const {
    default: WADefault,
    useMultiFileAuthState,
    DisconnectReason,
    BufferJSON,
    MessageType,
   	makeWASocket,
    jidNormalizedUser,
    GroupSettingChange,
    fetchLatestBaileysVersion,
    ChatModification,
    Presence,
    Browsers,
	 	MessageOptions,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    Mimetype,
    generateWAMessageFromContent,
   	AnyMessageContent,
    getAggregateVotesInPollMessage,
    generateMessageID,
    initInMemoryKeyStore,
    generateWAMessage,
    areJidsSameUser,
    WAFlag,
    makeCacheableSignalKeyStore,
    getContentType,
   	mentionedJid,
  	processTime,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
   	WALocationMessage,
    proto,
  	ProxyAgent,
    delay,
    generateWAMessageContent,
	  waChatKey,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys")
//====================================//

//====================================\\
const pino = require('pino')
const {
    Boom
} = require('@hapi/boom')
const clear = require("cli-clear")
const { platform } = require('process')
const cron = require('node-cron')
const { color, bgcolor, deffLog } = require('./lib/color')
const fs = require('fs')
const express = require('express')
const app = express()
const chain = require('lodash')
const _ = require('lodash')
const { createServer } = require ('http')
const { waiting } = require('./lib/waiting')
const { scheduleJob } = require('node-schedule')
const Readline = require('readline')
const { join } = require('path')
const owo = JSON.parse(fs.readFileSync('./lib/koi.json'))
const lolcatjs = require('lolcatjs')
const axios = require('axios')
const { exec, spawn, execSync } = require("child_process")
const FileType = require('file-type')
const control = JSON.parse(fs.readFileSync('./control.json'))
const yargs = require('yargs/yargs')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber')
const chalk = require('chalk')
const path = require('path')
const { TelegraPh } = require('./lib/uploader')
const { 
   toAudio, 
   toPTT, 
   toVideo, 
   ffmpeg
} = require('./lib/converter')
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExif
} = require('./lib/exif')
const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const { isUrl, generateMessageTag, getSizeMedia, await, sleep } = require('./lib/myfunc')
//=================================================//
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
//=================================================//
let modebot23 = require('./@TGanzBOT.js');
let tanpacall = require('./@TGanzBOT.js');
let owner = JSON.parse(fs.readFileSync('./database/owner.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let _left = JSON.parse(fs.readFileSync('./database/left.json'));
//=================================================//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
//=================================================//
moment.tz.setDefault("Asia/Jakarta").locale("id")
//=================================================//
const tanggal = moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
//=================================================//
NamaOwner = `${control.NamaOwner}`
NamaBot = `${control.NamaBot}`
NomorOwner = `${control.NomorOwner}`
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
//=================================================//
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'fatal',
        stream: 'store'
    })
})
//=================================================//
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
//=================================================//
//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//=================================================//
if (global.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
//=================================================//


//=================================================================//
                 // Perjalanan Menuju Scan Barcode \\
//=================================================================//
/**
* Uncache if there is file change;
* @param {string} module Module name or path;
* @param {function} cb <optional> ;
*/
//=================================================================//
function nocache(module, cb = () => { }) {
	console.log(`Module ${module} sedang diperhatikan terhadap perubahannya !`) 
	fs.watchFile(require.resolve(module), async () => {
		await uncache(require.resolve(module))
		cb(module)
	})
}
//=================================================================//

//=================================================================//
/**
* Uncache a module
* @param {string} module Module name or path;
*/
//=================================================================//
function uncache(module = '.') {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(module)]
			resolve()
		} catch (e) {
			reject(e)
		}
	})
}
//=================================================================//

//=================================================================//
async function Botstarted() {
    const {
        state,
        saveCreds
   } = await useMultiFileAuthState(`./${sessionName}`)
//==============================================================//
    const tganz = WADefault({
        logger: pino({
        level: 'fatal', // Hening Masalah Console - QR Code
        }),
        browser: ['© TestGanz', 'Firefox', '2.0.2.3'],
        auth: state,
        printQRInTerminal: true, // memunculkan qr di terminal
//==============================================================//
// Di bawah ini adalah fungsi untuk list button agar button terlihat oleh pengguna !
// Jika tidak ingin delay terhadap button silahkan ubah patch bawah ini menggunakan </**> !
//==============================================================//
        patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message.buttonsMessage ||
            message.templateMessage ||
            message.listMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      },
//==============================================================//
     getMessage: async (key) => { 
     if (store) { 
     const msg = await store.loadMessage(key.remoteJid, key.id) 
     return msg.message || undefined } 
     return { conversation: "[❗] Hai kak Owner, Bot mengalami pengulangan dan akan di coba kembali !!!" } } 
     // get message diatas untuk mengatasi pesan gagal dikirim, "menunggu pesan", dapat dicoba lagi }
//==============================================================//
})
//==============================================================//
       // Selesai Scan QR Dan Selanjutnya Pengaitan WhatsApp \\
//==============================================================//


//==============================================================//
// Auto Update Module !!!
//==============================================================//
    require('./@TGanzBOT')
    nocache('./@TGanzBOT', module => console.log(` "${module}" Telah diupdate!`))
    nocache('./settings', module => console.log(` "${module}" Telah diupdate!`))
    clear()
//==============================================================//


//==============================================================//
    store.bind(tganz.ev) // Arahan semua system !
//==============================================================//
    
//==============================================================//
   // Anti Telepon/Video-Call
//==============================================================//
tganz.ws.on('CB:call', async (json) => {
    let botNumber = await tganz.decodeJid(tganz.user.id)
    const callerId = json.content[0].attrs['call-creator']
    let nama = await tganz.getName(callerId)
    if (json.content[0].tag == 'offer') {
  // let pa7rick = await tganz.sendContact(callerId, global.unikolpsi)
    tganz.sendMessage(callerId, { text: `         *⫹ Deteksi Telepon ⫺*\n\n❑ _Hai kak kamu baru saja Telepon/Video-Call saya, Silahkan tunggu pemilik WhatsApp ini online untuk melihat apa yang kakak ingin beritahu kepada pemilik nomor ini. Trimakasih_ !!!`}, { quoted : callerId })
    tganz.sendMessage(`6289512696170@s.whatsapp.net`, {text: `         ⫹ *Lᴀᴘᴏʀ Oᴡɴᴇʀ* ⫺\n\n❑ _Kᴀᴍɪ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴘᴇɴᴇʟᴘᴏɴ ʏᴀɴɢ sᴜᴅᴀʜ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʙᴏᴛ ᴍᴜ, Hᴀʀᴀᴘ ᴅɪ ᴄᴇᴋ sɪᴀᴘᴀ ᴘᴇɴᴇʟᴘᴏɴ ᴛᴇʀsᴇʙᴜᴛ ᴅᴀɴ ᴀᴛᴀsɪ sᴇsᴜᴋᴀ ᴍᴜ. Kᴀᴍɪ ʟᴀɴᴊᴜᴛᴋᴀɴ ᴛᴜɢᴀs ᴋᴀᴍɪ sᴀᴍᴘᴀɪ ᴊᴜᴍᴘᴀ_ 🫡\n\n╔══════⟨ *INFO - TELP/VC* ⟩══════❑\n╠❑ *Nᴀᴍᴀ* : ${nama}\n╠❑ *Nᴏᴍᴏʀ* : ⟨ ${callerId.split("@")[0]} ⟩\n╠❑ *Jᴀᴍ* : ${jam}\n╠❑ *Tᴀɴɢɢᴀʟ* : ${tanggal}\n╚═════════════════════❑\n\n*⩠ Sɪʟᴀʜᴋᴀɴ ᴄᴇᴋ ɪɴғᴏʀᴍᴀsɪɴʏᴀ ᴋᴀᴋᴀᴋ ^~^*`})
    await sleep(1000) // Hitung Mundur Blokir !!!
    await tganz.updateBlockStatus(callerId, "unblock")
    }
    })
//==============================================================//
      
//=================================================================//
   tganz.ev.on('creds.update', saveCreds)
//=================================================================//

//==============================================================//
    //Resize - Memperkecil ukuran gambar !
//==============================================================//
        const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
//==============================================================//

//==============================================================//
     // Deteksi Penggunaan terhadap BOT
//==============================================================//
tganz.ev.on('chat-update', async (message) => {
      require('./@TGanzBOT.js')(tganz, message)
    })
      waiting('2', ' Menunggu pesan baru...')
//==============================================================//

//=================================================================//
    tganz.setStatus = (status) => {
        tganz.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
//=================================================================//
   
//=================================================================//
    tganz.ev.on('messages.upsert', async chatUpdate => {
    // console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!modebot23 && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return
            if (mek.key.id.startsWith('Koneko-MD')) return
            tganz.sendPresenceUpdate('available') // Peningkatan uptime dengan online !
            m = smsg(tganz, mek, store)
            require("./@TGanzBOT")(tganz, m, chatUpdate, store, _welcome, _left)
        }
        catch (err) {
            console.log(err)
        }
    })
//=================================================================//

//=================================================//
async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        } 
          return {
             conversation: "[❗] Hai kak Owner, Bot mengalami pengulangan dan akan di coba kembali !!!"
        }
    }
//=================================================//
    
//=================================================//
    tganz.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                tganz.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
//=================================================//
/**
//=================================================//
      // Pemberitahuan setiap pengubahan grup \\
//=================================================//
    tganz.ev.on("groups.update", async (json) => {
			console.log(json)
			const res = json[0];
//=======================================================//
			    try {
             ppgroup = await tganz.profilePictureUrl(anu.id, 'image')
             } catch {
             ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
//=======================================================//
			if (res.announce == true) {
				await sleep(2000)
				let a = `       「 *GRUP - TUTUP* 」\n\n❑ _Gʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ, Sɪʟᴀʜᴋᴀɴ ᴛᴜɴɢɢᴜ ᴅᴀɴ sᴀʙᴀʀ ᴅᴀʟᴀᴍ ᴘᴇᴍʙᴜᴋᴀᴀɴ ɢʀᴜᴘ ʟᴀɢɪ !!!`
				tganz.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `❑ ᴋʟɪᴋ ɢᴀᴍʙᴀʀ ᴜɴᴛᴜᴋ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ !!!`,
                            body: `${ttname}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
//=======================================================//
			} else if (res.announce == false) {
				await sleep(2000)
				let a = `       「 *GRUP - BUKA* 」\n\n❑ _Gʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ʙᴜᴋᴀ, Sᴇʟᴀᴍᴀᴛ ʙᴇʀᴋᴏᴍᴜɴɪᴋᴀsɪ ᴋᴇᴍʙᴀʟɪ ɪɴɢᴀᴛ ᴊᴀɴɢᴀɴ ᴛᴇʀʟᴀʟᴜ sᴘᴀᴍ_ !!!`
				tganz.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `❑ ᴋʟɪᴋ ɢᴀᴍʙᴀʀ ᴜɴᴛᴜᴋ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ !!!`,
                            body: `${ttname}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
//=======================================================//
			} else if (res.restrict == true) {
				await sleep(2000)
				let a = `       「 *DESKRIPSI - BATAS* 」\n\n❑ _Mᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ *ɪɴғᴏ ɢʀᴜᴘ* ᴛᴇʟᴀʜ ᴅɪ ʙᴀᴛᴀs, Sᴀᴀᴛ ɪɴɪ ᴍᴇᴍʙᴇʀ ᴛɪᴅᴀᴋ ᴅɪ ɪᴢɪɴᴋᴀɴ ᴍᴇɴɢᴜʙᴀʜ ɪɴғᴏ ɢʀᴜᴘ ɪɴɪ_ !!!`
				tganz.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `❑ ᴋʟɪᴋ ɢᴀᴍʙᴀʀ ᴜɴᴛᴜᴋ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ !!!`,
                            body: `${ttname}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
//=======================================================//
			} else if (res.restrict == false) {
				await sleep(2000)
				let anu = `       「 *DESKRIPSI - BEBAS* 」\n\n❑ _Mᴜʟᴀɪ sᴇᴋᴀʀᴀɴɢ *ɪɴғᴏ ɢʀᴜᴘ* ᴛᴇʟᴀʜ ᴅɪ ʙᴇʙᴀsᴋᴀɴ, Sᴀᴀᴛ ɪɴɪ ᴍᴇᴍʙᴇʀ ᴅɪ ᴘᴇʀʙᴏʟᴇʜᴋᴀɴ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ_ !!!`
				tganz.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `❑ ᴋʟɪᴋ ɢᴀᴍʙᴀʀ ᴜɴᴛᴜᴋ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ !!!`,
                            body: `${ttname}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
//=======================================================//
			} else if(!res.desc == ''){
				await sleep(2000)
				let a = `       「 *DESKRIPSI - GRUP* 」\n\n❑ Dᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ᴜʙᴀʜ ᴏʟᴇʜ ᴀᴅᴍɪɴ : ⟨ *${pushname}* ⟩\n\n❑ ᴅᴇsᴋʀɪᴘsɪ ɢʀᴜᴘ ᴅɪ ᴜʙᴀʜ ᴍᴇɴᴊᴀᴅɪ :\n\n${res.desc}\n`
				tganz.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `❑ ᴋʟɪᴋ ɢᴀᴍʙᴀʀ ᴜɴᴛᴜᴋ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ !!!`,
                            body: `${ttname}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
            } else {
//=======================================================//
				await sleep(2000)
				let a = `       「 *NAMA - GRUP* 」\n\n❑ Nᴀᴍᴀ ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪ ᴜʙᴀʜ ᴅᴇɴɢᴀɴ ɴᴀᴍᴀ ʙᴀʀᴜ ʏᴀᴋɴɪ ɴᴀᴍᴀ ᴛᴇʀsᴇʙᴜᴛ ᴀᴅᴀʟᴀʜ :\n\n════════════════❑\n\n❑☞ : ⟨ *${res.subject}* ⟩\n\n════════════════❑\n`
				tganz.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `❑ ᴋʟɪᴋ ɢᴀᴍʙᴀʀ ᴜɴᴛᴜᴋ ᴊᴏɪɴ ɢʀᴜᴘ ᴀᴋᴜ !!!`,
                            body: `${ttname}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "https://chat.whatsapp.com/BtryPpkWIKgBEqtYMKjnpz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                });
			}
        });
//=================================================//
**/
//=================================================================//
    tganz.ev.on('group-participants.update', async (anu) => {       
        const isWelcome = _welcome.includes(anu.id)
        const isLeft = _left.includes(anu.id)
        try {
            let metadata = await tganz.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
         //=================================\\
               // Get Profile Picture User \\
         //=================================\\
                try {
                    ppuser = await tganz.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
         //=================================\\
              // Get Profile Picture Group \\
         //=================================\\
                try {
                    ppgroup = await tganz.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
//=================================================================//

//=================================================================\\
                //═══════[welcome]════════\\
//=================================================================//
const buffer = await getBuffer(ppuser)
let nama = await tganz.getName(num)
memb = metadata.participants.length
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
               // =========================== \\
                if (anu.action == 'add' && isWelcome) {
           tganz.sendMessage(anu.id, { image: buffer, contextInfo: { mentionedJid: [num] }, caption: `
┌┯──⌬「 *🙌🏻 Sᴇʟᴀᴍᴀᴛ Dᴀᴛᴀɴɢ 🙌🏻* 」
│└─⌬「 @${num.split("@")[0]}  」
└┯─ll────────────────⌬                
   │❑  *Sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴜᴘ :*
   ├☞ ${metadata.subject}
   │❑  *Mᴇᴍʙᴇʀ ʙᴇʀᴛᴀᴍʙᴀʜ ᴍᴇɴᴊᴀᴅɪ :*
   ├☞ ${memb} Mᴇᴍʙᴇʀ
   │❑  *Mᴀsᴜᴋ ᴘᴀᴅᴀ :*
   ├☞ ${xdate}
   │❑  *Jᴀᴍ :*
   ├☞ ${xtime} 
   ├───────────────⌬
   │⫹⫺ Jᴀɴɢᴀɴ ʟᴜᴘᴀ ɪɴᴛʀᴏ ʏᴀ !!!
   │⫹⫺ Kᴇᴛɪᴋ : *#ɪɴᴛʀᴏ*
   └─────────────────⌬
   
            ⫹ *Dᴇsᴋʀɪᴘsɪ Gʀᴜᴘ* ⫺
       
${metadata.desc}

`} 
             )
        }
//=================================================================//
                //═══════[goodbye]════════\\
//=================================================================//
             if (anu.action == 'remove' && isLeft) {
        tganz.sendMessage(anu.id, { image: buffer, contextInfo: { mentionedJid: [num] }, caption: `
┌┯──⌬「 *🙌🏻 Sᴇʟᴀᴍᴀᴛ Tɪɴɢɢᴀʟ 🙌🏻* 」
│└─⌬「 @${num.split("@")[0]}  」
└┯─ll────────────────⌬                
   │❑  *Tᴇʟᴀʜ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴜᴘ :*
   ├☞ ${metadata.subject}
   │❑  *Mᴇᴍʙᴇʀ ᴛᴇʀsɪsᴀ :*
   ├☞ ${memb} Mᴇᴍʙᴇʀ
   │❑  *Kᴇʟᴜᴀʀ ᴘᴀᴅᴀ :*
   ├☞ ${xdate}
   │❑  *Jᴀᴍ :*
   ├☞ ${xtime} 
   ├───────────────⌬
   │⫹⫺ *Sᴀᴍᴘᴀɪ ᴊᴜᴍᴘᴀ ᴋᴀᴋ 🥲*
   └─────────────────⌬
   
              ⫹ *Bᴀɴᴛᴜ Bᴀᴄᴀ* ⫺
    
*⌘ ᴍᴀʀɪ ᴋɪᴛᴀ ʙᴀᴄᴀ sᴜʀᴀᴛ ᴀʟ-ғᴀᴛɪʜᴀʜ ᴜɴᴛᴜᴋ ᴏʀᴀɴɢ ʏᴀɴɢ ᴋᴇʟᴜᴀʀ. ᴀɢᴀʀ ᴅɪᴀ sᴇʟᴀʟᴜ ʙᴀʜᴀɢɪᴀ ᴅɪ ɢʀᴜᴘ ʟᴀɪɴ 🤲🏻*

❑ ᴀʟ-ғᴀᴛɪʜᴀʜ ⇓⇓⇓
⊙════════════════════════⊙
(1) 𝗕𝗶𝘀𝗺𝗶𝗹𝗹𝗮𝗮𝗵𝗶𝗿 𝗥𝗮𝗵𝗺𝗮𝗮𝗻𝗶𝗿 𝗥𝗮𝗵𝗶𝗶𝗺
(2) 𝗔𝗹𝗵𝗮𝗺𝗱𝘂 𝗹𝗶𝗹𝗹𝗮𝗮𝗵𝗶 𝗥𝗮𝗯𝗯𝗶𝗹 '𝗮𝗮𝗹𝗮𝗺𝗶𝗶𝗻
(3) 𝗔𝗿-𝗥𝗮𝗵𝗺𝗮𝗮𝗻𝗶𝗿-𝗥𝗮𝗵𝗶𝗶𝗺
(4) 𝗠𝗮𝗮𝗹𝗶𝗸𝗶 𝗬𝗮𝘄𝗺𝗶𝗱-𝗗𝗶𝗶𝗻
(5) 𝗜𝘆𝘆𝗮𝗮𝗸𝗮 𝗻𝗮'𝗯𝘂𝗱𝘂 𝘄𝗮 𝗹𝘆𝘆𝗮𝗮𝗸𝗮 𝗻𝗮𝘀𝘁𝗮'𝗶𝗶𝗻
(6) 𝗜𝗵𝗱𝗶𝗻𝗮𝘀-𝗦𝗶𝗿𝗮𝗮𝘁𝗮𝗹-𝗠𝘂𝘀𝘁𝗮𝗾𝗶𝗶𝗺
(7) 𝗦𝗶𝗿𝗮𝗮𝘁𝗮𝗹-𝗹𝗮𝘇𝗶𝗶𝗻𝗮 𝗮𝗻'𝗮𝗺𝘁𝗮 '𝗮𝗹𝗮𝗶𝗵𝗶𝗺 𝗴𝗵𝗮𝘆𝗿𝗶𝗹-𝗺𝗮𝗴𝗵𝗱𝘂𝘂𝗯𝗶 '𝗮𝗹𝗮𝗶𝗵𝗶𝗺 𝘄𝗮 𝗹𝗮𝗱-𝗱𝗮𝗮𝗮𝗹𝗹𝗶𝗶𝗻.
⊙════════════════════════⊙
⫹⫺ sᴇᴍᴏɢᴀ ʏᴀɴɢ ᴅᴏᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ɪᴍʙᴀʟᴀɴ ᴅᴀʀɪ ᴛᴜʜᴀɴ ⸙

`})
          }
            }
        } catch (err) {
            console.log(err)
        }
    })
//=================================================================//
                //═══════[Selesai]════════\\
//=================================================================//

//=================================================================//
/** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        tganz.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        tganz.sendMessage(jid, listMes, { quoted: quoted })
        }
        
     /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    tganz.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
    return tganz.sendMessage(jid, { poll: { name, values, selectableCount }})
    }
    
     tganz.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return tganz.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return tganz.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return tganz.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return tganz.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return tganz.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
//=================================================================//

//=================================================================//
    // Setting
//=================================================================//
    tganz.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
//=================================================================//
    tganz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = tganz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
//=================================================================//

//=================================================================//
/**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    tganz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await tganz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
//=================================================================//

//=================================================================//
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    tganz.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await tganz.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }
//=================================================================//

//=================================================================//
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    tganz.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await tganz.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
//=================================================================//

//=================================================================//
    tganz.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = tganz.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })
//=================================================================//

//=================================================================//
    tganz.getName = (jid, withoutContact  = false) => {
        id = tganz.decodeJid(jid)
        withoutContact = tganz.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = tganz.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === tganz.decodeJid(tganz.user.id) ?
            tganz.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
//=================================================================//

//=================================================================//
    tganz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await tganz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await tganz.getName(i + '@s.whatsapp.net')}\n
FN:${await tganz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:❑ Nomor Owner ❑\n
item2.EMAIL;type=INTERNET:${email}\n
item2.X-ABLabel:❑ Email Owner ❑\n
item3.URL:${myweb}\n
item3.X-ABLabel:❑ Grup Kami ❑\n
item4.ADR:Indonesia\n
item4.X-ABLabel:❑ Tempat Tinggal ❑\n
END:VCARD`
})
}
tganz.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
//=================================================================//

//=================================================//
      tganz.serializeM = (m) => smsg(tganz, m, store)
//=================================================//

//=============================================================\\
    tganz.ev.on('connection.update', async (update) => {
       const { 
       connection, 
       lastDisconnect 
       } = update 
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(`File session buruk, hapus dan scan kembali !`);
                tganz.logout();
            }
            else if (reason === DisconnectReason.connectionClosed) {
                console.log("Koneksi terputus, menghubungkan kembali...");
                Botstarted();
            }
            else if (reason === DisconnectReason.connectionLost) {
                console.log("Koneksi terputus dari server, menghubungkan kembali...");
                Botstarted();
            }
            else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Koneksi diganti, session baru lainnya dibuka, harap tutup session saat ini terlebih dahulu !");
                Botstarted();
            }
            else if (reason === DisconnectReason.loggedOut) {
                console.log(`Perangkat keluar, hapus file session dan scan kembali !`);
                tganz.logout();
            }
            else if (reason === DisconnectReason.restartRequired) {
                console.log("Diperlukan mulai ulang, mulai ulang...");
                Botstarted();
            }
            else if (reason === DisconnectReason.timedOut) {
                console.log("Waktu koneksi habis, menghubungkan kembali...");
                Botstarted();
            }
            else if (reason === DisconnectReason.Multidevicemismatch) {
                console.log("Ketidak cocokan multi perangkat, harap pindai QR ulang !");
                tganz.logout();
            }
            else tganz.end(`Terputus, alasan tidak diketahui : ${reason}|${connection}`)
          }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
        console.log(`[⚙️ ] Sudah Tekoneksi = ` + JSON.stringify(tganz.user, null, 2))
        }
})
//=============================================================//

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
   tganz.sendText = (jid, text, quoted = '', options) => tganz.sendMessage(jid, { text: text, ...options }, { quoted, ...options })
    tganz.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }

    tganz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    tganz.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
     
    tganz.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        const type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './image/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data,
            deleteFile() {
                return filename && fs.promises.unlink(filename)
            }
        }
    }

    tganz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await tganz.getFile(path, true)
        let {
            res,
            data: file,
            filename: pathFile
        } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            }
            catch (e) {
                if (e.json) throw e.json
            }
        }
        let opt = {
            filename
        }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '',
            mimetype = type.mime,
            convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime))(
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        }
        let m
        try {
            m = await tganz.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        }
        catch (e) {
            //console.error(e)
            m = null
        }
        finally {
            if (!m) m = await tganz.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            })
            file = null
            return m
        }
    }
//=================================================//
/** Resize Image
*
* @param {Buffer} Buffer (Only Image)
* @param {Numeric} Width
* @param {Numeric} Height
*/
//=================================================//
tganz.reSize = async (image, width, height) => {
let jimp = require('jimp')
var oyy = await jimp.read(image);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
return kiyomasa
      }
//=================================================//
 /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
//=================================================//
      tganz.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await tganz.reSize(lok, 300, 300)
      tganz.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }
//=================================================//
    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
//=================================================//
        tganz.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        tganz.sendMessage(jid, templateMessage)
        }
//=================================================//
/** Send Button 5 Image
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} image
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
tganz.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: tganz.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
tganz.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/** Send Button 5 Video
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Video
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
tganz.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: tganz.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
tganz.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/** Send Button 5 Gif
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Gif
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
tganz.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: tganz.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
tganz.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
    tganz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await tganz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
    
     /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    tganz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await tganz.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await tganz.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
       
    tganz.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
listMessage :{
title: title,
description: text,
buttonText: buttext,
footerText: footer,
listType: "  SELECT  ",
sections: but,
listType: 1
}
}), options)
tganz.relayMessage(jid, template.message, { messageId: template.key.id })
}

 tganz.sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './src/stick' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './src/stick' + names + '.png'
                    let asw = './src/stick' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        tganz.sendMessage(to, { sticker: media}, {quoted: m})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
    tganz.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
      let {
         ext,
         mime,
         data
      } = await tganz.getFile(path)
      let media = {}
      let buffer
      media.data = data
      media.mimetype = mime
      if (options && (options.packname || options.author)) {
         buffer = await writeExif(media, options)
      } else {
         buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
      }
      await tganz.sendMessage(jid, {
         sticker: {
            url: buffer
         },
         ...options
      }, {
         quoted
      })
      return buffer
   }
   
   tganz.sendMessageV2 = async (chatId, message, options = {}) => {
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await tganz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

   /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    tganz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await tganz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    tganz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await tganz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    tganz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        tganz.sendMessage(jid, buttonMessage, {
            quoted,
            ...options
        })
    }
    tganz.send1ButMes = (jid, text = '', footer = '', butId = '', dispText = '', quoted, ments) => {
        let but = [{
            buttonId: butId,
            buttonText: {
                displayText: dispText
            },
            type: 1
        }]
        let butMes = {
            text: text,
            buttons: but,
            footer: footer,
            mentions: ments ? ments : []
        }
        tganz.sendMessage(jid, butMes, {
            quoted: quoted
        })
    }

tganz.cMod = (jid, copy, text = '', sender = tganz.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === tganz.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }
    
tganz.send2ButMes = (jid, text = '', footer = '', butId = '', dispText = '', quoted, ments) => {
        let but = [{
            buttonId: butId,
            buttonText: {
                displayText: dispText
            },
            type: 1
        }]
        let butMes = {
            text: text,
            buttons: but,
            footer: footer,
            mentions: ments ? ments : []
        }
        tganz.sendMessage(jid, butMes, {
            quoted: quoted
        })
    }
    
    tganz.sendButImage = async (jid, link, but = [], text = '', footer = '', ments = [], quoted) => {
        let dlimage;
        try {
            dlimage = await getBuffer(link)
        }
        catch {
            dlimage = await getBuffer('https://telegra.ph/file/ca0234ea67c9a8b8af9a1.jpg')
        }
        const buttonMessage = {
            image: dlimage,
            caption: text,
            footer: footer,
            buttons: but,
            headerType: 'IMAGE',
            mentions: ments
        }

        tganz.sendMessage(jid, buttonMessage, quoted)
    }
    cron.schedule('0 0 * * *', () => {
    var folder = './temp/'
    fs.readdir(folder, (err, files) => {
        if (err) throw err
        for (const file of files) {
            console.log(file + ' : File Deleted Successfully.')
            fs.unlink(folder + file, function (err) {
                if (err && err.code == 'ENOENT') {
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`removed`);
                }
            });
        }
    })
    console.log('Success Deleted temp Folder')
}, {
    scheduled: true,
    timezone: global.timezone
})
    tganz.sendFakeLink = (jid, text, salam, pushname, quoted) => tganz.sendMessage(jid, {
        text: text,
        contextInfo: {
            "externalAdReply": {
                "title": `Hᴀɪ Kᴀᴋ ${pushname} ${salam} 🙌🏻`,
                "body": footer_text,
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": pp_bot,
                "sourceUrl": myweb
            }
        }
    }, {
        quoted
    })
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    tganz.sendTextWithMentions = async (jid, text, quoted, options = {}) => tganz.sendMessage(jid, {
      text: text,
      mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
      ...options
   }, {
      quoted
   })

    return tganz
}
//=================================================================//

Botstarted()

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`< ================================================== >\n${__filename} Telah di update !`))
	delete require.cache[file]
	require(file)
})
