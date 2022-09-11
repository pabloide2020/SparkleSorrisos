const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const dropdownBtn = document.getElementsByClassName('show-drop')[0]
const dropdown = document.getElementById('dropdown-list')

const questionBox = document.getElementsByClassName("faq-question")

dropdownBtn.addEventListener('click', () => {
  dropdown.classList.toggle('drop-active')
  dropdownBtn.classList.toggle('drop-rotate')
})

for (let question of questionBox) {
  console.log(question)
  question.addEventListener("click", () => {
    question.classList.toggle("question-active")
  })
}

toggleBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
