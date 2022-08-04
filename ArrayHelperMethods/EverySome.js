var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

// return boolean if all computers can run program that
// requires ram: 16 or if some computer can run program

var allCanRunProgram = true;
var onlySomeCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allCanRunProgram = false;
  } else {
    onlySomeCanRunProgram = true;
  }
}

console.log(allCanRunProgram);
cpnsole.log(onlySomeCanRunProgram);

// return true if all computers can run program
computers.every(function (computer) {
  return computer.ram > 16;
});

// return true if some of the computers can run program
computers.some(function (computer) {
  return computer.ram > 16;
});

// validate inputs of login

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field("Divine");
var password = new Field("2222");
var birthdate = new Field("2/2/2222");

console.log(username.validate() && password.validate());

var fields = [username, password, birthdate];

var formIsValid = fields.every(function (field) {
  return field.validate();
});

console.log(formIsValid);
