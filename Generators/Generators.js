function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}

const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();
// "done": true; no more yield statements

// generators work with forOf loops

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

myColors;
// forOf loop is ran 3 times (output of 3 before array)

const engineeringTeam = {
  size: 3,
  department: "Dev",
  lead: "Celeste",
  manager: "Alex",
  engineer: "Dave",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);
