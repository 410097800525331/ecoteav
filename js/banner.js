
let currentIndex = 0;
const slides = document.querySelectorAll(".slide_item");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    slide.style.left = i === index ? "0" : "100%";
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  const next = (currentIndex + 1) % slides.length;
  showSlide(next);
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    showSlide(index);
  });
});

// 자동 슬라이드 (4초)
setInterval(nextSlide, 4000);

// 초기 실행
showSlide(0);