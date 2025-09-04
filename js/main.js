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

const itemMenu = menu.querySelectorAll(".header__list-item");
const itemMenuIcon = menu.querySelectorAll(".header__list-item .icon");

itemMenu.forEach((link) => {
  const dropdown = link.querySelector(".header__list_container"); // ищем внутри текущего пункта меню

  if (dropdown) {
    link.addEventListener("click", function () {
      // закрываем все dropdown
      itemMenu.forEach((item) => {
        const dd = item.querySelector(".header__list_container");
        if (dd && dd !== dropdown) {
          dd.classList.remove("active");
        }
      });

      // открываем/закрываем текущий
      dropdown.classList.toggle("active");
    });
  }
});

btnOpenMenu.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
});

btnCloseMenu.addEventListener("click", function () {
  document.body.style.overflow = "visible";
});

btnCloseMenu.addEventListener("click", function () {
  menu.classList.remove("active");
});

itemMenu.forEach((link) => {
  const dropdown = link.querySelector(".header__list_container");
  const icon = link.querySelector(".icon");

  if (dropdown) {
    link.addEventListener("click", function () {
      // закрываем все остальные
      itemMenu.forEach((item) => {
        const dd = item.querySelector(".header__list_container");
        const ic = item.querySelector(".icon");
        if (dd && dd !== dropdown) {
          dd.style.height = "0";
        }
        if (ic && ic !== icon) {
          ic.classList.remove("active");
        }
      });

      // открываем/закрываем текущий
      if (dropdown.style.height && dropdown.style.height !== "0px") {
        dropdown.style.height = "0";
      } else {
        dropdown.style.height = dropdown.scrollHeight + "px";
      }

      if (icon) icon.classList.toggle("active");
    });
  }
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

// .contact-form-overlay

const contactForm = document.querySelector(".contact-form-overlay");
const btnCloseForm = document.querySelector(".btn-close-contact-form");
const potrSpan = contactForm.querySelector(".potr span");

// Находим все кнопки открытия формы
const btnOpenForm = document.querySelectorAll(".btn-open-form");

btnOpenForm.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Находим родительский блок .price__blocks-item для этой кнопки
    const parentBlock = btn.closest(".price__blocks-item");
    if (!parentBlock) return;

    // Берем текст из h3.price__blocks-title
    const titleElement = parentBlock.querySelector(".price__blocks-title");
    const value = titleElement ? titleElement.textContent.trim() : "послуга";

    // Вставляем значение в span
    potrSpan.textContent = value;

    // Показываем форму
    contactForm.classList.add("active");
  });
});

// Закрытие формы
btnCloseForm.addEventListener("click", () => {
  contactForm.classList.remove("active");
});

// BULK

document.querySelectorAll(".file-input").forEach((input) => {
  input.addEventListener("change", function () {
    const fileText = this.closest(".file-label").querySelector(".file-text");
    if (this.files && this.files.length > 0) {
      fileText.textContent = this.files[0].name; // показываем имя файла
    } else {
      fileText.textContent = "Прикрепить файл"; // если сбросили
    }
  });
});
