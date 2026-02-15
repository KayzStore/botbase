/*

   ~ Shota BASED
  > Jangan lupa baca README.md <

*/

import fs from "fs";
import chalk from "chalk";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);

// ~~ setting pairing kode ~~
global.pairingKode = "Kayzz777" //pairing kode

// ~~ setting bot ~~
global.owner = "6283196091732" //pemilik bot
global.owner2 = [
"6285876485652",
"6285700158613",
"6285185011474"
] //buat fitur bot mode on atau off 

global.url = "KyyOkatsuRestApi"
global.footer = `©Kayzz 777`

global.namaOwner = "Kayzz 777"
global.namaBot = "ForsekenLight"

// ~~ setting saluran ~~
global.idChannel = "120363405802357870@newsletter"
global.namaChannel = "Kayzz777"

// ~~ setting foto ~~
global.foto = "https://img1.pixhost.to/images/11038/672719283_jarroffc.jpg"

global.mess = {
 owner: "*[REJECT]* - ONLY OWNER",
 admin: "*[REJECT]* - ONLY ADMINS GROUPS",
 botAdmin: "*[REJECT]* - BOT HARUS ADMIN",
 group: "*[REJECT]* - ONLY IN THE GROUP",
 sewa: "*[REJECT]* - ONLY USER PREMIUM",
 vip: "*[REJECT]* - ONLY ONWER & PREMIUM USERS",
 ownadmin: "*[REJECT]* - ONLY OWNER & ADMINS"
}

fs.watchFile(__filename, () => {
    fs.unwatchFile(__filename);
    console.log(chalk.white.bold("~> Update File :"), chalk.green.bold(__filename));
    import(`${pathToFileURL(__filename).href}?update=${Date.now()}`);
});