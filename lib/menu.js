const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Source kode bot : https://github.com/ubed354311
Owner Bot : wa.me/6281358195297
Author : ubaydillah ubed

BEST TIM DDOS CYBER`

}



exports.textbokepindo = () => {
    return `
https://i.top4top.io/m_18079r61q0.mp4 https://k.top4top.io/m_1807kqimp0.mp4 https://k.top4top.io/m_1807xljtb0.mp4 https://l.top4top.io/m_1807rw1ub1.mp4 https://c.top4top.io/m_1807qjnr50.mp4 https://b.top4top.io/m_1808nnlda0.mp4 https://c.top4top.io/m_1808m5upy1.mp4 https://d.top4top.io/m_180826akl2.mp4 https://e.top4top.io/m_1808zqk233.mp4 https://f.top4top.io/m_18084lac34.mp4 https://g.top4top.io/m_1808q80o15.mp4 https://h.top4top.io/m_18081zbk36.mp4 

SELAMAT MENIKMATI JANGAN LUPA COLI PAKE SABUN wkwkwk`

}



/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Terima kasih telah menggunakan BOT whatsapp UBED Berikut adalah beberapa fitur yang ada pada bot UBED!✨

Creator:

-❥ *${prefix}sticker*
-❥ *${prefix}stickertoimg*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

Islam:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*

18+:
-❥ *${prefix}bokepindo*
-❥ *${prefix}cersex*
-❥ *${prefix}howgay*

Fun Menu (Group):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*
	┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

Primbon:
-❥ *${prefix}cekzodiak*
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}motivasi*
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}katakotor*
-❥ *${prefix}quote*
-❥ *${prefix}cerpen*
-❥ *${prefix}puisi*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}ping*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*
-❥ *${prefix}grouplink*
-❥ *${prefix}revoke*

Tentang Bot:
-❥ *${prefix}info*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Selamat menggunakan BOT Whatsapp Ubed!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

PULSA : 081358195297
BNI : 0432526645 UBAYDILLAH

Thanks Sayang semoga donasimu bisa memberikan kesuksesan di dunia dan akhirat Amin.!`
}
