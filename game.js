// game objects
let game = document.getElementById('game-app');
let player = document.createElement('div');

// player default settings
player.classList.add('game-player');


let store = {
    speed: {
        gravity: 0.5,
        jump: 20,
    },
    player: {
        yPosition: 300,
        xPosition: 0,
        speed: 1,
        heightOf: {
            jump: 180,
            currentPosition: 0,
        },
        do: {
            right: () => {
                // while (store.player.controller.actions.isPressRight) {
                    store.player.xPosition += 4;
                // }
            },
            left: () => {
                store.player.xPosition = store.player.xPosition - 4;
                // player.style.left = `${store.player.xPosition}px`;

            },
            jump: () => {
                store.speed.jump = 1;
                let speed = store.speed.jump;
    
                let jumpfunc = setInterval(() => {
                    store.player.yPosition += speed / 3;
                    speed += 11;
                    if (speed >= store.player.heightOf.jump) clearInterval(jumpfunc);
                }, 10)
            },
        },
        controller: {
            actions: {
                left: false,
                right: false,
                space: false,
            }
        }
    },
}

// game functions
let gGet = (key) => {
    if (res = localStorage.getItem(key)) {
        return res
    } return res
}
let gSet = (key, val) => {
    localStorage.setItem(key, val)
}


game.appendChild(player);

// function playerMoving

let renderGravity = setInterval(() => {
    // render steps
    player.style.left = `${store.player.xPosition}px`;
    player.style.bottom = `${store.player.yPosition}px`;

    if (store.player.controller.actions.right) store.player.do.right();
    if (store.player.controller.actions.left) store.player.do.left();
    if (store.player.controller.actions.space) {
        store.player.do.jump();
        store.player.controller.actions.space = false;
    }

    // console.log(store.player.yPosition)
    let newPosition = store.player.yPosition - store.speed.gravity;
    if (newPosition > 0) {
        store.player.yPosition = newPosition;
        let planingSpeed = store.speed.gravity += store.speed.gravity/2;
        store.speed.gravity = planingSpeed > 20 ? 20 : planingSpeed;
    } else {
        store.player.yPosition = 0;
        store.speed.gravity = 1;
    }
    console.log(store.speed.gravity);
}, 10)

let renederSteps = setInterval(() => {
    player.style.left = `${store.player.xPosition}px`;
}, 1)

// controller
window.addEventListener('keydown', event => {
    // console.log('key: ' + event.code)
    // switch(event.code) {
    //     case 'Space':
    //         store.player.jump()
    //         break
    //     case 'ArrowRight':
    //         store.player.controller.actions.isPressRight = true;
    //         store.player.do.right()
    //         break
    //     case 'ArrowLeft':
    //         store.player.do.left()
    //         break
    // }

    // if (event.code == 'Space') store.player.jump();
    // if (event.code == 'ArrowRight') store.player.do.right();
    // if (event.code == 'ArrowLeft') store.player.do.left();

    if (event.code == 'Space') store.player.controller.actions.space = true;
    if (event.code == 'ArrowRight') store.player.controller.actions.right = true;
    if (event.code == 'ArrowLeft') store.player.controller.actions.left = true;
})
// controller
window.addEventListener('keyup', event => {
    // console.log('key: ' + event.code)
    // switch(event.code) {
    //     case 'Space':
    //         store.player.jump()
    //         break
    //     case 'ArrowRight':
    //         store.player.controller.actions.isPressRight = true;
    //         store.player.do.right()
    //         break
    //     case 'ArrowLeft':
    //         store.player.do.left()
    //         break
    // }

    if (event.code == 'Space') store.player.controller.actions.space = false;
    if (event.code == 'ArrowRight') store.player.controller.actions.right = false;
    if (event.code == 'ArrowLeft') store.player.controller.actions.left = false;
})