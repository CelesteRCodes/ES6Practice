// Use the 'reduce' helper to find the sum of all the distances traveled.
// Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce((sum, trip) => (sum += trip.distance), 0);

totalDistance;

// Use the 'reduce' helper to create an object that tallies the number of
// sitting and standing desks.  The object returned should have the form
// '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to
// the iterator function)

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

const deskTypes = desks.reduce(
  (tally, desk) => {
    desk.type === "sitting" ? ++tally.sitting : null;
    desk.type === "standing" ? ++tally.standing : null;
    return tally;
  },
  { sitting: 0, standing: 0 }
);

// Another really hard one!  Write a function called 'unique' that will remove
// all the duplicate values from an array.

// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]

function unique(array) {
  return array.reduce(function (acc, element) {
    var existingElement = acc.find(function (target) {
      return target === element;
    });
    if (!existingElement) {
      acc.push(element);
    }

    return acc;
  }, []);
}

function unique(array) {
  var newSet = new Set(array);
  var newArr = Array.from(newSet);
  return newArr;
}

console.log(unique(numbers));
