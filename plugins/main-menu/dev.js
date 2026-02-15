const handler = async (m, { sock, reply }) => {
await sock.sendContact(m.chat, [global.owner], global.namaOwner, "Developer Bot", m)
await m.reply(`Hai kak *${m.pushName}*, ini adalah kontak pembuat ku ✨`)
}

handler.command = ["owner", "own"]
export default handler;