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

const checkCorrect = () => {
    if (userGuess === game[currentQuestion].correct){
        stopTimer();
        right++;
        showGif;
        $('.answers').empty();
        $('.questions').empty();
        currentQuestion++;
        setTimeout(() => {
          $('#image').remove();
          displayQuestion();
        }, 3000;
        } else {
            wrong++;
            userGuess = "";
            stopTimer();
            $('.answers').empty();
            $('.questions').empty();
            $('.timer').empty();
            $('.showcur').text("Wrong! The correct answer is: ' + game[currentQuestion].answers[game[currentQuestion].correct])
            currentQuestion++;
            setTimeout(() => { 
             $('.showcur').empty;
             displayQuestion();
            }, 3000;
        }
}

const resetGame = () => {
    if (currentQuestion === end) {
        $('.questions').empty();
        $('.timer').empty();
        $('.right').html(`You got ${right} Correct!`)
        $('.wrong').html(`You got ${wrong} Wrong!`)
        $('.unanswered').html(`You forgot to answer ${unanswered} questions`)
        $('.reset').show();
        return true;
    }
}

const newGame = () => {
    $('.reset').hide();
    $('.answers').empty();
    $('.questions').empty();
    $('.timer').empty();
    $('.right').empty();
    $('.wrong').empty();
    $('.unanswered').empty();
    $('.start-pic').empty();
    $('.start').show();
    $('.rules').show();
    $('wrapper').css({ 'border': '', 'backgrounf': '', 'box-shawdow': ''})
}

$('.start').on('click', function () {
    $(this).hide();
    $('.wrapper').css({ 'border': '1pt solid black', 'background': '#E3DAC9', 'box-shadow': '0 0 75px black' });
    $('.start-pic').hide();
    $('.rules').hide();
    currentQuestion = 0;
    wrong = 0;
    right = 0;
    unanswered = 0;
    startTimer();
    displayQuestion();
})

$('.answers').on('click', '.button', function () {
    userGuess = parseInt($(this).attr('data-value'))
    checkCorrect();
})

$('.reset').on('click', function () {
    newGame()
})

});