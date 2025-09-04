// open-menu

const openMenuDrop = document.querySelectorAll(".open-menu");
let closeTimeout;
let activeItem = null; // текущий пункт с активной иконкой

openMenuDrop.forEach((item) => {
  const icon = item.querySelector(".ic");

  item.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout);

    menu.classList.add("active-pc");

    // Сбрасываем предыдущую активную иконку
    if (activeItem && activeItem !== item) {
      const prevIcon = activeItem.querySelector(".ic");
      if (prevIcon) prevIcon.style.transform = "rotate(0deg)";
    }

    // Поворот текущей иконки
    if (icon) {
      icon.style.transform = "rotate(180deg)";
      icon.style.transition = "transform 0.3s";
    }

    activeItem = item;
  });

  item.addEventListener("mouseleave", () => {
    closeTimeout = setTimeout(() => {
      if (!menu.matches(":hover")) {
        menu.classList.remove("active-pc");

        // Сброс иконки
        if (activeItem) {
          const activeIcon = activeItem.querySelector(".ic");
          if (activeIcon) activeIcon.style.transform = "rotate(0deg)";
          activeItem = null;
        }
      }
    }, 300);
  });
});

// Обработка меню
menu.addEventListener("mouseenter", () => {
  clearTimeout(closeTimeout);
});

menu.addEventListener("mouseleave", () => {
  closeTimeout = setTimeout(() => {
    menu.classList.remove("active-pc");

    // Сбрасываем иконку активного пункта
    if (activeItem) {
      const activeIcon = activeItem.querySelector(".ic");
      if (activeIcon) activeIcon.style.transform = "rotate(0deg)";
      activeItem = null;
    }
  }, 500);
});
