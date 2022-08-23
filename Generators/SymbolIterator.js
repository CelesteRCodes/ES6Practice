const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
    // this = reference to testingTeam object
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Dev",
  lead: "Celeste",
  manager: "Alex",
  engineer: "Dave",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}

names;
