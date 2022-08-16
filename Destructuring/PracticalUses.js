// function that takes username and password and saves to a database

// function signup(username, password) {
// 	// create new user
// }

// signup('myname', 'mypassword');

// now you want more info for user to signup

// function signup(username, password, email, DOB, city) {
//   // create new user
// }
// signup("myname", "mypassword", "email@g.com", "1/1/1993", "Detroit");

// when you have a long argument for a function, use rest operator

function signup({ username, password, email, DOB, city }) {
  // create new user

  const user = {
    username: "myname",
    password: "mypassword",
    email: "email@g.com",
    DOB: "1/1/1993",
    city: "Detroit",
  };
}
signup(user);

// how to turn an array of arrays into an array of objects

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

// [
//   {x: 4, y: 5},
//   {x: 10, y: 1},
//   {x: 0, y: 40}
// ]

// points.map(pair => {
// 	const x = pair[0];
//   const y = pair[1];
// });

// points.map(pair => {
//   const [x, y] = pair;
// });

points.map(([x, y]) => {
  return { x, y };
});
