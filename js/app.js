const print = (element) => {
    console.log(element);
}

const getElement = (element) => {
    return document.querySelector(element);
}

print("hello training grounds");

const down = getElement('.down');
const up = getElement('.up');
const left = getElement('.left');
const right = getElement('.right');
const  fire = getElement('.fire');
const dump = getElement('.dump');
const dot = getElement('.dot');
const caco = document.getElementById('caco1');

let distance = 100;
let popup = caco;
let rect = popup.getBoundingClientRect();
console.log("popup.getBoundingClientRect(): \n" + "x: " + rect.left + "\ny: " + rect.top);
let left1 = rect.left;
let top1 = rect.top;
caco.style.left = `${left1}px`;
caco.style.top = `${top1}px`;

left.addEventListener('click', function () {
    left1 += distance;
    caco.style.left = `${left1}px`;

    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-right');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
        caco.classList.add('caco-right');
    }
    else if(caco.classList.contains('caco-up')) {
        caco.classList.remove('caco-up');
        caco.classList.add('caco-right');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    setTimeout(function () {
    caco.classList.remove('caco-return--anim');}, 200)
})


right.addEventListener('click', function () {
    left1 -= distance;
    caco.style.left = `${left1}px`;

    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-left');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
        caco.classList.add('caco-left');
    }
    else if(caco.classList.contains('caco-up')) {
        caco.classList.remove('caco-up');
        caco.classList.add('caco-left');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    caco.classList.remove('caco-return--anim');
    setTimeout(function () {
        caco.classList.remove('caco-return--anim');}, 200)
})

down.addEventListener('click', function () {
    top1 += distance;
    caco.style.top = `${top1}px`;

    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-down');
    }
    else if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-down');
    }
    else if(caco.classList.contains('caco-up')) {
        caco.classList.remove('caco-up');
        caco.classList.add('caco-down');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    caco.classList.remove('caco-return--anim');
    setTimeout(function () {
        caco.classList.remove('caco-return--anim');}, 200)
})

up.addEventListener('click', function () {
    top1 -= distance;
    caco.style.top = `${top1}px`;

    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-up');
    }
    else if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-up');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
        caco.classList.add('caco-up');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    caco.classList.remove('caco-return--anim');
    setTimeout(function () {
        caco.classList.remove('caco-return--anim');}, 200)
})




