const print = (element) => {
    console.log(element);
}

const getElement = (element) => {
    return document.querySelector(element);
}

const checkPosition = (element) => {
    let popup = element;
    let rect = popup.getBoundingClientRect();
    console.log("popup.getBoundingClientRect(): \n" + "x: " + rect.left + "\ny: " + rect.top);
}

print("hello training grounds");

const caco = document.getElementById('caco1');
const basicMissile = document.getElementById('missile_right');
const basicCrap = document.getElementById('basic_dump')
print(basicMissile);
const target = getElement('.practice-target');
print(target);

const down = getElement('.down');
const up = getElement('.up');
const left = getElement('.left');
const right = getElement('.right');
const shootRight = getElement('.fire-right');
const shootLeft = getElement('.fire-left');
print(shootLeft)
print(shootRight)
const dump = getElement('.dump');

//initial x and y of caodemon
let distance = 100;//moving distance, speed is transition in css
let popup = caco;
let rect = popup.getBoundingClientRect();
let left1 = rect.left;
let top1 = rect.top;
caco.style.left = `${left1}px`; //adjust caco position at start
caco.style.top = `${top1}px`;
//initial x and y of missile
let missileRange = 600;//shooting distance, speed is transition in css
let popup1 = basicMissile;
let rect1 = popup1.getBoundingClientRect();
let left2 = rect1.left;
let top2 = rect1.top;
basicMissile.style.left = `${left2}px`;
basicMissile.style.top = `23px`; //adjust missile in caco mouth check it if collider sucks

// left and right names mixed up but works
left.addEventListener('click', function () {
    left1 += distance;
    caco.style.left = `${left1}px`;
    setTimeout(function () {
        checkPosition(caco);}, 200);
//all new moves need to be added everywhere
    if(caco.classList.contains('caco-shoot__return--anim')) {
        caco.classList.remove('caco-shoot__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-shoot--anim')) {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump--anim')) {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump__return--anim')) {
        caco.classList.remove('caco-dump__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    else {
        caco.classList.add('caco-turn--anim');
    }
    //all new moves need to be added everywhere

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
    else if(caco.classList.contains('caco-fire--right')) {
        caco.classList.remove('caco-fire--right');
        caco.classList.add('caco-right');
    }
    else if(caco.classList.contains('caco-fire--left')) {
        caco.classList.remove('caco-fire--left');
        caco.classList.add('caco-right');
    }
    else if(caco.classList.contains('caco-dump')) {
        caco.classList.remove('caco-dump');
        caco.classList.add('caco-right');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    setTimeout(function () {
    caco.classList.remove('caco-return--anim');}, 200);
})


right.addEventListener('click', function () {
    left1 -= distance;
    caco.style.left = `${left1}px`;
    setTimeout(function () {
        checkPosition(caco)
        checkPosition(target);}, 200); //position of practice target it is test
    if(caco.classList.contains('caco-shoot__return--anim')) {
        caco.classList.remove('caco-shoot__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-shoot--anim')) {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump--anim')) {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump__return--anim')) {
        caco.classList.remove('caco-dump__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    else {
        caco.classList.add('caco-turn--anim');
    }
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
    else if(caco.classList.contains('caco-fire--right')) {
        caco.classList.remove('caco-fire--right');
        caco.classList.add('caco-left');
    }
    else if(caco.classList.contains('caco-fire--left')) {
        caco.classList.remove('caco-fire--left');
        caco.classList.add('caco-left');
    }
    else if(caco.classList.contains('caco-dump')) {
        caco.classList.remove('caco-dump');
        caco.classList.add('caco-left');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    caco.classList.remove('caco-return--anim');
    setTimeout(function () {
        caco.classList.remove('caco-return--anim');}, 200);
})

down.addEventListener('click', function () {
    top1 += distance;
    caco.style.top = `${top1}px`;
    setTimeout(function () {
        checkPosition(caco);}, 200);
    if(caco.classList.contains('caco-shoot__return--anim')) {
        caco.classList.remove('caco-shoot__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-shoot--anim')) {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump--anim')) {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump__return--anim')) {
        caco.classList.remove('caco-dump__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    else {
        caco.classList.add('caco-turn--anim');
    }
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
    else if(caco.classList.contains('caco-fire--right')) {
        caco.classList.remove('caco-fire--right');
        caco.classList.add('caco-down');
    }
    else if(caco.classList.contains('caco-fire--left')) {
        caco.classList.remove('caco-fire--left');
        caco.classList.add('caco-down');
    }
    else if(caco.classList.contains('caco-dump')) {
        caco.classList.remove('caco-dump');
        caco.classList.add('caco-down');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    caco.classList.remove('caco-return--anim');
    setTimeout(function () {
        caco.classList.remove('caco-return--anim');}, 200);
})

up.addEventListener('click', function () {
    top1 -= distance;
    caco.style.top = `${top1}px`;
    setTimeout(function () {
        checkPosition(caco);}, 200);

    if(caco.classList.contains('caco-shoot__return--anim')) {
        caco.classList.remove('caco-shoot__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-shoot--anim')) {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump--anim')) {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-turn--anim');
    }
    if(caco.classList.contains('caco-dump__return--anim')) {
        caco.classList.remove('caco-dump__return--anim');
        caco.classList.add('caco-turn--anim');
    }
    else {
        caco.classList.add('caco-turn--anim');
    }
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
    else if(caco.classList.contains('caco-fire--right')) {
        caco.classList.remove('caco-fire--right');
        caco.classList.add('caco-up');
    }
    else if(caco.classList.contains('caco-fire--left')) {
        caco.classList.remove('caco-fire--left');
        caco.classList.add('caco-up');
    }
    else if(caco.classList.contains('caco-dump')) {
        caco.classList.remove('caco-dump');
        caco.classList.add('caco-up');
    }
    setTimeout(function () {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-return--anim');
    }, 1000)
    caco.classList.remove('caco-return--anim');
    setTimeout(function () {
        caco.classList.remove('caco-return--anim');}, 200);
})

shootRight.addEventListener('click', function () {
//anims ok
    if(caco.classList.contains('caco-turn--anim')) {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-shoot--anim');
    }
    if(caco.classList.contains('caco-return--anim')) {
        caco.classList.remove('caco-return--anim');
        caco.classList.add('caco-shoot--anim');
    }
    if(caco.classList.contains('caco-dump--anim')) {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-shoot--anim');
    }
    if(caco.classList.contains('caco-dump__return--anim')) {
        caco.classList.remove('caco-dump__return--anim');
        caco.classList.add('caco-shoot--anim');
    }
    else {
        caco.classList.add('caco-shoot--anim');
    }
//ok
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-fire--right');
    }
    else if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-fire--right');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
        caco.classList.add('caco-fire--right');
    }
    else if(caco.classList.contains('caco-up')) {
        caco.classList.remove('caco-up');
        caco.classList.add('caco-fire--right');
    }
    else if(caco.classList.contains('caco-dump')) {
        caco.classList.remove('caco-dump');
        caco.classList.add('caco-fire--right');
    }
    else if(caco.classList.contains('caco-fire--left')) {
        caco.classList.remove('caco-fire--left');
        caco.classList.add('caco-fire--right');
    }
    setTimeout(function () {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-shoot__return--anim');
    }, 1000)
    caco.classList.remove('caco-shoot__return--anim'); //check ifthis is necessary(for all moves)
    setTimeout(function () {
        caco.classList.remove('caco-shoot__return--anim');}, 200);
})

shootLeft.addEventListener('click', function () {
//ok
    if(caco.classList.contains('caco-turn--anim')) {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-shoot--anim');
    }
    if(caco.classList.contains('caco-return--anim')) {
        caco.classList.remove('caco-return--anim');
        caco.classList.add('caco-shoot--anim');
    }
    if(caco.classList.contains('caco-dump--anim')) {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-shoot--anim');
    }
    if(caco.classList.contains('caco-dump__return--anim')) {
        caco.classList.remove('caco-dump__return--anim');
        caco.classList.add('caco-shoot--anim');
    }
    else {
        caco.classList.add('caco-shoot--anim');
    }
//ok
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-fire--left');
    }
    else if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-fire--left');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
        caco.classList.add('caco-fire--left');
    }
    else if(caco.classList.contains('caco-up')) {
        caco.classList.remove('caco-up');
        caco.classList.add('caco-fire--left');
    }
    else if(caco.classList.contains('caco-dump')) {
        caco.classList.remove('caco-dump');
        caco.classList.add('caco-fire--left');
    }
    else if(caco.classList.contains('caco-fire--right')) {
        caco.classList.remove('caco-fire--right');
        caco.classList.add('caco-fire--left');
    }
    setTimeout(function () {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-shoot__return--anim');
    }, 1000)
    caco.classList.remove('caco-shoot__return--anim'); //check ifthis is necessary(for all moves)
    setTimeout(function () {
        caco.classList.remove('caco-shoot__return--anim');}, 200);
})
//dump ok
dump.addEventListener('click', function () {
//ok
    if(caco.classList.contains('caco-turn--anim')) {
        caco.classList.remove('caco-turn--anim');
        caco.classList.add('caco-dump--anim');
    }
    if(caco.classList.contains('caco-return--anim')) {
        caco.classList.remove('caco-return--anim');
        caco.classList.add('caco-dump--anim');
    }
    if(caco.classList.contains('caco-shoot--anim')) {
        caco.classList.remove('caco-shoot--anim');
        caco.classList.add('caco-dump--anim');
    }
    if(caco.classList.contains('caco-shoot__return--anim')) {
        caco.classList.remove('caco-shoot__return--anim');
        caco.classList.add('caco-dump--anim');
    }
    else {
        caco.classList.add('caco-dump--anim');
    }
//ok
    if(caco.classList.contains('caco-right')) {
        caco.classList.remove('caco-right');
        caco.classList.add('caco-dump');
    }
    else if(caco.classList.contains('caco-left')) {
        caco.classList.remove('caco-left');
        caco.classList.add('caco-dump');
    }
    else if(caco.classList.contains('caco-down')) {
        caco.classList.remove('caco-down');
        caco.classList.add('caco-dump');
    }
    else if(caco.classList.contains('caco-up')) {
        caco.classList.remove('caco-up');
        caco.classList.add('caco-dump');
    }
    else if(caco.classList.contains('caco-fire--left')) {
        caco.classList.remove('caco-fire--left');
        caco.classList.add('caco-dump');
    }
    else if(caco.classList.contains('caco-fire--right')) {
        caco.classList.remove('caco-fire--right');
        caco.classList.add('caco-dump');
    }
//ok
    setTimeout(function () {
        caco.classList.remove('caco-dump--anim');
        caco.classList.add('caco-dump__return--anim');
    }, 1000)
    caco.classList.remove('caco-dump__return--anim'); //check if this is necessary(for all moves)
    setTimeout(function () {
        caco.classList.remove('caco-dump__return--anim');}, 200);
})


//basic missile left and right directions are reversed
shootRight.addEventListener('click', function () {
    basicMissile.style.display = 'block';
    setTimeout(function () {
        basicMissile.classList.add('caco-missile__anim');
    },20);
    setTimeout(function () {
        top2 -= missileRange;
        basicMissile.style.left = `${top2}px`;
    },20);
    setTimeout(function () {
        basicMissile.style.display = 'none';
        top2 += missileRange;
        basicMissile.style.left = `${top2}px`;
        basicMissile.classList.remove('caco-missile__anim');
    },1000);
})

shootLeft.addEventListener('click', function () {
    basicMissile.style.display = 'block';
    setTimeout(function () {
        basicMissile.classList.add('caco-missile__anim');
    },20);
    setTimeout(function () {
        top2 += missileRange;
        basicMissile.style.left = `${top2}px`;
    },20);
    setTimeout(function () {
        basicMissile.style.display = 'none';
        top2 -= missileRange;
        basicMissile.style.left = `${top2}px`;
        basicMissile.classList.remove('caco-missile__anim');
    },1000);
})

//basic crap below
dump.addEventListener('click', function () {
    basicCrap.style.display = 'block';
    setTimeout(function () {
        basicCrap.classList.add('caco-crap__anim');
    },20);
    setTimeout(function () {
        top2 += missileRange;
        basicCrap.style.top = `${top2}px`;
    },20);
    setTimeout(function () {
        basicCrap.style.display = 'none';
        top2 -= missileRange;
        basicCrap.style.top = `${top2}px`;
        basicCrap.classList.remove('caco-crap__anim');
    },1000);
})

// rect collider below:



// if (basicMissile.x < target.x + target.width &&
//     basicMissile.x + basicMissile.width > target.x &&
//     basicMissile.y < target.y + target.height &&
//     basicMissile.height + target.y > target.y) {
//     print('collision detected');
// }







