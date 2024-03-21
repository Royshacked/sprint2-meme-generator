'use strict'

function saveToLocalStorage(key, val) {
    const valStr = JSON.stringify(val)
    localStorage.setItem(key,valStr)
}

function loadFromLocalStorage(key) {
    const valStr = localStorage.getItem(key)
    return JSON.parse(valStr)
}