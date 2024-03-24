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
            { txt: 'Insert your text here...', size: 20, color: '#000000', x: 50, y: 50 },
        ]
    }
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
    if(lines.length===0) return
    
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

    lines.push(
        { txt: 'Insert your text here...', size: 20, color: '#000000', x: 50, y: y + 50 }
    )
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

function clickLine(offsetX, offsetY) {
    const { lines } = gMeme

    const lineIdx = lines.findIndex(line => {
        const { x, y, size, width } = line

        return (offsetX >= x && offsetX <= x + width &&
            offsetY >= y && offsetY <= y + size)
    })

    if (lineIdx < 0) return

    gMeme.selectedLineIdx = lineIdx
}

function saveMeme() {
    const savedMemes = getSavedMemes()
    const {selectedImgId} = gMeme

    const savedMemeIdx = savedMemes.findIndex(meme=> meme.selectedImgId===selectedImgId)
    
    savedMemeIdx===-1 ? savedMemes.push(gMeme) : savedMemes[savedMemeIdx] = gMeme
    
    saveToLocalStorage('memes', savedMemes)
}








