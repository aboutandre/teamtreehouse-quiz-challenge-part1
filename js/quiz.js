let quiz = [
    ['Who are you', 'who'],
    ['How are you', 'well'],
    ['When are you', 'now']
]

let points = 0;
let right = 'You got the following questions right:';
let rightAnswers = '';
let wrong = 'You got the following questions wrong:';
let wrongAnswers = '';

for (let i = 0; quiz.length > i; i++) {
    let question = prompt(quiz[i][0]);
    if (question === quiz[i][1]) {
        points++;
        rightAnswers = rightAnswers + quiz[i][0] + '\n';
        console.log('Question correct!');
        console.log(rightAnswers);
    } else {
        points--;
        wrongAnswers = wrongAnswers + quiz[i][0] + '\n';
        console.log('Question wrong!');
        console.log(wrongAnswers);
    }
    console.log('Current points ' + points);
    if (quiz[i][2] === true) {
    } else {
    }
}

console.log(rightAnswers);

function print(message) {
    document.write('<p>' + message + '</p>');
}

print(right);
print(rightAnswers);
print(wrong);
print(wrongAnswers);