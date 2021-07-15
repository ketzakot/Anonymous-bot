const { WAConnetion, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () ² 
        const { WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./package.json') && client.loadAuthInfo('./package.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./package.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (ketza) => {
try {	  
if (!ketza.hasNewMessage) return
if (!ketza.messages) return
if (ketza.key && ketza.key.remoteJid == 'status@broadcast') return

ketza = ketza.messages.all()[0]
if (!ketza.message) return
global.blocked
ketza.message = (Object.keys(ketza.message)[0] === 'ephemeralMessage') ? ketza.message.ephemeralMessage.message : ketza.message
const from = ketza.key.remoteJid
const type = Object.keys(ketza.message)[0]        
const quoted = type == 'extendedTextMessage' && ketza.message.extendedTextMessage.contextInfo != null ? ketza.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(ketza.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = ketza.message.conversation || ketza.message[type].caption || ketza.message[type].text || ""
chats = (type === 'conversation') ? ketza.message.conversation : (type === 'extendedTextMessage') ? ketza.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && ketza.message.conversation.startsWith(prefix)) ? ketza.message.conversation : (type == 'imageMessage') && ketza.message.imageMessage.caption.startsWith(prefix) ? ketza.message.imageMessage.caption : (type == 'videoMessage') && ketza.message.videoMessage.caption.startsWith(prefix) ? ketza.message.videoMessage.caption : (type == 'extendedTextMessage') && ketza.message.extendedTextMessage.text.startsWith(prefix) ? ketza.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = ketza.key.fromMe ? client.user.jid : isGroup ? ketza.participant : ketza.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = ketza.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = ketza.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : ketza})
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = ketza.key.fromMe ? client.user.jid : isGroup ? ketza.participant : ketza.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = ketza.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = ketza.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : ketza})
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
