// add testing team that will be a part of main engineering team

const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
};

const engineeringTeam = {
  testingTeam,
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
  // yield team.testingTeam.lead; could work but not reusable

  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);

  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);

// add testing team that will be a part of main engineering team
