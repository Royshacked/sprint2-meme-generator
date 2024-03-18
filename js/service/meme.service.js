'use strict'

var gMeme = {
    selectedImgId: 3,
    selectedLineIdx: 0,
    lines: [{ txt: 'hello', size: 20, color: 'red' }]
}

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
        lines: [{ txt: 'hello', size: 20, color: 'red' }]
    }
}