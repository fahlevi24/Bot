let handler = async (m, { conn }) => {
let info = `
*${htki} ONLINE ${htka}*
          
   Bot Online Nih:v
`
const sections = [
   {
    title: `â INFO`,
	rows: [
	    {title: "Menu", rowId: '.menu', description: 'Event Fahlevi BOT' },
	{title: "YT Bot", rowId: '.ytbot', description: 'Youtube Bot' },
	]
    }, {
    title: `â INFO`,
	rows: [
	    {title: "ð¸Sapa Bot", rowId: '.salken', description: 'Discount Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Fahlevi bot",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ð Group Official", null,null, [['Owner','.owner']], m)
}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler