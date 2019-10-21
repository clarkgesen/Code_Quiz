score1 = {initials: "", score: 0};
score2 = {initials: "", score: 0};
score3 = {initials: "", score: 0};
score4 = {initials: "", score: 0};
score5 = {initials: "", score: 0};

score = JSON.parse(window.localStorage.getItem('score'));

function rankScores(score){
if(score.score >= score1.score){
    score5.initials = score4.initials;
    score5.score = score4.score;
    score4.initials = score3.initials;
    score4.score = score3.score;
    score3.initials = score2.initials;
    score3.score = score2.score;
    score2.initials = score1.initials;
    score2.score = score1.score;
    score1.initials = score.initials;
    score1.score = score.score;
} else if (score.score >= score2.score){
    score5.initials = score4.initials;
    score5.score = score4.score;
    score4.initials = score3.initials;
    score4.score = score3.score;
    score3.initials = score2.initials;
    score3.score = score2.score;
    score2.initials = score.initials;
    score2.score = score.score;
} else if (score.score >= score3.score){
    score5.initials = score4.initials;
    score5.score = score4.score;
    score4.initials = score3.initials;
    score4.score = score3.score;
    score3.initials = score.initials;
    score3.score = score.score;
} else if (score.score >= score4.score){
    score5.initials = score4.initials;
    score5.score = score4.score;
    score4.initials = score.initials;
    score4.score = score.score;
} else if (score.score >= score5.score){
    score5.initials = score.initials;
    score5.score = score.score;
}
}
