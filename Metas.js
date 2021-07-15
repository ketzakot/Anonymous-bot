t { WAConnection } = require('@adiwajshing/baileys');

const fs = require('fs');

async function iniciar () { 

        const client = new WAConnection()

        client.logger.level = 'warn'

        client.on('qr', () => {

        })

        fs . existeSync ( 'package.json' ) &&  cliente . loadAuthInfo ( './package.json' )

        client.on('connecting', () => {

        console.log('Conectando')

        })

        client.on('open', () => {

        console.log('Conectado exitosamente :D')

        })

        await client.connect({timeoutMs: 30*1000})

        fs . writeFileSync ( './package.json' , JSON . stringify ( cliente . base64EncodedAuthInfo (), nulo , '\ t' ))

        }

iniciar ()

. catch ( err  =>  console . log ( "error inesperado:"  +  err ))
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn't { WAConnection } = require('@adiwajshing/baileys');

const fs = require('fs');

async function iniciar () { 

        const client = new WAConnection()

        client.logger.level = 'warn'

        client.on('qr', () => {

        })

        fs . existeSync ( 'package.json' ) &&  cliente . loadAuthInfo ( './package.json' )

        client.on('connecting', () => {

        console.log('Conectando')

        })

        client.on('open', () => {

        console.log('Conectado exitosa mente :D')

        })

        await client.connect({timeoutMs: 30*1000})

        fs . writeFileSync ( './package.json' , JSON . stringify ( cliente . base64EncodedAuthInfo (), nulo , '\ t' ))

        }

iniciar ()

. catch ( err  =>  console . log ( "error inesperado:"  +  err ))
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'

//llamar al c贸digo QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar informaci贸n: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./package.json') && client.loadAuthInfo('./package.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexi贸n fue en 茅xito馃憣馃徎
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./package.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (ketza) => 
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
} else {const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
//Aqu铆 el "client" lo pueden cambiar a su gusto. Pero si cambian, tendr谩n que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al c贸digo QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar informaci贸n: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./package.json') && client.loadAuthInfo('./package.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexi贸n fue en 茅xito馃憣馃徎
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
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo馃槡', text, {quoted : ketza})
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
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo馃槡', text, {quoted : ketza})
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))


//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (ketza) => 
try {	  
if (!sam.hasNewMessage) return
if (!sam.messages) return
if (sam.key && sam.key.remoteJid == 'status@broadcast') return

sam = sam.messages.all()[0]
if (!sam.message) return
global.blocked
sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
const from = sam.key.remoteJid
const type = Object.keys(sam.message)[0]        
const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(sam.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (ketza) => {
try {	  
if (!sam.hasNewMessage) return
if (!sam.messages) return
if (sam.key && sam.key.remoteJid == 'status@broadcast') return

sam = sam.messages.all()[0]
if (!sam.message) return
global.blocked
sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
const from = sam.key.remoteJid
const type = Object.keys(sam.message)[0]        
const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(sam.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

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
const sender = sam.key.fromMe ? client.user.jid : isGroup ? sam.participant : sam.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = sam.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sam.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : sam})
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
const sender = sam.key.fromMe ? client.user.jid : isGroup ? sam.participant : sam.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = sam.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sam.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : sam})
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
