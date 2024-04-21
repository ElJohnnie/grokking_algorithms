function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function makeMatrix() {
    let arr = [];
    for (let i = 0; i <= 3; i++) {
        arr[i] = [];
        for (let j = 0; j <= 3; j++) {
            arr[i][j] = getRandomInt(1, 10);
        }
    }
    return arr;
}

console.info(makeMatrix())
