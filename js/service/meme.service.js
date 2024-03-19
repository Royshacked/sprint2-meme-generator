'use strict'

let gMeme

function getMeme() {
    const meme = gMeme

    return meme
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
}

function setImg(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [{ txt: 'Insert your text here...', size: 20, color: 'red' }]
    }
}

