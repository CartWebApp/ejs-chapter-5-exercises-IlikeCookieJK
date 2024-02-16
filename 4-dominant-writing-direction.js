const SCRIPTS = require('./includes/scripts.js');

require('./includes/scripts.js') // include the scripts used by the chapter
// let c = console.log;
// function dominantDirection(text) {
//   for (x of SCRIPTS) {
//     c(groupName(x))
//   }
// }

function cS(x) {
  for (let z of SCRIPTS) {
    if (z.ranges.some(([from, to]) => {
      return x >= from && x < to;
    })) {
      console.log(z.direction)
      return z;
    }
  }
  return null;
}
console.log(cS(121));


// function CountBy (x, gn) {
//   let z = []
//   for (let xx of x) {
//     let name = gn(xx);
//     let known
//   }
// }
  
  // console.log(dominantDirection("Hello!"));
  // → ltr
  // console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl