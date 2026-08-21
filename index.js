/* =====================================================
   GET SCREENS
===================================================== */

const welcomeScreen =
    document.getElementById("welcome-screen");

const verificationScreen =
    document.getElementById("verification-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const nextChallengeScreen =
    document.getElementById("next-challenge-screen");

const memoryLockScreen =
    document.getElementById("memory-lock-screen");

const humanVerificationScreen =
    document.getElementById("human-verification-screen");

const threeDoorsScreen =
    document.getElementById("three-doors-screen");

const doorOneRoom =
    document.getElementById("door-one-room");

const doorTwoRoom =
    document.getElementById("door-two-room");

const doorThreeRoom =
    document.getElementById("door-three-room");


/* =====================================================
   WELCOME
===================================================== */

const enterButton =
    document.getElementById("enter-button");

if (enterButton) {

    enterButton.addEventListener("click", function () {

        welcomeScreen.style.display = "none";

        verificationScreen.style.display = "flex";

    });

}


/* =====================================================
   VERIFICATION
===================================================== */

const verifyButton =
    document.getElementById("verify-button");

if (verifyButton) {

    verifyButton.addEventListener("click", function () {

        verificationScreen.style.display = "none";

        quizScreen.style.display = "flex";

    });

}


/* =====================================================
   FIRST QUIZ — 4 PERSONAL QUESTIONS
===================================================== */

const quizQuestionArea =
    document.getElementById("quiz-question-area");

const quizProgress =
    document.getElementById("quiz-progress");

const wrongAnswer =
    document.getElementById("wrong-answer");

const correctAnswer =
    document.getElementById("correct-answer");

const wrongAnswerText =
    document.getElementById("wrong-answer-text");

const correctAnswerText =
    document.getElementById("correct-answer-text");

const anotherChanceButton =
    document.getElementById("another-chance-button");

const noChanceButton =
    document.getElementById("no-chance-button");

const continueQuestionButton =
    document.getElementById("continue-question-button");

const quizComplete =
    document.getElementById("quiz-complete");

const continueButton =
    document.getElementById("continue-button");


const quizQuestions = [

    {
        question: "What is Hasitha's favorite food? 🍛",
        answers: [
            "Fried Rice 🥘",
            "Kottu 🍛",
            "Pizza 🍕"
        ],
        correct: 1
    },

    {
        question: "When did we meet for the first time? ❤️",
        answers: [
            "20th January 2024",
            "2nd February 2024",
            "4th February 2024"
        ],
        correct: 1
    },

    {
        question: "When did you tell me \"I love you\" first? 💕",
        answers: [
            "4th June 2024",
            "5th June 2024",
            "6th June 2024"
        ],
        correct: 0
    },

    {
        question: "What was your first impression of me? 👀❤️",
        answers: [
            "Funny 😄",
            "Rude 😏",
            "Innocent 🥹"
        ],
        correct: 2
    }
];


let currentQuizQuestion = 0;


function renderQuizQuestion() {

    const current =
        quizQuestions[currentQuizQuestion];

    if (!current) {
        return;
    }

    quizProgress.innerHTML =
        `Question ${currentQuizQuestion + 1} of ${quizQuestions.length}`;

    quizQuestionArea.innerHTML = `

        <h3>
            ${current.question}
        </h3>

        <div class="answers quiz-answer-grid">

            ${current.answers.map(function (answer, index) {

                return `

                    <button
                        class="answer"
                        data-index="${index}">
                        ${answer}
                    </button>

                `;

            }).join("")}

        </div>

    `;

    wrongAnswer.style.display = "none";
    correctAnswer.style.display = "none";
    quizComplete.style.display = "none";

    quizQuestionArea.style.display = "block";

    quizQuestionArea
        .querySelectorAll(".answer")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const selected =
                    Number(button.dataset.index);

                if (selected === current.correct) {

                    quizQuestionArea.style.display = "none";

                    wrongAnswer.style.display = "none";

                    correctAnswer.style.display = "flex";

                    if (
                        currentQuizQuestion ===
                        quizQuestions.length - 1
                    ) {

                        correctAnswerText.innerHTML = `
                            ✅ Correct! ❤️
                            <br>
                            You remembered that one too... 🥹
                        `;

                        continueQuestionButton.innerHTML =
                            "Finish ❤️";

                    }

                    else {

                        correctAnswerText.innerHTML = `
                            ✅ Correct! ❤️
                            <br>
                            You really remember... 🥹
                        `;

                        continueQuestionButton.innerHTML =
                            "Next Question ❤️";

                    }

                }

                else {

                    quizQuestionArea.style.display = "none";

                    correctAnswer.style.display = "none";

                    wrongAnswer.style.display = "flex";

                    wrongAnswerText.innerHTML = `
                        ❌ Not quite! 😏
                        <br>
                        Maybe your memory needs a little help... ❤️
                    `;

                }

            });

        });
}


if (anotherChanceButton) {

    anotherChanceButton.addEventListener("click", function () {

        renderQuizQuestion();

    });
}


if (noChanceButton) {

    noChanceButton.addEventListener("click", function () {

        wrongAnswerText.innerHTML = `
            😢 Oh no...
            <br><br>
            Maybe you should try again later. ❤️
        `;

        anotherChanceButton.style.display = "none";
        noChanceButton.style.display = "none";

    });
}


if (continueQuestionButton) {

    continueQuestionButton.addEventListener("click", function () {

        if (
            currentQuizQuestion >=
            quizQuestions.length - 1
        ) {

            correctAnswer.style.display = "none";

            quizComplete.style.display = "flex";

            return;

        }

        currentQuizQuestion++;

        renderQuizQuestion();

    });
}


if (continueButton) {

    continueButton.addEventListener("click", function () {

        quizScreen.style.display = "none";

        nextChallengeScreen.style.display = "flex";

    });
}


function resetFirstQuiz() {

    currentQuizQuestion = 0;

    anotherChanceButton.style.display = "inline-block";
    noChanceButton.style.display = "inline-block";

    renderQuizQuestion();

}


resetFirstQuiz();


/* =====================================================
   NEXT CHALLENGE
===================================================== */

const nextChallengeButton =
    document.getElementById("next-challenge-button");

if (nextChallengeButton) {

    nextChallengeButton.addEventListener("click", function () {

        nextChallengeScreen.style.display = "none";

        startMemoryLock();

    });

}


/* =====================================================
   MEMORY LOCK
===================================================== */

const memoryImage =
    document.getElementById("memory-image");

const memoryInstruction =
    document.getElementById("memory-instruction");

const memoryQuestion =
    document.getElementById("memory-question");

const memoryTimer =
    document.getElementById("memory-timer");

const memoryThreeImages =
    document.getElementById("memory-three-images");


let memoryTimerInterval = null;

let currentMemoryQuestion = 0;


/* =====================================================
   MEMORY QUESTIONS
===================================================== */

const memoryQuestions = [

    {
        image: "images/memory-question1.jpg",

        question:
            "Where was this picture taken? 📸❤️",

        answers: [
            "My House",
            "Your House",
            "Peache's Party"
        ],

        correct: 0
    },

    {
        images: [
            "images/memory-gift1.jpeg",
            "images/memory-gift2.jpeg",
            "images/memory-gift3.jpeg"
        ],

        question:
            "What did I give you first? 🎁❤️",

        answers: [
            "1",
            "2",
            "3"
        ],

        correct: 1
    }

];


/* =====================================================
   START MEMORY LOCK
===================================================== */

function startMemoryLock() {

    memoryLockScreen.style.display = "flex";

    currentMemoryQuestion = 0;

    showMemoryQuestion();

}


/* =====================================================
   SHOW MEMORY
===================================================== */

function showMemoryQuestion() {

    clearInterval(memoryTimerInterval);

    memoryImage.style.display = "none";

    memoryThreeImages.style.display = "none";

    memoryQuestion.style.display = "none";

    memoryQuestion.innerHTML = "";

    memoryInstruction.innerHTML =
        "📸 Remember this moment...";


    const current =
        memoryQuestions[currentMemoryQuestion];


    if (current.image) {

        memoryImage.src =
            current.image;

        memoryImage.style.display =
            "block";

        startViewingTimer();

    }


    else if (current.images) {

        memoryThreeImages.innerHTML = "";

        current.images.forEach(function (image, index) {

            const card =
                document.createElement("div");

            card.className =
                "memory-card";


            const img =
                document.createElement("img");

            img.src = image;


            const number =
                document.createElement("div");

            number.className =
                "memory-number";

            number.innerText =
                index + 1;


            card.appendChild(img);

            card.appendChild(number);

            memoryThreeImages.appendChild(card);

        });


        memoryThreeImages.style.display =
            "flex";

        startViewingTimer();

    }

}


/* =====================================================
   MEMORY VIEW TIMER
===================================================== */

function startViewingTimer() {

    let timeLeft = 5;

    memoryTimer.innerHTML =
        "⏳ " + timeLeft;


    memoryTimerInterval =
        setInterval(function () {

            timeLeft--;

            memoryTimer.innerHTML =
                "⏳ " + timeLeft;


            if (timeLeft <= 0) {

                clearInterval(memoryTimerInterval);

                hideMemoryAndAskQuestion();

            }

        }, 1000);

}


/* =====================================================
   HIDE MEMORY / ASK QUESTION
===================================================== */

function hideMemoryAndAskQuestion() {

    memoryImage.style.display = "none";

    memoryThreeImages.style.display = "none";

    memoryInstruction.innerHTML =
        "🤔 What do you remember?";


    const current =
        memoryQuestions[currentMemoryQuestion];


    memoryQuestion.innerHTML = `

        <h3>
            ${current.question}
        </h3>

        <div class="memory-answers">

            ${current.answers.map(function (answer, index) {

                return `

                    <button
                        class="memory-answer"
                        data-index="${index}">

                        ${answer}

                    </button>

                `;

            }).join("")}

        </div>

    `;


    memoryQuestion.style.display = "flex";

    startAnswerTimer();

}


/* =====================================================
   ANSWER TIMER
===================================================== */

function startAnswerTimer() {

    let timeLeft = 5;

    memoryTimer.innerHTML =
        "⏳ " + timeLeft;


    const buttons =
        document.querySelectorAll(".memory-answer");


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            clearInterval(memoryTimerInterval);

            const selected =
                Number(button.dataset.index);


            const current =
                memoryQuestions[currentMemoryQuestion];


            if (selected === current.correct) {

                showMemoryResult(true);

            }

            else {

                showMemoryResult(false);

            }

        });

    });


    memoryTimerInterval =
        setInterval(function () {

            timeLeft--;

            memoryTimer.innerHTML =
                "⏳ " + timeLeft;


            if (timeLeft <= 0) {

                clearInterval(memoryTimerInterval);

                memoryTimer.innerHTML =
                    "⏰ Time's up!";

                showMemoryResult(false);

            }

        }, 1000);

}


/* =====================================================
   MEMORY RESULT
===================================================== */

function showMemoryResult(correct) {

    memoryQuestion.innerHTML = "";


    if (correct) {

        memoryQuestion.innerHTML = `

            <p>

                ✅ Correct! ❤️

                <br>

                You really remember...

            </p>

            <button id="memory-continue">

                Continue ❤️

            </button>

        `;

    }

    else {

        memoryQuestion.innerHTML = `

            <p>

                ❌ Not quite... 😏

                <br>

                Your memory needs a little work.

            </p>

            <button id="memory-retry">

                Try Again ❤️

            </button>

        `;

    }


    memoryQuestion.style.display = "flex";


    const memoryContinue =
        document.getElementById("memory-continue");

    const memoryRetry =
        document.getElementById("memory-retry");


    if (memoryContinue) {

        memoryContinue.addEventListener("click", function () {

            currentMemoryQuestion++;


            if (
                currentMemoryQuestion >=
                memoryQuestions.length
            ) {

                startHumanVerification();

            }

            else {

                showMemoryQuestion();

            }

        });

    }


    if (memoryRetry) {

        memoryRetry.addEventListener("click", function () {

            showMemoryQuestion();

        });

    }

}


/* =====================================================
   HUMAN VERIFICATION
===================================================== */

function startHumanVerification() {

    memoryLockScreen.style.display = "none";

    humanVerificationScreen.style.display = "flex";

}


/* =====================================================
   HUMAN PUZZLE
===================================================== */

const humanPuzzle =
    document.getElementById("human-puzzle");

const humanPiece =
    document.getElementById("human-piece");

const humanResult =
    document.getElementById("human-result");


let dragging = false;

let offsetX = 0;

let offsetY = 0;


/* =====================================================
   MOUSE DRAG
===================================================== */

if (humanPiece) {

    humanPiece.addEventListener("mousedown", function (event) {

        dragging = true;

        const rect =
            humanPiece.getBoundingClientRect();

        offsetX =
            event.clientX - rect.left;

        offsetY =
            event.clientY - rect.top;

    });

}


document.addEventListener("mousemove", function (event) {

    if (!dragging) return;

    const puzzleRect =
        humanPuzzle.getBoundingClientRect();


    let x =
        event.clientX -
        puzzleRect.left -
        offsetX;


    let y =
        event.clientY -
        puzzleRect.top -
        offsetY;


    x = Math.max(
        0,
        Math.min(
            x,
            puzzleRect.width -
            humanPiece.offsetWidth
        )
    );


    y = Math.max(
        0,
        Math.min(
            y,
            puzzleRect.height -
            humanPiece.offsetHeight
        )
    );


    humanPiece.style.left =
        x + "px";

    humanPiece.style.top =
        y + "px";

});


document.addEventListener("mouseup", function () {

    if (!dragging) return;

    dragging = false;

    checkHumanPuzzle();

});


/* =====================================================
   TOUCH DRAG
===================================================== */

if (humanPiece) {

    humanPiece.addEventListener(
        "touchstart",
        function (event) {

            event.preventDefault();

            dragging = true;

            const touch =
                event.touches[0];

            const rect =
                humanPiece.getBoundingClientRect();

            offsetX =
                touch.clientX - rect.left;

            offsetY =
                touch.clientY - rect.top;

        },
        { passive: false }
    );

}


document.addEventListener(
    "touchmove",
    function (event) {

        if (!dragging) return;

        event.preventDefault();

        const touch =
            event.touches[0];

        const puzzleRect =
            humanPuzzle.getBoundingClientRect();


        let x =
            touch.clientX -
            puzzleRect.left -
            offsetX;


        let y =
            touch.clientY -
            puzzleRect.top -
            offsetY;


        x = Math.max(
            0,
            Math.min(
                x,
                puzzleRect.width -
                humanPiece.offsetWidth
            )
        );


        y = Math.max(
            0,
            Math.min(
                y,
                puzzleRect.height -
                humanPiece.offsetHeight
            )
        );


        humanPiece.style.left =
            x + "px";

        humanPiece.style.top =
            y + "px";

    },
    { passive: false }
);


document.addEventListener("touchend", function () {

    if (!dragging) return;

    dragging = false;

    checkHumanPuzzle();

});


/* =====================================================
   HUMAN PUZZLE CHECK
===================================================== */

function checkHumanPuzzle() {

    const puzzleRect =
        humanPuzzle.getBoundingClientRect();

    const pieceRect =
        humanPiece.getBoundingClientRect();


    const pieceCenterX =
        pieceRect.left +
        pieceRect.width / 2;

    const pieceCenterY =
        pieceRect.top +
        pieceRect.height / 2;


    const targetCenterX =
        puzzleRect.left +
        puzzleRect.width / 2;

    const targetCenterY =
        puzzleRect.top +
        puzzleRect.height / 2;


    const distance =
        Math.sqrt(

            Math.pow(
                pieceCenterX -
                targetCenterX,
                2
            )

            +

            Math.pow(
                pieceCenterY -
                targetCenterY,
                2
            )

        );


    if (distance < 80) {

        humanResult.innerHTML = `

            <p>

                🎉 Human Verified! ❤️

                <br>

                Maybe you really do belong
                in Hasitha's life...

            </p>

            <button id="human-continue">

                Continue ❤️

            </button>

        `;


        humanPiece.style.pointerEvents =
            "none";


        const humanContinue =
            document.getElementById(
                "human-continue"
            );


        humanContinue.addEventListener(
            "click",
            function () {

                humanVerificationScreen.style.display =
                    "none";

                showThreeDoors();

            }
        );

    }

    else {

        humanResult.innerHTML = `

            <p>

                ❌ Not quite! 😏

                <br>

                That's not where you belong.

                <br>

                Try again. ❤️

            </p>

        `;

    }

}


/* =====================================================
   SHOW THREE DOORS
===================================================== */

function showThreeDoors() {

    stopDoorThreeMedia();

    welcomeScreen.style.display = "none";

    verificationScreen.style.display = "none";

    quizScreen.style.display = "none";

    nextChallengeScreen.style.display = "none";

    memoryLockScreen.style.display = "none";

    humanVerificationScreen.style.display = "none";

    doorOneRoom.style.display = "none";

    doorTwoRoom.style.display = "none";

    if (doorThreeRoom) {

        doorThreeRoom.style.display = "none";

    }


    threeDoorsScreen.style.display = "flex";


    const doorResult =
        document.getElementById("door-result");


    if (doorResult) {

        doorResult.innerHTML = "";

    }

}


/* =====================================================
   DOOR BUTTONS
===================================================== */

const doors =
    document.querySelectorAll(".door");


doors.forEach(function (door) {

    door.addEventListener("click", function () {

        const doorNumber =
            door.dataset.door;

        handleDoorChoice(doorNumber);

    });

});


/* =====================================================
   HANDLE DOOR CHOICE
===================================================== */

function handleDoorChoice(doorNumber) {

    const doorResult =
        document.getElementById("door-result");


    /* =========================================
       DOOR 1
    ========================================== */

    if (doorNumber === "1") {

        threeDoorsScreen.style.display =
            "none";

        doorOneRoom.style.display =
            "flex";


        const content =
            document.querySelector(
                ".door-one-content"
            );


        const pictureSection =
            document.getElementById(
                "heart-picture-section"
            );


        if (content) {

            content.style.display =
                "block";

        }


        if (pictureSection) {

            pictureSection.style.display =
                "none";

        }


        const animation =
            document.querySelector(
                ".door-opening-animation"
            );


        if (animation) {

            animation.style.animation =
                "none";

            void animation.offsetWidth;

            animation.style.animation =
                "roomReveal 2.5s ease forwards";

        }


        const light =
            document.querySelector(
                ".room-light"
            );


        if (light) {

            light.style.animation =
                "none";

            void light.offsetWidth;

            light.style.animation =
                "roomEnter 2s ease forwards";

        }

    }


    /* =========================================
       DOOR 2
    ========================================== */

    else if (doorNumber === "2") {

        startDoorTwoMemory();

    }


    /* =========================================
       DOOR 3 — REAL DOOR ❤️
    ========================================== */

    else if (doorNumber === "3") {

        startDoorThree();

    }

}


/* =====================================================
   DOOR 1 → VIEW HEART
===================================================== */

const viewHeartButton =
    document.getElementById(
        "view-heart-button"
    );


if (viewHeartButton) {

    viewHeartButton.addEventListener(
        "click",
        function () {

            const content =
                document.querySelector(
                    ".door-one-content"
                );


            const pictureSection =
                document.getElementById(
                    "heart-picture-section"
                );


            content.style.display =
                "none";


            pictureSection.style.display =
                "flex";

        }
    );

}


/* =====================================================
   DOOR 1 → BACK TO DOORS
===================================================== */

const backToDoorsButton =
    document.getElementById(
        "back-to-doors-button"
    );


if (backToDoorsButton) {

    backToDoorsButton.addEventListener(
        "click",
        function () {

            doorOneRoom.style.display =
                "none";

            threeDoorsScreen.style.display =
                "flex";


            const doorResult =
                document.getElementById(
                    "door-result"
                );


            if (doorResult) {

                doorResult.innerHTML =
                    "";

            }

        }
    );

}


/* =====================================================
   🚪 DOOR 2 — MEMORY PHOTOS
===================================================== */

const memoryPhotos = [

    "images/memory1.jpg",
    "images/memory2.jpg",
    "images/memory3.jpg",
    "images/memory4.jpg",
    "images/memory5.jpg",
    "images/memory6.jpeg",
    "images/memory7.jpeg",
    "images/memory8.jpeg",
    "images/memory9.jpeg",
    "images/memory10.jpeg",
    "images/memory11.jpeg",
    "images/memory12.jpeg",
    "images/memory13.jpeg",
    "images/memory14.jpeg",
    "images/memory15.jpeg",
    "images/memory16.jpeg",
    "images/memory17.jpeg",
    "images/memory18.jpeg",
    "images/memory19.jpeg",
    "images/memory20.jpeg",
    "images/memory21.jpeg",
    "images/memory22.jpeg",
    "images/memory23.jpeg",
    "images/memory24.jpeg",
    "images/memory25.jpeg",
    "images/memory26.jpeg",
    "images/memory27.jpeg",
    "images/memory28.jpeg",
    "images/memory29.jpeg",
    "images/memory30.jpeg",
    "images/memory31.jpeg",
    "images/memory32.jpeg",
    "images/memory33.jpeg",
    "images/memory34.jpeg",
    "images/memory35.jpeg",
    "images/memory36.jpeg",
    "images/memory37.jpeg",
    "images/memory38.jpeg",
    "images/memory39.jpeg",
    "images/memory40.jpeg"

];


/* =====================================================
   DOOR 2 SETTINGS
===================================================== */

const DOOR_TWO_CARDS = 9;
const DOOR_TWO_FLIP_TIME = 2500;
const DOOR_TWO_TOTAL_TIME = 15000;
const DOOR_TWO_FLIP_DURATION = 1050;

let doorTwoInterval = null;
let doorTwoFinishTimeout = null;
let doorTwoCards = [];
let doorTwoImageIndex = 0;
let doorTwoActive = false;
let doorTwoCurrentlyFlipped = false;


/* =====================================================
   START DOOR 2
===================================================== */

function startDoorTwoMemory() {

    clearInterval(doorTwoInterval);
    clearTimeout(doorTwoFinishTimeout);

    doorTwoActive = true;
    doorTwoCurrentlyFlipped = false;
    doorTwoImageIndex = 0;

    welcomeScreen.style.display = "none";
    verificationScreen.style.display = "none";
    quizScreen.style.display = "none";
    nextChallengeScreen.style.display = "none";
    memoryLockScreen.style.display = "none";
    humanVerificationScreen.style.display = "none";
    threeDoorsScreen.style.display = "none";
    doorOneRoom.style.display = "none";
    doorThreeRoom.style.display = "none";

    doorTwoRoom.style.display = "flex";

    const finalMessage =
        document.getElementById("door-two-final");

    const backButton =
        document.getElementById("door-two-back");

    const wall =
        document.getElementById("memory-card-wall");

    if (finalMessage) {
        finalMessage.classList.remove("show");
    }

    if (backButton) {
        backButton.style.display = "none";
    }

    if (wall) {
        wall.classList.remove("door-two-wall-hide");
        wall.style.display = "grid";
    }

    createDoorTwoWall();
    preloadDoorTwoImages();
    showDoorTwoSet(false);

    doorTwoFinishTimeout =
        setTimeout(function () {
            finishDoorTwoMemory();
        }, DOOR_TWO_TOTAL_TIME);

    doorTwoInterval =
        setInterval(function () {

            if (!doorTwoActive) {
                return;
            }

            showDoorTwoSet(true);

        }, DOOR_TWO_FLIP_TIME);
}


/* =====================================================
   CREATE 3 × 3 WALL
===================================================== */

function createDoorTwoWall() {

    const wall =
        document.getElementById("memory-card-wall");

    if (!wall) {
        return;
    }

    wall.innerHTML = "";
    doorTwoCards = [];
    doorTwoCurrentlyFlipped = false;

    for (let i = 0; i < DOOR_TWO_CARDS; i++) {

        const card =
            document.createElement("div");

        card.className = "memory-display-card";

        const inner =
            document.createElement("div");

        inner.className = "memory-display-inner";

        const front =
            document.createElement("div");

        front.className = "memory-display-front";

        const back =
            document.createElement("div");

        back.className = "memory-display-back";

        const frontImage =
            document.createElement("img");

        const backImage =
            document.createElement("img");

        frontImage.alt = "Our memory";
        backImage.alt = "Our memory";

        front.appendChild(frontImage);
        back.appendChild(backImage);

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        wall.appendChild(card);

        doorTwoCards.push({
            card,
            frontImage,
            backImage
        });
    }
}


/* =====================================================
   PRELOAD ALL 40 PHOTOS
===================================================== */

function preloadDoorTwoImages() {

    memoryPhotos.forEach(function (path) {

        const image = new Image();
        image.src = path;

    });
}


/* =====================================================
   SHOW A 9-PHOTO SET
===================================================== */

function showDoorTwoSet(animate) {

    if (!doorTwoCards.length) {
        return;
    }

    const nextIndexes = [];

    for (let i = 0; i < DOOR_TWO_CARDS; i++) {

        nextIndexes.push(
            (doorTwoImageIndex + i) % memoryPhotos.length
        );
    }

    if (!animate) {

        doorTwoCards.forEach(function (cardInfo, index) {

            const path = memoryPhotos[nextIndexes[index]];

            cardInfo.frontImage.src = path;
            cardInfo.backImage.src =
                memoryPhotos[
                    (nextIndexes[index] + DOOR_TWO_CARDS) %
                    memoryPhotos.length
                ];

            cardInfo.card.classList.remove("flipped");

        });

        doorTwoCurrentlyFlipped = false;
        doorTwoImageIndex += DOOR_TWO_CARDS;
        return;
    }

    /*
       Prepare the hidden side first.
       Every card gets a different next photo.
    */

    doorTwoCards.forEach(function (cardInfo, index) {

        cardInfo.backImage.src =
            memoryPhotos[nextIndexes[index]];

    });

    /*
       Flip all 9 cards together.
       This is an actual card flip now,
       not a rotation of the entire wall.
    */

    doorTwoCards.forEach(function (cardInfo, index) {

        setTimeout(function () {

            if (!doorTwoActive) {
                return;
            }

            cardInfo.card.classList.add("flipped");

        }, index * 35);

    });

    /*
       Once the cards have reached the back side,
       swap the two image sources while hidden.
    */

    setTimeout(function () {

        if (!doorTwoActive) {
            return;
        }

        doorTwoCards.forEach(function (cardInfo) {

            const oldFront =
                cardInfo.frontImage.src;

            cardInfo.frontImage.src =
                cardInfo.backImage.src;

            cardInfo.backImage.src =
                oldFront;

        });

        doorTwoCurrentlyFlipped = true;

    }, DOOR_TWO_FLIP_DURATION);

    doorTwoImageIndex += DOOR_TWO_CARDS;

    /*
       When the next interval comes, flip them back.
       Because the image sources were swapped while hidden,
       the new memories are now on the visible side.
    */

    setTimeout(function () {

        if (!doorTwoActive) {
            return;
        }

        doorTwoCards.forEach(function (cardInfo, index) {

            setTimeout(function () {

                if (!doorTwoActive) {
                    return;
                }

                cardInfo.card.classList.remove("flipped");

            }, index * 35);

        });

        doorTwoCurrentlyFlipped = false;

    }, DOOR_TWO_FLIP_TIME - 350);
}


/* =====================================================
   FINISH DOOR 2
===================================================== */

function finishDoorTwoMemory() {

    if (!doorTwoActive) {
        return;
    }

    doorTwoActive = false;

    clearInterval(doorTwoInterval);
    clearTimeout(doorTwoFinishTimeout);

    doorTwoInterval = null;
    doorTwoFinishTimeout = null;

    const wall =
        document.getElementById("memory-card-wall");

    const finalMessage =
        document.getElementById("door-two-final");

    const backButton =
        document.getElementById("door-two-back");

    if (wall) {
        wall.classList.add("door-two-wall-hide");
    }

    setTimeout(function () {

        if (wall) {
            wall.style.display = "none";
        }

        if (finalMessage) {
            finalMessage.classList.add("show");
        }

        if (backButton) {
            backButton.style.display = "inline-block";
        }

    }, 650);
}


/* =====================================================
   DOOR 2 → BACK TO THREE DOORS
===================================================== */

const doorTwoBack =
    document.getElementById("door-two-back");


if (doorTwoBack) {

    doorTwoBack.addEventListener(
        "click",
        function () {

            doorTwoActive = false;

            clearInterval(doorTwoInterval);
            clearTimeout(doorTwoFinishTimeout);

            doorTwoInterval = null;
            doorTwoFinishTimeout = null;

            if (doorTwoRoom) {
                doorTwoRoom.style.display = "none";
            }

            showThreeDoors();

        }
    );
}


/* =====================================================
   ❤️ DOOR 3
   CAMERA + MICROPHONE VERIFICATION
===================================================== */


/* ---------------------------------------------
   ELEMENTS
--------------------------------------------- */

const doorThreeOpening =
    document.getElementById(
        "door-three-opening"
    );

const doorThreeCameraStep =
    document.getElementById(
        "door-three-camera-step"
    );

const doorThreeCameraScan =
    document.getElementById(
        "door-three-camera-scan"
    );

const doorThreeVoiceStep =
    document.getElementById(
        "door-three-voice-step"
    );

const doorThreeSuccess =
    document.getElementById(
        "door-three-success"
    );

const anniversaryFinale =
    document.getElementById(
        "anniversary-finale"
    );


const startCameraButton =
    document.getElementById(
        "start-camera-button"
    );


const doorThreeVideo =
    document.getElementById(
        "door-three-video"
    );


const cameraError =
    document.getElementById(
        "camera-error"
    );


const cameraStatusText =
    document.getElementById(
        "camera-status-text"
    );


const voiceVisualizer =
    document.getElementById(
        "voice-visualizer"
    );


const voiceBars =
    document.querySelectorAll(
        ".voice-bar"
    );


const voiceStatus =
    document.getElementById(
        "voice-status"
    );


const voiceHint =
    document.getElementById(
        "voice-hint"
    );


const voiceProgressFill =
    document.getElementById(
        "voice-progress-fill"
    );


const voiceError =
    document.getElementById(
        "voice-error"
    );


let doorThreeCameraStream =
    null;


let doorThreeMicStream =
    null;


let doorThreeAudioContext =
    null;


let doorThreeAnalyser =
    null;


let doorThreeAudioSource =
    null;


let doorThreeAnimationFrame =
    null;


let doorThreeVoiceActiveTime =
    0;


let doorThreeLastFrame =
    0;


let doorThreeVoiceVerified =
    false;


let doorThreeCameraTimer =
    null;


let doorThreeSuccessTimer =
    null;

/* =====================================================
   REAL FACE VERIFICATION
===================================================== */

const FACE_REFERENCE_IMAGE =
    "images/face-reference.jpg";

const FACE_MATCH_THRESHOLD =
    0.52;

let referenceFaceDescriptor =
    null;

let faceVerificationRunning =
    false;

let faceVerificationSuccess =
    false;


/* =====================================================
   LOAD FACE MODELS
===================================================== */

async function loadFaceModels() {

    try {

        cameraStatusText.innerHTML =
            "🧠 Preparing face verification...";

        await faceapi.nets.tinyFaceDetector.loadFromUri(
            "./models"
        );

        await faceapi.nets.faceLandmark68Net.loadFromUri(
            "./models"
        );

        await faceapi.nets.faceRecognitionNet.loadFromUri(
            "./models"
        );

        console.log(
            "✅ Face models loaded."
        );

        return true;

    }

    catch (error) {

        console.error(
            "Face model loading error:",
            error
        );

        cameraStatusText.innerHTML =
            "⚠️ Face verification couldn't start.";

        return false;

    }

}


/* =====================================================
   LOAD REFERENCE FACE
===================================================== */

async function loadReferenceFace() {

    try {

        cameraStatusText.innerHTML =
            "❤️ Looking at the reference photo...";

        /*
           Load the reference image.
        */
        const referenceImage =
            await faceapi.fetchImage(
                FACE_REFERENCE_IMAGE
            );

        /*
           Make sure the image has actually loaded
           before trying to detect the face.
        */
        if (
            !referenceImage ||
            !referenceImage.complete ||
            referenceImage.naturalWidth === 0
        ) {

            throw new Error(
                "Reference image could not be loaded."
            );

        }

        /*
           Give the browser a tiny moment to finish
           rendering the image.
        */
        await new Promise(function (resolve) {

            requestAnimationFrame(function () {

                requestAnimationFrame(resolve);

            });

        });

        let detection = null;

        /*
           ATTEMPT 1
           Good balance between speed and detection.
        */
        try {

            detection =
                await faceapi
                    .detectSingleFace(
                        referenceImage,
                        new faceapi.TinyFaceDetectorOptions({
                            inputSize: 512,
                            scoreThreshold: 0.20
                        })
                    )
                    .withFaceLandmarks()
                    .withFaceDescriptor();

        }
        catch (error) {

            console.warn(
                "Reference face detection attempt 1 failed:",
                error
            );

        }

        /*
           ATTEMPT 2
           Lower threshold in case the face is
           slightly difficult to detect.
        */
        if (!detection) {

            console.log(
                "🔄 Retrying reference face detection..."
            );

            try {

                detection =
                    await faceapi
                        .detectSingleFace(
                            referenceImage,
                            new faceapi.TinyFaceDetectorOptions({
                                inputSize: 416,
                                scoreThreshold: 0.10
                            })
                        )
                        .withFaceLandmarks()
                        .withFaceDescriptor();

            }
            catch (error) {

                console.warn(
                    "Reference face detection attempt 2 failed:",
                    error
                );

            }

        }

        /*
           ATTEMPT 3
           Final fallback.
        */
        if (!detection) {

            console.log(
                "🔄 Final reference face detection attempt..."
            );

            try {

                detection =
                    await faceapi
                        .detectSingleFace(
                            referenceImage,
                            new faceapi.TinyFaceDetectorOptions({
                                inputSize: 320,
                                scoreThreshold: 0.05
                            })
                        )
                        .withFaceLandmarks()
                        .withFaceDescriptor();

            }
            catch (error) {

                console.warn(
                    "Reference face detection attempt 3 failed:",
                    error
                );

            }

        }

        /*
           If all attempts failed, stop the
           reference verification safely.
        */
        if (!detection) {

            throw new Error(
                "No face was detected in face-reference.jpg"
            );

        }

        /*
           Save the reference face descriptor.
        */
        referenceFaceDescriptor =
            detection.descriptor;

        console.log(
            "✅ Reference face descriptor created successfully."
        );

        console.log(
            "Reference face box:",
            detection.detection.box
        );

        /*
           Continue to live face verification.
        */
        cameraStatusText.innerHTML =
            "❤️ Reference accepted. Looking for you...";

        return true;

    }

    catch (error) {

        console.error(
            "Reference face error:",
            error
        );

        cameraStatusText.innerHTML =
            "⚠️ I couldn't detect the face in the reference photo.";

        return false;

    }

}


/* =====================================================
   VERIFY LIVE CAMERA FACE
===================================================== */

async function verifyLiveFace() {

    if (
        !doorThreeVideo ||
        !referenceFaceDescriptor ||
        faceVerificationRunning
    ) {

        return false;

    }


    faceVerificationRunning =
        true;


    cameraStatusText.innerHTML =
        "🔍 Looking for someone special... ❤️";


    try {

        /*
           Try several frames so a slight
           camera movement doesn't immediately
           cause failure.
        */

        for (
            let attempt = 0;
            attempt < 20;
            attempt++
        ) {

            if (
                !doorThreeVideo.videoWidth ||
                !doorThreeVideo.videoHeight
            ) {

                await new Promise(
                    function (resolve) {

                        setTimeout(
                            resolve,
                            300
                        );

                    }
                );

                continue;

            }


            const liveFace =
                await faceapi
                    .detectSingleFace(
                        doorThreeVideo,
                        new faceapi.TinyFaceDetectorOptions({
                            inputSize: 320,
                            scoreThreshold: 0.5
                        })
                    )
                    .withFaceLandmarks()
                    .withFaceDescriptor();


            /*
               No face detected.
            */

            if (!liveFace) {

                cameraStatusText.innerHTML =
                    "👀 Please look toward the camera...";

                await new Promise(
                    function (resolve) {

                        setTimeout(
                            resolve,
                            400
                        );

                    }
                );

                continue;

            }


            /*
               Compare reference descriptor
               with live descriptor.
            */

            const distance =
                faceapi.euclideanDistance(
                    referenceFaceDescriptor,
                    liveFace.descriptor
                );


            console.log(
                "Face distance:",
                distance
            );


            /*
               Lower distance = more similar.
            */

            if (
                distance <
                FACE_MATCH_THRESHOLD
            ) {

                faceVerificationSuccess =
                    true;


                cameraStatusText.innerHTML =
                    "❤️ I knew it was you...";


                return true;

            }


            cameraStatusText.innerHTML =
                "🔍 Checking your face...";


            await new Promise(
                function (resolve) {

                    setTimeout(
                        resolve,
                        450
                    );

                }
            );

        }


        /*
           No successful match.
        */

        cameraStatusText.innerHTML =
            "❌ I couldn't verify the face.";


        return false;

    }

    catch (error) {

        console.error(
            "Live face verification error:",
            error
        );


        cameraStatusText.innerHTML =
            "⚠️ Face verification error.";


        return false;

    }

    finally {

        faceVerificationRunning =
            false;

    }

}


/* ---------------------------------------------
   SETTINGS
--------------------------------------------- */

const VOICE_REQUIRED_TIME =
    1800;


const VOICE_THRESHOLD =
    0.045;


const VOICE_MAX_TIME =
    15000;


/* =====================================================
   START DOOR 3
===================================================== */

function startDoorThree() {

    stopDoorThreeMedia();


    threeDoorsScreen.style.display =
        "none";


    doorOneRoom.style.display =
        "none";


    doorTwoRoom.style.display =
        "none";


    doorThreeRoom.style.display =
        "flex";


    resetDoorThree();


    /* -----------------------------------------
       CINEMATIC DOOR OPENING
    ----------------------------------------- */

    doorThreeOpening.classList.remove(
        "door-three-opening-active"
    );


    void doorThreeOpening.offsetWidth;


    doorThreeOpening.classList.add(
        "door-three-opening-active"
    );


    /*
       Wait for the opening animation.
    */

    setTimeout(function () {

        doorThreeOpening.style.display =
            "none";

        doorThreeCameraStep.classList.add(
            "active"
        );

    }, 3600);

}


/* =====================================================
   RESET DOOR 3
===================================================== */

function resetDoorThree() {

    doorThreeOpening.style.display =
        "flex";

    doorThreeCameraStep.classList.remove(
        "active"
    );

    doorThreeCameraScan.classList.remove(
        "active"
    );

    doorThreeVoiceStep.classList.remove(
        "active"
    );

    doorThreeSuccess.classList.remove(
        "active"
    );

    anniversaryFinale.classList.remove(
        "active"
    );


    if (cameraError) {

        cameraError.innerHTML =
            "";

    }


    if (voiceError) {

        voiceError.innerHTML =
            "";

    }


    if (voiceStatus) {

        voiceStatus.innerHTML =
            "🎤 Waiting for your voice...";

    }


    if (voiceHint) {

        voiceHint.innerHTML =
            "Start speaking... ❤️";

    }


    if (voiceProgressFill) {

        voiceProgressFill.style.width =
            "0%";

    }


    voiceBars.forEach(function (bar) {

        bar.style.height =
            "12px";

    });


    doorThreeVoiceActiveTime =
        0;

    doorThreeVoiceVerified =
        false;

}


/* =====================================================
   CAMERA BUTTON
===================================================== */

if (startCameraButton) {

    startCameraButton.addEventListener(
        "click",
        async function () {

            await startDoorThreeCamera();

        }
    );

}


/* =====================================================
   START CAMERA
===================================================== */

async function startDoorThreeCamera() {

    cameraError.innerHTML = "";

    startCameraButton.disabled = true;
    startCameraButton.innerHTML = "📷 Opening Camera...";

    if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ) {

        showCameraError(
            "Camera access is not available here. Please open the website through localhost or HTTPS."
        );

        startCameraButton.disabled = false;
        startCameraButton.innerHTML = "📷 Open Camera";
        return;
    }

    try {

        /* -------------------------------------------------
           OPEN CAMERA FIRST
           This is intentionally before face-model loading.
           It makes the live camera appear immediately.
        ------------------------------------------------- */

        doorThreeCameraStream =
            await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user",
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });

        doorThreeVideo.srcObject =
            doorThreeCameraStream;

        doorThreeVideo.muted = true;
        doorThreeVideo.autoplay = true;
        doorThreeVideo.playsInline = true;

        /* Make absolutely sure the video element starts. */
        await new Promise(function (resolve) {

            if (doorThreeVideo.readyState >= 1) {
                resolve();
                return;
            }

            doorThreeVideo.onloadedmetadata = function () {
                resolve();
            };

            setTimeout(resolve, 2000);
        });

        try {
            await doorThreeVideo.play();
        }
        catch (playError) {
            console.warn(
                "Camera video play warning:",
                playError
            );
        }

        /*
           IMPORTANT:
           The live <video> is inside the camera-scan step.
           The old code kept that step hidden while face
           verification was running, so face-api could detect
           the face but the user could not SEE the camera.

           Show the camera frame immediately after the stream
           starts. The face verification continues normally.
        */
        doorThreeCameraStep.classList.remove("active");
        doorThreeCameraScan.classList.add("active");

        cameraStatusText.innerHTML =
            "📷 Camera ready. Looking for you... ❤️";

        /* -------------------------------------------------
           LOAD FACE MODELS
        ------------------------------------------------- */

        const modelsReady =
            await loadFaceModels();

        if (!modelsReady) {

            doorThreeCameraScan.classList.remove("active");
            doorThreeCameraStep.classList.add("active");

            startCameraButton.disabled = false;
            startCameraButton.innerHTML = "📷 Try Camera Again";
            return;
        }

        /* -------------------------------------------------
           LOAD REFERENCE FACE
        ------------------------------------------------- */

        const referenceReady =
            await loadReferenceFace();

        if (!referenceReady) {

            doorThreeCameraScan.classList.remove("active");
            doorThreeCameraStep.classList.add("active");

            startCameraButton.disabled = false;
            startCameraButton.innerHTML = "📷 Try Camera Again";
            return;
        }

        /* -------------------------------------------------
           VERIFY LIVE FACE
        ------------------------------------------------- */

        const matched =
            await verifyLiveFace();

        if (!matched) {

            cameraStatusText.innerHTML =
                "❌ Hmm... I couldn't verify you.";

            doorThreeCameraScan.classList.remove("active");
            doorThreeCameraStep.classList.add("active");

            startCameraButton.disabled = false;
            startCameraButton.innerHTML = "📷 Try Again";
            return;
        }

        /* -------------------------------------------------
           ONLY AFTER A REAL MATCH:
           move to the scan animation and then voice.
        ------------------------------------------------- */

        cameraStatusText.innerHTML =
            "Looking for the owner of Hasitha's heart... ❤️";

        doorThreeCameraTimer =
            setTimeout(function () {

                cameraStatusText.innerHTML =
                    "Identity recognized. ❤️";

                setTimeout(function () {
                    startDoorThreeVoice();
                }, 1200);

            }, 3200);

    }
    catch (error) {

        console.error(
            "Camera error:",
            error
        );

        showCameraError(
            getMediaErrorMessage(error, "camera")
        );

        startCameraButton.disabled = false;
        startCameraButton.innerHTML = "📷 Try Camera Again";
    }
}

/* =====================================================
   CAMERA ERROR
===================================================== */

function showCameraError(message) {

    cameraError.innerHTML = `

        <div class="error-box">

            ⚠️ ${message}

        </div>

    `;

}


/* =====================================================
   START VOICE VERIFICATION
===================================================== */

async function startDoorThreeVoice() {

    if (doorThreeCameraStream) {

        doorThreeCameraStream
            .getTracks()
            .forEach(function (track) {

                track.stop();

            });

        doorThreeCameraStream =
            null;

    }


    doorThreeCameraScan.classList.remove(
        "active"
    );


    doorThreeVoiceStep.classList.add(
        "active"
    );


    voiceStatus.innerHTML =
        "🎤 Requesting microphone...";


    try {

        await startMicrophone();

    }

    catch (error) {

        console.error(
            "Microphone error:",
            error
        );


        voiceStatus.innerHTML =
            "🎤 Microphone unavailable";


        voiceError.innerHTML = `

            <div class="error-box">

                ⚠️ ${getMediaErrorMessage(
                    error,
                    "microphone"
                )}

            </div>

        `;

    }

}


/* =====================================================
   START MICROPHONE
===================================================== */

async function startMicrophone() {

    if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ) {

        throw new Error(
            "Microphone access is not available."
        );

    }


    doorThreeMicStream =
        await navigator.mediaDevices.getUserMedia({

            audio: {

                echoCancellation: true,

                noiseSuppression: true,

                autoGainControl: true

            },

            video: false

        });


    /*
       Create AudioContext.
    */

    doorThreeAudioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    /*
       Create analyser.
    */

    doorThreeAnalyser =
        doorThreeAudioContext.createAnalyser();


    doorThreeAnalyser.fftSize =
        256;


    doorThreeAnalyser.smoothingTimeConstant =
        0.72;


    /*
       Connect microphone to analyser.
    */

    doorThreeAudioSource =
        doorThreeAudioContext.createMediaStreamSource(
            doorThreeMicStream
        );


    doorThreeAudioSource.connect(
        doorThreeAnalyser
    );


    /*
       Start visualizer.
    */

    doorThreeLastFrame =
        performance.now();

    doorThreeVoiceActiveTime =
        0;

    doorThreeVoiceVerified =
        false;


    voiceStatus.innerHTML =
        "🎤 Listening...";


    voiceHint.innerHTML =
        "Say the message shown above... ❤️";


    startVoiceVisualizer();

}


/* =====================================================
   LIVE VOICE VISUALIZER
===================================================== */

function startVoiceVisualizer() {

    if (!doorThreeAnalyser) return;


    const dataArray =
        new Uint8Array(
            doorThreeAnalyser.fftSize
        );


    function drawVoice() {

        doorThreeAnimationFrame =
            requestAnimationFrame(
                drawVoice
            );


        doorThreeAnalyser.getByteTimeDomainData(
            dataArray
        );


        let sumSquares =
            0;


        for (
            let i = 0;
            i < dataArray.length;
            i++
        ) {

            const normalized =
                (dataArray[i] - 128) /
                128;


            sumSquares +=
                normalized *
                normalized;

        }


        const rms =
            Math.sqrt(
                sumSquares /
                dataArray.length
            );


        const now =
            performance.now();


        const delta =
            Math.min(
                now -
                doorThreeLastFrame,
                100
            );


        doorThreeLastFrame =
            now;


        /*
           Convert microphone volume
           into bar animation.
        */

        const normalizedVolume =
            Math.min(
                rms * 8,
                1
            );


        voiceBars.forEach(
            function (bar, index) {

                const wave =
                    Math.sin(
                        now / 130 +
                        index * 0.9
                    );


                const randomVariation =
                    Math.random() * 8;


                const height =
                    12 +
                    (
                        normalizedVolume *
                        (
                            65 +
                            wave * 18
                        )
                    ) +
                    randomVariation;


                bar.style.height =
                    Math.max(
                        10,
                        height
                    ) + "px";

            }
        );


        /*
           Actual voice detection.

           We accumulate only when the
           microphone level passes our
           speaking threshold.
        */

        if (
            rms >
            VOICE_THRESHOLD
        ) {

            doorThreeVoiceActiveTime +=
                delta;


            voiceStatus.innerHTML =
                "🎤 Voice detected...";


            voiceHint.innerHTML =
                "Keep speaking... ❤️";

        }

        else {

            voiceStatus.innerHTML =
                "🎤 Listening...";


            voiceHint.innerHTML =
                "I'm listening...";

        }


        /*
           Progress toward verification.
        */

        const progress =
            Math.min(
                (
                    doorThreeVoiceActiveTime /
                    VOICE_REQUIRED_TIME
                ) * 100,
                100
            );


        voiceProgressFill.style.width =
            progress + "%";


        /*
           Verification complete.
        */

        if (
            doorThreeVoiceActiveTime >=
            VOICE_REQUIRED_TIME &&
            !doorThreeVoiceVerified
        ) {

            doorThreeVoiceVerified =
                true;


            finishVoiceVerification();

            return;

        }


        /*
           If user doesn't speak for too long,
           keep listening but show hint.
        */

        if (
            now >
            15000 &&
            !doorThreeVoiceVerified
        ) {

            voiceHint.innerHTML =
                "Try speaking a little louder... ❤️";

        }

    }


    drawVoice();

}


/* =====================================================
   FINISH VOICE VERIFICATION
===================================================== */

function finishVoiceVerification() {

    if (
        doorThreeVoiceVerified !==
        true
    ) {

        return;

    }


    if (doorThreeAnimationFrame) {

        cancelAnimationFrame(
            doorThreeAnimationFrame
        );

        doorThreeAnimationFrame =
            null;

    }


    voiceProgressFill.style.width =
        "100%";


    voiceStatus.innerHTML =
        "❤️ Voice detected!";


    voiceHint.innerHTML =
        "Verification complete...";


    voiceBars.forEach(
        function (bar, index) {

            bar.style.height =
                (
                    25 +
                    Math.random() * 65
                ) + "px";

        }
    );


    /*
       Stop microphone.
    */

    stopMicrophone();


    /*
       Show success screen.
    */

    setTimeout(function () {

        doorThreeVoiceStep.classList.remove(
            "active"
        );

        doorThreeSuccess.classList.add(
            "active"
        );


        doorThreeSuccessTimer =
            setTimeout(function () {

                startAnniversaryFinale();

            }, 2600);

    }, 900);

}


/* =====================================================
   STOP MICROPHONE
===================================================== */

function stopMicrophone() {

    if (doorThreeAnimationFrame) {

        cancelAnimationFrame(
            doorThreeAnimationFrame
        );

        doorThreeAnimationFrame =
            null;

    }


    if (doorThreeAudioSource) {

        try {

            doorThreeAudioSource.disconnect();

        }

        catch (error) {}

        doorThreeAudioSource =
            null;

    }


    if (doorThreeAnalyser) {

        try {

            doorThreeAnalyser.disconnect();

        }

        catch (error) {}

        doorThreeAnalyser =
            null;

    }


    if (doorThreeMicStream) {

        doorThreeMicStream
            .getTracks()
            .forEach(function (track) {

                track.stop();

            });

        doorThreeMicStream =
            null;

    }


    if (doorThreeAudioContext) {

        try {

            doorThreeAudioContext.close();

        }

        catch (error) {}

        doorThreeAudioContext =
            null;

    }

}


/* =====================================================
   STOP ALL DOOR 3 MEDIA
===================================================== */

function stopDoorThreeMedia() {

    clearTimeout(
        doorThreeCameraTimer
    );

    clearTimeout(
        doorThreeSuccessTimer
    );


    stopMicrophone();


    if (doorThreeCameraStream) {

        doorThreeCameraStream
            .getTracks()
            .forEach(function (track) {

                track.stop();

            });

        doorThreeCameraStream =
            null;

    }


    if (doorThreeVideo) {

        doorThreeVideo.srcObject =
            null;

    }

}


/* =====================================================
   MEDIA ERROR MESSAGE
===================================================== */

function getMediaErrorMessage(
    error,
    type
) {

    if (
        error &&
        error.name ===
        "NotAllowedError"
    ) {

        return (
            "Please allow " +
            type +
            " permission in your browser and try again."
        );

    }


    if (
        error &&
        error.name ===
        "NotFoundError"
    ) {

        return (
            "No " +
            type +
            " device was found."
        );

    }


    if (
        error &&
        error.name ===
        "NotReadableError"
    ) {

        return (
            "Your " +
            type +
            " is being used by another application."
        );

    }


    if (
        error &&
        error.name ===
        "SecurityError"
    ) {

        return (
            "The browser blocked access to the " +
            type +
            "."
        );

    }


    return (
        "Could not access the " +
        type +
        ". Please check your browser permissions."
    );

}


/* =====================================================
   ❤️ ANNIVERSARY FINALE
===================================================== */

function startAnniversaryFinale() {

    doorThreeSuccess.classList.remove(
        "active"
    );


    anniversaryFinale.classList.add(
        "active"
    );


    createFinaleStars();

    createFinaleHearts();

    createFinaleMemoryPhotos();

    startFinaleConfetti();


    setTimeout(function () {

        document
            .querySelector(".finale-line-one")
            .classList.add("visible");

    }, 700);


    setTimeout(function () {

        document
            .querySelector(".finale-line-two")
            .classList.add("visible");

    }, 1700);


    setTimeout(function () {

        document
            .querySelector(".finale-main-heart")
            .classList.add("visible");

    }, 2500);


    setTimeout(function () {

        document
            .querySelector(".anniversary-title")
            .classList.add("visible");

    }, 3300);


    setTimeout(function () {

        document
            .querySelector(".anniversary-love")
            .classList.add("visible");

    }, 4300);


    setTimeout(function () {

        document
            .querySelector(".finale-divider")
            .classList.add("visible");

    }, 5000);


    setTimeout(function () {

        document
            .querySelector(".anniversary-message")
            .classList.add("visible");

    }, 5600);


    setTimeout(function () {

        document
            .querySelector(".anniversary-message.second")
            .classList.add("visible");

    }, 7200);


    setTimeout(function () {

        document
            .querySelector(".finale-last-message")
            .classList.add("visible");

    }, 9000);


    setTimeout(function () {

        const button =
            document.getElementById(
                "finale-heart-button"
            );

        if (button) {

            button.classList.add(
                "visible"
            );

        }

    }, 10500);

}


/* =====================================================
   FINALE STARS
===================================================== */

function createFinaleStars() {

    const stars =
        document.getElementById(
            "finale-stars"
        );


    if (!stars) return;


    stars.innerHTML =
        "";


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const star =
            document.createElement(
                "span"
            );


        star.className =
            "finale-star";


        star.style.left =
            Math.random() * 100 +
            "%";


        star.style.top =
            Math.random() * 100 +
            "%";


        star.style.animationDelay =
            Math.random() * 4 +
            "s";


        star.style.animationDuration =
            (
                2 +
                Math.random() * 4
            ) + "s";


        stars.appendChild(
            star
        );

    }

}


/* =====================================================
   FINALE FLOATING HEARTS
===================================================== */

function createFinaleHearts() {

    const container =
        document.getElementById(
            "finale-hearts"
        );


    if (!container) return;


    container.innerHTML =
        "";


    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "✨"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "floating-final-heart";


        heart.innerText =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 +
            "%";


        heart.style.animationDelay =
            Math.random() * 8 +
            "s";


        heart.style.animationDuration =
            (
                7 +
                Math.random() * 7
            ) + "s";


        heart.style.fontSize =
            (
                12 +
                Math.random() * 28
            ) + "px";


        container.appendChild(
            heart
        );

    }

}


/* =====================================================
   FINALE MEMORY PHOTOS
===================================================== */

function createFinaleMemoryPhotos() {

    const container =
        document.getElementById(
            "finale-memory-photos"
        );


    if (!container) return;


    container.innerHTML =
        "";


    /*
       Use 8 real memories from the
       40-photo collection.
    */

    const selected =
        [
            0,
            4,
            9,
            14,
            19,
            24,
            31,
            38
        ];


    selected.forEach(
        function (photoIndex, index) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "finale-photo-card";


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                memoryPhotos[
                    photoIndex
                ];


            image.alt =
                "Our memory";


            card.appendChild(
                image
            );


            card.style.setProperty(
                "--photo-delay",
                (
                    index * 0.18
                ) + "s"
            );


            card.style.setProperty(
                "--photo-rotate",
                (
                    -8 +
                    Math.random() * 16
                ) + "deg"
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   FINALE CONFETTI
===================================================== */

function startFinaleConfetti() {

    const container =
        document.getElementById(
            "finale-confetti"
        );


    if (!container) return;


    container.innerHTML =
        "";


    const symbols = [
        "❤️",
        "✨",
        "💕",
        "💖",
        "🌸",
        "✦"
    ];


    for (
        let i = 0;
        i < 65;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";


        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "%";


        piece.style.animationDelay =
            Math.random() * 5 +
            "s";


        piece.style.animationDuration =
            (
                5 +
                Math.random() * 5
            ) + "s";


        container.appendChild(
            piece
        );

    }

}


/* =====================================================
   FINAL SURPRISE BUTTON
===================================================== */

const finaleHeartButton =
    document.getElementById(
        "finale-heart-button"
    );


if (finaleHeartButton) {

    finaleHeartButton.addEventListener(
        "click",
        function () {

            createHeartBurst();


            finaleHeartButton.innerHTML =
                "❤️ Forever & Always ❤️";


            finaleHeartButton.disabled =
                true;


            const surprise =
                document.getElementById(
                    "finale-surprise"
                );


            if (surprise) {

                surprise.classList.add(
                    "show"
                );

            }

        }
    );

}


/* =====================================================
   FINAL HEART BURST
===================================================== */

function createHeartBurst() {

    const container =
        document.getElementById(
            "heart-burst"
        );


    if (!container) return;


    container.innerHTML =
        "";


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💞",
        "✨"
    ];


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "burst-heart";


        heart.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            150 +
            Math.random() *
            600;


        heart.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );


        heart.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );


        heart.style.animationDelay =
            Math.random() *
            0.8 +
            "s";


        container.appendChild(
            heart
        );

    }

}


/* =====================================================
   ❤️ ANNIVERSARY COUNTDOWN + LOCK
   SERVER TIME — COMPUTER CLOCK SAFE
===================================================== */

const ANNIVERSARY_TIME =
    new Date("2026-09-04T00:00:00+09:00").getTime();

let serverTimeAtSync = null;
let performanceTimeAtSync = null;


/* =====================================================
   GET SERVER TIME
===================================================== */

async function getServerTime() {

    try {

        /*
           Ask the SAME website for its server time.

           This avoids relying on the visitor's
           computer clock.
        */

        const response =
            await fetch(
                window.location.href,
                {
                    method: "HEAD",
                    cache: "no-store"
                }
            );


        const serverDate =
            response.headers.get("Date");


        if (!serverDate) {

            throw new Error(
                "Server did not provide a Date header."
            );

        }


        serverTimeAtSync =
            new Date(serverDate).getTime();


        performanceTimeAtSync =
            performance.now();


        console.log(
            "✅ Server time synchronized:",
            new Date(serverTimeAtSync)
        );


        updateCountdown();

    }

    catch (error) {

        console.error(
            "❌ Could not get server time:",
            error
        );


        /*
           Keep the door locked if trusted
           server time cannot be obtained.
        */

        if (enterButton) {

            enterButton.disabled = true;

            enterButton.style.opacity = "0.5";

            enterButton.style.cursor =
                "not-allowed";

        }

    }

}


/* =====================================================
   UPDATE COUNTDOWN
===================================================== */

function updateCountdown() {

    /*
       Don't calculate anything until
       server time has been obtained.
    */

    if (
        serverTimeAtSync === null ||
        performanceTimeAtSync === null
    ) {

        return;

    }


    /*
       performance.now() measures real elapsed
       browser time and is NOT affected when
       the user changes the computer clock.
    */

    const elapsed =
        performance.now() -
        performanceTimeAtSync;


    const trustedNow =
        serverTimeAtSync +
        elapsed;


    const difference =
        ANNIVERSARY_TIME -
        trustedNow;


    /* =================================================
       🔒 ANNIVERSARY HAS NOT ARRIVED
    ================================================= */

    if (difference > 0) {

        if (enterButton) {

            enterButton.disabled = true;

            enterButton.style.opacity = "0.5";

            enterButton.style.cursor =
                "not-allowed";

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    difference /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutes =
            Math.floor(
                (
                    difference /
                    (1000 * 60)
                ) % 60
            );


        const seconds =
            Math.floor(
                (
                    difference /
                    1000
                ) % 60
            );


        const daysElement =
            document.getElementById(
                "countdown-days"
            );


        const hoursElement =
            document.getElementById(
                "countdown-hours"
            );


        const minutesElement =
            document.getElementById(
                "countdown-minutes"
            );


        const secondsElement =
            document.getElementById(
                "countdown-seconds"
            );


        if (daysElement) {

            daysElement.textContent =
                String(days).padStart(2, "0");

        }


        if (hoursElement) {

            hoursElement.textContent =
                String(hours).padStart(2, "0");

        }


        if (minutesElement) {

            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        }


        if (secondsElement) {

            secondsElement.textContent =
                String(seconds).padStart(2, "0");

        }


        return;

    }


    /* =================================================
       ❤️ SEPTEMBER 4 HAS ARRIVED
    ================================================= */

    if (enterButton) {

        enterButton.disabled = false;

        enterButton.style.opacity = "1";

        enterButton.style.cursor =
            "pointer";

    }


    const countdown =
        document.getElementById(
            "countdown"
        );


    if (countdown) {

        countdown.innerHTML =
            "❤️ Our 1st Anniversary is here! ❤️";

    }

}


/* =====================================================
   INITIAL SERVER TIME SYNC
===================================================== */

getServerTime();


/* =====================================================
   UPDATE EVERY SECOND
===================================================== */

setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   RE-SYNC WITH SERVER EVERY 5 MINUTES
===================================================== */

setInterval(
    getServerTime,
    5 * 60 * 1000
);