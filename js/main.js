'use strict'

let gElCanvas
let gCtx
let isResizing = false

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    addListeners()

    renderGallery()
    renderKeyWords()
    showGallery()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
    if (gElCanvas.width > 600) gElCanvas.width = 600
}


function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function addListeners() {
    addMouseListeners() 
    addTouchListeners()

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
    gElCanvas.addEventListener('mousemove', onMove)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
    gElCanvas.addEventListener('touchmove', onMove)
}

