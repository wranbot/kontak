const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6282393734303'] // no own
global.packname = 'Rnzz' // nama pack sticker
global.author = 'hy me orang susah'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})