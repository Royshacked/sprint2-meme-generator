'use strict'

let gMeme
let gSavedMemes = []

function getMeme() {
    const meme = gMeme

    return meme
}

function setImg(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            { txt: 'Insert your text here...', size: 20, color: '#000000', x: 50, y: 50, isDrag: false },
        ]
    }
}

function getLineTxt() {
    const { lines, selectedLineIdx } = gMeme

    return lines[selectedLineIdx].txt
}

function setSavedImg(imgId) {
    const savedMemes = getSavedMemes()
    gMeme = savedMemes.find(savedMeme => savedMeme.selectedImgId === imgId)
}

function setLineWidth(meme, idx, width) {
    const { lines } = meme
    lines[idx].width = width
}

function setLineTxt(txt) {
    const { selectedLineIdx, lines } = gMeme
    if (lines.length === 0) return

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
    if (lines.length > 0) var { y } = lines[lines.length - 1]
    else y = 0

    lines[lines.length] = { txt: 'Insert your text here...', size: 20, color: '#000000', x: 50, y: y + 50, isDrag: false }
    gMeme.selectedLineIdx = lines.length - 1
}

function removeLine() {
    const { selectedLineIdx, lines } = gMeme

    lines.splice(selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function switchLine() {
    gMeme.selectedLineIdx++

    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function isTxtClicked({x,y}) {
    const { lines } = gMeme
    var isClicked = false

    lines.forEach((line, idx) => {
        if (x >= line.x && x <= line.x + line.width && y >= line.y && y <= line.y + line.size) {

            gMeme.selectedLineIdx = idx
            isClicked = true
        } 
    })
    return isClicked
}

function setTxtDrag(isDrag) {
    const { lines , selectedLineIdx } = gMeme

    lines[selectedLineIdx].isDrag = isDrag
}

function isDrag() {
    const { lines } = gMeme
    return lines.find(line=> line.isDrag)
}

function moveTxt(dx,dy) {
    const { lines , selectedLineIdx } = gMeme
    const { x , y } = lines[selectedLineIdx]
    
    lines[selectedLineIdx].x = x + dx
    lines[selectedLineIdx].y = y + dy
}










