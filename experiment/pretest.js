/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Which Indian Standard (IS) code is adopted for the determination of mechanical properties of reinforcement bars under tensile testing?", ///// Write the question inside double quotes
            answers: {
                a: "IS-456 (2021)", ///// Write the option 1 inside double quotes
                b: "IS-456 (2021)", ///// Write the option 2 inside double quotes
                c: "IS-10262 (2019)", ///// Write the option 1 inside double quotes
                d: "IS-516 (2021)", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. What is the strain value at 0.2% offset?", ///// Write the question inside double quotes
            answers: {
                a: "0.2", ///// Write the option 1 inside double quotes
                b: "0.02", ///// Write the option 2 inside double quotes
                c: "0.002", ///// Write the option 1 inside double quotes
                d: "0.0002", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "3. In Fe415 the number 415 denotes the", ///// Write the question inside double quotes
            answers: {
                a: "Yield strength", ///// Write the option 1 inside double quotes
                b: "Ultimate strenght", ///// Write the option 2 inside double quotes
                c: "Fracture strenght", ///// Write the option 1 inside double quotes
                d: "85% of fracture strenght", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "4. For proportional test pieces, original gauge length (L0) is given by,(S0 : original cross-sectional area of the specimen)", ///// Write the question inside double quotes
            answers: {
                a: "𝐿𝑜=5.65√2𝑆𝑜", ///// Write the option 1 inside double quotes
                b: "𝐿𝑜=11.3√2𝑆𝑜", ///// Write the option 2 inside double quotes
                c: "𝐿𝑜=5√(4𝑆𝑜/𝜋)", ///// Write the option 1 inside double quotes
                d: "𝐿𝑜=5√(2𝑆𝑜/𝜋)", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "5. The density of rebars used for the calculation of the cross-sectional area in tensile test is", ///// Write the question inside double quotes
            answers: {
                a: "7.85 Kg/m3", ///// Write the option 1 inside double quotes
                b: "78.5 Kg/m3", ///// Write the option 2 inside double quotes
                c: "785 Kg/m3", ///// Write the option 1 inside double quotes
                d: "7850 Kg/m3", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

       
         
        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
