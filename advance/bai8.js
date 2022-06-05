// JSON.stringify require key order
function compareObj(obj1, obj2) {

    // console.log(JSON.stringify(Object.entries(obj1)))
    return JSON.stringify(Object.entries(obj1)) === JSON.stringify(Object.entries(obj2))
}
const std1 = {
    name: "Chi",
    marks: {
        Maths: 9,
        Literature: 8
    }

}
const std2 = {
    name: "Duc",
    marks: {
        Maths: 7,
        Literature: 6
    }

}
console.log(compareObj(std1, std2))

