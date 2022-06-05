// bai1+2
// [start,end]
function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start
}

function createArr() {
    var arr = []
    for (let i = 0; i < 10; i++) {
        var x = random(6, 10)
        arr.push(x)
    }
    return arr
}
console.log(createArr());