// import React, {Component} from "react";
// import ReactDOM from "react-dom";

// pytho-script console print
const print = (element) => {
    console.log(element);
}
print("hello training grounds");

//easy single element get
const getElement = (element) => {
    return document.querySelector(element);
}
//easy all elements get
const getAllElements = (element) => {
    return document.querySelectorAll(element);
}

//easy element by id get
const getElementById = (element) => {
    return document.getElementById(element);
}

// const random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// class baseCharacter {
//     constructor(name, hp, damage, idleSkin) {
//         this.name = name;
//         this.hp = hp;
//         this.damage = damage;
//     }
// }

// ReactDOM.render(
// <App/>,
//     document.getElementById("app")
// );


//function to check element's position
const checkPosition = (element) => {
    let popup = element;
    let rect = popup.getBoundingClientRect();
    console.log("target's position " + "popup.getBoundingClientRect(): \n" + "x: " + rect.left + "\ny: " + rect.top);
}


//collider below works on exit target not on contact yet
const colliderOnExit = (object1, object2) => {
    let obj1 = object1.getBoundingClientRect();
    let obj2 = object2.getBoundingClientRect();
    if (obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.height + obj1.y > obj2.y) {
        object2.style.background = 'gold';
        knockBack = true;}
}


// player elements get
const caco = document.getElementById('caco1');
// const basicMissile = document.getElementById('missile');
const basicCrap = document.getElementById('basic_dump')

//canvas elements get
const target = getElement('.practice-wall--top');
const targetLeft = getElement('.practice-wall--left');
const targetRight = getElement('.practice-wall--right');
const targetBottom = getElement('.practice-wall--bottom');


// control buttons get
const start = getElement('.start');
const down = getElement('.down');
const up = getElement('.up');
const left = getElement('.left');
const right = getElement('.right');
const shootRight = getElement('.fire-right');
const shootLeft = getElement('.fire-left');
const dump = getElement('.dump');

// player control panel
let knockBack = false;
let knockBackspeed = 50;
let speed = 5
let missileSpeed = 5
let popup = caco;
let rect = popup.getBoundingClientRect();
left1 = rect.x;
top1 = rect.y;
//practice target initial position
//when up or down on initial press, it does jump instead of going speed, fix below
//also it is pre-start status
caco.style.display = `none`;

let startPressed = true;
start.addEventListener('click', function () {
    if(startPressed === true) {
        caco.style.display = `block`;
        top1 += speed;
        caco.style.top = `${top1}px`;
    }
    else {
        return
    }
    startPressed = false;
})
//player moving left
left.addEventListener('mousedown', () => {
    interval = setInterval(() =>{
        caco.className = 'caco-turn--anim';
        caco.classList.add('caco-right');
        left1 += speed;
        caco.style.left = `${left1}px`;
        checkPosition(caco);
        colliderOnExit(caco, target);
        colliderOnExit(caco, targetLeft);
        colliderOnExit(caco, targetRight);
        colliderOnExit(caco, targetBottom);
   //knockback off target turn it off to pass through walls etc
        if (knockBack === true) {
            left1 -= knockBackspeed;
            setTimeout(function () {
                knockBack = false
                left1 += speed;
            }, 1);
        }
    }, 20)
    setTimeout(function () {
        knockBack = false
        left1 += speed;
    }, 1);
    left.addEventListener('mouseup', () => {
        clearInterval(interval);
        caco.classList.add('caco-return--anim');
    })
})
//
right.addEventListener('mousedown', () => {
    interval = setInterval(() =>{
        caco.className = 'caco-turn--anim';
        caco.classList.add('caco-left');
        left1 -= speed;
        caco.style.left = `${left1}px`;
        checkPosition(caco);
        colliderOnExit(caco, target);
        colliderOnExit(caco, targetLeft);
        colliderOnExit(caco, targetRight);
        colliderOnExit(caco, targetBottom);
        if (knockBack === true) {
            left1 += knockBackspeed;
            setTimeout(function () {
                knockBack = false
                left1 += speed;
            }, 1);
        }
    }, 20);

    right.addEventListener('mouseup', () => {
        clearInterval(interval);
        caco.classList.add('caco-return--anim');
    })

//animation triggers below
// all new moves need to be added for every move and action, this need fix by remove all other classes
//
})
//
down.addEventListener('mousedown', () => {
    interval = setInterval(() =>{
        caco.className = 'caco-turn--anim';
        caco.classList.add('caco-down');
        top1 += speed;
        caco.style.top = `${top1}px`;
        checkPosition(caco);
        colliderOnExit(caco, target);
        colliderOnExit(caco, targetLeft);
        colliderOnExit(caco, targetRight);
        colliderOnExit(caco, targetBottom);
        if (knockBack === true) {
            top1 -= knockBackspeed;
            setTimeout(function () {
                knockBack = false
                top1 += speed;
            }, 1);
        }
    }, 20)
    setTimeout(function () {
        knockBack = false
        left1 += speed;
    }, 1);
    down.addEventListener('mouseup', () => {
        clearInterval(interval);
        caco.classList.add('caco-return--anim');
    })
})

up.addEventListener('mousedown', () => {
    interval = setInterval(() =>{
        caco.className = 'caco-turn--anim';
        caco.classList.add('caco-up');
        top1 -= speed;
        caco.style.top = `${top1}px`;
        checkPosition(caco);
        colliderOnExit(caco, target);
        colliderOnExit(caco, targetLeft);
        colliderOnExit(caco, targetRight);
        colliderOnExit(caco, targetBottom);
        if (knockBack === true) {
            top1 += knockBackspeed;
            setTimeout(function () {
                knockBack = false
                top1 += speed;
            }, 1);
        }
    }, 20)
    up.addEventListener('mouseup', () => {
        clearInterval(interval);
        caco.classList.add('caco-return--anim');
    })
})
//
// let charge = false;
const basMis = getElementById('missile_right');

shootRight.addEventListener('click', () => {
    // const basMis = getElementById('missile_right');
    basMis.style.display = 'block'
    let popup2 = basMis;
    let rect2 = popup2.getBoundingClientRect();
    let left3 = rect2.x;
    print(basMis + ' basic Missile' + left3 + " left3");
    let pos = basMis.style.left;
    print( " pos" + pos);

    // basMis.style.left = `${left3}px`;
    interval = setInterval(() =>{
        basMis.style.display = 'block'
        basMis.style.left = `${left3}px`;

        // checkPosition(basMis);
        left3 += missileSpeed;
        basMis.style.left = `${left3}px`;
        print(left3 + 'pos')
        // colliderOnExit(basMis, target);
        // colliderOnExit(basMis, targetLeft);
        // colliderOnExit(basMis, targetRight);
        // colliderOnExit(basMis, targetBottom);

        setTimeout(function () {
            print(left3 + 'koniec')
            clearInterval(interval);
            left3 -= left3;
            // left3 += 20;
            basMis.style.left = `${left3}px`;
            left3 = 0;
        }, 1000)

        // if (left3 >= 460) {
        //
        //
        // }
    }, 20)

//animation triggers below
// all new moves need to be added for every move and action, this need fix by remove all other classes
    caco.className = 'caco-shoot--anim';
    caco.classList.add('caco-fire--left');
    setTimeout(function () {
        // caco.classList.remove('caco-fire--left');
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-shoot__return--anim');
    }, 200)

})



// let x = 0
// shootRight.addEventListener('mousedown', () => {
//     basicMissile.style.display = 'block';
//     setInterval(function () {
//     x += 1;
//
//     }, 30);
//     basicMissile.style.left = `${x}px`;
// })
//     caco.classList.remove('caco-return--anim');
//
//     // caco.classList.add('caco-shoot--anim');
//     if (charge === false) {
//         caco.classList.add('caco-shoot--anim');
//         interval = setInterval(() =>{
//             caco.classList.add('caco-shoot--anim');
//             caco.classList.remove('caco-shoot--anim');
//             setTimeout(() => {
//                 caco.classList.remove('caco-shoot--anim');
//             }, 500)
//             checkPosition(caco);
//             colliderOnExit(caco, target);
//         }, 200)
//     }
//     else {
//         interval = setInterval(() => {
//             caco.classList.add('caco-shoot--anim');
//             caco.classList.remove('caco-shoot--anim');
//             setTimeout(() => {
//                 caco.classList.remove('caco-shoot--anim');
//             }, 500)
//             checkPosition(caco);
//             colliderOnExit(caco, target);
//         })
//     }
//
//     caco.classList.remove('caco-shoot--anim');
//     shootRight.addEventListener('mouseup', () => {
//         clearInterval(interval);
//         // caco.classList.remove('caco-shoot--anim');
//     })
// //animation triggers below
// // all new moves need to be added for every move and action, this need fix by remove all other classes
//
//
//     if(caco.classList.contains('caco-turn--anim')) {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     if(caco.classList.contains('caco-return--anim')) {
//         caco.classList.remove('caco-return--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     if(caco.classList.contains('caco-dump--anim')) {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     if(caco.classList.contains('caco-dump__return--anim')) {
//         caco.classList.remove('caco-dump__return--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     else {
//         caco.classList.add('caco-shoot--anim');
//     }
// //animation below
// // all new moves need to be added for every move and action, this need fix by remove all other classes
//     if(caco.classList.contains('caco-right')) {
//         caco.classList.remove('caco-right');
//         caco.classList.add('caco-fire--right');
//     }
//     else if(caco.classList.contains('caco-left')) {
//         caco.classList.remove('caco-left');
//         caco.classList.add('caco-fire--right');
//     }
//     else if(caco.classList.contains('caco-down')) {
//         caco.classList.remove('caco-down');
//         caco.classList.add('caco-fire--right');
//     }
//     else if(caco.classList.contains('caco-up')) {
//         caco.classList.remove('caco-up');
//         caco.classList.add('caco-fire--right');
//     }
//     else if(caco.classList.contains('caco-dump')) {
//         caco.classList.remove('caco-dump');
//         caco.classList.add('caco-fire--right');
//     }
//     else if(caco.classList.contains('caco-fire--left')) {
//         caco.classList.remove('caco-fire--left');
//         caco.classList.add('caco-fire--right');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-shoot__return--anim');
//     }, 100)
//     caco.classList.remove('caco-shoot__return--anim'); //check ifthis is necessary(for all moves)
//     setTimeout(function () {
//         caco.classList.remove('caco-shoot__return--anim');}, 0);
// })
// //player action anims below
// shootLeft.addEventListener('click', function () {
// //animation triggers below
// // all new moves need to be added for every move and action, this need fix by remove all other classes
//     if(caco.classList.contains('caco-turn--anim')) {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     if(caco.classList.contains('caco-return--anim')) {
//         caco.classList.remove('caco-return--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     if(caco.classList.contains('caco-dump--anim')) {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     if(caco.classList.contains('caco-dump__return--anim')) {
//         caco.classList.remove('caco-dump__return--anim');
//         caco.classList.add('caco-shoot--anim');
//     }
//     else {
//         caco.classList.add('caco-shoot--anim');
//     }
// //animation below
// // all new moves need to be added for every move and action, this need fix by remove all other classes
//     if(caco.classList.contains('caco-right')) {
//         caco.classList.remove('caco-right');
//         caco.classList.add('caco-fire--left');
//     }
//     else if(caco.classList.contains('caco-left')) {
//         caco.classList.remove('caco-left');
//         caco.classList.add('caco-fire--left');
//     }
//     else if(caco.classList.contains('caco-down')) {
//         caco.classList.remove('caco-down');
//         caco.classList.add('caco-fire--left');
//     }
//     else if(caco.classList.contains('caco-up')) {
//         caco.classList.remove('caco-up');
//         caco.classList.add('caco-fire--left');
//     }
//     else if(caco.classList.contains('caco-dump')) {
//         caco.classList.remove('caco-dump');
//         caco.classList.add('caco-fire--left');
//     }
//     else if(caco.classList.contains('caco-fire--right')) {
//         caco.classList.remove('caco-fire--right');
//         caco.classList.add('caco-fire--left');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-shoot__return--anim');
//     }, 100)
//     caco.classList.remove('caco-shoot__return--anim'); //check ifthis is necessary(for all moves)
//     setTimeout(function () {
//         caco.classList.remove('caco-shoot__return--anim');}, 0);
// })
// //
// dump.addEventListener('click', function () {
// //animation triggers below
// // all new moves need to be added for every move and action, this need fix by remove all other classes
//     if(caco.classList.contains('caco-turn--anim')) {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-dump--anim');
//     }
//     if(caco.classList.contains('caco-return--anim')) {
//         caco.classList.remove('caco-return--anim');
//         caco.classList.add('caco-dump--anim');
//     }
//     if(caco.classList.contains('caco-shoot--anim')) {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-dump--anim');
//     }
//     if(caco.classList.contains('caco-shoot__return--anim')) {
//         caco.classList.remove('caco-shoot__return--anim');
//         caco.classList.add('caco-dump--anim');
//     }
//     else {
//         caco.classList.add('caco-dump--anim');
//     }
// //animation below
// // all new moves need to be added for every move and action, this need fix by remove all other classes
//     if(caco.classList.contains('caco-right')) {
//         caco.classList.remove('caco-right');
//         caco.classList.add('caco-dump');
//     }
//     else if(caco.classList.contains('caco-left')) {
//         caco.classList.remove('caco-left');
//         caco.classList.add('caco-dump');
//     }
//     else if(caco.classList.contains('caco-down')) {
//         caco.classList.remove('caco-down');
//         caco.classList.add('caco-dump');
//     }
//     else if(caco.classList.contains('caco-up')) {
//         caco.classList.remove('caco-up');
//         caco.classList.add('caco-dump');
//     }
//     else if(caco.classList.contains('caco-fire--left')) {
//         caco.classList.remove('caco-fire--left');
//         caco.classList.add('caco-dump');
//     }
//     else if(caco.classList.contains('caco-fire--right')) {
//         caco.classList.remove('caco-fire--right');
//         caco.classList.add('caco-dump');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-dump__return--anim');
//     }, 100)
//     caco.classList.remove('caco-dump__return--anim'); //check if this is necessary(for all moves)
//     setTimeout(function () {
//         caco.classList.remove('caco-dump__return--anim');}, 0);
// })
//
//
// //basic missile left and right directions are reversed
// shootRight.addEventListener('click', function () {
//     basicMissile.style.display = 'block';
//     // setTimeout(function () {
//     //     basicMissile.classList.add('caco-missile__anim');
//     // },20);//wrzuca animacje strzalu z opoznieniem
//     // setTimeout(function () {
//     //     top2 -= missileRange;
//     //     basicMissile.style.left = `${top2}px`;
//     // },20);                             //ten caly timeout w runinterval
//     // setTimeout(function () {
//     //     basicMissile.style.display = 'none';
//     //     top2 += missileRange;  //top2 += n z interwala razy missile range
//     //     basicMissile.style.left = `${top2}px`;
//     //     basicMissile.classList.remove('caco-missile__anim');
//     // },10000);
//     colliderOnExit(basicMissile, target);
// })
//
// const runInterval = (n= 8) => {
//     var timesRun = 0;
//     var interval = setInterval(function(){
//         timesRun += 1;
//         if(timesRun === n){
//             clearInterval(interval);
//         }
//         console.log("Hello");
//         if (timesRun === n ) {
//             console.log('ended');
//         }
//     }, 500);
//
//
// }
// //this below shoots right not left
// // shootLeft.addEventListener('click', function () {
// //     basicMissile.style.display = 'block';
// //      let add = 0
// //     setInterval(function () {
// //         add += 2;
// //         basicMissile.style.left = `${add}`;
// //     }, 20)
//     // setTimeout(function () {
//     //     basicMissile.classList.add('caco-missile__anim');
//     // },20);
//     // setTimeout(function () {
//     //     basicMissile.style.left += "300px"
//     // },20);
//     // setTimeout(function () {
//         // basicMissile.style.display = 'none';
//         // top2 -= missileRange;
//         // basicMissile.style.left = `${top2}px`;
//         // top2 -= missileRange;
//         // basicMissile.style.left = `${top2}px`;  //to w takiej samej petli
//         // top2 -= missileRange;
//         // basicMissile.style.left = `${top2}px`;
//         // top2 -= missileRange;
//         // basicMissile.style.left = `${top2}px`;
//     //     basicMissile.classList.remove('caco-missile__anim');
//     // },3000);
// //     colliderOnExit(basicMissile, target);
// // })
//
// // //basic crap below
// // dump.addEventListener('click', function () {
// //     basicCrap.style.display = 'block';
// //     setTimeout(function () {
// //         basicCrap.classList.add('caco-crap__anim');
// //     },20);
// //     setTimeout(function () {
// //         top2 += missileRange;
// //         basicCrap.style.top = `${top2}px`;
// //     },20);
// //     setTimeout(function () {
// //         basicCrap.style.display = 'none';
// //         top2 -= missileRange;
// //         basicCrap.style.top = `${top2}px`;
// //         basicCrap.classList.remove('caco-crap__anim');
// //     },1000);
// //     colliderOnExit(basicCrap, target);
// // })
// //
// // // rect collider below:
// //
// //
// // checkPosition(caco);
// // checkPositionTarget(target);
// // colliderOnExit(caco, target);
// // // colliderOnContact(caco, target);
//
//
// // if (basicMissile.x < target.x + target.width &&
// //     basicMissile.x + basicMissile.width > target.x &&
// //     basicMissile.y < target.y + target.height &&
// //     basicMissile.height + target.y > target.y) {
// //     print('collision detected');
// // }
//

