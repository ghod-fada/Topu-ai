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
global.devs = "2349037288167";
global.sudo = process.env.SUDO || "2349037288167";
global.owner = process.env.OWNER_NUMBER || "2349037288167";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZpTjVVQjdJbTZPajh1M1pXZTFBa1lIcmpUTGkwREE3R1BmMXptUEYxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWxoL0l1Z0RlbXVDN1NzYlV0cUVMWDNtdDdhazE4bEdtSHp6aW5lQXdSdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRUFmcGNaWWZnM0wvMjZZT2lyRlUreHRVREZ1TGVvU1I1YXZNeVZLUzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRklWaWI4emY3UUEzNHhqbEtPR0hwbzU5VFNXcFU2amRnaDNBODVNVDJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKUUwyZFdKMThuUFVKSGlWd3RCRmxOS2RWcWEzTGhCT0wyd09GZjM1Mmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVKR0ppeXVua1dvcVVZQ3pucjN1ZzFUU29BcGkySkU2eVEyeWZRS0gxU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUl6QUJlWVc2T0Z2RzFXd2M1YlBzVEZpZlYvZTQzTUd5ZkVLTnBqaWIzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGtEL2ZqWmtvcGx3NlpxcnZnMFpMRWFWaHBDRkVLcVliSHZnZjBKRFpsOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRJdmdaZ3ErK2J0MmZuZmVJdlNpWWVrckVGbUVvVHVZQktBYmFnVUw5SlJsVlRCMGZya2x1UFA1Q21wZTBQUDFQc01ZSU9oaFAyeG04K2MzblJ1MENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJaM2l4ZU9QbnYvZjBiQ0xMaFQ3Sk1XVm1YNmxQNDBXYTgxTi80TFNFRE44PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBNkQwd3g1aVI0NjRwZkhIMTJmU2lBIiwicGhvbmVJZCI6ImUxZjNjNDkyLTM3NzYtNGE4Yi1iNjJiLTQ4ZWFmZTk2OWVhNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Y0pDVERKdHkyWXNjcXl4U24vZFpDanI3TTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXFPSXJ0dHg5alNJanVzcHQ3MHZGU0FXTm1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlXTVhCSjM4IiwibWUiOnsiaWQiOiIyMzQ5MDM3Mjg4MTY3OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR0hPRCBGQURBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZmowT2tFRUwrYnpMY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwd3BmNjNUUHlVQUV1aWRoYTN4S3FSYjRkeHBDSndRdW05NDhyM3RsN1c4PSIsImFjY291bnRTaWduYXR1cmUiOiJZRFhJbThLdkFuVDdhcnMwMHhteHJFaFprUVRLbWd3RWc1c3JEclZhenNqa3VDR2h4ZE9VSWltbXFpN0JLYmhHUy9sQlhmYnNxVGVDa3VuUnYyb2dBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUTJrdUhOSFYyeUUwc3lzK3VaWWZhLzhSV2N3aHRBVU8xRFZpR083ZlFURXBTd0RzOGdURnluNStKOENRcXpYTHNJSk9na2ViWmNkTkdjWVVkcWQzREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM3Mjg4MTY3OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWNLWCt0MHo4bEFCTG9uWVd0OFNxa1crSGNhUWljRUxwdmVQSzk3WmUxdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzIwNDgxM30="
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
