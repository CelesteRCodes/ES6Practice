// destructuring objects is pulling off of properties

var expense = {
  type: "Business",
  amount: "$45 USD",
};

// var type = expense.type;
// const { type } = expense;
// var amount = expense.amount;
// const { amount } = expense;

const { type, amount } = expense;

// example:

// var savedFile = {
//   extension: ".jpg",
//   name: "repost",
//   size: 1440,
// };

// function fileSummary(file) {
//   return `The file ${file.name}.${file.extension} is the size ${file.size} pixels`;
// }

// fileSummary(savedFile);

var savedFile = {
  extension: ".jpg",
  name: "Repost",
  size: 1440,
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}${extension} is the size ${size} pixels`;
}

fileSummary(savedFile);
