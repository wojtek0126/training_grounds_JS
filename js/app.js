const a = 'dupa';
let b = 3;
b = 9;
const c = a + b + a + "dupa2";

let z = 14;
let g = 20;
// const xx = z + g;

function add(attr1, attr2) {
    return attr1 + attr2;
}

let array = [];
let array2 = [56, 89, 90, 78];

let x = 999;
array2[0] = x;
const dlugosc = array2.length;
// console.log(dlugosc);

// array2.push(x);
array.push(b); //wrzuć b na koniec zbioru
//
// console.log(array2.indexOf(89));

const w = array[1];
delete array[0];
array[1] = 23;
array[2] = 89; //nie trzeba robic push, można zdefiniować a to samo wklepie
// array.splice(1); //wywal ze bioru od elementu 1
// delete array[2]; //wywal element 2 ze zbioru
// array.filter(1)
// console.log(array[0]);

let www = 777;
const obiekt = {
    imie: {imie2: "Jan", nazwisko: "psiakuta"},
    status: 'wisi hajs',
    jak_ma: 'przesrane',
    zmienna: www
}

const plepleple = document.querySelector('p');  //wrzuc element htmla do zmiennej plepleple
console.log(plepleple);
plepleple.style.fontSize = '20px';
plepleple.style.color = 'gold';


array3 = [23, 56, 77, 98];

const liczba3 = array3[2];

// let i = 0;
// console.log(array3[0]);
// i++; // i += 1;   nowe i = i + 1
// console.log(array3[1]);
// i++;
// console.log(array3[2]);

// let i = 0;
// while (i < array3.length) {
//     console.log(`${i} ilość obrotów`);
//     i++;
// }

array3.forEach(function (element) {
    console.log(element);
    console.log(`${array3.length}`);
})



// for (let i = 0; i < 5; i++) {
//     console.log('i ' + i);
//
// }

plepleple.innerHTML = ` ${liczba3}  `;




// console.log(print2("dupa3"));












const getElement = (element) => {
    return document.querySelector(element);
}

// print("hello training grounds");

const down = getElement('.down');
const up = getElement('.up');
const left = getElement('.left');
const right = getElement('.right');
const  fire = getElement('.fire');
const dump = getElement('.dump');
const dot = getElement('.dot');
const caco = document.getElementById('caco1');
// down.addEventListener('click', function () {
//     caco.style.transform = 'translate(0, 200px)';
// })

up.addEventListener('click', function () {
    caco.style.transform = 'translate(0, -0px)';
})

left.addEventListener('click', function () {
    caco.style.transform = 'translate(200px, 0px)';
    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-right');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
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
    caco.style.transform = 'translate(-200px, 0px)';
    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-left');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
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
    caco.style.transform = 'translate(0, 200px)';
    caco.classList.add('caco-turn--anim');
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-down');
    }
    else if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
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
//
// const h2 = getElement('.text');
//
// h2.addEventListener('mouseover', function () {
//     h2.style.fontSize = '100px';
// })
//
// h2.addEventListener('mouseout', function () {
//     h2.style.fontSize = '10px';
// })
