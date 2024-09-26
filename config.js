const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mongodb://mongo:UIvudqDxBwqJWjYaoueidhgdPPCFxjCO@junction.proxy.rlwy.net:39576",
MONGODB: process.env.MONGODB || "",
};
