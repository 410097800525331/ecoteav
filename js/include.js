
$(document).ready(function () {
  // header
  const header = `
    <header id="header">
      <div class="inner">
        <!-- logo -->
        <h1 id="logo"><a href="/index.html"><img src="/assets/img/ecoteav_logo.png" alt="에코티브 로고"></a></h1>

        <!-- main menu -->
        <nav id="gnb">
          <ul class="main">
            <li>
              <a href="/basic/company_about_ci.html">기업소개</a>
              <ul class="sub">
                <li><a href="/basic/company_about_ci.html">기업소개/CI</a></li>
                <li><a href="/basic/company_history.html">연혁</a></li>
                <li><a href="/basic/company_location.html">오시는길</a></li>
              </ul>
            </li>
            <li>
              <a href="/basic/consultation_blending.html">상담/견적 신청</a>
              <ul class="sub">
                <li><a href="/basic/consultation_blending.html">블렌딩티 상담신청</a></li>
                <li><a href="/basic/consultation_fragrance.html">향료 상담신청</a></li>
                <li><a href="/basic/consultation_visit.html">방문 상담신청</a></li>
              </ul>
            </li>
            <li>
              <a href="/basic/oem_process.html">OEM/ODM</a>
              <ul class="sub">
                <li><a href="/basic/oem_process.html">프로세스</a></li>
                <li><a href="/basic/oem_partners.html">협력사</a></li>
                <li><a href="/basic/oem_portfolio.html">포트폴리오</a></li>
                <!-- <li><a href="/basic/oem_b2b_private.html">B2B 결제</a></li> -->
              </ul>
            </li>
            <li>
              <a href="/basic/package_three_side.html">패키지 제작</a>
              <ul class="sub">
                <li><a href="/basic/package_three_side.html">풀컬러 삼방</a></li>
                <li><a href="/basic/package_roll.html">풀컬러 자동롤</a></li>
                <li><a href="/basic/package_pouch.html">지퍼스탠드</a></li>
                <li><a href="/basic/package_box.html">단상자</a></li>
                <!-- <li><a href="/basic/package_download.html">칼선 다운로드</a></li> -->
              </ul>
            </li>
            <li>
              <a href="/basic/shop.html">취급원료(Shop)</a>
              <!-- <ul class="sub">
                <li><a href="/basic/shop_single_tea.html">허브/홍차</a></li>
                <li><a href="/basic/shop_korean_ingredient.html">국내산 원료</a></li>
                <li><a href="/basic/shop_flavor.html">시그니쳐 향료</a></li>
                <li><a href="/basic/shop_sample_request.html">샘플 신청</a></li>
              </ul> -->
            </li>
            <li>
              <a href="/basic/inquiry_inquiry.html">문의하기</a>
              <ul class="sub">
                <li><a href="/basic/inquiry_inquiry.html">1:1 문의하기</a></li>
                <li><a href="/basic/inquiry_collaboration.html">협업 문의하기</a></li>
                <li><a href="/basic/inquiry_package.html">패키지 문의하기</a></li>
                <li><a href="/basic/inquiry_faq.html">자주 묻는 질문</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <!-- user menu -->
        <div class="user_menu">
          <a href="/basic/user_login.html">LOGIN</a>
          <a href="/basic/user_join.html">JOIN</a>
          <a href="/basic/user_cart.html">CART</a>
          <a href="/basic/user_mypage.html">MY PAGE</a>
        </div>

        <!-- mobile btn -->
        <div id="mobile_btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>

    <!-- mobile menu -->
    <nav id="mobile_gnb">
      <div class="mobile_user_menu">
        <a href="/basic/user_login.html">LOGIN</a>
        <a href="/basic/user_join.html">JOIN</a>
        <a href="/basic/user_cart.html">CART</a>
        <a href="/basic/user_mypage.html">MY PAGE</a>
      </div>

      <ul id="mobile_main">
        <li>
          <div class="mobile_main_menu">기업소개<span class="toggle_icon">+</span></div>
          <ul class="mobile_sub">
            <li><a href="/basic/company_about_ci.html">기업소개/CI</a></li>
            <li><a href="/basic/company_history.html">연혁</a></li>
            <li><a href="/basic/company_location.html">오시는길</a></li>
          </ul>
        </li>
        <li>
          <div class="mobile_main_menu">상담/견적 신청<span class="toggle_icon">+</span></div>
          <ul class="mobile_sub">
            <li><a href="/basic/consultation_blending.html">블렌딩티 상담신청</a></li>
            <li><a href="/basic/consultation_blending.html">향료 상담신청</a></li>
            <li><a href="/basic/consultation_visit.html">방문 상담신청</a></li>
          </ul>
        </li>
        <li>
          <div class="mobile_main_menu">OEM/ODM<span class="toggle_icon">+</span></div>
          <ul class="mobile_sub">
            <li><a href="/basic/oem_process.html">프로세스</a></li>
            <li><a href="/basic/oem_partners.html">협력사</a></li>
            <li><a href="/basic/oem_portfolio.html">포트폴리오</a></li>
            <!-- <li><a href="/basic/oem_b2b_private.html">B2B 결제</a></li> -->
          </ul>
        </li>
        <li>
          <div class="mobile_main_menu">패키지 제작<span class="toggle_icon">+</span></div>
          <ul class="mobile_sub">
            <li><a href="/basic/package_three_side.html">풀컬러 삼방</a></li>
            <li><a href="/basic/package_roll.html">풀컬러 자동롤</a></li>
            <li><a href="/basic/package_pouch.html">지퍼스탠드</a></li>
            <li><a href="/basic/package_box.html">단상자</a></li>
            <!-- <li><a href="/basic/package_download.html">칼선 다운로드</a></li> -->
          </ul>
        </li>
        <li>
          <div class="mobile_main_menu">취급원료(Shop)<span class="toggle_icon">+</span></div>
          <!-- <ul class="mobile_sub">
            <li><a href="/basic/shop_single_tea.html">허브/홍차</a></li>
            <li><a href="/basic/shop_korean_ingredient.html">국내산 원료</a></li>
            <li><a href="/basic/shop_flavor.html">시그니쳐 향료</a></li>
            <li><a href="/basic/shop_sample_request.html">샘플 신청</a></li>
          </ul> -->
        </li>
        <li>
          <div class="mobile_main_menu">문의하기<span class="toggle_icon">+</span></div>
          <ul class="mobile_sub">
            <li><a href="/basic/inquiry_inquiry.html">1:1 문의하기</a></li>
            <li><a href="/basic/inquiry_collaboration.html">협업 문의하기</a></li>
            <li><a href="/basic/inquiry_package_inquiry.html">패키지 문의하기</a></li>
            <li><a href="/basic/inquiry_faq.html">자주 묻는 질문</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  `;

  $("#header_wrap").append(header);

  // footer
  const footer = `
    <footer id="footer">
    <div class="inner">
      <!-- footer left -->
      <div class="footer_left">
        <h1 id="logo"><img src="/assets/img/ecoteav_logo_white.png" alt="에코티브 로고"></h1>
        <ul class="menu">
          <li><a class="line" href="/basic/company_company_ci.html">회사소개</a></li>
          <li><a class="line" href="/basic/company_location.html">오시는길</a></li>
          <li><a class="line" href="#">개인정보취급방침</a></li>
          <li><a class="line" href="#">이용약관</a></li>
        </ul>
        <!-- info -->
        <address class="info">
          <div>상호명 : 에코티브(ecoteav) &nbsp; 대표자 : 김아영 &nbsp; 이메일 : ecoteav@gmail.com</div>
          <address>주소 : 06609 서울특별시 서초구 서운로 26길 5 토탈에코빌딩 B1</address>
          <div>사업자등록번호 : 296-19-02426 &nbsp; 통신판매업신고번호 : 235-47-67891</div>
          <div>평일 09:00~18:00 &nbsp; 주말 및 공휴일 휴무</div>
          <div>국민 000000-00-000000 &nbsp; 예금주 : 에코티브(ecoteav)</div>
        </address>
        <div class="info_cs">CS CENTER <strong>010-0000-0000</strong></div>
        <p class="copy">Copyrights &copy; 2023 by ecoteav. All Rights Reserved.</p>
        <!-- SNS link -->
        <div class="sns_link">
          <a href="#"><i class="fa-brands fa-kakao-talk"></i></a>
          <a href="#"><i class="fa-brands fa-twitch"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <!-- footer right form -->
      <div class="footer_right">
        <p class="msg">고객과 함께 성장하고 협력하며<br>더 나은 미래를 향해 나아가겠습니다.</p>
        <form class="footer_form">
          <div class="footer_row">
            <input type="text" placeholder="이름" required>
            <input type="text" placeholder="연락처" required>
          </div>
          <textarea placeholder="문의내용" required></textarea>
          <button type="submit" class="btn_ basic_btn_w">문의하기</button>
        </form>
      </div>
    </div>
  </footer>
  `;

  $("#footer_wrap").append(footer);
});

// mobile_btn
$(document).on("click", "#mobile_btn", function () {
  if (window.innerWidth > 1024) return;

  $(this).toggleClass("active");
  $("#mobile_gnb").toggleClass("open");
  $("body").css("overflow",
    $("#mobile_gnb").hasClass("open") ? "hidden" : ""
  );
});

$(document).on("click", ".mobile_main_menu", function () {
  const $sub = $(this).next(".mobile_sub");
  const $icon = $(this).find(".toggle_icon");

  $sub.toggleClass("open");
  $(this).toggleClass("active");
  $icon.text($sub.hasClass("open") ? "−" : "+");
});

// scroll
$(window).on("scroll", function () {
  if (window.innerWidth <= 1024) return;
  $("#header").toggleClass("active", $(window).scrollTop() > 0);
});

$(window).on("resize", function () {
  if (window.innerWidth > 1024) {
    $("#mobile_gnb").removeClass("open");
    $("#mobile_btn").removeClass("active");
    $(".mobile_sub").removeClass("open");
    $(".toggle_icon").text("+");
    $("body").css("overflow", "");
  }
});