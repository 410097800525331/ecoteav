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
