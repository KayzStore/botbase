import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const handler = async (m, { Kyy77, isOwner, reply, botNumber }) => {
  const rndm = Math.floor(1000 + Math.random() * 9000);

  if (m.isGroup) return reply(mess.group);
  if (!isOwner && m.sender !== botNumber) return reply(mess.owner);

  try {
    const tmpDir = path.resolve("data/trash"); 
    if (fs.existsSync(tmpDir)) {
      const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
      for (const file of files) {
        fs.unlinkSync(`${tmpDir}/${file}`);
      }
    }

    await reply("*Processing Backup Script...*");

    const name = `backup-${rndm}`;
    const exclude = [
      "node_modules",
      "Auth",
      "package-lock.json",
      "yarn.lock",
      ".npm",
      ".cache"
    ];

    const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");
    if (!filesToZip.length) return reply("Tidak ada file yang dapat di-backup.");
    
    execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

    await Kyy77.sendMessage(
      m.sender,
      {
        document: fs.readFileSync(`./${name}.zip`),
        fileName: `${name}.zip`,
        mimetype: "application/zip",
        caption: "[✓] - Backup script berhasil!"
      },
      { quoted: m }
    );

    fs.unlinkSync(`./${name}.zip`);
  } catch (err) {
    console.error("Backup Error:", err);
    reply("Terjadi kesalahan saat melakukan backup.");
  }
};

handler.command = ["backup", "bck", "backupsc"];
handler.owner = true;

export default handler;