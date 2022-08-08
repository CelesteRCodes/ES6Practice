function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

console.log(getMessage());

function getMessage() {
  const year = new Date().getFullYear();

  // return `The year is` + year;
  return `The year is ${year}`;
}

console.log(getMessage());

// template literal usage: decrease ambiguity with long strings that
// need to be computed together in some fashion

const device_id = 4;
const guid = 20;
const username = "divine";

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;
console.log(data);
