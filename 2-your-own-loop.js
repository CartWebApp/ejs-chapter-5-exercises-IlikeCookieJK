function loop(x, y, z, c) {
    

    let n = 0;
    while (n < x) {
        n++;
        console.log((x + 1) - n)
    } 
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1