let scoreTeamOne = [];
let scoreTeamTwo = [];
let teamOneScoreCount = 0, teamTwoScoreCount = 0;
let teamOneAveragedScore = 0, teamTwoAveragedScore = 0;

alert("Team One, Enter Your Scores");

for(let i = 0; i < 3; i++) {
    scoreTeamOne.push(Number(prompt(`Enter Game ${i+1} Score: `)));
    teamOneScoreCount += scoreTeamOne[i];
}

alert("Team Two, Enter Your Scores");

for(let i = 0; i < 3; i++) {
    scoreTeamTwo.push(Number(prompt(`Enter Game ${i+1} Score: `)));
    teamTwoScoreCount += scoreTeamTwo[i];
}

teamOneAveragedScore = teamOneScoreCount / 3;
teamTwoAveragedScore = teamTwoScoreCount / 3;

console.log(`Team One Score ${teamOneAveragedScore.toPrecision(5)}\nTeam Two Score ${teamTwoAveragedScore.toPrecision(5)}`);

if(teamOneAveragedScore >= 100 && teamTwoAveragedScore >= 100){
    if(teamOneAveragedScore > teamTwoAveragedScore){
        console.log("Team One WON");
    }else if(teamTwoAveragedScore > teamOneAveragedScore){
        console.log("Team Two WON");
    }else{
        console.log("Draw");
    }
}else{
    console.log("As both team's score is less than 100, the Game ended in a Draw")
}


