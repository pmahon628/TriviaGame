var myQuestions =[
    {
        question: "What year did the Battle of Hastings Occur?",
        answers: ["1115", '1066', '1123', '987'],
        name: '1066',
        correct: '1066',
         },
    {
        question: "What river did the U.S and Britsh forces first cross to get into Germany in WW2?",
         answers: ['Danube', 'Elbe', 'Rhine', 'Seine'],
         name: 'Rhine',
        correct: 'Rhine'
      },

    {
         question: "Who was king of England during the American Revolution?",  
         answers: ['Henrey VII', 'George VI', 'George III', 'George II'],
         name: 'George III',
         corect: 'George III',
     }, 
        {
         question: "Who was the last king of Russia, and when did he die?",
         answers: ['Nicholas II, 1918', 'Charles III, 1917', 'Nicholas II 1917', 'Ivan IV, 1914'],
          name: 'Nicholas II, 1918',
          correct: 'Nicholas II, 1918',
        },
        {
            question: 'Who was the first secretary of treasury?',
            answers: ['Thomas Jefferson', 'Ben Franklin', 'Alexander Hamilton', 'John Adams'],
            answer: 'Alexander Hamilton',
             name: 'Alexander Hamilton',
              
          },
        {
            question: 'This person became president after Lincoln died',
            answers:['Ulysses Grant', 'Franklin Pierce', 'James Buchanan', 'Andrew Johnson'],
            answer: 'Andrew Johnson',
            name: 'Andrew Johnson',   
        },
        {
            question: 'In 1796, this person discovered the vaccination against smallpox?',
            answers:['Michael Faraday', 'Edward Jenner', 'Marie Cure', 'Niels Bohr'],
            answer: 'Edward Jenner',  
            name: 'Edward Jenner',          
         },
        {
            question: 'What was the first battle of World War I?',
            answers:['Battle of the Somme', 'Battle of Mullhouse', 'First Battle of Marne', 'Battle of Lorraine'],
             answer: 'Battle of Mullhouse',
             name: 'Battle of Mullhouse',
         },
         {
            question: 'What ship was the Japanese surrender signed on?',
            answers: ['Yorktown', 'Minnesota', 'Iowa', 'Missouri'],
             answer: 'Missouri',
             name: 'Missouri'
         },
        {
            question: 'What year was the world wide web invented?',
            answers: ['1989', '1988', '1987', '1990'],
            answer: '1989',
             name: '1989',
        },
     ];  
   




// var start= $('#start-btn');
// start.addEventListener('click', function(){
// $('.mainScreen').show();
// $().parent().hide();
// coutdown(60);
// questionDisplay();
// });
// console.log('click!');
// console.log(this);

//show questions

var questionDisplay = function() {
 $(".myQuestions :not('#sub-but')").empty();

 for (var i = 0; i < 10; i++) {
     $('.myQuestions').prepend('<div class="' + questions[i].name + '"></div>');
     $(myQuestions[i].divClass).append('<div class ="questions">' + myQuestions[i].ques + '</div>');
     
     for (var i = 0; i <= 3; i++) {
         $(myQuestions[j].divClass).append('<input type="radio"  name="' + myQuestions[i].name + '" value="' + myQuestions[i].ans[i] + '"/><label for="' + labels[i] + '">' + myQuestions[i].ans[i] + '</label>');
     }
     $('.questions').appendTo('</hr>');
 }
}

//count down timer

function startTimer(duration, display) {
 var timer = duration, minutes, seconds;
 setInterval(function () {
     minutes = parseInt(timer / 60, 10);
     seconds = parseInt(timer % 60, 10);

     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds : seconds;

     display.textContent = minutes + ":" + seconds;

     if (--timer < 0) {
         timer = duration;
     }
 }, 1000);
}

window.onload = function () {
 var fiveMinutes = 60 * 5,
     display = document.querySelector('#time');
 startTimer(fiveMinutes, display);
};


// var countDown = function(seconds){
// var timer =setInterval(function(){
//     seconds = seconds -1;
//     $('time-remain').html(seconds);

//     if(seconds <= 0){
//         $('.container').fadeout(500);
//         var corect = 0;
//         var wrong = 0;
//         var noAnswer = 0;
// //
//         for(var i = 0; i < 10; i++){
//             if ($('input:radio name=' + questions[i].name + '']:checked')val() === questions[i].correct)
//             correct ++;)
//                 console.log('correct':''+ i)})
         
//             else{
//                 wrong++;
//                 console.log('wrong': + i);
//             };
//         }
//         $('#cTimeUp').append(correct);
//         $('#wTimeUp').append(wrong);

//         clearInterval(timer);
//         return;
//     }
// }} , 3000);
    
$('#sub-but').on('click', function(){
 clearInterval(timer);
})
var gradeQuiz = $('#sub-but').on('click', function() {

 var correct= 0;
 var wrong = 0;

for (var i = 0; i < 10; i++) {

     if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

         correctAnswers++;
     } else {
         wrongAnswers++;
     };
 };

 countdown();
$('#answerScreen').show();
 
 $('#correctScreen').append(correctAnswers);
 
 $('#wrongScreen').append(wrongAnswers);

})

// var myQuestions =[
//        {
//            question: "What year did the Battle of Hastings Occur?",
//            answers: ["1115", '1066', '1123', '987'],
//            name: '1066',
//            correct: '1066',
//             },
//        {
//            question: "What river did the U.S and Britsh forces first cross to get into Germany in WW2?",
//             answers: ['Danube', 'Elbe', 'Rhine', 'Seine'],
//             name: 'Rhine',
//            correct: 'Rhine'
//          },
   
//        {
//             question: "Who was king of England during the American Revolution?",  
//             answers: ['Henrey VII', 'George VI', 'George III', 'George II'],
//             name: 'George III',
//             corect: 'George III',
//         }, 
//            {
//             question: "Who was the last king of Russia, and when did he die?",
//             answers: ['Nicholas II, 1918', 'Charles III, 1917', 'Nicholas II 1917', 'Ivan IV, 1914'],
//              name: 'Nicholas II, 1918',
//              correct: 'Nicholas II, 1918',
//            },
//            {
//                question: 'Who was the first secretary of treasury?',
//                answers: ['Thomas Jefferson', 'Ben Franklin', 'Alexander Hamilton', 'John Adams'],
//                answer: 'Alexander Hamilton',
//                 name: 'Alexander Hamilton',
                 
//              },
//            {
//                question: 'This person became president after Lincoln died',
//                answers:['Ulysses Grant', 'Franklin Pierce', 'James Buchanan', 'Andrew Johnson'],
//                answer: 'Andrew Johnson',
//                name: 'Andrew Johnson',   
//            },
//            {
//                question: 'In 1796, this person discovered the vaccination against smallpox?',
//                answers:['Michael Faraday', 'Edward Jenner', 'Marie Cure', 'Niels Bohr'],
//                answer: 'Edward Jenner',  
//                name: 'Edward Jenner',          
//             },
//            {
//                question: 'What was the first battle of World War I?',
//                answers:['Battle of the Somme', 'Battle of Mullhouse', 'First Battle of Marne', 'Battle of Lorraine'],
//                 answer: 'Battle of Mullhouse',
//                 name: 'Battle of Mullhouse',
//             },
//             {
//                question: 'What ship was the Japanese surrender signed on?',
//                answers: ['Yorktown', 'Minnesota', 'Iowa', 'Missouri'],
//                 answer: 'Missouri',
//                 name: 'Missouri'
//             },
//            {
//                question: 'What year was the world wide web invented?',
//                answers: ['1989', '1988', '1987', '1990'],
//                answer: '1989',
//                 name: '1989',
//            },
//         ];  
//     }  

// // var labels = ['first', 'second', 'third', 'fourth'];

// //start the game

// var startBtn = $('#start-btn');
// startBtn.addEventListener('click', function(){
// $('.mainScreen').show();
//   $().parent().hide();
//   coutdown(60);
//   questionDisplay();
// });
// console.log('click!');
// console.log(this);

// //show questions

// var questionDisplay = function() {
//     $(".myQuestions :not('#sub-but')").empty();
   
//     for (var i = 0; i < 10; i++) {
//         $('.myQuestions').prepend('<div class="' + questions[i].name + '"></div>');
//         $(myQuestions[i].divClass).append('<div class ="questions">' + myQuestions[i].ques + '</div>');
        
//         for (var i = 0; i <= 3; i++) {
//             $(myQuestions[j].divClass).append('<input type="radio"  name="' + myQuestions[i].name + '" value="' + myQuestions[i].ans[i] + '"/><label for="' + labels[i] + '">' + myQuestions[i].ans[i] + '</label>');
//         }
//         $('.questions').appendTo('</hr>');
//     }
// }

// //count down timer

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };


// // var countDown = function(seconds){
// // var timer =setInterval(function(){
// //     seconds = seconds -1;
// //     $('time-remain').html(seconds);

// //     if(seconds <= 0){
// //         $('.container').fadeout(500);
// //         var corect = 0;
// //         var wrong = 0;
// //         var noAnswer = 0;
// // //
// //         for(var i = 0; i < 10; i++){
// //             if ($('input:radio name=' + questions[i].name + '']:checked')val() === questions[i].correct)
// //             correct ++;)
// //                 console.log('correct':''+ i)})
            
// //             else{
// //                 wrong++;
// //                 console.log('wrong': + i);
// //             };
// //         }
// //         $('#cTimeUp').append(correct);
// //         $('#wTimeUp').append(wrong);

// //         clearInterval(timer);
// //         return;
// //     }
// // }} , 3000);
       
// $('#sub-but').on('click', function(){
//     clearInterval(timer);
// })
// var gradeQuiz = $('#sub-but').on('click', function() {

//     var correct= 0;
//     var wrong = 0;
 
//  for (var i = 0; i < 10; i++) {

//         if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

//             correctAnswers++;
//         } else {
//             wrongAnswers++;
//         };
//     };

//     countdown();
//    $('#answerScreen').show();
    
//     $('#correctScreen').append(correctAnswers);
    
//     $('#wrongScreen').append(wrongAnswers);

// )}