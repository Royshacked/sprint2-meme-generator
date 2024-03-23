var gImgs = [
    {id: 1, url: 'imgs/1.jpg', keyWords: ['funny', 'cat']}
]

var gKeywordsCountMap = {'funny': 10,'comics': 15, 'dogs': 20, 'drinks': 15 , 'books': 10}

createGallery()

function getImgs(filterBy) {
    if(!filterBy) return gImgs
    
    const imgs = gImgs.filter(img => img.keyWords.find(keyWord => keyWord===filterBy))
    return imgs
}

function getKeyWordsMap() {
    const keyWordsMap = loadFromLocalStorage('keywords')
    if(!keyWordsMap) keyWordsMap = gKeywordsCountMap

    return keyWordsMap
}

function createImg({id}) {
    id++
    gImgs.push(
        {
           id: id,
           url: `imgs/${id}.jpg`, 
           keyWords: getRandomWords()
        }
    )
}

function createGallery() {
    for(let i = 0; i < 17 ; i++) {
        createImg(gImgs[i])
    }
}

function updateKeyWords(filterBy) {
    // if(!filterBy) return
    gKeywordsCountMap[filterBy] += 2 

    saveToLocalStorage('keywords', gKeywordsCountMap)
}
