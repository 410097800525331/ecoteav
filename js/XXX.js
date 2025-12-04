// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 햄버거 열기/닫기
  const hamburgerBtn = document.getElementById("hamburger_btn");
  const closeBtn = document.getElementById("close_btn");
  const mobileNav = document.getElementById("mobile_nav");

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      mobileNav.style.right = "0px";
      closeBtn.style.display = "flex";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileNav.style.right = "-300px";
      closeBtn.style.display = "none";
    });
  }

  // 모바일 메뉴 아코디언
  const mobileBtns = document.querySelectorAll(".mobile_menu_btn");

  mobileBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      const icon = btn.querySelector(".toggle_icon");
      const isOpen = submenu.classList.contains("open");

      if (isOpen) {
        submenu.classList.remove("open");
        icon.textContent = "+";
        btn.classList.remove("active");
      } else {
        submenu.classList.add("open");
        icon.textContent = "-";
        btn.classList.add("active");
      }
    });
  });

  // 헤더 그림자 (forEach 바깥으로 이동)
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });
});



// 배너

let slideIndex = 0;
let isPlaying = true;
let autoPlayInterval;
const slides = document.getElementById('slides');
const counter = document.getElementById('counter');
const playPause = document.getElementById('playPause');
const totalSlides = 3;

function showSlide(n) {
  if (n >= totalSlides) slideIndex = 0;
  if (n < 0) slideIndex = totalSlides - 1;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  counter.textContent = `${slideIndex + 1} / ${totalSlides}`;
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function togglePlay() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playPause.textContent = '❚❚';
    startAutoPlay();
  } else {
    playPause.textContent = '▶';
    stopAutoPlay();
  }
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 3500);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// 초기 자동 재생 시작
startAutoPlay();


// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide_item");
// const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove("active");
//     dots[i].classList.remove("active");
//     slide.style.left = i === index ? "0" : "100%";
//   });

//   slides[index].classList.add("active");
//   dots[index].classList.add("active");
//   currentIndex = index;
// }

// function nextSlide() {
//   const next = (currentIndex + 1) % slides.length;
//   showSlide(next);
// }

// dots.forEach(dot => {
//   dot.addEventListener("click", () => {
//     const index = parseInt(dot.dataset.index);
//     showSlide(index);
//   });
// });

// // 자동 슬라이드 (4초)
// setInterval(nextSlide, 4000);

// // 초기 실행
// showSlide(0);