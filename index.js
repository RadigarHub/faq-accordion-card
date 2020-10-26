"use strict";

window.onload = function() {

  document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", toggleQuestion);
  })

  function toggleQuestion(e) {
    let question = e.currentTarget;
    if (question.classList.contains("selected")) {
      hideAnswer(question);
    } else {
      hidePreviouslySelectedQuestion();
      showAnswer(question);
    }
  }

  function hidePreviouslySelectedQuestion() {
    var psQuestion = document.querySelector(".question.selected");
    if (psQuestion != null) {
      hideAnswer(psQuestion);
    }
  }

  function showAnswer(question) {
    question.classList.add("selected");
    let answer = question.nextElementSibling;
    answer.classList.add("selected");
  }

  function hideAnswer(question) {
    question.classList.remove("selected");
    let answer = question.nextElementSibling;
    answer.classList.remove("selected");
  }

}