// smooth max-height transition and panel closes when another opens

//// add an event listener to each question wrapper
var questionWrapper = document.querySelectorAll(".question-wrapper");
for (var i = 0; i < questionWrapper.length; i++) {
    questionWrapper[i].addEventListener("click", questionClicked);
}

// this function is called when question wrapper is clicked
function questionClicked() {
    var clickedElement = this;
    multipleAnswers(clickedElement);
}

function multipleAnswers(clickedElement) {
    // iterate over each element in the document checking for an "active-button" class
    var allQuestions = document.querySelectorAll(".question-wrapper");
    for (var i = 0; i < allQuestions.length; i++) {
        if (
            allQuestions[i]
            .querySelector(".accordion-btn")
            .classList.toString()
            .includes("active-button") &&
            allQuestions[i].querySelector(".accordion-btn").classList !==
            clickedElement.querySelector(".accordion-btn").classList
        ) {
            toggleQuestion(allQuestions[i]);
        }
    }
    toggleQuestion(clickedElement);

    //////////
    // if the current iteration has the class "active-button"
    // then close that answer panel, by toggling the "active-button" class on the .question element && toggle
    // "displayed" && "hidden" on the .answer element.
    //
    // then toggle the same classes on the clicked question wrapper to open.
    //
    //
}

function displayAnswer(clickedElement) {
    toggleQuestion(clickedElement);
}

function toggleQuestion(clickedElement) {
    clickedElement.querySelector(".accordion-btn").classList.toggle("active-button");

    var answer = clickedElement.querySelector(".panel");

    // smooth animated accordion
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
}
