const enterButton = document.getElementById("enter-button");

const verifyButton = document.getElementById("verify-button");

const welcomeScreen = document.getElementById("welcome-screen");

const verificationScreen = document.getElementById("verification-screen");

const quizScreen = document.getElementById("quiz-screen");

const answerButtons = document.querySelectorAll(".answer");

const wrongAnswer = document.getElementById("wrong-answer");

const correctAnswer = document.getElementById("correct-answer");

const anotherChanceButton =
    document.getElementById("another-chance-button");

const noChanceButton =
    document.getElementById("no-chance-button");


/* =========================
   GO INTO MY LIFE
========================= */

enterButton.addEventListener("click", function () {

    welcomeScreen.style.display = "none";

    verificationScreen.style.display = "flex";

});


/* =========================
   VERIFY
========================= */

verifyButton.addEventListener("click", function () {

    verificationScreen.style.display = "none";

    quizScreen.style.display = "flex";

});


/* =========================
   QUIZ ANSWERS
========================= */

answerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Hide both result messages first */

        wrongAnswer.style.display = "none";

        correctAnswer.style.display = "none";


        /* Check the answer */

        if (button.dataset.answer === "correct") {

            correctAnswer.style.display = "flex";

        } else {

            wrongAnswer.style.display = "flex";

        }

    });

});


/* =========================
   ANOTHER CHANCE
========================= */

anotherChanceButton.addEventListener("click", function () {

    wrongAnswer.style.display = "none";

});


/* =========================
   NO BUTTON
========================= */

noChanceButton.addEventListener("click", function () {

    wrongAnswer.style.display = "none";

    alert("Okay... maybe you should leave Hasitha's life. 😂");

});