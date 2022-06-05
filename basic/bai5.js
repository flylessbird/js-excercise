const arr = [1, 3, 4, 5, 1, 3, 1];
// console.log(arr)
const count = {};
for (const element of arr) {
    function matchNum(a, v) {

        (v == element) ? a + 1 : a
    }
    // a to count
    const val = arr.reduce((a, v) => v == element ? a + 1 : a, 0)

    count[element] = val
}

console.log(count);
