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

const down = getElement('.down');
const up = getElement('.up');
const left = getElement('.left');
const right = getElement('.right');
const shootRight = getElement('.fire-right');
const shootLeft = getElement('.fire-left');
print(shootLeft)
print(shootRight)
const dump = getElement('.dump');


let distance = 100;
let popup = caco;
let rect = popup.getBoundingClientRect();
let left1 = rect.left;
let top1 = rect.top;
caco.style.left = `${left1}px`;
caco.style.top = `${top1}px`;

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
shootLeft.addEventListener('click', function () {
    basicMissile.style.display = 'block';
    setTimeout(function () {
        basicMissile.classList.add('caco-missile__anim');
    },20);

    setTimeout(function () {
        basicMissile.style.transform = 'translateX(600px)';
    },20);
    setTimeout(function () {
        basicMissile.style.display = 'none';
        basicMissile.style.transform = 'translateX(0px)';
        basicMissile.classList.remove('caco-missile__anim');
    },1000);
})

shootRight.addEventListener('click', function () {
    basicMissile.style.display = 'block';
    setTimeout(function () {
        basicMissile.classList.add('caco-missile__anim');
    },20);

    setTimeout(function () {
        basicMissile.style.transform = 'translateX(-600px)';
    },20);
    setTimeout(function () {
        basicMissile.style.display = 'none';
        basicMissile.style.transform = 'translateX(0px)';
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
        basicCrap.style.transform = 'translateY(600px)';
    },20);
    setTimeout(function () {
        basicCrap.style.display = 'none';
        basicCrap.style.transform = 'translateY(0px)';
        basicCrap.classList.remove('caco-crap__anim');
    },1000);
})

// rect collider below:
// if (rect1.x < rect2.x + rect2.width &&
//     rect1.x + rect1.width > rect2.x &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.height + rect1.y > rect2.y) {
//     // collision detected!
// }







