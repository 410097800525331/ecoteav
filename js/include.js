
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
              <a href="/company_company.html">기업소개</a>
              <ul class="sub">
                <li><a href="/company_company.html">기업소개/CI</a></li>
                <li><a href="#">연혁</a></li>
                <li><a href="#">오시는길</a></li>
              </ul>
            </li>
            <li>
              <a href="#">상담/견적 신청</a>
              <ul class="sub">
                <li><a href="/basic/consultation_blending.html">블렌딩티 상담신청</a></li>
                <li><a href="/basic/consultation_blending.html">향료 상담신청</a></li>
                <li><a href="/basic/consultation_visit.html">방문 상담신청</a></li>
              </ul>
            </li>
            <li>
              <a href="#">OEM/ODM</a>
              <ul class="sub">
                <li><a href="#">프로세스</a></li>
                <li><a href="#">협력사</a></li>
                <li><a href="#">포트폴리오</a></li>
                <li><a href="#">B2B 결제</a></li>
              </ul>
            </li>
            <li>
              <a href="#">패키지 제작</a>
              <ul class="sub">
                <li><a href="#">풀컬러 삼방</a></li>
                <li><a href="#">풀컬러 자동롤</a></li>
                <li><a href="#">지퍼스탠드</a></li>
                <li><a href="#">단상자</a></li>
                <li><a href="#">칼선 다운로드</a></li>
              </ul>
            </li>
            <li>
              <a href="#">취급원료(Shop)</a>
              <ul class="sub">
                <li><a href="#">허브/홍차</a></li>
                <li><a href="#">국내산 원료</a></li>
                <li><a href="#">시그니쳐 향료</a></li>
                <li><a href="#">샘플 신청</a></li>
              </ul>
            </li>
            <li>
              <a href="#">문의하기</a>
              <ul class="sub">
                <li><a href="#">1:1 문의하기</a></li>
                <li><a href="#">협업 문의하기</a></li>
                <li><a href="#">패키지 문의하기</a></li>
                <li><a href="#">자주 묻는 질문</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <!-- user menu -->
        <div class="user_menu">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
          <a href="#">내 정보</a>
        </div>

        <!-- mobile btn -->
        <div id="mobile_btn">
          <span></span><span></span><span></span>
        </div>

        <!-- mobile X btn -->
        <div id="close_btn">×</div>
      </div>
    </header>

    <!-- mobile menu -->
    <nav id="mobile_gnb">
      <div class="mobile_user_menu">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
        <a href="#">내 정보</a>
      </div>

      <ul id="mobile_main">
        <li>
          <a href="#" class="mobile_main_menu">기업소개<span class="toggle_icon">+</span></a>
          <ul class="mobile_sub">
            <li><a href="#">회사소개/CI</a></li>
            <li><a href="#">연혁</a></li>
            <li><a href="#">오시는길</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mobile_main_menu">상담/견적 신청<span class="toggle_icon">+</span></a>
          <ul class="mobile_sub">
            <li><a href="#">블렌딩티 상담신청</a></li>
            <li><a href="#">향료 상담신청</a></li>
            <li><a href="#">방문 상담신청</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mobile_main_menu">OEM/ODM<span class="toggle_icon">+</span></a>
          <ul class="mobile_sub">
            <li><a href="#">프로세스</a></li>
            <li><a href="#">협력사</a></li>
            <li><a href="#">포트폴리오</a></li>
            <li><a href="#">B2B 결제</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mobile_main_menu">패키지 제작<span class="toggle_icon">+</span></a>
          <ul class="mobile_sub">
            <li><a href="#">풀컬러 삼방</a></li>
            <li><a href="#">풀컬러 자동롤</a></li>
            <li><a href="#">지퍼스탠드</a></li>
            <li><a href="#">단상자</a></li>
            <li><a href="#">칼선 다운로드</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mobile_main_menu">취급원료(Shop)<span class="toggle_icon">+</span></a>
          <ul class="mobile_sub">
            <li><a href="#">허브/홍차</a></li>
            <li><a href="#">국내산 원료</a></li>
            <li><a href="#">시그니쳐 향료</a></li>
            <li><a href="#">샘플 신청</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="mobile_main_menu">문의하기<span class="toggle_icon">+</span></a>
          <ul class="mobile_sub">
            <li><a href="#">1:1 문의하기</a></li>
            <li><a href="#">협업 문의하기</a></li>
            <li><a href="#">패키지 문의하기</a></li>
            <li><a href="#">자주 묻는 질문</a></li>
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
          <li><a href="#">회사소개</a></li>
          <li><a href="#">오시는길</a></li>
          <li><a href="#">개인정보취급방침</a></li>
          <li><a href="#">이용약관</a></li>
        </ul>
        <!-- info -->
        <address class="info">
          <div>상호명 : 에코티브(ecoteav) &nbsp; 대표자 : 김아영 &nbsp; 이메일 : ecoteav@gmail.com</div>
          <div>주소 : 06609 서울특별시 서초구 서운로 26길 5 토탈에코빌딩 B1</div>
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
