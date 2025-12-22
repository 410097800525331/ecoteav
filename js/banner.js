const totalSlides = bannerDatas.length;

const banner = `
  <div class="banner">
    <div class="slides">
      ${bannerDatas
    .map(
      data => `
        <div class="slide">
          <div class="slide_content">
            <div class="slide_tag">${data.slide_tag}</div>
            <h2 class="slide_title">${data.slide_title}</h2>
            <p class="slide_description">${data.slide_description}</p>
            <a href="${data.link}" class="btn more_btn">Explore More</a>
          </div>
        </div>
      `
    )
    .join("")}
    </div>
    <div class="controls_btn">
      <button class="arrow prev">◀</button>
      <span class="counter">1 / ${totalSlides}</span>
      <button class="arrow next">▶</button>
      <button class="play_pause">❚❚</button>
    </div>
  </div>
`;

$("#banner_wrap").append(banner);

window.addEventListener("load", () => {
  const slides = document.querySelector(".slides");
  let slideItems = document.querySelectorAll(".slide");
  const slideCount = slideItems.length;
  const counter = document.querySelector(".counter");

  let index = 0;
  let slideWidth = document.querySelector(".banner").offsetWidth;
  let interval;

  // clone
  const clone = slideItems[0].cloneNode(true);
  slides.appendChild(clone);
  slideItems = document.querySelectorAll(".slide");

  function setWidth() {
    slideWidth = document.querySelector(".banner").offsetWidth;
    slideItems.forEach(slide => {
      slide.style.width = slideWidth + "px";
    });
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function goToSlide(i) {
    slides.style.transition = "transform 0.8s ease";
    index = i;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    updateCounter();
  }

  function updateCounter() {
    const current = index === slideCount ? 1 : index + 1;
    counter.textContent = `${current} / ${slideCount}`;
  }

  slides.addEventListener("transitionend", () => {
    if (index === slideCount) {
      slides.style.transition = "none";
      index = 0;
      slides.style.transform = `translateX(0)`;
    }
  });

  function next() {
    if (index <= slideCount) goToSlide(index + 1);
  }

  function prev() {
    if (index === 0) {
      slides.style.transition = "none";
      index = slideCount;
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
      requestAnimationFrame(() => goToSlide(index - 1));
    } else {
      goToSlide(index - 1);
    }
  }

  // autoplay
  function startAuto() {
    interval = setInterval(next, 3000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  // controls
  document.querySelector(".next").addEventListener("click", () => {
    stopAuto();
    next();
    startAuto();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    stopAuto();
    prev();
    startAuto();
  });

  window.addEventListener("resize", setWidth);

  setWidth();
  startAuto();
});
