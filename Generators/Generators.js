// what is a generator?
// function that can enter/exit many times
// run some code, return a value, return back to same place and continue running

// what does it do?

// iteration with generators

// generator delegation

// generators with symbol.iterator

// function* numbers() {
//   // function *numbers(){}
//   yield;
// }

// console.log(numbers());
// const gen = numbers();
// gen.next();
// // {"done": false}
// gen.next();
// // {"done": true}

function* shopping() {
  // stuff while walking outside
  // walking down sidewalk
  // go into store with cash
  const stuffFromStore = yield "cash";

  // walking back home
  return stuffFromStore;
}

// stuff while walking in store

const gen = shopping();
// calling gen does nothing, gen.next() starts executing the code

gen.next();
// leaving our house
// walked into store
// walking up/down aisles
// purchase stuff

gen.next("groceries");
//  leaving store with groceries
