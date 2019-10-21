
var score = 0;
var time = 75;
var questionTime = 75;
$(document).ready(function () {
    var scoreEl = document.getElementById("score");
    var timeEl = document.querySelector("#time");
    var start = document.querySelector("#startBtn");
    start.addEventListener("click", setTimeout);
    function setTimeout() {
        var timeInterval = setInterval(function () {
            time--;
            timeEl.textContent = time;

            $("#startBtn").hide();

            if (time === 0) {
                clearInterval(timeInterval);
                alert("Time's Up");
            }
            if (time == 74) {
                displayQuestions(0);
            }
        }, 1000);
    }

    function displayQuestions(i) {
        if (i === (questions.length)) {
            typeInitials();
        }
        if (i < questions.length) {
            document.getElementById("title").textContent = questions[i]["title"];
            document.getElementById("btn1").textContent = questions[i]["choices"][0];
            document.getElementById("btn2").textContent = questions[i]["choices"][1];
            document.getElementById("btn3").textContent = questions[i]["choices"][2];
            document.getElementById("btn4").textContent = questions[i]["choices"][3];
            registerAnswer(i);
        }
    }

    function registerAnswer(i) {

        $("#btn1").on('click', function () {
            console.log(score);
            if (questions[i]["choices"][0] === questions[i]["answer"]) {
                // console.log((questionTime - time));
                if ((questionTime - time) >= 25) {
                    var addScore = 25;
                } else if ((questionTime - time) >= 10 && (questionTime - time) < 15) {
                    var addScore = 75;
                } else {
                    var addScore = 150;
                }
            } else {
                time -= 5;
            }
            questionTime = time;
            i++;
            score = score + addScore;
            scoreEl.textContent = score;
            displayQuestions(i);
        })

        $("#btn2").on('click', function () {
            console.log(score);
            if (questions[i]["choices"][1] === questions[i]["answer"]) {
                if ((questionTime - time) >= 15) {
                    addScore = 25
                } else if ((questionTime - time) >= 10 && (questionTime - time) < 15) {
                    addScore = 75
                } else {
                    addScore = 150;
                }
            } else {
                time -= 5;
            }
            questionTime = time;
            i++;
            score = score + addScore;
            scoreEl.textContent = score;
            displayQuestions(i);
        })

        $("#btn3").on('click', function () {
            console.log(score);
            if (questions[i]["choices"][2] === questions[i]["answer"]) {
                if ((questionTime - time) >= 15) {
                    addScore = 25;
                } else if ((questionTime - time) >= 10 && ((questionTime - time) < 15)) {
                    addScore = 75;
                } else {
                    addScore = 150;
                }
            } else {
                time -= 5;
            }

            questionTime = time;
            i++;
            score = score + addScore;
            scoreEl.textContent = score;
            displayQuestions(i);
        });

        $("#btn4").on('click', function () {
            console.log(score);
            if (questions[i]["choices"][3] === questions[i]["answer"]) {
                if ((questionTime - time) >= 15) {
                    addScore = 25;
                } else if ((questionTime - time) >= 10 && (questionTime - time) < 15) {
                    addScore = 75;
                } else {
                    addScore = 150;
                }
            } else {
                time -= 5;
            }

            questionTime = time;
            i++;
            score = score + addScore;
            scoreEl.textContent = score;
            displayQuestions(i);
        })
        console.log(i);

    }

    function typeInitials() {
        document.getElementById("title").textContent = "Enter your initials: ";
        $("#btn1").hide();
        $("#btn2").hide();
        $("#btn3").hide();
        $("#btn4").hide();
        $(".my-4").hide();


        var form = document.createElement("form");
        form.setAttribute('id', "myForm");
        title.appendChild(form);

        var i = document.createElement("input"); //input element, text
        i.setAttribute('type', "text");
        i.setAttribute('name', "username");
        i.setAttribute('id', "initials");

        var s = document.createElement("input"); //input element, Submit button
        s.setAttribute('type', "submit");
        s.setAttribute('value', "Submit");

    
        form.appendChild(i);
        form.appendChild(s);

        var initials = document.getElementById("myForm");
        console.log(initials);
        var score = {initials: initials, score: score};
        window.localStorage.setItem('score', JSON.stringify(score));

        }

});


// if (choice === answer){ score++}
// if(choice !== answer){ time--, make sound}
// after choice made, clear buttons, bring up new set
// if high score, form to input initials
// store high scores in local storage
// link to high score page


