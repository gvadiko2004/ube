// --- ПАРАЛЛАКС ---
const parallaxImages = document.querySelectorAll(".parallax-img");
if (parallaxImages.length) {
  new simpleParallax(parallaxImages, {
    scale: 1.2,
    delay: 3.2,
    orientation: "up",
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    // --- HEADER ---
    // const header = document.querySelector(".header");
    // if (header) {
    //   gsap.fromTo(
    //     header,
    //     { y: -50, opacity: 0 },
    //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    //   );
    // }

    // --- HERO ---
    const title = document.querySelector(".hero__title");
    const subtitle = document.querySelector(".hero__subtitle");
    const button = document.querySelector(".btn-green");
    const heroBg = document.querySelector(".hero-bg");

    if (title && subtitle && button && heroBg) {
      gsap
        .timeline()
        .fromTo(
          title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          button,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.3"
        )
        .fromTo(
          heroBg,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=0.5"
        );
    }

    // --- BANNER ---
    gsap.utils.toArray(".animate-banner").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 130 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: "power2.out" }
      );
    });

    // --- WHY ---
    const whySection = document.querySelector(".why");
    const whyItems = document.querySelectorAll(".why__item");
    const whyContact = document.querySelector(".why__contact");
    const isMobile = window.innerWidth <= 440;

    if (whySection && whyItems.length) {
      if (isMobile) {
        whyItems.forEach((item) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
          tl.fromTo(
            item,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
          );
        });
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: whySection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
        tl.fromTo(whySection, { opacity: 0 }, { opacity: 1, duration: 0.6 })
          .fromTo(
            whyItems,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.3"
          )
          .fromTo(
            whyContact,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );
      }
    }

    // --- YEAR ---
    const yearItems = document.querySelectorAll(".year__content-item");

    yearItems.forEach((item) => {
      const top = item.querySelector(".top span");
      const bottom = item.querySelector(".bottom p");
      const triggerElem = isMobile ? item : item.closest(".year");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElem,
          start: isMobile ? "top 90%" : "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Анимация появления всего item
      tl.from(
        item,
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        },
        "start"
      ); // метка "start"

      // Анимация цифр
      if (top) {
        const value = parseInt(top.textContent.replace(/\D/g, "")) || null;
        if (value !== null && value > 0) {
          const obj = { val: 0 };
          tl.to(
            obj,
            {
              val: value,
              duration: 1.2,
              ease: "power1.out",
              onUpdate: () => {
                top.textContent = Math.floor(obj.val);
              },
            },
            "start"
          ); // запускаем в тот же момент
        } else {
          tl.fromTo(
            top,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
            "start"
          );
        }
      }

      // Анимация текста bottom
      if (bottom) {
        tl.fromTo(
          bottom,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
          "start"
        );
      }
    });

    // --- PORTFOLIO ---
    gsap.utils.toArray(".portfolio-blocks__content-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 80%" },
      });
      const innerElements = item.querySelectorAll(
        ".portfolio-blocks__content-title, .portfolio-blocks__content-subtitle, .portfolio-blocks__content-list"
      );
      if (innerElements.length) {
        gsap.from(innerElements, {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 80%" },
        });
      }
    });

    // --- PRICE ---
    gsap.utils.toArray(".price__blocks-item").forEach((block) => {
      gsap.from(block, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // --- FORM ---
    gsap.utils.toArray(".form__content, .form-input").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".form",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Плавное появление всех элементов поочередно
    gsap.to(".team__inner > *", {
      opacity: 1, // конечное состояние — полностью видимые
      duration: 1, // длительность анимации
      ease: "power2.out",
      stagger: 0.3, // поочередное появление
      scrollTrigger: {
        trigger: ".team", // блок, который запускает анимацию
        start: "top 80%", // когда верх блока достигнет 80% экрана
        toggleActions: "play none none none", // проиграть один раз
      },
    });
  }, 200);
});
