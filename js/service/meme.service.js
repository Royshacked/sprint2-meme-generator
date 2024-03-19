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
        lines: [
            { txt: 'Insert your text here...', size: 20, color: 'red', x: 10, y: 50 },
        ]
    }
}

function setLineTxt(txt) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].txt = txt
}

function setLineColor(txtColor) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].color = txtColor
}

function setFontSize(fontSize) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].size += fontSize
}

function addLine() {
    const { lines } = gMeme
    if(lines.length > 0) {
        var { y } = lines[lines.length - 1] 
    } else var y = 50

    lines.push(
        { txt: 'Insert your text here...', size: 20, color: 'red', x: 10, y: y + 20 }
    )
}

function removeLine() {
    const { lines } = gMeme

    lines.pop()
}





