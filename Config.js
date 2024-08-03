const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "923309063874"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Pakistan"

global.botname = process.env.BOTNAME || "HAMI-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, darling!* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '🍭 *My darling, this feature is reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love, this feature is exclusively for private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkN6ODYvUkRYeGViSUJDVi8yNDExRWVrS0Y5SnZsaXNsVVBkK3A3QXlsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmVCSGlsQ1hoMmNNQkFjenpWQUJjOVExMlRlMlNabENDT3VNUUFsbmVFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4S0hWSXZlQU5lRXd3QlBFMmgxRHY3V2YrS2FlRGdsWWtRaUZuVlllczIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiUGpTNFNTZ2hRaHB0aFBFaHZlTUVPWUFlRjg0SFZaQkJJR2JmWmVNN0dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNOVBQc1l1TUJicnR3SHRkVE9IZXUrdVViSGdkMEhvOFdnOGp2NkdqMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRsOEhXbVNFNzl1ZmpoVE84R0hrRzN5YlpqTVFick1TWm1jbW12dXowa2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBLRnc5QkczTzhIUHk0WnQwd2g5dExmc2g1THpxTUJiWnBaUldlQXpXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid25XbXViOHJoWVBxMnBRbXMybmVtMTVMb1d3c01RQU94NEpGSnlnaWlDUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY2Y1R6VlNIMGJEb1F5aG5nTDlrOVBOMllpSmRod3p0MmF6ZTVTVmtYODV2OXpZQ0pxYVNXbHlRR3BkQWUzODY5UWhjVjNQMEw1QThpa1RzdEtLZWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJ4VEVvVVRsNnJkM0o1ZFE2VXVVbmdhcy9ROTQvb3cyV0VnSU0xdUhTV0NrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwOTA2Mzg3NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RDc0OTQ0NUE1NzVCRDQ2MDQ2RTY1QThDQUM5MzlBOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjc1NjUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWdmxmZUlqQlNvZVUyV3BhRC1sTWNBIiwicGhvbmVJZCI6ImQyZGI3N2ZlLTU1OTEtNDAyNS04NDExLTgwNWM2OGNjZDFmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMSkVwT2JNMDBYQS9RSUxTTTNuSXBsY1hNdGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ242SnAxTXViRlRlWUg4QXZBYVlnY21UeldzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFMRlgzVEZXIiwibWUiOnsiaWQiOiI5MjMzMDkwNjM4NzQ6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR292ZXJubWVudCBBZ2VudCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjZOeDVBREVMSGp0N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaWg2OUp1VjFWR2FYdHBMZnh0WkFjbU1US29FU2doTWVCWE9oYlE2MDZRND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMi9qRlYzaU1Ea3p1VUt3L3BZeU1yVTNiRjdOQUpnZTNNMUs2NVdzVjBqTTZSNUhRazR4cHQ2UWJZNVhIM01EOGJwMU9rYThUS0dDOC9ReVYzR1V6QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZrNTh4YSt4cTJOTEtMNXdUa0FNTHU4TysyVHhYK2owL1pqdGZXa1pjK0RueVlqMTNxRnlEYi9POWlBTVRPRHdObnd0VFNxS2lqVGRzeG1MdmlSempBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA5MDYzODc0OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllvZXZTYmxkVlJtbDdhUzM4YldRSEpqRXlxQkVvSVRIZ1Z6b1cwT3RPa08ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2NzU2NDZ9", // paste your session id here
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
