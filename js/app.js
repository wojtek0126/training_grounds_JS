const print = (content) => {
    console.log(content);
}

const getElement = (element) => {
    return document.querySelector(element);
}

print("hello training grounds");

const down = getElement('.down');
const up = getElement('.up');
const left = getElement('.left');
const right = getElement('.right');
const dot = getElement('.dot');
down.addEventListener('click', function () {
    dot.style.transform = 'translate(0, 200px)';
})

up.addEventListener('click', function () {
    dot.style.transform = 'translate(0, -0px)';
})

left.addEventListener('click', function () {
    dot.style.transform = 'translate(200px, 0px)';
})

right.addEventListener('click', function () {
    dot.style.transform = 'translate(-0px, 0px)';
})

const h2 = getElement('.text');
print(h2);
h2.addEventListener('mouseover', function () {
    h2.style.fontSize = '100px';
})

h2.addEventListener('mouseout', function () {
    h2.style.fontSize = '10px';
})
