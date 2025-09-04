const blocks = document.querySelectorAll(".portfolio-blocks__content-item");

blocks.forEach((block) => {
  const listItems = block.querySelectorAll(
    ".portfolio-blocks__content-list li"
  );

  block.addEventListener("mouseenter", () => {
    listItems.forEach((li, i) => {
      setTimeout(() => {
        li.style.backgroundColor = "var(--g)";
        li.style.color = "#000";
        li.style.border = "1px solid var(--g)";
      }, i * 50); // поочередная задержка между элементами
    });
  });

  block.addEventListener("mouseleave", () => {
    listItems.forEach((li, i) => {
      setTimeout(() => {
        li.style.backgroundColor = "transparent";
        li.style.color = "#fff";
        li.style.border = "1px solid #fff";
      }, i * 100); // поочередное возвращение к прозрачному
    });
  });
});






const spans = document.querySelectorAll(".karaoke span");

const offset = 0.01; // небольшая поправка, если нужно

function animate() {
  spans.forEach((span) => {
    const rect = span.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Прогресс появления элемента в зоне видимости (0–1)
      let t = (windowHeight - rect.top) / (windowHeight + rect.height);
      t = Math.min(Math.max(t + offset, 0), 1);

      const spanWidth = span.offsetWidth;

      // Заливка слева направо синхронно со скроллом
      span.style.backgroundPosition = `${t * spanWidth - spanWidth}px 0`;
    }
  });

  requestAnimationFrame(animate);
}

animate();
