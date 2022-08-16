function addNumbers(numbers) {
  return numbers.reduce(function (sum, number) {
    // return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

// function addNumbers(a,b,c,d,e) {
// const numbers = [a,b,c,d,e];

//  return numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);
// }

//addNumbers(1,2,3,4,5);

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7);

// example:
const defaultColors = ["red", "green"];
const userFavColors = ["purple", "teal"];

defaultColors.concat(userFavColors);
// can add in new items like: [...defaultColors, ...userFavColors, 'blue']
// can concat with spread operator
console.log([...defaultColors, ...userFavColors]);

// example 2:
function validateShoppingList(...items) {
  // can pass in all "items" of the list with spread operator
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
    // can add 'milk' to list of items
  }

  return items;
}

validateShoppingList("oranges", "bread", "eggs");

// example 3:
// deployed this code and many have been using it but you want to rename
// it without breaking everyone's code who's still using calculateProduct()

// const MathLibrary = {
// 	calculateProduct(a, b){
//  	return a * b;
//  }
// };

const MathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

MathLibrary.calculateProduct(2, 3);
MathLibrary.multiply(5, 5);
