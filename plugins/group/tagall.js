let handler = async (m, { conn, text, participants }) => {
   let users = participants.map(u => conn.decodeJid(u.id))
   await m.reply(`*乂  T A G A L L*${text ? '\n\n' + text : ''}\n\n${member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')}`)
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall', 'everyone']

handler.group = true
handler.admin = true

export default handler