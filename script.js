let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let h = document.querySelector('.h')
let m = document.querySelector('.h')
let s = document.querySelector('.h')

function clock() {

    let time = new Date();
    let hour = new Date().getHours();
    let minut = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hours.innerText = hour
    minutes.innerText = minut

    if (minut < 10) {
        minutes.innerHTML = "0" + minut
    }
    if (hour < 10) {
        hours.innerHTML = "0" + minut
    }



    setTimeout(() => {
        clock()
    }, 1000);

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 6}deg)`

    let tabsItem = document.querySelectorAll('.tabsItem')
    let tabsContentItem = document.querySelectorAll('.tabsContentItem')

    for (let i = 0; i < tabsItem.length; i++) {
        tabsItem[i].addEventListener('click', function () {
            for (let k = 0; k < tabsItem.length; k++) {
                tabsItem[k].classList.remove('active')
                tabsContentItem[k].classList.remove('active')

            }
            tabsItem[i].classList.add('active')
            tabsContentItem[i].classList.add('active')

        })

    }
}
clock()

let hoursMetr = document.querySelector('.stopwatch__hours')
let minsMetr = document.querySelector('.stopwatch__minutes')
let secMetr = document.querySelector('.stopwatch__seconds')
let btn = document.querySelector('.stopwatch__btn')
let span = document.querySelector('.tabsLink__span')

let stop;

btn.addEventListener('click', function(){
    if (this.innerHTML === 'start') {
        this.innerHTML = 'stop'
        span.classList.add('active')
        startTimer()
    }else if(this.innerHTML === 'stop'){
        this.innerHTML = 'clear'
        span.classList.remove('.active')
        span.classList.add('active_clear')
        clearInterval(stop)
    }else if (this.innerHTML === 'clear') {
        this.innerHTML = 'start'
        span.classList.remove('active_clear')
        hoursMetr.innerHTML = 0
        minsMetr.innerHTML = 0
        secMetr.innerHTML = 0
    }
})

function startTimer() {
    secMetr.innerHTML++

    if (secMetr.innerHTML > 59) {
        secMetr.innerHTML = 0
        minsMetr.innerHTML++
        if (minsMetr.innerHTML > 59) {
            minsMetr.innerHTML = 0
            hoursMetr.innerHTML++

        }
    }
    stop = setTimeout(() => {
        startTimer()
    }, 1);
}