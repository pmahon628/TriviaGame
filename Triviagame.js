$(function (){
    const game= [
        {
            question: 'Who was the Roses business manager? :',
            answers: ['Mike', 'James', 'Eli', 'Patrick' ],
            correct: 2,
            image: '',
        },
        {
            question: 'This is the the town logo:',
            answers: ['Welcome Home', 'Happy To See You', 'Welcome Back', 'Where Everyone Fits In' ],
            correct: 3,
            image: '',
        },
        {
            question: 'WHat TV show did Moira star in? :',
            answers: ['Sunrise Bay', 'All My Sisters', 'Ocean View', 'Our Family' ],
            correct: 0,
            image: '',
        },
        {
            question: 'What store was before Rose Apothecary:',
            answers: ['Drugstore', 'Bookstore', 'General Store', 'Post Office' ],
            correct: 2,
            image: '',
        },
        {
            question: 'Who sings Simply The Best? :',
            answers: ['Etta James', 'Tina Turner', 'Whitney Houston', 'Celine Dion' ],
            correct: 1,
            image: '',
        },
        {
            question: 'Who was Alexis ex-boyfreind?: ',
            answers: ['Mike', 'Miguel', 'Tim', 'Stavros' ],
            correct: 3,
            image: '',
        },
        {
            question: 'Who was the Roses business manager:',
            answers: ['Mike', 'James', 'Eli', 'Patrick' ],
            correct: 2
            image: '',
        },
        {
            question: 'Who was the Roses business manager:',
            answers: ['Mike', 'James', 'Eli', 'Patrick' ],
            correct: 2
            image: '',
        },
        {
            question: 'Who does David stay with when he runs away? :',
            answers: ['Bob', 'The Amish', 'a family in Elmdale', 'Noone' ],
            correct: 1,
            image: '',
        },
        {
            question: 'Who does Patrick work with when he meets David?:',
            answers: ['Bob', 'Roland', 'Ray', 'Ronnie'],
            correct: 2,
            image: '',
        }],


// Variables:
let timer = 10;
let timerId;
let timerGo = false;
let unanswered = 0;
let right = 0;
let wrong = 0;
let currentQuestion = 0;
let userGuess = '';
let end = game.lenghth;

$('.reset').hide();

const startTimer = () => {
    if(!timerGo) {
        timerId = setInterval(countdown, 1000);
        timerGo = true;
    }
}

const countdown = () => {
    $('.timer').html(`<h3>Go Faster! ${timer}</h3>`)
    console.log(timer)

    if (timer < 0){
        unanswered++;
        stopTimer();
        $('.answers').empty();
        $('.questions').empty();
        $('.timer').html('You took to long.  The correct answer was ' + game[currentQuestion].answers[game[currentQuestion]);
    ]currentQuestion++;
    setTimeout(displayQuestion, 3000);
    }
}

const stopTimer = () => {
    timerGo = false
    timer = 10;
    clearInterval(timerId);
}

const displayQuestion = () => {
    if (!resetGame()) {
        $('.timer').empty();
        $('.questions').html(q);
        startTimer();
        let answer = game[currentQuestion].answers;
        for (i = 0, i < answer.lenght; i++){
            btn = $('<div>');
            btn.text(answer[1]).addClass('button animated fadeInUp').attr('data-value', i)
            $('.answers').append(btn);
        }

    }

const showGif = () => {
    let gif = game[currentQuestion].gif;
    $('.timer').empty();
    $('.image').append(`<img id="image" src=${gif}></img`)
    
}



