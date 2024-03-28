'use strict'
var gStartPos

function renderMeme() {
    const meme = getMeme()
    if (!meme) return
    const elImg = document.querySelector(`.gallery-img-${meme.selectedImgId}`)
    
    drawImgOnCanvas(gElCanvas, gCtx, elImg)
    renderCanvasTxt(meme, gCtx)
}

function drawImgOnCanvas(elCanvas,ctx,elImg) {
    elCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * elCanvas.width

    ctx.drawImage(elImg, 0, 0, elCanvas.width, elCanvas.height)
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

        if (idx === selectedLineIdx && ctx === gCtx) renderTxtFrame(txt, size, x, y)
    })
}

function renderTxtFrame(txt, size, x, y) {
    gCtx.beginPath()
    gCtx.strokeStyle = `#000000`
    gCtx.lineWidth = 2
    gCtx.strokeRect(x - size / 2, y - size / 2, size + gCtx.measureText(txt).width, 2 * size)
    gCtx.fillStyle = "#FDF6F630"
    gCtx.fillRect(x - size / 2, y - size / 2, size + gCtx.measureText(txt).width, 2 * size)
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
    setEditInputs()
}

function onRemoveLine() {
    setEditInputs()
    removeLine()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    setEditInputs()
}

function onClickLine(ev) {
    isTxtClicked(ev)
    renderMeme()
    setEditInputs()
}


function onDownloadMeme(elLink) {
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}

function onSaveMeme() {
    saveMeme()
}

function showMeme() {
    setEditInputs()
    document.querySelector('.main-editor').classList.remove('hidden')
    document.querySelector('.main-saved').classList.add('hidden')
    document.querySelector('.main-gallery').classList.add('hidden')
    setEditInputs()
}

function setEditInputs() {
    document.querySelector('.editor-txt-input').value = getLineTxt()
}

function onDown(ev) {
    gStartPos = getEvPos(ev)
    
    if(!isTxtClicked(gStartPos)) return 

    setTxtDrag(true)
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    if(!isDrag()) return 
    const pos = getEvPos(ev)
    
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y

    moveTxt(dx,dy)

    gStartPos = pos

    renderMeme()
}

function onUp() {
    setTxtDrag(false)
    document.body.style.cursor = 'auto'
}

function getEvPos(ev) {
    const touchEvs = ['touchstart' , 'touchend' , 'touchmove']
    
    if(touchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]

        return {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    else {
        return {
            x: ev.offsetX,
            y: ev.offsetY, 
        }
    }
}
