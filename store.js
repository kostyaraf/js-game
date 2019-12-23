export let Store = {
    speed: {
        gravity: 1,
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
                    store.player.xPosition += 7;
                // }
            },
            left: () => {
                store.player.xPosition = store.player.xPosition - 7;
                // player.style.left = `${store.player.xPosition}px`;

            },
            jump: () => {
                store.speed.jump = 1;
                let speed = store.speed.jump;
    
                let jumpfunc = setInterval(() => {
                    store.player.yPosition += 11;
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