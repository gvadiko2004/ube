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
