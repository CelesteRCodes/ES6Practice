// destructuring arrays is pulling off individual elements
const companies = ["Google", "Facebook", "Uber"];

const [name, name2, name3] = companies;

console.log(name, name2, name3);
// same as:

// const firstCompany = companies[0];
// console.log(firstCompany);

const { length } = companies;
// use curly braces to destructure a property like length of array
console.log(length);

const [name, ...rest] = companies;
console.log(name);
console.log(rest);
