'use strict'

let gElCanvas
let gCtx
let isResizing = false

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })

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

