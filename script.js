// 1 => <div class='wall'></div>
// 2 => <div class='coin'></div>
// 3 => <div class='ground'></div>
// 4 => <div class='ghost'></div>
// 5 => <div class='pacman'></div>
// map = [ 1, 2, 3 ]
// map = [ [1,2,3], [1,2,3], [1,2,3] ];



let map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,2,1,1,1,2,1,2,1,1,1,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,2,2,1,1,5,1,1,2,2,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,1,1,2,2,1,2,2,1,1,2,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
]
const game = document.querySelector('body')
const world = document.getElementById('world')
const rotate = document.querySelector('.pacman')
let pacman = {x: 6, y: 4}
let score = 0
const point = document.getElementById('point')

const pacmanDown = "<div class='pacman down'></div>"
const pacmanUp = "<div class='pacman up'></div>"
const pacmanLeft = "<div class='pacman left'></div>"


function drawWorld() {
    world.innerHTML = '' //iniciar o world sempre vazio quando a função rodar
    for (let y = 0; y < map.length; y++) {
        // console.log(map[y]);
        for (let x = 0; x < map[y].length; x++) {
            // console.log(map[y][x]);
            const matrix = map[y][x]
            if (matrix === 1) {
                world.innerHTML += "<div class='wall'></div>"
            } else if (matrix === 2) {
                world.innerHTML += "<div class='coin'></div>"    
            } else if (matrix === 3) {
                world.innerHTML += "<div class='ground'></div>"
            } else {
                world.innerHTML += "<div class='pacman'></div>"
            }
        }
        world.innerHTML += "<br>"
    }
}

function drawWorldD() {
    world.innerHTML = '' //iniciar o world sempre vazio quando a função rodar
    for (let y = 0; y < map.length; y++) {
        // console.log(map[y]);
        for (let x = 0; x < map[y].length; x++) {
            // console.log(map[y][x]);
            const matrix = map[y][x]
            if (matrix === 1) {
                world.innerHTML += "<div class='wall'></div>"
            } else if (matrix === 2) {
                world.innerHTML += "<div class='coin'></div>"    
            } else if (matrix === 3) {
                world.innerHTML += "<div class='ground'></div>"
            } else {
                world.innerHTML += "<div class='pacman down'></div>"
            }
        }
        world.innerHTML += "<br>"
    }
}

function drawWorldU() {
    world.innerHTML = '' //iniciar o world sempre vazio quando a função rodar
    for (let y = 0; y < map.length; y++) {
        // console.log(map[y]);
        for (let x = 0; x < map[y].length; x++) {
            // console.log(map[y][x]);
            const matrix = map[y][x]
            if (matrix === 1) {
                world.innerHTML += "<div class='wall'></div>"
            } else if (matrix === 2) {
                world.innerHTML += "<div class='coin'></div>"    
            } else if (matrix === 3) {
                world.innerHTML += "<div class='ground'></div>"
            } else {
                world.innerHTML += "<div class='pacman up'></div>"
            }
        }
        world.innerHTML += "<br>"
    }
}

function drawWorldL() {
    world.innerHTML = '' //iniciar o world sempre vazio quando a função rodar
    for (let y = 0; y < map.length; y++) {
        // console.log(map[y]);
        for (let x = 0; x < map[y].length; x++) {
            // console.log(map[y][x]);
            const matrix = map[y][x]
            if (matrix === 1) {
                world.innerHTML += "<div class='wall'></div>"
            } else if (matrix === 2) {
                world.innerHTML += "<div class='coin'></div>"    
            } else if (matrix === 3) {
                world.innerHTML += "<div class='ground'></div>"
            } else {
                world.innerHTML += "<div class='pacman left'></div>"
            }
        }
        world.innerHTML += "<br>"
    }
}

game.addEventListener('keydown', function (event){
    let key = event.key
    if (key == 'ArrowDown') {
        console.log(key);
        if (map[pacman.y+1][pacman.x] !== 1) {
            if (map[pacman.y+1][pacman.x] === 2){
                score += 10
                point.innerHTML = score
            }
            map[pacman.y][pacman.x] = 3
            pacman.y += 1
            map[pacman.y][pacman.x] = 5
            drawWorldD()
        }
    }
    else if (key == 'ArrowUp') {
        if (map[pacman.y-1][pacman.x] !== 1) {
            if (map[pacman.y-1][pacman.x] === 2){
                score += 10
                point.innerHTML = score
            }
            map[pacman.y][pacman.x] = 3
            pacman.y -= 1
            map[pacman.y][pacman.x] = 5
            drawWorldU()
        }
    }
    else if (key == 'ArrowRight') {
        if (map[pacman.y][pacman.x+1] !== 1) {
            if (map[pacman.y][pacman.x+1] === 2){
                score += 10
                point.innerHTML = score
            }
            map[pacman.y][pacman.x] = 3
            pacman.x += 1
            map[pacman.y][pacman.x] = 5
            drawWorld()
        }
    }
    else if (key == 'ArrowLeft') {
        if (map[pacman.y][pacman.x-1] !== 1) {
            if (map[pacman.y][pacman.x-1] === 2){
                score += 10
                point.innerHTML = score
            }
            map[pacman.y][pacman.x] = 3
            pacman.x -= 1
            map[pacman.y][pacman.x] = 5
            drawWorldL()
        }
    }
})     

drawWorld()