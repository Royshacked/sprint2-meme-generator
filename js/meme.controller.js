'use strict'

function renderMeme() {
    const meme = getMeme()
    const elImg = document.querySelector(`.gallery-img-${meme.selectedImgId}`)

    drawImgOnCanvas(gElCanvas, gCtx, elImg)
    renderCanvasTxt(meme, gCtx)
}

function renderCanvasTxt(meme, ctx) {
    const { selectedLineIdx, lines } = meme

    lines.forEach((line, idx) => {
        let { txt, size, color, x, y } = line

        txt === '' ? txt = 'Insert your text here...' : txt

        ctx.textBaseline = 'top'
        ctx.lineWidth = 1
        ctx.font = `bold ${size}px  arial`
        ctx.fillStyle = `${color}`
        ctx.fillText(txt, x, y)
        ctx.strokeText(txt, x, y)

        setLineWidth(meme, idx, ctx.measureText(txt).width)

        if (idx === selectedLineIdx) renderTxtFrame(ctx, txt, size, color, x, y)
    })
}

function renderTxtFrame(ctx, txt, size, color, x, y) {
    ctx.beginPath()
    ctx.strokeStyle = `#000000`
    ctx.lineWidth = 2
    ctx.strokeRect(x - size / 2, y - size / 2, size + ctx.measureText(txt).width, 2 * size)
    ctx.fillStyle = "#FDF6F630"
    ctx.fillRect(x - size / 2, y - size / 2, size + ctx.measureText(txt).width, 2 * size)
}

function onTextChange(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onChangeTxtColor(txtColor) {
    setLineColor(txtColor)
    renderMeme()
}

function onChangeFontSize(fontSize) {
    setFontSize(fontSize)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSwitchLine() {
    clearEditInputs()
    switchLine()
    renderMeme()
}

function onClickLine(ev) {
    const { offsetX, offsetY } = ev
    clearEditInputs()
    clickLine(offsetX, offsetY)
    renderMeme()
}


function onDownloadMeme(elLink) {
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}

function onSaveMeme() {
    saveMeme()
}

function showMeme() {
    document.querySelector('.main-editor').classList.remove('hidden')
    document.querySelector('.main-saved').classList.add('hidden')
    document.querySelector('.main-gallery').classList.add('hidden')
    clearEditInputs()
}

function clearEditInputs() {
    document.querySelector('.editor-txt-input').value = ''
    document.querySelector('.inp-color').value = '#000000'
}
