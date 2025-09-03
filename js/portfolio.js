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

// Для каждого заголовка своё состояние
const states = Array.from(spans).map(() => ({
  current: 0,
}));

const speed = 0.08; // уменьшили скорость для более “инерционной” заливки
const offset = 0.01; // начинать чуть раньше

function animate() {
  spans.forEach((span, i) => {
    const rect = span.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Прогресс появления элемента в зоне видимости
      let t = (windowHeight - rect.top) / (windowHeight + rect.height);
      t = Math.min(Math.max(t + offset, 0), 1);

      const spanWidth = span.offsetWidth;
      const maxShift = spanWidth;

      // Заливка слева направо
      const target = t * maxShift;

      // Интенсивная плавность: current догоняет target постепенно
      states[i].current += (target - states[i].current) * speed;
      span.style.backgroundPosition = `${states[i].current - spanWidth}px 0`;
    }
  });

  requestAnimationFrame(animate);
}

animate();
