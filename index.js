/* =====================================================
   ANNIVERSARY WEBSITE
   HASITHA'S LIFE ❤️
===================================================== */


/* =====================================================
   BASIC ELEMENTS
===================================================== */

const enterButton =
    document.getElementById("enter-button");

const verifyButton =
    document.getElementById("verify-button");

const continueButton =
    document.getElementById("continue-button");

const nextChallengeButton =
    document.getElementById("next-challenge-button");


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
    document.getElementById(
        "human-verification-screen"
    );


/* =====================================================
   FIRST QUIZ ELEMENTS
===================================================== */

const answerButtons =
    document.querySelectorAll(".answer");

const wrongAnswer =
    document.getElementById("wrong-answer");

const correctAnswer =
    document.getElementById("correct-answer");

const anotherChanceButton =
    document.getElementById(
        "another-chance-button"
    );

const noChanceButton =
    document.getElementById(
        "no-chance-button"
    );


/* =====================================================
   MEMORY ELEMENTS
===================================================== */

const memoryTitle =
    document.getElementById(
        "memory-title"
    );

const memoryInstruction =
    document.getElementById(
        "memory-instruction"
    );

const memoryImage =
    document.getElementById(
        "memory-image"
    );

const memoryThreeImages =
    document.getElementById(
        "memory-three-images"
    );

const memoryQuestion =
    document.getElementById(
        "memory-question"
    );

const memoryTimer =
    document.getElementById(
        "memory-timer"
    );


/* =====================================================
   HUMAN VERIFICATION ELEMENTS
===================================================== */

const humanPuzzle =
    document.getElementById(
        "human-puzzle"
    );

const humanPiece =
    document.getElementById(
        "human-piece"
    );

const humanResult =
    document.getElementById(
        "human-result"
    );

const humanInstruction =
    document.getElementById(
        "human-instruction"
    );


/* =====================================================
   TIMER
===================================================== */

let memoryTimerInterval = null;


/* =====================================================
   CURRENT MEMORY
===================================================== */

let currentMemory = 0;


/* =====================================================
   MEMORY DATA
===================================================== */

const memories = [

    /* =========================================
       MEMORY 1
    ========================================== */

    {

        title:
            "🧠 Memory Lock — 1",

        type:
            "single",

        images: [
            "images/memory1.jpg"
        ],

        instruction:
            "📸 Remember this moment...",

        question:
            "📍 Where was this photo taken?",

        answers: [
            "Peache's Party",
            "My Home",
            "Malki's Home"
        ],

        correct: 2

    },


    /* =========================================
       MEMORY 2
    ========================================== */

    {

        title:
            "🧠 Memory Lock — 2",

        type:
            "multiple",

        images: [
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg"
        ],

        instruction:
            "🎁 Remember these gifts...",

        question:
            "🎁 What gift did I give you first?",

        answers: [
            "1",
            "2",
            "3"
        ],

        correct: 2

    },


    /* =========================================
       MEMORY 3
    ========================================== */

    {

        title:
            "🧠 Memory Lock — 3",

        type:
            "multiple",

        images: [
            "images/image5.jpg",
            "images/image6.jpg",
            "images/image7.jpg"
        ],

        instruction:
            "⏳ Remember these moments...",

        question:
            "🕰️ Which moment happened first?",

        answers: [
            "1",
            "2",
            "3"
        ],

        correct: 3

    }

];


/* =====================================================
   GO INTO MY LIFE
===================================================== */

enterButton.addEventListener(
    "click",
    function () {

        welcomeScreen.style.display =
            "none";

        verificationScreen.style.display =
            "flex";

    }
);


/* =====================================================
   VERIFY
===================================================== */

verifyButton.addEventListener(
    "click",
    function () {

        verificationScreen.style.display =
            "none";

        quizScreen.style.display =
            "flex";

    }
);


/* =====================================================
   FIRST QUIZ
===================================================== */

answerButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                wrongAnswer.style.display =
                    "none";

                correctAnswer.style.display =
                    "none";


                if (
                    button.dataset.answer ===
                    "correct"
                ) {

                    correctAnswer.style.display =
                        "flex";

                }

                else {

                    wrongAnswer.style.display =
                        "flex";

                }

            }
        );

    }
);


/* =====================================================
   ANOTHER CHANCE
===================================================== */

anotherChanceButton.addEventListener(
    "click",
    function () {

        wrongAnswer.style.display =
            "none";

    }
);


/* =====================================================
   NO CHANCE
===================================================== */

noChanceButton.addEventListener(
    "click",
    function () {

        wrongAnswer.style.display =
            "none";

        alert(
            "Okay... maybe you should leave Hasitha's life. 😂"
        );

    }
);


/* =====================================================
   CONTINUE AFTER FIRST QUIZ
===================================================== */

continueButton.addEventListener(
    "click",
    function () {

        quizScreen.style.display =
            "none";

        nextChallengeScreen.style.display =
            "flex";

    }
);


/* =====================================================
   I'M READY
===================================================== */

nextChallengeButton.addEventListener(
    "click",
    function () {

        nextChallengeScreen.style.display =
            "none";

        memoryLockScreen.style.display =
            "flex";

        currentMemory = 0;

        startMemory();

    }
);


/* =====================================================
   START MEMORY
===================================================== */

function startMemory() {

    clearInterval(
        memoryTimerInterval
    );


    const memory =
        memories[currentMemory];


    /* =====================================
       TITLE
    ====================================== */

    memoryTitle.textContent =
        memory.title;


    /* =====================================
       INSTRUCTION
    ====================================== */

    memoryInstruction.textContent =
        memory.instruction;


    /* =====================================
       CLEAR OLD CONTENT
    ====================================== */

    memoryQuestion.innerHTML = "";

    memoryThreeImages.innerHTML = "";


    /* =====================================
       HIDE QUESTION
    ====================================== */

    memoryQuestion.style.display =
        "none";


    /* =====================================
       SINGLE IMAGE
    ====================================== */

    if (
        memory.type ===
        "single"
    ) {

        memoryImage.src =
            memory.images[0];

        memoryImage.style.display =
            "block";

        memoryThreeImages.style.display =
            "none";

    }


    /* =====================================
       THREE IMAGES
    ====================================== */

    else {

        memoryImage.style.display =
            "none";

        memoryThreeImages.style.display =
            "flex";


        memory.images.forEach(
            function (
                image,
                index
            ) {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "memory-card";


                const img =
                    document.createElement(
                        "img"
                    );


                img.src =
                    image;


                img.alt =
                    "Memory " +
                    (index + 1);


                const number =
                    document.createElement(
                        "div"
                    );


                number.className =
                    "memory-number";


                number.textContent =
                    index + 1;


                card.appendChild(img);

                card.appendChild(number);


                memoryThreeImages.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================
       TIMER
    ====================================== */

    memoryTimer.style.display =
        "block";


    let timeLeft = 5;


    memoryTimer.textContent =
        "⏳ " +
        timeLeft;


    /* =====================================
       5 SECOND VIEWING TIMER
    ====================================== */

    memoryTimerInterval =
        setInterval(
            function () {

                timeLeft--;


                memoryTimer.textContent =
                    "⏳ " +
                    timeLeft;


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        memoryTimerInterval
                    );


                    showMemoryQuestion();

                }

            },
            1000
        );

}


/* =====================================================
   SHOW MEMORY QUESTION
===================================================== */

function showMemoryQuestion() {

    const memory =
        memories[currentMemory];


    /* =====================================
       HIDE IMAGES
    ====================================== */

    memoryImage.style.display =
        "none";

    memoryThreeImages.style.display =
        "none";


    /* =====================================
       CHANGE INSTRUCTION
    ====================================== */

    memoryInstruction.textContent =
        "🧠 Let's see what you remember...";


    /* =====================================
       QUESTION
    ====================================== */

    memoryQuestion.innerHTML = `

        <h3>
            ${memory.question}
        </h3>

        <div class="memory-answers">

            ${memory.answers
                .map(
                    function (
                        answer,
                        index
                    ) {

                        return `

                            <button
                                data-number="${index + 1}"
                            >

                                ${answer}

                            </button>

                        `;

                    }
                )
                .join("")}

        </div>

    `;


    memoryQuestion.style.display =
        "flex";


    /* =====================================
       CONNECT ANSWERS
    ====================================== */

    connectMemoryAnswers();


    /* =====================================
       5 SECOND ANSWER TIMER
    ====================================== */

    startAnswerTimer();

}


/* =====================================================
   CONNECT MEMORY ANSWERS
===================================================== */

function connectMemoryAnswers() {

    const buttons =
        document.querySelectorAll(
            ".memory-answers button"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    clearInterval(
                        memoryTimerInterval
                    );


                    buttons.forEach(
                        function (btn) {

                            btn.disabled =
                                true;

                        }
                    );


                    const selected =
                        Number(
                            button.dataset.number
                        );


                    const memory =
                        memories[currentMemory];


                    if (
                        selected ===
                        memory.correct
                    ) {

                        memoryCorrect();

                    }

                    else {

                        memoryWrong();

                    }

                }
            );

        }
    );

}


/* =====================================================
   MEMORY CORRECT
===================================================== */

function memoryCorrect() {

    memoryTimer.textContent =
        "❤️";


    memoryInstruction.textContent =
        "✨ Correct! You remembered! ❤️";


    memoryQuestion.innerHTML = `

        <p>

            🥹 You really remember
            our little moments...

        </p>


        <button
            id="next-memory-button"
        >

            🔓 Next Memory

        </button>

    `;


    const nextMemoryButton =
        document.getElementById(
            "next-memory-button"
        );


    nextMemoryButton.addEventListener(
        "click",
        function () {

            currentMemory++;


            if (
                currentMemory <
                memories.length
            ) {

                startMemory();

            }

            else {

                memoryComplete();

            }

        }
    );

}


/* =====================================================
   MEMORY WRONG
===================================================== */

function memoryWrong() {

    memoryTimer.textContent =
        "❌";


    memoryInstruction.textContent =
        "😏 Hmm... that's not quite right!";


    memoryQuestion.innerHTML = `

        <p>

            ❌ Wrong memory!

            <br>

            Are you sure you remember this one? ❤️

        </p>


        <button
            id="memory-try-again-button"
        >

            🔄 Try Again

        </button>

    `;


    document
        .getElementById(
            "memory-try-again-button"
        )
        .addEventListener(
            "click",
            function () {

                startMemory();

            }
        );

}


/* =====================================================
   ANSWER TIMER
===================================================== */

function startAnswerTimer() {

    clearInterval(
        memoryTimerInterval
    );


    let timeLeft = 5;


    memoryTimer.textContent =
        "⏳ " +
        timeLeft;


    memoryTimer.style.display =
        "block";


    memoryTimerInterval =
        setInterval(
            function () {

                timeLeft--;


                memoryTimer.textContent =
                    "⏳ " +
                    timeLeft;


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        memoryTimerInterval
                    );


                    memoryTimeUp();

                }

            },
            1000
        );

}


/* =====================================================
   MEMORY TIME UP
===================================================== */

function memoryTimeUp() {

    memoryTimer.textContent =
        "⏰";


    memoryInstruction.textContent =
        "⏰ Time's Up!";


    memoryQuestion.innerHTML = `

        <p>

            ⌛ You ran out of time!

            <br>

            You only had 5 seconds. 😏

        </p>


        <button
            id="memory-try-again-button"
        >

            🔄 Try Again

        </button>

    `;


    memoryQuestion.style.display =
        "flex";


    document
        .getElementById(
            "memory-try-again-button"
        )
        .addEventListener(
            "click",
            function () {

                startMemory();

            }
        );

}


/* =====================================================
   MEMORY COMPLETE
===================================================== */

function memoryComplete() {

    clearInterval(
        memoryTimerInterval
    );


    memoryTimer.style.display =
        "none";


    memoryInstruction.textContent =
        "🔓 Memory Lock Unlocked! ❤️";


    memoryQuestion.innerHTML = `

        <h2>

            You remembered them all! 🥹❤️

        </h2>


        <p>

            Maybe you really do belong
            in Hasitha's life...

        </p>


        <button
            id="continue-after-memory"
        >

            Continue ❤️

        </button>

    `;


    memoryQuestion.style.display =
        "flex";


    /* =====================================
       CONTINUE TO HUMAN VERIFICATION
    ====================================== */

    const memoryContinueButton =
        document.getElementById(
            "continue-after-memory"
        );


    memoryContinueButton.addEventListener(
        "click",
        function () {

            console.log(
                "Moving to Human Verification..."
            );


            /* Hide Memory Lock */

            memoryLockScreen.style.display =
                "none";


            /* Show Human Verification */

            humanVerificationScreen.style.display =
                "flex";

        }
    );

}


/* =====================================================
   HUMAN VERIFICATION
===================================================== */

let isDragging = false;

let dragOffsetX = 0;

let dragOffsetY = 0;


/* =====================================================
   START DRAG
===================================================== */

humanPiece.addEventListener(
    "mousedown",
    function (event) {

        isDragging = true;


        const pieceRect =
            humanPiece.getBoundingClientRect();


        dragOffsetX =
            event.clientX -
            pieceRect.left;


        dragOffsetY =
            event.clientY -
            pieceRect.top;


        humanPiece.style.cursor =
            "grabbing";

    }
);


/* =====================================================
   MOVE PIECE
===================================================== */

document.addEventListener(
    "mousemove",
    function (event) {

        if (!isDragging) {

            return;

        }


        const puzzleRect =
            humanPuzzle.getBoundingClientRect();


        let x =
            event.clientX -
            puzzleRect.left -
            dragOffsetX;


        let y =
            event.clientY -
            puzzleRect.top -
            dragOffsetY;


        /* =====================================
           KEEP PIECE INSIDE PUZZLE
        ====================================== */

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

    }
);


/* =====================================================
   DROP PIECE
===================================================== */

document.addEventListener(
    "mouseup",
    function () {

        if (!isDragging) {

            return;

        }


        isDragging = false;


        humanPiece.style.cursor =
            "grab";


        checkHumanPuzzle();

    }
);


/* =====================================================
   CHECK HUMAN PUZZLE
===================================================== */

function checkHumanPuzzle() {

    const pieceRect =
        humanPiece.getBoundingClientRect();


    const puzzleRect =
        humanPuzzle.getBoundingClientRect();


    /* =====================================
       TARGET = CENTER
    ====================================== */

    const targetX =
        puzzleRect.left +
        puzzleRect.width / 2 -
        humanPiece.offsetWidth / 2;


    const targetY =
        puzzleRect.top +
        puzzleRect.height / 2 -
        humanPiece.offsetHeight / 2;


    const distanceX =
        Math.abs(
            pieceRect.left -
            targetX
        );


    const distanceY =
        Math.abs(
            pieceRect.top -
            targetY
        );


    /* =====================================
       CORRECT
    ====================================== */

    if (
        distanceX < 80 &&
        distanceY < 80
    ) {

        humanVerified();

    }

}


/* =====================================================
   HUMAN VERIFIED
===================================================== */

function humanVerified() {

    humanPiece.style.left =
        "50%";


    humanPiece.style.top =
        "50%";


    humanPiece.style.transform =
        "translate(-50%, -50%)";


    humanResult.innerHTML = `

        <p>

            ✅ Human verified!

            <br>

            Okay...

            <br>

            You really are human. 😂❤️

        </p>


        <button
            id="human-continue-button"
        >

            Continue ❤️

        </button>

    `;


    humanInstruction.textContent =
        "🎉 Verification successful!";


    document
        .getElementById(
            "human-continue-button"
        )
        .addEventListener(
            "click",
            function () {

                alert(
                    "Three doors are waiting for you... 🚪❤️"
                );

            }
        );

}