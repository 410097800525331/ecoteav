const bannerDatas = [
  {
    slide_tag: "#허브 #홍차 #블렌딩티 #향료",
    slide_title: "신제품 출시",
    slide_description: "단순한 티를 넘어 브랜드의 방향성과 고객의 취향을<br>모두 담아내는 맞춤 솔루션을 제공합니다.",
    link: "/basic/shop_herb_black_tea.html",
  },
  {
    slide_tag: "#카페 #호텔 #레스토랑",
    slide_title: "Partners 등록",
    slide_description: "매일 전국의 카페, 호텔, 레스토랑에서 티를 주문하는 곳!<br>지금 가입하시면 바로 프리미엄 멤버십 혜택이 적용됩니다.",
    link: "/basic/user_join.html",
  },
  {
    slide_tag: "#허브 #홍차 #블렌딩티 #향료",
    slide_title: "프로세스 바로가기",
    slide_description: "에코티브는 클라이언트의 요청을 바탕으로 상담을 진행하고,<br>그에 맞춘 샘플 개발과 테스트를 통해 최적의 방향을 제안합니다.",
    link: "/basic/oem_process.html",
  },
];

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
