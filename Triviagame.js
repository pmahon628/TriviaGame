var questions = [{
    ques: "What year did the Battle of Hastings Occur?",
    ans: ["1115", "1066", "1123", "987"],
    name: "Hastings",
    correct: "1066",
    divClass: ".Hastings"
},
{
    ques: "What river did the U.S and Britsh forces first cross to get into Germany in WW2?",
    ans: ["Danube", "Elbe", "Rhine", "Seine"],
    name: "Rhine",
    correct: "Rhine",
    divClass: ".River"
},
{
    ques: "Who was king of England during the American Revolution?",
    ans: ["Henrey VII", "George VI", "George III", "George II"],
    name: "Kings",
    correct: "George III",
    divClass: ".Kings"
},
{
    ques: "Who was the last king of Russia and when did he die?",
    ans: ["Nicholas II, 1918", "Charles III, 1917", "Nicolas II, 1917", "Ivan IV, 1914"],
    name: "Russia",
    correct: "Nicholas II, 1917",
    divClass: ".Russia"
},
{
    ques: "Who was the first secretary of treasury",
    ans: ["Thomas Jefferson", "Ben Franklin", "Alexander Hamilton", "John Adams"],
    name: "Hamilton",
    correct: "Alexander Hamilton",
    divClass: ".Hamilton"
},
{
    ques: "This person became president after Lincoln",
    ans: ["Ulyses Grant", "Franklin Pierce", "James Buchanan", "Andrew Johnson"],
    name: "Johnson",
    correct: "Andrew Johnson",
    divClass: ".Johnson"
},
{
    ques: "In 1796, this scientist discovered the vaccaniation against Polio",
    ans: ["Michael Faraday", "Edward Jenner", "Marie Cure", "Neils Bohr"],
    name: "Jenner",
    correct: "Edward Jenner",
    divClass: ".Jenner"
},
{
    ques: "What was the first battle in WW1?",
    ans: ["Battle of the Somme", "Battle of Mullhouse", "First Battle of the Marne", "Battle of the Lorraine"],
    name: "Mullhouse",
    correct: "Battle of Mullhouse",
    divClass: ".Mullhouse"
},
{
    ques: "Wnat ship was the Japanese surrender signed on at the end of WW2?",
    ans: ["Missouri", "Iowa", "Yorktown", "Minnesota"],
    name: "Surrender",
    correct: "Missouri",
    divClass: ".Surrender"
},
{
    ques: "What year was the world wide web invented?",
    ans: ["1989", "1988", "1990", "1987"],
    name: "Year",
    correct: "1989",
    divClass: ".Year"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $(".start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

console.log("start-btn");
console.log(this)

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
for (var i = 0; i < 10; i++) {
$('.questions').prepend('<div class="' + questions[i].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[i].ques + '</div>');
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[i].name + '" value="' + questions[i].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr/>');
}
}

var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut();
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correct++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
     $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    
    clearInterval(timer);
    return;
}
}, 1000);


$('#Submit').on('click', function() {
clearInterval(timer);
})
};



var gradeQuiz = $('#Submit').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

countdown();
$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);

}); 