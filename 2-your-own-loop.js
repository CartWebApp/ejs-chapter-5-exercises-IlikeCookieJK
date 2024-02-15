function loop(akagi, kaga, amagi, akashi) {
    while (kaga(akagi)) {
        akashi(akagi);
        akagi = amagi(akagi);
    } 
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1