$(function (){ 
    const game = [

        {
            question: 'What is Raymond Holts middle name? :',
            answers: ['John', 'James', 'Jacob', 'Jojo' ],
            correct: 2,
            image: './images/HoltMiddle.jpg',
        },
        {
            question: 'What does Terry eat that gets him fat?:',
            answers: ['Peanuts', 'Brazil Nuts', 'Mango Yogurt', 'Cacao Nibs' ],
            correct: 3,
            image: './images/FatTerry.jpg',
        },
        {
            question: 'How many brothers does Amy Santiago have? :',
            answers: ['Seven', 'Four', 'Five', 'Three' ],
            correct: 0,
            image: './images/AmyBros.png',
        },
        {
            question: 'What inspires Jake to become a cop?:',
            answers: ['His Mom', 'DC Parlov', 'Die Hard', 'The Show Cops' ],
            correct: 2,
            image: './images/JakeDieHard.jpg',
        },
        {
            question: 'Who did Adrian  Pimento work for undercover? :',
            answers: ['Max the Killer', 'Jimmy Figgus', 'Pablo Jones', 'Jimmy Aanderson' ],
            correct: 1,
            image: './images/Pimento.jpg',
        },
        {
            question: 'What is the company Jake and Charles invest in?: ',
            answers: ['Aarbonne', 'Nutri Now', 'Beach Body', 'Nutri Boom' ],
            correct: 3,
            image: './images/NutriBoom.jpg',   
        },
        {
            question: 'What does Doug Judy name Holts new car?:',
            answers: ['Gertie', 'Amber', 'Sexarella', 'Rosa' ],
            correct: 2,
            image: './images/Sexarella.jpg',
        },
        {
            question: 'What is Jakes favorite pizza place that gets burned down called?:',
            answers: ['Marcos', 'Ginos', 'Sals', 'Gepettos' ],
            correct: 2,
            image: './images/SalsPizza.jpg',
        },
        {
            question: 'What is Sully and Hitchcocks favorite restaurant? :',
            answers: ['Hot Dog Truck', 'Wing Sluts', 'Pizza Hut', 'Rib Emporioum' ],
            correct: 0,
            image: './images/Wings.jpg',
        },
        {
            question: 'What is the name of Holts Dog?:',
            answers: ['Marc', 'Beowulf', 'Cheddar', 'Trevor'],
            correct: 2,
            image: './images/Cheddar.jpg',
        }];

        let timer = 10;
        let timerID;
        let timerGo = false;
        let unanswered = 0;
        let right = 0;
        let wrong = 0;
        let currentQuestion = 0;
        let userGuess = "";
        let end = game.length;
    
        $('.reset').hide();
    
        const startTimer = () => {
            if (!timerGo) {
                timerID = setInterval(countDown, 1000);
                timerGo = true;
            }
        }
    
        const countDown = () => {
            $('.timer').html(`<h2>You have ${timer} seconds to answer the question!</h2>`)
            console.log('timer')
    
            if (timer < 0) {
                unanswered++;
                stopTimer();
                $('.answers').empty();
                $('.questions').empty();
                $('.timer').html('You Took to long! The Correct answer was ' + game[currentQuestion].answers[game[currentQuestion].correct]);
                currentQuestion++;
                setTimeout(displayQuestion, 3000);
            }
        }
    
        const stopTimer = () => {
            timerGo = false;
            timer = 10;
            clearInterval(timerID);
        }
    
        const displayQuestion = () => {
            if (!resetGame()) {
                let q = game[currentQuestion].question;
                $('.timer').empty();
                $('.questions').html(q);
                startTimer();
                let answer = game[currentQuestion].answers;
                for (i = 0; i < answer.length; i++) {
                    btn = $('<div>');
                    btn.text(answer[i]).addClass('button animated fadeInUp').attr('data-value', i)
                    $('.answers').append(btn);
                }
            }
        }
    
        const showImage = () => {
            let image = game[currentQuestion].image;
            $('.timer').empty();
            $('.image').append(`<img id="image" src='${image}'></img>`)
        }
    
    
        const checkCorrect = () => {
            if (userGuess === game[currentQuestion].correct) {
                stopTimer();
                right++;
                showImage();
                $('.answers').empty();
                $('.questions').empty();
                currentQuestion++;
                setTimeout(() => {
                    $('#image').remove();
                    displayQuestion();
                }, 3000);
            } else {
                wrong++;
                userGuess = "";
                stopTimer();
                $('.answers').empty();
                $('.question').empty();
                $('.timer').empty();
                $('.showcur').text('Wrong! The correct answer is: ' + game[currentQuestion].answers[game[currentQuestion].correct])
                currentQuestion++;
                setTimeout(() => {
                    $('.showcur').empty();
                    displayQuestion();
                }, 3000);
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
            $('.start-pic').show();
            $('.start').show();
            $('.rules').show();
            $('.wrapper').css({ 'border': '', 'background': '', 'box-shadow': '' })
    }
    
    
        $('.start').on('click', function () {
            $(this).hide();
            $('.wrapper').css({ 'border': '15pt solid black', 'background': 'lightblue', 'box-shadow': '0 0 75px black' });
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