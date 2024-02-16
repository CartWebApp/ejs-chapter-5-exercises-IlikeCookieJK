const SCRIPTS = require('./includes/scripts.js');

require('./includes/scripts.js') // include the scripts used by the chapter
let ltr = 0;
let rtl = 0;
function cS(x) {
  for (let z of SCRIPTS) {
    if (z.ranges.some(([from, to]) => {
      return x >= from && x < to;
    })) {
      if (z.direction === `ltr`) {
        ltr++
      } else {
        rtl++
      }
    }
  }
  return null;
}

function dominantDirection(text) {
  for (x of text) {
    let y = x.codePointAt(0);
    cS(y);
  }
  return (rtl > ltr ? `rtl` : `ltr`)
}


  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl