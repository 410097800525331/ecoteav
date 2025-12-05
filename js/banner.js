$(document).ready(function () {
  const banner = `
    <div class="banner">
      <div class="slides">
        <div class="slide slide1">
          <div class="slide_content">
            <div class="slide_tag">#허브 #홍차 #블렌딩티 #향료</div>
            <h2 class="slide_title">신제품 출시</h2>
            <p class="slide_description">단순한 티를 넘어 브랜드의 방향성과 고객의 취향을<br>모두 담아내는 맞춤 솔루션을 제공합니다.</p>
            <a href="#" class="btn more_btn">Explore More</a>
          </div>
        </div>
      </div>
      <div class="controls_btn">
        <button class="arrow" onclick="moveSlide(-1)">◀</button>
        <span class="counter" id="counter">1 / 3</span>
        <button class="arrow" onclick="moveSlide(1)">▶</button>
        <button class="play-pause" id="playPause" onclick="togglePlay()">❚❚</button>
      </div>
    </div>
  `;

  $("#banner_wrap").append(banner);
});



// 배너
// let slideIndex = 0;
// let isPlaying = true;
// let autoPlayInterval;
// const slides = document.getElementById('slides');
// const counter = document.getElementById('counter');
// const playPause = document.getElementById('playPause');
// const totalSlides = 3;

// function showSlide(n) {
//   if (n >= totalSlides) slideIndex = 0;
//   if (n < 0) slideIndex = totalSlides - 1;

//   slides.style.transform = `translateX(-${slideIndex * 100}%)`;
//   counter.textContent = `${slideIndex + 1} / ${totalSlides}`;
// }

// function moveSlide(n) {
//   slideIndex += n;
//   showSlide(slideIndex);
// }

// function togglePlay() {
//   isPlaying = !isPlaying;
//   if (isPlaying) {
//     playPause.textContent = '❚❚';
//     startAutoPlay();
//   } else {
//     playPause.textContent = '▶';
//     stopAutoPlay();
//   }
// }

// function startAutoPlay() {
//   autoPlayInterval = setInterval(() => {
//     slideIndex++;
//     showSlide(slideIndex);
//   }, 3500);
// }

// function stopAutoPlay() {
//   clearInterval(autoPlayInterval);
// }

// // 초기 자동 재생 시작
// startAutoPlay();


// // let currentIndex = 0;
// // const slides = document.querySelectorAll(".slide_item");
// // const dots = document.querySelectorAll(".dot");

// // function showSlide(index) {
// //   slides.forEach((slide, i) => {
// //     slide.classList.remove("active");
// //     dots[i].classList.remove("active");
// //     slide.style.left = i === index ? "0" : "100%";
// //   });

// //   slides[index].classList.add("active");
// //   dots[index].classList.add("active");
// //   currentIndex = index;
// // }

// // function nextSlide() {
// //   const next = (currentIndex + 1) % slides.length;
// //   showSlide(next);
// // }

// // dots.forEach(dot => {
// //   dot.addEventListener("click", () => {
// //     const index = parseInt(dot.dataset.index);
// //     showSlide(index);
// //   });
// // });

// // // 자동 슬라이드 (4초)
// // setInterval(nextSlide, 4000);

// // // 초기 실행
// // showSlide(0);