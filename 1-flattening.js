let arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(arrays) {
    let belfast = arrays.reduce ((a, b) => a.concat(b))
    return belfast;
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
// → [1, 2, 3, 4, 5, 6]