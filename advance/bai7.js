const createDeepCopy = (input) => {
    if (input instanceof Date) {
        // convert input to ms then convert to date
        return new Date(input.getTime()); // BASE CASE when input is of instance Date
    }
    if (typeof input !== "object") {
        return input; //BASE CASE
    }
    // if input is array copy is [] else copy is {}
    let copy = {};
    // get value key in input
    for (let key in input) {
        const value = input[key];
        copy[key] = createDeepCopy(value); //recursive call for each element of an array/object
    }

    return copy;
};
let original1 = {
    name: 'Chi',
    marks: {
        maths: 9,
        biology: 10
    }
}
let original2 = new Date()
let deepCopied = createDeepCopy(original2);

// deepCopied["name"] = "An"

console.log(deepCopied, original2);