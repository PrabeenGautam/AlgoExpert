const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

// answers = "Python"

function tournamentWinner(competitions: Array<string[]>, results: number[]) {
  const scorer = new Map();
  let bestTeam = "";

  for (let i = 0; i < results.length; i++) {
    const winnerTeam = competitions[i][results[i] === 1 ? 0 : 1];
    const hasWinner = scorer.get(winnerTeam);
    scorer.set(winnerTeam, (hasWinner || 0) + 1);

    if (scorer.get(winnerTeam) > (scorer[bestTeam] || 0)) {
      bestTeam = winnerTeam;
    }
  }

  return bestTeam;
}

console.log(tournamentWinner(competitions, results));
