const print = (element) => {
    return console.log(element);
}

print('tet');

let paintbox = document.getElementById('paintbox');

let context = paintbox.getContext('2d');
// context.moveTo();
// context.lineTo();
// context.stroke();

// fillRect
//clearRect
//fillStyle = "red"
// context.fillRect(50, 50, 100, 100);
// context.fillStyle = "red";
// context.rect(100, 100 , 30, 30);
// context.stroke();

class Box {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }
}

class Player extends Box {
    constructor() {
        super(50,'blue');
        this.x = 0;
        this.y = 0;
    }
}
//enemy inherits x and y from player
class Enemy extends Box {
    constructor(speed) {
        super(50,'red');
      this.speed = speed;
    }
    move() {
        this.y += this.speed;
        if (this.y + this.size > 500) {
            this.speed = -(Math.abs(this.speed));
        }
        if (this.y < 0) {
            this.speed = (Math.abs(this.speed));
        }
    }
}
//create new player and enemies after setting speed they appear and move
let player = new Player();
let e1 = new Enemy(1);
let e2 = new Enemy(2);
e1.x = 120;
e2.x = 240;
//drawbox creates player or enemy etc they are visible when speed is determined
function drawbox(box) {
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.size, box.size);
}


// below instead of interval
function updateGame() {
    window.requestAnimationFrame(() => {
        print('update frame');
        context.clearRect(0, 0, 500, 500);
        e1.move();
        e2.move();
        drawbox(e1);
        drawbox(e2);
        updateGame();
    })
}

updateGame();



// setInterval(() => {
//
// }, 100);

//drawbox(e1) to show it by now







































// const print = (element) => {
//     console.log(element);
// }
//
// print("hello training grounds");
//
// const getElement = (element) => {
//     return document.querySelector(element);
// }
//
//
// const checkPosition = (element) => {
//     let popup = element;
//     let rect = popup.getBoundingClientRect();
//     console.log('caco position: ' + "popup.getBoundingClientRect(): \n" + "x: " + rect.left + "\ny: " + rect.top);
// }
// const checkPositionTarget = (element) => {
//     let popup = element;
//     let rect = popup.getBoundingClientRect();
//
//     console.log("target's position " + "popup.getBoundingClientRect(): \n" + "x: " + rect.left + "\ny: " + rect.top);
// }
// //colider below works on exit target keep it
// const colliderOnExit = (object1, object2) => {
//     let obj1 = object1.getBoundingClientRect();
//     let obj2 = object2.getBoundingClientRect();
//
//     if (obj1.x < obj2.x + obj2.width &&
//         obj1.x + obj1.width > obj2.x &&
//         obj1.y < obj2.y + obj2.height &&
//         obj1.height + obj1.y > obj2.y) {
//         print('collision on exit detected');
//     }
// }
//
// const caco = document.getElementById('caco1');
// const basicMissile = document.getElementById('missile_right');
// const basicCrap = document.getElementById('basic_dump')
// print(basicMissile);
// const target = getElement('.practice-target');
// print(target);
//
// const down = getElement('.down');
// const up = getElement('.up');
// const left = getElement('.left');
// const right = getElement('.right');
// const shootRight = getElement('.fire-right');
// const shootLeft = getElement('.fire-left');
// print(shootLeft)
// print(shootRight)
// const dump = getElement('.dump');
// left.addEventListener('mouseover', function () {
//     runInterval(4)
// })
//
// //initial x and y of caodemon
// let distance = 100;//moving distance, speed is transition in css
// let popup = caco;
// let rect = popup.getBoundingClientRect();
// let left1 = rect.left;
// let top1 = rect.top;
// caco.style.left = `${left1}px`; //adjust caco position at start
// caco.style.top = `${top1}px`;
// //initial x and y of missile
//
// //trick for colliding: small but multiplied range and adjust transition in css lets see
// // let missile
// let missileRange = 30;//shooting distance, speed is transition in css
// let popup1 = basicMissile;
// let rect1 = popup1.getBoundingClientRect();
// let left2 = rect1.left;
// let top2 = rect1.top;
// basicMissile.style.left = `${left2}px`;
// basicMissile.style.top = `23px`; //adjust missile in caco mouth check it if collider sucks
// colliderOnExit(caco, target);
// // left and right names mixed up but works
// left.addEventListener('click', function () {
//
//     left1 += distance;
//
//
//     caco.style.left = `${left1}px`;
//     setTimeout(function () {
//         ;}, 200);
//
//
// //all new moves need to be added everywhere
//     if(caco.classList.contains('caco-shoot__return--anim')) {
//         caco.classList.remove('caco-shoot__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-shoot--anim')) {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump--anim')) {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump__return--anim')) {
//         caco.classList.remove('caco-dump__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     else {
//         caco.classList.add('caco-turn--anim');
//     }
//     //all new moves need to be added everywhere
//
//     if(caco.classList.contains('caco-left')) {
//         caco.classList.remove('caco-left');
//         caco.classList.add('caco-right');
//     }
//     else if(caco.classList.contains('caco-down')) {
//         caco.classList.remove('caco-down');
//         caco.classList.add('caco-right');
//     }
//     else if(caco.classList.contains('caco-up')) {
//         caco.classList.remove('caco-up');
//         caco.classList.add('caco-right');
//     }
//     else if(caco.classList.contains('caco-fire--right')) {
//         caco.classList.remove('caco-fire--right');
//         caco.classList.add('caco-right');
//     }
//     else if(caco.classList.contains('caco-fire--left')) {
//         caco.classList.remove('caco-fire--left');
//         caco.classList.add('caco-right');
//     }
//     else if(caco.classList.contains('caco-dump')) {
//         caco.classList.remove('caco-dump');
//         caco.classList.add('caco-right');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-return--anim');
//     }, 1000)
//     setTimeout(function () {
//     caco.classList.remove('caco-return--anim');}, 200);
//     checkPosition(caco);
//     checkPositionTarget(target);
//     colliderOnExit(caco, target);
// })
//
//
// right.addEventListener('click', function () {
//     colliderOnExit(caco, target);
//     left1 -= distance;
//     caco.style.left = `${left1}px`;
//     setTimeout(function () {
//
//         ;}, 200);
//
//     //position of practice target it is test
//     if(caco.classList.contains('caco-shoot__return--anim')) {
//         caco.classList.remove('caco-shoot__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-shoot--anim')) {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump--anim')) {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump__return--anim')) {
//         caco.classList.remove('caco-dump__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     else {
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-right')) {
//         caco.classList.remove('caco-right');
//         caco.classList.add('caco-left');
//     }
//     else if(caco.classList.contains('caco-down')) {
//         caco.classList.remove('caco-down');
//         caco.classList.add('caco-left');
//     }
//     else if(caco.classList.contains('caco-up')) {
//         caco.classList.remove('caco-up');
//         caco.classList.add('caco-left');
//     }
//     else if(caco.classList.contains('caco-fire--right')) {
//         caco.classList.remove('caco-fire--right');
//         caco.classList.add('caco-left');
//     }
//     else if(caco.classList.contains('caco-fire--left')) {
//         caco.classList.remove('caco-fire--left');
//         caco.classList.add('caco-left');
//     }
//     else if(caco.classList.contains('caco-dump')) {
//         caco.classList.remove('caco-dump');
//         caco.classList.add('caco-left');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-return--anim');
//     }, 1000)
//     caco.classList.remove('caco-return--anim');
//     setTimeout(function () {
//         caco.classList.remove('caco-return--anim');}, 200);
//     checkPosition(caco);
//     checkPositionTarget(target);
//     colliderOnExit(caco, target); //works by now on exit target will come in handy
// })
//
// down.addEventListener('click', function () {
//     colliderOnExit(caco, target);
//     top1 += distance;
//     caco.style.top = `${top1}px`;
//     setTimeout(function () {
//         ;}, 200);
//
//
//     if(caco.classList.contains('caco-shoot__return--anim')) {
//         caco.classList.remove('caco-shoot__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-shoot--anim')) {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump--anim')) {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump__return--anim')) {
//         caco.classList.remove('caco-dump__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     else {
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-right')) {
//         caco.classList.remove('caco-right');
//         caco.classList.add('caco-down');
//     }
//     else if(caco.classList.contains('caco-left')) {
//         caco.classList.remove('caco-left');
//         caco.classList.add('caco-down');
//     }
//     else if(caco.classList.contains('caco-up')) {
//         caco.classList.remove('caco-up');
//         caco.classList.add('caco-down');
//     }
//     else if(caco.classList.contains('caco-fire--right')) {
//         caco.classList.remove('caco-fire--right');
//         caco.classList.add('caco-down');
//     }
//     else if(caco.classList.contains('caco-fire--left')) {
//         caco.classList.remove('caco-fire--left');
//         caco.classList.add('caco-down');
//     }
//     else if(caco.classList.contains('caco-dump')) {
//         caco.classList.remove('caco-dump');
//         caco.classList.add('caco-down');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-return--anim');
//     }, 1000)
//     caco.classList.remove('caco-return--anim');
//     setTimeout(function () {
//         caco.classList.remove('caco-return--anim');}, 200);
//     checkPosition(caco);
//     checkPositionTarget(target);
//     colliderOnContact(caco, target);
//     colliderOnExit(caco, target);
// })
//
// up.addEventListener('click', function () {
//     colliderOnExit(caco, target);
//     top1 -= distance;
//     caco.style.top = `${top1}px`;
//     setTimeout(function () {
//         }, 200);
//
//
//     if(caco.classList.contains('caco-shoot__return--anim')) {
//         caco.classList.remove('caco-shoot__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-shoot--anim')) {
//         caco.classList.remove('caco-shoot--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump--anim')) {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     if(caco.classList.contains('caco-dump__return--anim')) {
//         caco.classList.remove('caco-dump__return--anim');
//         caco.classList.add('caco-turn--anim');
//     }
//     else {
//         caco.classList.add('caco-turn--anim');
//     }
//     caco.classList.add('caco-turn--anim');
//
//     if(caco.classList.contains('caco-right')) {
//         caco.classList.remove('caco-right');
//         caco.classList.add('caco-up');
//     }
//     else if(caco.classList.contains('caco-left')) {
//         caco.classList.remove('caco-left');
//         caco.classList.add('caco-up');
//     }
//     else if(caco.classList.contains('caco-down')) {
//         caco.classList.remove('caco-down');
//         caco.classList.add('caco-up');
//     }
//     else if(caco.classList.contains('caco-fire--right')) {
//         caco.classList.remove('caco-fire--right');
//         caco.classList.add('caco-up');
//     }
//     else if(caco.classList.contains('caco-fire--left')) {
//         caco.classList.remove('caco-fire--left');
//         caco.classList.add('caco-up');
//     }
//     else if(caco.classList.contains('caco-dump')) {
//         caco.classList.remove('caco-dump');
//         caco.classList.add('caco-up');
//     }
//     setTimeout(function () {
//         caco.classList.remove('caco-turn--anim');
//         caco.classList.add('caco-return--anim');
//     }, 1000)
//     caco.classList.remove('caco-return--anim');
//     setTimeout(function () {
//         caco.classList.remove('caco-return--anim');}, 200);
//     checkPosition(caco);
//     checkPositionTarget(target);
//     colliderOnContact(caco, target);
//     colliderOnExit(caco, target);
// })
//
// shootRight.addEventListener('click', function () {
// //anims ok
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
// //ok
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
//     }, 1000)
//     caco.classList.remove('caco-shoot__return--anim'); //check ifthis is necessary(for all moves)
//     setTimeout(function () {
//         caco.classList.remove('caco-shoot__return--anim');}, 200);
// })
//
// shootLeft.addEventListener('click', function () {
// //ok
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
// //ok
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
//     }, 1000)
//     caco.classList.remove('caco-shoot__return--anim'); //check ifthis is necessary(for all moves)
//     setTimeout(function () {
//         caco.classList.remove('caco-shoot__return--anim');}, 200);
// })
// //dump ok
// dump.addEventListener('click', function () {
// //ok
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
// //ok
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
// //ok
//     setTimeout(function () {
//         caco.classList.remove('caco-dump--anim');
//         caco.classList.add('caco-dump__return--anim');
//     }, 1000)
//     caco.classList.remove('caco-dump__return--anim'); //check if this is necessary(for all moves)
//     setTimeout(function () {
//         caco.classList.remove('caco-dump__return--anim');}, 200);
// })
//
//
// //basic missile left and right directions are reversed
// shootRight.addEventListener('click', function () {
//     basicMissile.style.display = 'block';
//     setTimeout(function () {
//         basicMissile.classList.add('caco-missile__anim');
//     },20);//wrzuca animacje strzalu z opoznieniem
//     setTimeout(function () {
//         top2 -= missileRange;
//         basicMissile.style.left = `${top2}px`;
//     },20);                             //ten caly timeout w runinterval
//     setTimeout(function () {
//         basicMissile.style.display = 'none';
//         top2 += missileRange;  //top2 += n z interwala razy missile range
//         basicMissile.style.left = `${top2}px`;
//         basicMissile.classList.remove('caco-missile__anim');
//     },10000);
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
// shootLeft.addEventListener('click', function () {
//     basicMissile.style.display = 'block';
//     setTimeout(function () {
//         basicMissile.classList.add('caco-missile__anim');
//     },20);
//     setTimeout(function () {
//         top2 += missileRange;
//         basicMissile.style.left = `${top2}px`;
//         top2 += missileRange;
//         basicMissile.style.left = `${top2}px`;
//         top2 += missileRange;
//         basicMissile.style.left = `${top2}px`;
//         top2 += missileRange;                     ///tu interwal x razy
//         basicMissile.style.left = `${top2}px`;
//     },20);
//     setTimeout(function () {
//         basicMissile.style.display = 'none';
//         top2 -= missileRange;
//         basicMissile.style.left = `${top2}px`;
//         top2 -= missileRange;
//         basicMissile.style.left = `${top2}px`;  //to w takiej samej petli
//         top2 -= missileRange;
//         basicMissile.style.left = `${top2}px`;
//         top2 -= missileRange;
//         basicMissile.style.left = `${top2}px`;
//         basicMissile.classList.remove('caco-missile__anim');
//     },3000);
//     colliderOnExit(basicMissile, target);
// })
//
// //basic crap below
// dump.addEventListener('click', function () {
//     basicCrap.style.display = 'block';
//     setTimeout(function () {
//         basicCrap.classList.add('caco-crap__anim');
//     },20);
//     setTimeout(function () {
//         top2 += missileRange;
//         basicCrap.style.top = `${top2}px`;
//     },20);
//     setTimeout(function () {
//         basicCrap.style.display = 'none';
//         top2 -= missileRange;
//         basicCrap.style.top = `${top2}px`;
//         basicCrap.classList.remove('caco-crap__anim');
//     },1000);
//     colliderOnExit(basicCrap, target);
// })
//
// // rect collider below:
//
//
// checkPosition(caco);
// checkPositionTarget(target);
// colliderOnExit(caco, target);
// colliderOnContact(caco, target);
//
//
// // if (basicMissile.x < target.x + target.width &&
// //     basicMissile.x + basicMissile.width > target.x &&
// //     basicMissile.y < target.y + target.height &&
// //     basicMissile.height + target.y > target.y) {
// //     print('collision detected');
// // }
//
//
//
//
//
//
//
