/*
Harta tahta by MFarelS
*/
let fs = require('fs')
let { spawn } = require('child_process')
async function tahta(text){
 return new Promise(async (resolve, reject) => {
var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    apa = 'HARTA\nTAHTA\n' + hartatahtaapa.toUpperCase()
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        './src/Farelll.ttf',
        '-pointsize',
        '200',
        '-tile',
        './src/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        apa,
        '-wave',
        '10x175',
        './tmp/hartatahta-after.jpg'
    ])
    .on('error', (e) => {
        reject(e)
    })
    .on('exit', () => {
        resolve(fs.readFileSync('./tmp/hartatahta-after.jpg'))
        fs.unlinkSync('./tmp/hartatahta-after.jpg')
    })
   })
   }
   
module.exports = tahta