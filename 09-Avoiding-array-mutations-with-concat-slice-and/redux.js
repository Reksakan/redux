const addCounter = (list) => {
  //return list.push([0]); // pushing the zero through the array mutation
  
  // return list.concat([0]); //using concat insted of .push() to avoid array mutations
  
  return [...list, 0]; //using ES6 erase spread operator 
};

const removeCounter = (list, index) => {
  // list.splice(index, 1); // deleting '10' through mutations
  // return list;
  
  // return list                              //using slice and concat instead of splice and push avoiding mutations of an array
  //     .slice(0, index)
  //     .concat(list.slice(index + 1));

  return [...list.slice(0, index), ... list.slice(index + 1)]; //ES6 consize way of writing
}

const incrementCounter = (list, index) => {
  // list[index]++;                                //with array mutations
  // return list

  // return list                                      //without array mutations
  // .slice(0, index)
  // .concat([list[index] + 1])
  // .concat(list.slice(index + 1));

  return [
    ...list.slice(0, index),                         //using ES6 erase dpread operator
    list[index] + 1, 
    ...list.slice(index + 1)
  ]
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  expect(addCounter(listBefore)).toEqual(listAfter);
  console.log('addCounter:  ', addCounter(listBefore));
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
  console.log('removeCounter:  ', removeCounter(listBefore, 1));
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
  console.log('incrementCounter', incrementCounter(listBefore, 1));
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed.');