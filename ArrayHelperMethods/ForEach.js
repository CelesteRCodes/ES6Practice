var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

// create array of numbers
var numbers = [1, 2, 3, 4, 5];

// create variable to hold the sum
var sum = 0;

// loop over array, incrementing the sum variable
numbers.forEach(function (number) {
  sum += number;
});

// print the sum variable
console.log(sum);

// examples on uses

email = [
  { id: "email", text: "email" },
  { id: "email2", text: "email" },
];
email.forEach(function (email) {
  deleteEmail(email);
});
