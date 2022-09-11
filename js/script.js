const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

const questionBox = document.getElementsByClassName("faq-question")
console.log(questionBox)
for (let question of questionBox) {
  console.log(question)
  question.addEventListener("click", () => {
    question.classList.toggle("question-active")
  })
}

toggleBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
