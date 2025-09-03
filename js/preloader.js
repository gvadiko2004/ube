document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".prelaoder");
  const boxes = document.querySelectorAll(".banter-loader__box");
  const dots = document.querySelector(".dots");

  // Точки "Загрузка..."
  let dotCount = 0;
  const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    dots.textContent = ".".repeat(dotCount);
  }, 500);

  // Ждём полной загрузки страницы
  window.addEventListener("load", () => {
    // Запускаем анимацию кубов
    boxes.forEach((box) => (box.style.animationPlayState = "running"));

    // Останавливаем точки
    clearInterval(dotInterval);

    // Применяем класс load сразу
    preloader.classList.add("load");
  });
});
