var array = [1, 2, 3, 4, 5]
function getOddNumbers(item) {
    return item % 2 == 1
}
console.log(array.filter(getOddNumbers));
