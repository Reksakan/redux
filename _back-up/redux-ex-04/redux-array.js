// const addCounter = (list) => {
//   list.push(0);
//   return list;
// }

// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];
  
//   deepFreeze(listBefore);
  
//   expect(
//     addCounter(listBefore)
//   ).toEqual(listAfter);
// };

// testAddCounter();
// console.log('Al tests passed');



//my part

const array = [1, 2];
const arrayAdd = [3, 4];
const arrayRemove = [0, 1, 2, 3, 3, 4, 5];
const arrayIncrement = [0, 1, 2, 2, 4, 5, 6];

const addCounter01 = (list) => {
  return list.concat(0);
}

const addCounter02 = (list) => {
  return [...list, 0];
}

const removeCounter01 = (list, index) => {
  return list
    .slice(0, index)
    .concat(list.slice(index+1))
}

// console.log('Remove symbol from array', removeCounter01(arrayRemove, 4));

const removeCounter02 = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}

// console.log('Remove symbol from array ES6: ', removeCounter02(arrayRemove, 4));

 const incrementCounter01 = (list, index) => {
   return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));
 }

 const incrementCounter02 = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}

console.log('Increment01: ', incrementCounter01(arrayIncrement,3));
console.log('Increment02: ', incrementCounter02(arrayIncrement,3));


// const arrayNew01 = array.concat(arrayAdd);
// const arrayNew02 = [...array, 3, 4];
// console.log('arrayNew01: ', arrayNew01);
// console.log('arrayNew02: ', arrayNew02);

// const arrayNew01 = addCounter01(array);
// console.log('arrayNew01: ', arrayNew01);

// const arrayNew02 = addCounter02(array);
// console.log('arrayNew02: ', arrayNew02);