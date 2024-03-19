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
            { txt: 'Insert your text here...', size: 20, color: '#000000', x: 10, y: 50 },
        ]
    }
}

function setLineTxt(txt) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].txt = txt
    console.log(gMeme.lines)
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
    if (lines.length > 0) {
        var { y } = lines[lines.length - 1]
    } else var y = 50

    lines.push(
        { txt: 'Insert your text here...', size: 20, color: '#000000', x: 10, y: y + 40 }
    )
}

function removeLine() {
    const { selectedLineIdx, lines } = gMeme

    lines.pop()

    if (selectedLineIdx > lines.length - 1) gMeme.selectedLineIdx = lines.length - 1
    if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0
}

function switchLine() {
    gMeme.selectedLineIdx++

    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}







