var myCardId = "card1009"
var myQuestions = [
  {
    question:
      "What is the phenomenon of Raman effect, named after Indian physicist C.V. Raman?",
    answers: {
      a: "statistical distribution of meteorite impacts",
      b: "effects of cloud layers on radio emissions",
      c: "change of wavelength of deflected light",
      d: "motion of atom in ionized gas",
    },
    correctAnswer: "c",
    hint:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.",
  },
];

var quizContainer = document.getElementById("quiz"+"-"+myCardId);
var resultsContainer = document.getElementById("results"+"-"+myCardId);
var submitButton = document.getElementById("submit"+"-"+myCardId);

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          '<div class="form-check">' +
            "<label>" +
            '<input class="form-check-input" type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label></div>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<h5 class="card-title"><div class="question">' +
          questions[i].question +
          "</div></h5>" +
          "<br>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>" +
          "<br>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "green";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
