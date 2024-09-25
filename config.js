const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "255688930205";
global.owner = process.env.OWNER_NUMBER || "94759329023";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
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
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tRVU1JMFl2MHIrVll4anNrSVd0Qit0Y0M0U01Da3FSK2o5YUg2OU1FZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzIwaXlrKzV4eitpc0dlSFNhaklBd1VsQmF0c1lmd3lPUnZES0RNaU1RQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQThTbWdhcXNrNHFubTQxQ2JsOUhkRW8wZ3NrUHdldEpSbVFZY3hQY0hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4ZWNWVGQ1R1VLc25ocXFEcWJYRlBIK0NhS0U0eDJMS3E3c2M0MDNranhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFV2lVT0hMZFZkTStEU1doOU5NTEg0QVBwT3lTUWI5WW13c1NROVZLRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncwaTVFbzZkV0VkNW1rNGQ4L0FKWnpESjZ4OXQxWkZqamx4MGh5blJtQVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUQveDA4am5HOXBqRitXdEFHSzdrYTkzcGcxVnV6YWt6eGZLdnVrQXQxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXEyUmxzb1NNVms3VzdEZkpjSEtObW1BMGU1T2swbFdqbk9DanlTMnlpND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii83bnZUS2VBZkkvZng4aU5YN1hnTmFFNUJVTTB3V1Z5d0hHb1VwVTRQNDV1ZUJZK3IyRDZFQTh3aHJWWUZCK1V1a1ZlQ1lnM09jbkN5c3dqNUsyNkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJGWUVUT050Um9KR1Z1T0Y5Y1l1anFhcEFmSFY0RVR6dkhWaFY5YnVZQVBvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1YjZwdUItUFFkdUdiNXJNZzRUZ3RBIiwicGhvbmVJZCI6IjJiYzc1ZDQ0LTM4NmUtNDUyMS1iMDA2LWRjYmIwZmE2OTg2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmR6bnZFUzgzTTk2RzZUZFBERGU2Ti94UkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVAzSjVFYkFKTFQ5RmxXbW1Va2w3ZG00TXEwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpHOUc5OTM0IiwibWUiOnsiaWQiOiI5NDc1OTMyOTAyMzozOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFAweE1zREVNeVcwTGNHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkxRVk1CTTlyYVZrQWhGdnlOakZjYzFqeGxYVlNWaVk0Q1ZUbENkRFJobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidWFvYzZCc1JqL2MvTGFLYTNMeStaRlluT1d4ays3QzI3WlVuaGEzY3NnYmxTeG5Bc0JxYWhyWXJWMVpaUm54VG1ERVRjV2hncVBzZ2xodzdsV2NRQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJGeDZ1NFp6VEhvUXJFa2VOaEtDV2pGNE82ZENwUUFtZ2FZNlhWWmFTZFFDTHhMSzVydkJURU5mTkQ0YS8xOWloNmoya3BGUUZPampJRHFMeklpaEJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTkzMjkwMjM6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlMwRlRBVFBhMmxaQUlSYjhqWXhYSE5ZOFpWMVVsWW1PQWxVNVFuUTBZYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzI2OTcyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRFkifQ==";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "VIHAHA MD",
  author: process.env.PACK_AUTHER || "Vihaga MD",
  packname: process.env.PACK_NAME || "Vihaga MD",
  botname: process.env.BOT_NAME || "Vihaga MD",
  ownername: process.env.OWNER_NAME || "MrVihaga",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
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
