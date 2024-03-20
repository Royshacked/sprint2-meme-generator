'use strict' 

function renderGallery() {
    const imgs = getImgs()

    const strHtml = imgs.map(({id,url}) => `
        <img class="gallery-img ${id}" src="${url}" onclick="onImgSelect(${id})">
    `)

    const elGallery = document.querySelector('.main-gallery')
    elGallery.innerHTML = strHtml.join()
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme() 
    showMeme() 
}

function showGallery() {
    document.querySelector('.main-editor').classList.add('hidden')
    document.querySelector('.main-gallery').classList.remove('hidden')
}

