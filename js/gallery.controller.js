<<<<<<< HEAD
'use strict'

function renderGallery(filterBy) {
    const imgs = getImgs(filterBy)
    
    const strHtml = imgs.map(({ id, url }) => `
=======
'use strict' 
var gKeywordSearchCountMap = {'funny': 20,'comics': 40, 'dogs': 30, 'drinks': 10 , 'books': 50}

function renderGallery(filterBy) {
    const imgs = getImgs(filterBy)

    const strHtml = imgs.map(({id,url}) => `
>>>>>>> ab294bd95cdd4e22e6b017fea825d22876e22559
        <img class="gallery-img-${id}" src="${url}" onclick="onImgSelect(${id})">
    `).join('')

    const elGallery = document.querySelector('.img-container')
    elGallery.innerHTML = strHtml
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    showMeme()
}

function renderKeyWords() {
    const keyWordsMap = getKeyWordsMap()

    const keyWords = document.querySelectorAll('li')

    keyWords.forEach(keyWord => {
        keyWord.style.fontSize = keyWordsMap[keyWord.innerText] + 'px'
    })
}

function onClickKeyWord(filterBy) {
    updateKeyWords(filterBy)
    renderGallery(filterBy)
    renderKeyWords(filterBy)
}

function renderKeyWords(filterBy) {
    gKeywordSearchCountMap[filterBy] += 1 
     
    const keyWords = document.querySelectorAll('li')
    
    keyWords.forEach(keyWord => {
        keyWord.style.fontSize = gKeywordSearchCountMap[keyWord.innerText]+'px'
    } )
}

function onSearchChange(filterBy) {
    renderGallery(filterBy)
    renderKeyWords(filterBy)
}

function showGallery() {
    document.querySelector('.main-editor').classList.add('hidden')
    document.querySelector('.main-gallery').classList.remove('hidden')
}

