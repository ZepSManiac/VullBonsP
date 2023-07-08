// Recode By TestGanz ✓
//=============================================⫹⫺

// Peningkatan Uptime & Stabilitas Bot !!!
//===================================================================\\
require('dotenv').config(), require('rootpath')(), require('./server.js')
//===================================================================//

//====================================\\
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
const clear = require("cli-clear")
const pino = require('pino')
const process = require('process')
const cp = require('child_process')
const { setupMaster, fork } = require('cluster')
const express = require('express')
const os = require('os')
const app = express()
const yargs = require('yargs/yargs')
const figlet = require('figlet')
const { fileURLToPath } = require('url')
const { join, dirname } = require('path')
const { createRequire } = require('module')
const monitor = require('express-status-monitor')
const { createInterface } = require('readline')
const { watchFile, unwatchFile } = require('fs')
const rl = createInterface(process.stdin, process.stdout)
const CFonts = require('cfonts')
//====================================//

//====================================\\
var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
//====================================//

//====================================\\
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join('\n'), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
//====================================//

//====================================\\
setupMaster({
   exec: args[0],
   args: args.slice(1)
})
//====================================//

//====================================\\
  let p = fork()
  p.on('message', data => {
  console.log('[❗] RECEIVED ✅', data)
     switch (data) {
     case 'reset':
     p.process.kill()
     isRunning = false
     start.apply(this, arguments)
     break
     case 'uptime':
     p.send(process.uptime())
     break
   }
})
//====================================//

//====================================\\
 p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗] Error, Ada Masalah Di Bagian :', code)
    p.process.kill()
    isRunning = false
   start.apply(this, arguments)
   if (code === 0) return
   watchFile(args[0], () => {
   unwatchFile(args[0])
   start(file)
    })
 })
  // console.log(p)
}
//====================================//

//====================================\\
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
   if (!opts['test'])
   if (!rl.listenerCount()) rl.on('line', line => {
   p.emit('message', line.trim())
})
//====================================//

//============================================\\
// Khusus - Jangan ubah !!!
//============================================\\
clear()
start('@T-System.js')
//============================================//
                    // END \\
//============================================//