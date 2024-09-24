//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxldURQR1I1dHNsLzZpeTVjMStranZybmkydHBKd1gzSU83UmI5dXZGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFFZbDh3SDEyc2RSbUh5Z3Vhb2hMVzhsaHEwbmovNHR1UkRXQWlxNmlUWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UDBZM0RORnZRdnBYRnkxd1RqY01EUWRlQlZzQWI4ZjdNZnBCNGc3ZG1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUVFzLzF5dncxdE4xd2F6ZFhPZUZLV05STERHMmRlNFJvcmhqSy9Ib3dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKUkxrMVNadWJML0VJRzRVR01ieGE5M21GZldIdjNuSk5WSmF3WHVhVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc2em5YdFhZOUhZeWhpN3k0dXdiN3gwTndKYVVMaUo5eFdMK2lQNUsrZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJVKy9XRWVMRWVqRm0rZm1UOXpIN3A0Mmt1L2tna2wyQzdGUXh6WmFWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEpGMnpNQk5oTUpUN0FZU3F3RTF5QmR4NzQvUUpJT0REM0x1QVZTTncwRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR1ZmVjcGxvK3ZWNUsyZHoyaWdMMFlET3huRWhRdk9WbjJwblpvZyt5N3hJMTJncTU1dUVTMTB1ZzBlSG82ejgxbzNnMmNLaGwrbTM1Q0ppTCszRUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJUWnZPOGRPOXlzVDNLQzFZRDd6V0ZOamxwS0lOdGVVblNWUy9yRDJ0WlBnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYZlVBSzAxclNYR2hFR0FVOVBDWGRBIiwicGhvbmVJZCI6IjYwMjczOWI3LTA1YTItNGI3MC04YWI1LWM0Mjc5MzJmMGRmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIZHFyU0I0cmJOUEF4V2NBYThRb2pFdHEyRWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUhuWGpRbWtYSHlFVm9GZzVMWUdNaldRMFZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZONUFUTk1CIiwibWUiOnsiaWQiOiIyMzQ5MDM3Mjg4MTY3OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR0hPRCBGQURBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZmowT2tFRU5yRXpMY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwd3BmNjNUUHlVQUV1aWRoYTN4S3FSYjRkeHBDSndRdW05NDhyM3RsN1c4PSIsImFjY291bnRTaWduYXR1cmUiOiJiZW1UMFNPZmVrRlNmOTlQb0pnYW9FTG1Nd1pDS0tZaDRaTXROTGdVdGYyNmIyTndlNFJTMEZ1bG0vaFdhVTBjZFhNMGlBZkdFM2dpS213M2djOFJDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieTJQM1FEc216TWYyTGhsTnJ2cmFNL3VpZmwyM0tqSnVpUGdCSVN3UzVRM2ZPM2tsd1Rpc21mNVNFcjArYVlEZEhoc2dsNGNOQVBjdXVwemttRHZqQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM3Mjg4MTY3OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWNLWCt0MHo4bEFCTG9uWVd0OFNxa1crSGNhUWljRUxwdmVQSzk3WmUxdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzIxMDA4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIbTEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
