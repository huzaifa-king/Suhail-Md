const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923443219827";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_59_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWE0Rkh0UFZFTFBXZWhHM3l6WkFIUFN2N0ppTVdEc2dhTjVLSitEMGlyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0IwcmJmSURTR2V2anVrWldLUjJ1QVwiLFxuICBcInBob25lSWRcIjogXCI3NjZhN2Q5Ny1kZWQwLTQxNzctOTRlYi1lMTdhYzI1N2YzZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICA3MSxcbiAgICAgIDg1LFxuICAgICAgNTAsXG4gICAgICA2OSxcbiAgICAgIDI0NSxcbiAgICAgIDIyOCxcbiAgICAgIDg4LFxuICAgICAgMTE2LFxuICAgICAgNTksXG4gICAgICA1MSxcbiAgICAgIDE3OSxcbiAgICAgIDEyMyxcbiAgICAgIDIwOCxcbiAgICAgIDE0MixcbiAgICAgIDU4LFxuICAgICAgMTE0LFxuICAgICAgODIsXG4gICAgICA0NCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDEyNyxcbiAgICAgIDU0LFxuICAgICAgMTIyLFxuICAgICAgMjA2LFxuICAgICAgMTEwLFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgMjIwLFxuICAgICAgMjI3LFxuICAgICAgMjEzLFxuICAgICAgNjQsXG4gICAgICAxOTcsXG4gICAgICAxNTUsXG4gICAgICAyNDksXG4gICAgICAyMTQsXG4gICAgICAyMDQsXG4gICAgICAxMTAsXG4gICAgICA3LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDNTTkYyRjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ0MzIxOTgyNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzQ3NjM2NTg2NzAyMjc6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSFdtY2NFRUlLQ283UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVkd3Rrc2lIU09MUDJaeWpNdTRSVTZUMDN2MHBmb1RoYW9qU09MbUhad289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU3NBYWFET0hleFJ6VjFZMFJSNHlTaG15cmZNMkNTSmxCMUJ2RTc0eEtHeDF3RjQxcVVHcTBXTE5ETndGbXJTRVlkK2xSK29leFRrZVBEbndxQW91QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1FPY1N6MzZLSThIaWJ0OHlFcVJWK2kwZGlSLzZvNGMrS1V4ZjkzL3ZabmtLbnFpSngxZFVmQnROdmlUeWlzdTBRdTFkV0FLZzNqTXFQNnFmd1E2QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDQzMjE5ODI3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjM4MzQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTllTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOWVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXZE9TdGMxMTJzS2VVLzN0Nm51dld5Q3FLZ3hlL3A0K2JkL0l3NjRDb1JjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjMwNjAyNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE1ODYyNTg4OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
