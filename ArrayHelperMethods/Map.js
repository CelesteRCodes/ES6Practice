var numbers = [1, 2, 3, 4, 5];
var doubleNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubleNumbers;

// collect properties off an array of objects (aka 'a pluck')
// see in client side rendering (Angular/React)

var cars = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car) {
	return car.price;
});

prices;