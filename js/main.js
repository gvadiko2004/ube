document.addEventListener("DOMContentLoaded", () => {
  const lists = document.querySelectorAll(".user-form__list");

  lists.forEach((list) => {
    const items = list.querySelectorAll(".user-form__list-item");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          // второй клик по активному → снять класс
          item.classList.remove("active");
        } else {
          // снять active только в пределах этого списка
          items.forEach((el) => el.classList.remove("active"));
          item.classList.add("active");
        }
      });
    });
  });
});

// .menu

const menu = document.querySelector(".menu");
const btnOpenMenu = document.querySelector(".btn-open-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");

btnOpenMenu.addEventListener("click", function () {
  menu.classList.add("active");
});

btnCloseMenu.addEventListener("click", function () {
  menu.classList.remove("active");
});

// faq

// Select all question buttons
const faqQuestions = document.querySelectorAll(".faq-question");

// Loop through each question button
faqQuestions.forEach((question) => {
  // Add a click event listener to each question
  question.addEventListener("click", () => {
    // Close any other open answers except the one clicked
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active"); // Remove 'active' class to reset arrow rotation
        item.nextElementSibling.style.maxHeight = null; // Collapse the answer
      }
    });

    // Toggle 'active' class on the clicked question to rotate the arrow
    question.classList.toggle("active");

    // Select the corresponding answer div
    const answer = question.nextElementSibling;

    // Check if the answer is already open
    if (answer.style.maxHeight) {
      // If open, close it by resetting max-height
      answer.style.maxHeight = null;
    } else {
      // If closed, set max-height to scrollHeight to expand it
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
