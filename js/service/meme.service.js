'use strict'

let gMeme

function getMeme() {
    const meme = gMeme

    return meme
}

function setImg(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [{ txt: 'Insert your text here...', size: 20, color: 'red' }]
    }
}

function setLineTxt(txt) {
    const {selectedLineIdx,lines} = gMeme
    
    lines[selectedLineIdx].txt = txt
}

function setLineColor(txtColor) {
    const {selectedLineIdx,lines} = gMeme

    lines[selectedLineIdx].color = txtColor
}

function setFontSize(fontSize) {
    const {selectedLineIdx,lines} = gMeme

    lines[selectedLineIdx].size += fontSize
}





