// let str = 'baraban';
// let strRev = '';
// let n = str.length;

// for (i=n-1; i>=0; i--) {
//   strRev +=  str[i];
// }

// console.log('strRev: ', strRev)

// // let strRev2 = str.split("").reverse().join("");
// // console.log('strRev2: ', strRev2)

// let strRevA1 = str.split("");
// console.log('strRevA1: ', strRevA1);


let str = 'baraban'
let strRev1 = str.split("")
console.log('strRev1',  strRev1)
let strRev2 = strRev1
strRev2.reverse()
let strRev3 = strRev2.join("")

console.log('strRev2',  strRev2)
console.log('strRev3',  strRev3)  

const array = ['n', 'a', 't', 'a']
const word = array.reduce((acc, letter) => {return acc + letter});
console.log('word: ', word)