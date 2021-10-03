var readlineSync = require('readline-sync');
var score = 0;
console.log("Hello! there....")
var user = readlineSync.question("May I have your name ?");
console.log("Welcome " + user);

var knowMe = readlineSync.question("Do you know The Niklaus Mikaelson");
if (knowMe == 'yes') {
    console.log("oh! then try the quiz");
} else {
    console.log("feeling sad that you dont know the most fierce  protagonist (and sometimes antagonist/anti-hero) of the TV series");
}
console.log("Entering the options would be enough!")

function QuesAnswer(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer == answer) {
        console.log("oh! luv it's absolutely correct");
        score = score + 1;

    } else {
        console.log("never mind looser");

    }
    console.log("current Score = " + score);
    console.log("-------------");

}




var questions = [{
        question: 'Klaus is a hybrid or a combination of two supernatural beings,Which combo is he?                  a.Vampire and werewolf | b.Vampire and witch |c.Vampire and doppelgänger | d. Witch and werewolf ',
        answer: 'a'
    },

    {
        question: 'Which of these is NOT one of Klauss siblings? a.Henrik | b.Freya |c.Vincent | d.Finn ',
        answer: 'c'
    },

    {
        question: 'What year did Klaus become a vampire?a.1492 | b.1001 |c.990 | d.1864 ',
        answer: 'b'
    },

    {
        question: "What is Klaus's special talent?a.Singing | b.Dancing |c.Piano Playing | d.Painting ",
        answer: 'c'
    },

    {
        question: 'What is the name of the boy Klaus raised as a son?a.Josh | b.Marcel |c.Jackson | d.Elijah ',
        answer: 'b'
    },

    {
        question: "True or false |Klaus first met Stefan Salvatore in New York City during the prohibition era",
        answer: 'false'
    },

    {
        question: "Which one of these characters has NOT kissed Klaus?a.Cami | b.Aurora |c.Hayley | d.Katherine ",
        answer: 'd'
    }
]

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    QuesAnswer(currentQuestion.question, currentQuestion.answer)
}

if (score < 5) {
    console.log("Sorry, But If You Can't Pass This Klaus Mikaelson Test, You're A Fake Fan");
} else if (score > 5) {
    console.log("Kudos! you passed")
    console.log("You and me amy be same !");
    console.log("You are definitely incredible..." + "loved to have you in this quiz");
}