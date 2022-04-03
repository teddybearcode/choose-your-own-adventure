let question = {
    questionText: "what is 2 x 2?",
    answer1: "2",
    answer2: "4",
    correct: "answer2",
}

let text = document.querySelector('#js-scene');
let answer1 = document.querySelector('#js-answer1');
let answer2 = document.querySelector('#js-answer2');


text.innerHTML = question.questionText;
answer1.innerHTML = question.answer1;
answer2.innerHTML = question.answer2;



function button1() {
    if (question.correct == "answer1") {
        text.innerHTML = "correct"
    } 
    else{
        text.innerHTML = "incorrect"
    }    
}
function button2() {
    if (question.correct == "answer2"){
        text.innerHTML = "correct"
    }
    else{
        text.innerHTML = "incorrect"
    }
}
