let $ = document

let timerElm = $.getElementById('clock')
let recordElm = $.querySelector('.myrecord')
let btnElms = $.querySelectorAll('button')
let spanH = $.querySelector('#hour')
let spanM = $.querySelector('#minute')
let spanS = $.querySelector('#seconds')
let second = 0
let minute = 0
let hours = 0
let timer;

function clickStartFunc() {
    timer = setInterval(setTimer, 100)

}

function setTimer () {
    if(second <= 58) {
        second++
        if(second < 10) {
            spanS.innerHTML = '0' + second
        } else {
            spanS.innerHTML = second
        }
    } else if(minute <= 58) {
        second = 0
        minute++
        if(minute < 10) {
            spanM.innerHTML = '0' + minute
        } else {
            spanH.innerHTML = minute
        }
    } else {
        minute = 0
        hours++
    }
}

function pausedTimer () {
    clearInterval(timer)
}

function endTimer() {
    second = 0
    minute = 0
    hours = 0
    pausedTimer()
    spanH.innerHTML = '0' + 0
    spanM.innerHTML = '0' + 0
    spanS.innerHTML = '0' + 0
}

btnElms[0].addEventListener('click', clickStartFunc)
btnElms[1].addEventListener('click', pausedTimer)
btnElms[2].addEventListener('click', endTimer)