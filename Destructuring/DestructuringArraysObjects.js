const companies = [
  { name: "Google", location: "Mountains" },
  { name: "Facebook,", location: "Park" },
  { name: "Uber", location: "Beach" },
];

// const location = companies;
// want location property of first element == 'Mountains'
const [{ location }] = companies;
console.log(location); // Mountains
// destructuring starts from outside in

const Google = {
  locations: ["Mountain View", "NYC", "London"],
};

// get access to first element inside property
// const {locations} = Google;
// locations;

const {
  locations: [location],
} = Google;
console.log(location);
