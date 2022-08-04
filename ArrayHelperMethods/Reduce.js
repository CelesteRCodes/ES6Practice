var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// want to return ['red', 'yellow', 'blue']

primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

// whiteboarding problem balanced parens
// "()()()()" or ")("are these parentheses balanced

function balancedParens(string) {
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char == ")") {
      return --previous;
    }
    return previous;
  }, 0); // counter will increase/decrease based on open/closed parens seen, want to return 0
}

balancedParens(")(");
balancedParens("(())");

// !string.split().reduce() flip of a boolean where positive/neg number = true which is flipped to false;
// zero = false which gets flipped to true
// we want zero = true
