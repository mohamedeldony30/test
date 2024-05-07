//تم تطوير هذا الملف بواسطه تيم زينون وايتاتشي

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu","اوامر","الاوامر"],
            desc: "Help list",
            category: "general",
            react: "🗂",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*😔No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*✨Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*⚡️Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🗂Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*📡Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Africa/Cairo')
                    .locale('id')
                const date = moment.tz('Africa/Cairo').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `
                اوامر سورس بوت زينون🤯
«.1.1 » قسـم الاعـضـاء
«.1.2» المطور
«.1.3» الجروبات
«.1.4» التحميلات
«.1.5» الالعاب
«.1.6» التحويلات
«.1.7» الانمي
«.1.8» البنك
«.1.9» كل الاوامر



 لاي مشكلة يمكنك التواصل معنا من خلال
www.zenonsoftware.com
او عن طريق كتابة الامر
.ابلاغ (كتابه تفاصيل مشكلتك)
---------------
All ©️ Copyright Reserved Zenonsoftware ❝ ¸¸.~*`
                /*for (const category in cmds) 
                {
                   str += `◎═══•『*${tiny(category)}*』•═══◎\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `┏━━━•❃ *${tiny(category)}* ❃•━━━┓\n` ;      
                        for (const plugins of cmds[category]) { str += `「★」${fancytext(plugins,1)}\n` ; }
                        str += `─── ✧《✩》✧ ───\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `「★」${fancytext(plugins,1)}\n` ; }
                         str += `─── ✧《✩》✧ ───\n`  ; 
                   }
  
                }
                str+= `*⚡️Type:* _${prefix}help cmd_ name to know more about specific command.\n*Eg:* _${prefix}help attp_\n*Made by 🥷 Excel* `*/
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
   
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        alias: ["مطور","المطور","المالك"],
        desc: "To find owner number",
        category: "general",
        react: "👾",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'مطورين البوت',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=مـرحـب يـا ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "🥷",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*😔No Such commands.*");
        else arr.push(`*📡Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
