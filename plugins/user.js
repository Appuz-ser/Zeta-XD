const { typewriter } = require("../lib/fancy_font/fancy");
const _0x133fe4=_0x4483;(function(_0x4bda4d,_0x10d386){const _0x3624cf=_0x4483,_0x2067ed=_0x4bda4d();while(!![]){try{const _0x345fc2=-parseInt(_0x3624cf(0x154))/0x1+-parseInt(_0x3624cf(0x157))/0x2*(parseInt(_0x3624cf(0x160))/0x3)+-parseInt(_0x3624cf(0x12a))/0x4+parseInt(_0x3624cf(0x175))/0x5*(-parseInt(_0x3624cf(0x12b))/0x6)+parseInt(_0x3624cf(0x10f))/0x7*(parseInt(_0x3624cf(0xf4))/0x8)+parseInt(_0x3624cf(0x17e))/0x9*(parseInt(_0x3624cf(0x149))/0xa)+-parseInt(_0x3624cf(0x115))/0xb*(-parseInt(_0x3624cf(0xfd))/0xc);if(_0x345fc2===_0x10d386)break;else _0x2067ed['push'](_0x2067ed['shift']());}catch(_0x33dc70){_0x2067ed['push'](_0x2067ed['shift']());}}}(_0x1f2b,0xc96b3));const plugins=require('../lib/event'),{command,isPrivate,clockString,getUrl,parsedJid,isAdmin,runtime}=require(_0x133fe4(0x15f)),{BOT_INFO}=require(_0x133fe4(0x129)),config=require('../config'),{tiny}=require(_0x133fe4(0x178)),Jimp=require(_0x133fe4(0x120)),got=require(_0x133fe4(0x177)),fs=require('fs'),{PluginDB,installPlugin}=require('../lib/database/plugins'),{downloadMediaMessage}=require(_0x133fe4(0x109));function _0x4483(_0x37c15c,_0x2acea1){const _0x1f2b5a=_0x1f2b();return _0x4483=function(_0x44838d,_0x59fcfe){_0x44838d=_0x44838d-0xdc;let _0x4f7e69=_0x1f2b5a[_0x44838d];return _0x4f7e69;},_0x4483(_0x37c15c,_0x2acea1);}command({'pattern':_0x133fe4(0xf6),'fromMe':!![],'desc':_0x133fe4(0x131),'type':_0x133fe4(0xfe)},async(_0x3f4b4f,_0x4ba25e)=>{const _0xe2745f=_0x133fe4;let _0x591301=runtime(process[_0xe2745f(0x130)]());await _0x3f4b4f[_0xe2745f(0xeb)](_0xe2745f(0x155)+_0x591301+'_*');}),command({'pattern':_0x133fe4(0x118),'fromMe':isPrivate,'desc':_0x133fe4(0x16e),'type':_0x133fe4(0xfe)},async(_0x43538f,_0x17f7e0,_0x29b81b)=>{const _0x416dc8=_0x133fe4,_0x4eb4a0=new Date()['getTime']();let {key:_0x2d5809}=await _0x43538f[_0x416dc8(0xdd)](_0x416dc8(0x145));const _0x209632=new Date()[_0x416dc8(0x147)]();var _0x58fd81=_0x209632-_0x4eb4a0;await new Promise(_0x7d8d63=>setTimeout(_0x7d8d63,0x0)),await _0x43538f[_0x416dc8(0x12f)][_0x416dc8(0xdd)](_0x43538f['jid'],{'text':_0x416dc8(0x121)+_0x58fd81+_0x416dc8(0xe1),'edit':_0x2d5809});}),command({'pattern':_0x133fe4(0x139),'fromMe':!![],'desc':_0x133fe4(0xf1),'type':'user'},async(_0x2e5607,_0x12f483,_0x27786d)=>{const _0x115fb0=_0x133fe4;if(!_0x2e5607[_0x115fb0(0x180)]['image'])return await _0x2e5607['reply'](_0x115fb0(0x11e));let _0x591883=await _0x27786d[_0x115fb0(0xff)][_0x115fb0(0x162)]();return await updateProfilePicture(_0x2e5607[_0x115fb0(0xfe)],_0x591883,_0x2e5607),await _0x2e5607[_0x115fb0(0xeb)](_0x115fb0(0x141));});function _0x1f2b(){const _0x45c998=['Install\x20External\x20plugins','./plugins/','body','24dGTvFf','user','quoted','sendMessageMessage','viewOnceMessageV2','join','*_User\x20unblocked_*','substring','message','```:\x20','sender','*_Send\x20a\x20plugin\x20url_*','@whiskeysockets/baileys','.js','match','```Command:\x20','push','replace','231dsWnPc','updateMediaMessage','sort','\x0a│\x20\x20','writeFileSync','│\x20\x20','668118WjtBie','listplugin','*_@','ping','```','commands','text','w:profile:picture','.\x20*','*_Reply\x20to\x20a\x20photo_*','~*\x20❳','jimp','*~𝙿𝚘𝚗𝚐~*\x20\x0a','findAll','dontAddCommandList','\x0a│\x20\x20Use:\x20```','Give\x20jid\x20of\x20chat/user','*_Reply\x20at\x20viewOnce\x20message!_*','trim','\x0a\x20\x20\x20\x20╚┅┅┅┅┅┅┅┅┅┅┅┅⚅\x0a╚┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉⚇\x0a\x0a\x20','../config','822336jnHEWv','5429442pBahZy','╰───────┈┫「\x20𝐙𝐄𝐓𝐀-𝐗𝐃-𝐁𝐎𝐓\x20」┣┈────♡','split','key','client','uptime','Bot\x20Runtime','\x0a\x20\x20⚈\x20┋\x20*TIME*:\x20','block','\x0a\x20\x20⚈\x20┋\x20*COMMANDS*:\x20','crop','unlinkSync','random','\x0a\x20\x20⚈\x20┋\x20*VERSION*:\x20','pp$','to\x20change\x20your\x20profile\x20status','misc','sendFile','*_New\x20plugin\x20installed\x20:\x20','type','getHeight','120363239634100086@newsletter','*_Profile\x20Picture\x20Updated_*','toLocaleString','pattern','Show\x20All\x20Commands','*~𝙿𝚒𝚗𝚐~*','statusCode','getTime','getBufferAsync','10iSzLCK','dataValues','*_Invalid\x20Plugin_*\x0a\x20```','MIME_JPEG','remove(?:\x20|$)(.*)','deletes\x20a\x20message','repeat','length','╭───────┈┫「\x20*𝐂𝐨𝐦𝐦𝐚𝐧𝐝\x20𝐋𝐢𝐬𝐭*\x20」┣┈────♡','fromCharCode','gist.github.com','462006XEKkVq','*_Runtime:\x20','\x0a│\x0a','2hmWlfD','_User\x20blocked_','*_Plugin\x20not\x20found_*','\x0a\x20\x20⚈\x20┋\x20*USER*:\x20','pushName','anti\x20viewOnce','../package.json','\x0a╔┉┉┉〔\x20','../lib','1004205YDCqRS','*_Need\x20a\x20number/reply/mention!_*','download','├─────────────┈⊷\x0a╰─────────────┈⊷','\x0a╭─────────────┈⊷\x0a','audio/mpeg','buffer','isGroup','*_Need\x20Text_!*\x0a\x20*Example:\x20setbio\x20_Ezra-XD_*.','setbio(.*)','updateProfileStatus','\x20〕┉┉┉┉┉⚇\x0a\x20\x20\x20\x20╔┅┅┅┅┅┅┅┅┅┅┅┅⚅\x0a\x20\x20⚈\x20┋\x20*OWNER*:\x20','viewOnceMessageV2Extension','*_Reply\x20to\x20a\x20message_*','To\x20check\x20ping','forEach','host','*_Successfully\x20bio\x20updated_*','includes','map','filter','5aGIinz','toString','got','../lib/fancy_font/fancy','mention','toLowerCase','gist.githubusercontent.com','\x0a│\x20~⛮~\x20❲\x20*~','\x0aDescription:\x20','13253076JXYpYH','version','reply_message','menu','sendMessage','\x0a\x20\x20⚈\x20┋\x20*PREFIX*:\x20','500000000','destroy','\x20*~𝚖𝚜~*','unblock','sendFromUrl','├─────────────┈⊷','jid','list','\x20deleted,\x20restart_*','image','\x0a\x20\x20⚈\x20┋\x20*DATE*:\x20','/xasena/plugins/','reply','en-IN','prefix','Asia/Kolkata','/raw','test','Set\x20full\x20screen\x20profile\x20picture','scaleToFit','\x20Blocked_','275928wwmEYB','\x0a\x20\x20⚈\x20┋\x20*MODE*:\x20','runtime','Remove\x20external\x20plugins','plugin\x20list','*_No\x20external\x20plugins\x20installed_*'];_0x1f2b=function(){return _0x45c998;};return _0x1f2b();}async function updateProfilePicture(_0x33e12e,_0x535f03,_0x191301){const _0x411f90=_0x133fe4,{query:_0x14ffb1}=_0x191301[_0x411f90(0x12f)],{img:_0x338e74}=await generateProfilePicture(_0x535f03);await _0x14ffb1({'tag':'iq','attrs':{'to':_0x33e12e,'type':'set','xmlns':_0x411f90(0x11c)},'content':[{'tag':'picture','attrs':{'type':_0x411f90(0xe8)},'content':_0x338e74}]});}async function generateProfilePicture(_0x174db0){const _0x25bfe8=_0x133fe4,_0x473a=await Jimp['read'](_0x174db0),_0x13ef26=_0x473a['getWidth'](),_0xdd104b=_0x473a[_0x25bfe8(0x13f)](),_0x25da8d=_0x473a[_0x25bfe8(0x135)](0x0,0x0,_0x13ef26,_0xdd104b);return{'img':await _0x25da8d[_0x25bfe8(0xf2)](0x144,0x2d0)[_0x25bfe8(0x148)](Jimp[_0x25bfe8(0x14c)]),'preview':await _0x25da8d['normalize']()[_0x25bfe8(0x148)](Jimp[_0x25bfe8(0x14c)])};}command({'pattern':'block','fromMe':!![],'desc':'Block\x20a\x20person','type':'user'},async(_0xfa718a,_0x24c9d9)=>{const _0x732b30=_0x133fe4;if(_0xfa718a[_0x732b30(0x167)]){let _0x35fca9=_0xfa718a[_0x732b30(0x179)][0x0]||_0xfa718a[_0x732b30(0x180)][_0x732b30(0xe5)];if(!_0x35fca9)return await _0xfa718a['reply'](_0x732b30(0x161));return await _0xfa718a[_0x732b30(0x133)](_0x35fca9),await _0xfa718a[_0x732b30(0x100)]('_@'+_0x35fca9[_0x732b30(0x12d)]('@')[0x0]+_0x732b30(0xf3),{'mentions':[_0x35fca9]});}else return await _0xfa718a[_0x732b30(0x133)](_0xfa718a[_0x732b30(0xe5)]),await _0xfa718a[_0x732b30(0xeb)](_0x732b30(0x158));}),command({'pattern':_0x133fe4(0xe2),'fromMe':!![],'desc':'Unblock\x20a\x20person','type':_0x133fe4(0xfe)},async(_0x390248,_0x5b6ee2)=>{const _0x32d9c5=_0x133fe4;if(_0x390248['isGroup']){let _0x60eb2c=_0x390248[_0x32d9c5(0x179)][0x0]||_0x390248[_0x32d9c5(0x180)][_0x32d9c5(0xe5)];if(!_0x60eb2c)return await _0x390248[_0x32d9c5(0xeb)](_0x32d9c5(0x161));return await _0x390248[_0x32d9c5(0x133)](_0x60eb2c),await _0x390248['sendMessage'](_0x32d9c5(0x117)+_0x60eb2c[_0x32d9c5(0x12d)]('@')[0x0]+'\x20unblocked_*',{'mentions':[_0x60eb2c]});}else return await _0x390248[_0x32d9c5(0xe2)](_0x390248['jid']),await _0x390248['reply'](_0x32d9c5(0x103));}),command({'pattern':_0x133fe4(0xe5),'fromMe':!![],'desc':_0x133fe4(0x125),'type':_0x133fe4(0xfe)},async(_0x4cc23f,_0x9116e1)=>{const _0x476131=_0x133fe4;return await _0x4cc23f[_0x476131(0xdd)](_0x4cc23f[_0x476131(0x179)][0x0]||_0x4cc23f[_0x476131(0x180)][_0x476131(0xe5)]||_0x4cc23f[_0x476131(0xe5)]);}),command({'pattern':'dlt','fromMe':!![],'desc':_0x133fe4(0x14e),'type':'user'},async(_0x200595,_0x39ce79,_0x3b443c,_0x2e2345)=>{const _0x23c79b=_0x133fe4;if(!_0x200595[_0x23c79b(0x180)])return await _0x200595[_0x23c79b(0xeb)](_0x23c79b(0x16d));{await _0x2e2345[_0x23c79b(0xdd)](_0x200595[_0x23c79b(0xe5)],{'delete':_0x200595[_0x23c79b(0x180)][_0x23c79b(0x12e)]});}}),command({'pattern':_0x133fe4(0xdc),'fromMe':isPrivate,'desc':_0x133fe4(0x144),'dontAddCommandList':!![],'type':_0x133fe4(0xfe)},async(_0x33c811,_0x22b2da,_0x3a49b0,_0x15959b)=>{const _0x39bf90=_0x133fe4;try{if(_0x22b2da)for(let _0x573db3 of plugins['commands']){if(_0x573db3[_0x39bf90(0x143)]instanceof RegExp&&_0x573db3[_0x39bf90(0x143)][_0x39bf90(0xf0)](_0x33c811[_0x39bf90(0xed)]+_0x22b2da)){const _0x220546=_0x573db3[_0x39bf90(0x143)][_0x39bf90(0x176)]()['split'](/\W+/)[0x1];_0x33c811[_0x39bf90(0xeb)](_0x39bf90(0x10c)+_0x33c811[_0x39bf90(0xed)]+_0x220546[_0x39bf90(0x127)]()+_0x39bf90(0x17d)+_0x573db3['desc']+_0x39bf90(0x119));}}else{let {prefix:_0x3e3ef6}=_0x33c811,[_0x429e43,_0x382753]=new Date()[_0x39bf90(0x142)](_0x39bf90(0xec),{'timeZone':_0x39bf90(0xee)})[_0x39bf90(0x12d)](','),_0x2f4ccb=_0x33c811[_0x39bf90(0x15b)];const _0x54bb93=String[_0x39bf90(0x152)](0x200e)[_0x39bf90(0x14f)](0xfa1);let _0x15936b=_0x39bf90(0x15e)+BOT_INFO[_0x39bf90(0x12d)](';')[0x0]+_0x39bf90(0x16b)+BOT_INFO[_0x39bf90(0x12d)](';')[0x1]+_0x39bf90(0x15a)+_0x2f4ccb+_0x39bf90(0xe9)+_0x429e43+_0x39bf90(0x132)+_0x382753+_0x39bf90(0x134)+plugins[_0x39bf90(0x11a)][_0x39bf90(0x150)]+_0x39bf90(0xf5)+config['WORK_TYPE']+_0x39bf90(0xde)+config['HANDLERS']+_0x39bf90(0x138)+require(_0x39bf90(0x15d))[_0x39bf90(0x17f)]+_0x39bf90(0x128)+_0x54bb93+_0x39bf90(0x164),_0x4cd73a=[],_0x3261ef,_0xe1d0dd=[];plugins[_0x39bf90(0x11a)][_0x39bf90(0x173)]((_0x838a3c,_0x353952)=>{const _0x32fe92=_0x39bf90;_0x838a3c[_0x32fe92(0x143)]instanceof RegExp&&(_0x3261ef=_0x838a3c['pattern'][_0x32fe92(0x176)]()[_0x32fe92(0x12d)](/\W+/)[0x1]);if(!_0x838a3c[_0x32fe92(0x123)]&&_0x3261ef!==undefined){let _0x179ff3=_0x838a3c[_0x32fe92(0x13e)]?_0x838a3c['type'][_0x32fe92(0x17a)]():_0x32fe92(0x13b);_0x4cd73a[_0x32fe92(0x10d)]({'cmd':_0x3261ef,'type':_0x179ff3});if(!_0xe1d0dd[_0x32fe92(0x172)](_0x179ff3))_0xe1d0dd[_0x32fe92(0x10d)](_0x179ff3);}}),_0x4cd73a[_0x39bf90(0x111)](),_0xe1d0dd[_0x39bf90(0x111)]()[_0x39bf90(0x16f)](_0x451bd9=>{const _0x1e075b=_0x39bf90;_0x15936b+=_0x1e075b(0xe4),_0x15936b+=_0x1e075b(0x17c)+_0x451bd9['toUpperCase']()+_0x1e075b(0x11f),_0x15936b+='\x0a├─────────────┈⊷';let _0x1cf419=_0x4cd73a[_0x1e075b(0x174)](({type:_0x9a139d})=>_0x9a139d==_0x451bd9);_0x1cf419[_0x1e075b(0x16f)](({cmd:_0x37a775})=>{const _0x4cc642=_0x1e075b;_0x15936b+=_0x4cc642(0x112)+_0x37a775['toUpperCase']();}),_0x15936b+='\x0a';}),_0x15936b+=_0x39bf90(0x163);let _0x3bed4d=typewriter(_0x15936b),_0x3ccf03=BOT_INFO[_0x39bf90(0x12d)](';')[0x2];return await _0x33c811[_0x39bf90(0xe3)](_0x3ccf03,{'fileLength':_0x39bf90(0xdf),'gifPlayback':!![],'contextInfo':{'mentionedJid':[_0x3a49b0[_0x39bf90(0x107)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x39bf90(0x140),'newsletterName':'𝗭𝗲𝘁𝗮-𝗫𝗗\x20⛮','serverMessageId':-0x1}},'caption':_0x3bed4d},{'quoted':_0x33c811});}}catch(_0xa4ae80){_0x33c811[_0x39bf90(0xeb)](_0xa4ae80);}}),command({'pattern':_0x133fe4(0xe6),'fromMe':isPrivate,'desc':_0x133fe4(0x144),'type':_0x133fe4(0xfe),'dontAddCommandList':!![]},async(_0x5aaecf,_0x4922d0,{prefix:_0x43d4bf})=>{const _0x20e073=_0x133fe4;let _0x3f14=_0x20e073(0x151);_0x3f14+=_0x20e073(0x156);let _0x4bf217=[],_0x110bea,_0xa71b66;return plugins[_0x20e073(0x11a)][_0x20e073(0x173)](_0x586b3d=>{const _0x387693=_0x20e073;_0x586b3d[_0x387693(0x143)]&&(_0x110bea=_0x586b3d[_0x387693(0x143)][_0x387693(0x176)]()[_0x387693(0x12d)](/\W+/)[0x1]),_0xa71b66=_0x586b3d['desc']||![],!_0x586b3d[_0x387693(0x123)]&&_0x110bea!==undefined&&_0x4bf217[_0x387693(0x10d)]({'cmd':_0x110bea,'desc':_0xa71b66});}),_0x4bf217[_0x20e073(0x111)](),_0x4bf217[_0x20e073(0x16f)](({cmd:_0xf219c2,desc:_0x3232ac},_0x250e51)=>{const _0x20cc71=_0x20e073;_0x3f14+=_0x20cc71(0x114)+(_0x250e51+=0x1)+_0x20cc71(0x11d)+_0xf219c2[_0x20cc71(0x127)]()+'*';if(_0x3232ac)_0x3f14+=_0x20cc71(0x124)+_0x3232ac+'```';_0x3f14+=_0x20cc71(0x156);}),_0x3f14+=_0x20e073(0x12c),await _0x5aaecf[_0x20e073(0xeb)](_0x5aaecf[_0x20e073(0xe5)],{'text':tiny(_0x3f14)});}),command({'pattern':'plugin\x20?(.*)','fromMe':!![],'desc':_0x133fe4(0xfa),'type':_0x133fe4(0xfe)},async(_0x7bbb3d,_0x508885)=>{const _0x2d455a=_0x133fe4;if(!_0x508885)return await _0x7bbb3d['sendMessage'](_0x2d455a(0x108));for(let _0x273f1b of getUrl(_0x508885)){try{var _0x3f4bd2=new URL(_0x273f1b);}catch{return await _0x7bbb3d[_0x2d455a(0xdd)]('*_Invalid\x20Url_*');}_0x3f4bd2[_0x2d455a(0x170)]===_0x2d455a(0x153)?(_0x3f4bd2[_0x2d455a(0x170)]=_0x2d455a(0x17b),_0x3f4bd2=_0x3f4bd2[_0x2d455a(0x176)]()+_0x2d455a(0xef)):_0x3f4bd2=_0x3f4bd2[_0x2d455a(0x176)]();var _0x4f52cc,_0x38f76a=await got(_0x3f4bd2);if(_0x38f76a[_0x2d455a(0x146)]==0xc8){var _0x40075d=_0x38f76a[_0x2d455a(0xfc)][_0x2d455a(0x10b)](/(?<=pattern:)(.*)(?=\?(.*))/g)['map'](_0x468752=>_0x468752[_0x2d455a(0x127)]()[_0x2d455a(0x10e)](/"|'|`/,''));_0x4f52cc=_0x40075d[0x0]||_0x4f52cc[0x1]||'__'+Math[_0x2d455a(0x137)]()[_0x2d455a(0x176)](0x24)[_0x2d455a(0x104)](0x8),fs[_0x2d455a(0x113)]('./plugins/'+_0x4f52cc+_0x2d455a(0x10a),_0x38f76a['body']);try{require('./'+_0x4f52cc);}catch(_0x2b9e47){return fs[_0x2d455a(0x136)](_0x2d455a(0xea)+_0x4f52cc+_0x2d455a(0x10a)),await _0x7bbb3d[_0x2d455a(0xdd)](_0x2d455a(0x14b)+_0x2b9e47+_0x2d455a(0x119));}await installPlugin(_0x3f4bd2,_0x4f52cc),await _0x7bbb3d[_0x2d455a(0xdd)](_0x2d455a(0x13d)+_0x40075d[_0x2d455a(0x102)](',')+'_*');}}}),command({'pattern':_0x133fe4(0x116),'fromMe':!![],'desc':_0x133fe4(0xf8),'type':_0x133fe4(0xfe)},async(_0x37ad67,_0x7f201)=>{const _0x1d58f6=_0x133fe4;var _0x58902e='',_0x2c0b8c=await PluginDB['findAll']();return _0x2c0b8c[_0x1d58f6(0x150)]<0x1?await _0x37ad67['sendMessage'](_0x1d58f6(0xf9)):(_0x2c0b8c[_0x1d58f6(0x173)](_0x538b17=>{const _0x1f9a05=_0x1d58f6;_0x58902e+=_0x1f9a05(0x119)+_0x538b17[_0x1f9a05(0x14a)]['name']+_0x1f9a05(0x106)+_0x538b17[_0x1f9a05(0x14a)]['url']+'\x0a';}),await _0x37ad67[_0x1d58f6(0xdd)](_0x58902e));}),command({'pattern':_0x133fe4(0x14d),'fromMe':!![],'desc':_0x133fe4(0xf7),'type':_0x133fe4(0xfe)},async(_0x29b46e,_0x46b9ba)=>{const _0x237b81=_0x133fe4;if(!_0x46b9ba)return await _0x29b46e[_0x237b81(0xdd)]('*_Need\x20a\x20plugin\x20name_*');var _0x338a7b=await PluginDB[_0x237b81(0x122)]({'where':{'name':_0x46b9ba}});if(_0x338a7b['length']<0x1)return await _0x29b46e[_0x237b81(0xdd)](_0x237b81(0x159));else await _0x338a7b[0x0][_0x237b81(0xe0)](),delete require['cache'][require['resolve']('./'+_0x46b9ba+'.js')],fs[_0x237b81(0x136)](_0x237b81(0xfb)+_0x46b9ba+'.js'),await _0x29b46e[_0x237b81(0xdd)]('*_Plugin\x20'+_0x46b9ba+_0x237b81(0xe7));}),command({'pattern':_0x133fe4(0x169),'fromMe':!![],'desc':_0x133fe4(0x13a),'type':_0x133fe4(0xfe)},async(_0x58cf5f,_0x29341c)=>{const _0x547819=_0x133fe4;_0x29341c=_0x29341c||_0x58cf5f['reply_message'][_0x547819(0x11b)];if(!_0x29341c)return await _0x58cf5f[_0x547819(0xeb)](_0x547819(0x168));await _0x58cf5f[_0x547819(0x12f)][_0x547819(0x16a)](_0x29341c),await _0x58cf5f[_0x547819(0xeb)](_0x547819(0x171));}),command({'pattern':'vv','fromMe':isPrivate,'desc':_0x133fe4(0x15c),'type':'user'},async(_0x4e9505,_0x3d2829,_0x228321)=>{const _0x4e5db8=_0x133fe4;if(!_0x4e9505[_0x4e5db8(0x180)]||!_0x228321[_0x4e5db8(0xff)]['message'][_0x4e5db8(0x101)]&&!_0x228321[_0x4e5db8(0xff)][_0x4e5db8(0x105)][_0x4e5db8(0x16c)])return await _0x4e9505[_0x4e5db8(0xeb)](_0x4e5db8(0x126));if(_0x228321['quoted'][_0x4e5db8(0x105)][_0x4e5db8(0x16c)]){const _0x764dbf=await downloadMediaMessage(_0x228321['quoted'][_0x4e5db8(0x105)][_0x4e5db8(0x16c)],_0x4e5db8(0x166),{},{'reuploadRequest':_0x4e9505[_0x4e5db8(0x12f)][_0x4e5db8(0x110)]});await _0x4e9505['client'][_0x4e5db8(0xdd)](_0x4e9505[_0x4e5db8(0xe5)],{'audio':_0x764dbf,'mimetype':_0x4e5db8(0x165),'ptt':!![]},{'quoted':_0x4e9505});}else{if(_0x228321[_0x4e5db8(0xff)]['message'][_0x4e5db8(0x101)]){const _0x9e332d=await downloadMediaMessage(_0x228321[_0x4e5db8(0xff)][_0x4e5db8(0x105)]['viewOnceMessageV2'],'buffer',{},{'reuploadRequest':_0x4e9505[_0x4e5db8(0x12f)][_0x4e5db8(0x110)]});await _0x4e9505[_0x4e5db8(0x13c)](_0x9e332d);}}});
