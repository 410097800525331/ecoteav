$(document).ready(function () {

  const productInfoEl = document.getElementById('product_info');
  const productDetailEl = document.getElementById('product_detail');

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  const product = productId ? getProductById(productId) : null;


  /* shop 전용 상단 */
  if (productInfoEl && product) {
    productInfoEl.innerHTML = `
  <div class="product_image_area">
    <div class="product_image_wrap">
      <img src="${product.img}" alt="${product.id}">
    </div>
  </div>

  <section class="product_info_area">
    <h2>${product.id}</h2>
    <del>${product.price.toLocaleString()}원</del>
    <ul class="product_meta">
      <li>
        <span>할인판매가</span>
        <strong>${product.sale.toLocaleString()}원</strong>
      </li>
      <li><span>배송방법</span> 택배</li>
      <li><span>배송비</span> 3,000원 (50,000원이상 무료배송)</li>
      <li><span>원산지</span> ${product.desc}</li>
    </ul>

    <div class="product_option">
      <span>${product.id} 50티백</span>
      <input type="number" value="1" min="1">
      <strong>${product.sale.toLocaleString()}원</strong>
    </div>

    <div class="total_price">
      TOTAL <strong>${product.sale.toLocaleString()}원</strong>
    </div>

    <div class="btn_group">
      <button class="btn_ basic_btn_w">장바구니</button>
      <button class="btn_ basic_btn_b">구매하기</button>
    </div>
  </section>
  `;
  }

  /* 공용 상세 (shop + package) */
  if (!productDetailEl) return;

  const detailImg = product
    ? `/assets/img/shop/${product.id}.jpg`
    : `/assets/img/package/package_detail.jpg`;

  productDetailEl.innerHTML = `
  <section class="product_detail">
    <div class="product_detail_tabs">
      <button class="product_detail_tab is_active" data-tab="detail">제품정보</button> <button class="product_detail_tab" data-tab="design">디자인가이드</button> <button class="product_detail_tab" data-tab="delivery">배송정보</button> <button class="product_detail_tab" data-tab="exchange">교환 및 반품안내</button> <button class="product_detail_tab" data-tab="review">상품후기</button> <button class="product_detail_tab" data-tab="qna">상품문의</button>
    </div>

    <div id="detail" class="product_detail_content is_active">
      <img src="${detailImg}" alt="임시 상세 이미지">
    </div>
    <div id="design" class="product_detail_content">
      <div class="guide_container">
        <h4>인쇄 품질 및 제작 오류를 방지하기 위해 아래 가이드를 반드시 확인해 주세요.</h4>
        <!-- 색상 -->
        <div class="guide_section">
          <div>1. 색상 확인</div>
          <ul class="guide_list">
            <li>
              <p><b>풀컬러 인쇄는 CMYK + White(CMYK+W)</b>만 가능합니다.</p>
            </li>
            <li>
              <p>팬톤 넘버 제공 시 최대한 유사한 컬러로 인쇄됩니다.</p>
            </li>
            <li>
              <p>별색(Spot Color)은 인쇄 불가하며 반드시 CMYK로 변경해 주세요.</p>
            </li>
          </ul>
          <div>- CMYK 혼합이 많아질수록 색상 오차 범위가 커질 수 있습니다.</div>
        </div>
        <!-- CMYK 변환 -->
        <div class="guide_section">
          <div>2. CMYK 색상 변경 방법</div>
          <ul class="guide_list">
            <li>
              <p>① Swatches(견본) 패널에서 별색 선택</p>
            </li>
            <li>
              <p>② Color 패널에서 CMYK 변환 버튼 클릭</p>
            </li>
            <li>
              <p>③ CMYK 색상 변환 완료</p>
            </li>
            <li>
              <p>④ 전체 변환: Edit → Edit Colors → Convert to CMYK</p>
            </li>
          </ul>
        </div>
        <!-- 원단 / 배경 -->
        <div class="guide_section">
          <div>3. CMYK 인쇄 가이드</div>
          <ul class="guide_list">
            <li>
              <p><b>배경 이미지 사용 시 여백 컬러를 반드시 지정</b>해 주세요.</p>
            </li>
            <li>
              <p>여백 미지정 시 원단 색상이 그대로 노출될 수 있습니다.</p>
            </li>
            <li>
              <p>PET/NY+LLDPE: 투명 / PET+VMPET/AL+LLDPE: 은색 노출</p>
            </li>
          </ul>
        </div>
        <!-- 이미지 -->
        <div class="guide_section">
          <div>4. 이미지 Embed 확인</div>
          <ul class="guide_list">
            <li>
              <p>모든 <b>이미지는 반드시 Embed(포함)</b> 처리해 주세요.</p>
            </li>
            <li>
              <p>링크 이미지는 인쇄 시 누락될 수 있습니다.</p>
            </li>
          </ul>
        </div>
        <!-- 폰트 -->
        <div class="guide_section">
          <div>5. 폰트 아웃라인</div>
          <ul class="guide_list">
            <li>
              <p><b>모든 텍스트는 Create Outlines 처리</b>해 주세요.</p>
            </li>
            <li>
              <p>미처리 시 폰트 깨짐이 발생할 수 있습니다.</p>
            </li>
          </ul>
        </div>
        <!-- 재단 -->
        <div class="guide_section">
          <div>6. 재단선 및 후가공</div>
          <ul class="guide_list">
            <li>
              <p>재단선 안쪽으로 2~3mm 여백,</p>
            </li>
            <li>
              <p>후가공 선택 시 정확한 위치 지정,</p>
            </li>
            <li>
              <p><b>디자인 요소는 실링면 안쪽 배치</b>해 주세요.</p>
            </li>
          </ul>
        </div>
        <!-- 버전 -->
        <div class="guide_section">
          <div>7. 레이어 분리 / Ai 버전</div>
          <ul class="guide_list">
            <li>
              <p><b>디자인 레이어와 칼선/가이드 레이어 분리 필수</b></p>
            </li>
            <li>
              <p>Illustrator CS6 이상 버전으로 저장</p>
            </li>
            <li>
              <p>파일 형식: .ai / Version: CC 또는 CS6</p>
            </li>
          </ul>
        </div>
        <!-- 주소 -->
        <div class="guide_section">
          <a href="/basic/company_location.html">참고 샘플 발송 주소로 바로가기</a>
        </div>
      </div>
    </div>
    <div id="delivery" class="product_detail_content">
      <p>
        배송 방법 : 택배<br>
        택배사 : CJ대한통운<br>
        배송 비용 : 3,000원 (50,000원이상 구매 시 무료배송)<br>
        배송 기간 : 평균 2일 ~ 4일소요(주말, 공휴일 제외)<br>
        배송 안내 : <br>
        - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.<br>
        - 고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.<br>
        - 무통장 입금으로 주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
      </p>
    </div>
    <div id="exchange" class="product_detail_content">
      <p>
        <b>교환 및 반품 주소</b><br>
        - [06609] 서울특별시 서초구 서운로 26길 5 토탈에코빌딩 B1<br><br>
        <b>교환 및 반품이 가능한 경우</b><br>
        - 상품을 공급 받으신 날로부터 7일이내 단, 가전제품의
        경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.<br>
        - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그사실을 알게 된 날로부터 30일이내<br><br>
        <b>교환 및 반품이 불가능한 경우</b><br>
        - 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여
        포장 등을 훼손한 경우는 제외<br>
        - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우<br>
        (예 : 가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터, 디지털 카메라 등의 불량화소에
        따른 반품/교환은 제조사 기준에 따릅니다.)<br>
        - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 단, 화장품등의 경우 시용제품을
        제공한 경우에 한 합니다.<br>
        - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우<br>
        - 복제가 가능한 상품등의 포장을 훼손한 경우
        (자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기 바랍니다.)<br><br>
        <b>
          ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.
          (색상 교환, 사이즈 교환 등 포함)
        </b>
      </p>
    </div>
    <div id="review" class="product_detail_content">
      <p>구매하신 상품과 관련된 솔직한 후기를 남겨주세요.</p>
      <h3>게시물이 없습니다.</h3>
      <button>작성하기</button>
      <button>목록</button>
    </div>
    <div id="qna" class="product_detail_content">
      <p>상품 관련 문의사항을 남겨주세요. 최대한 빠르게 답변드리겠습니다.</p>
      <h3>게시물이 없습니다.</h3>
      <button>작성하기</button>
      <button>목록</button>
    </div>
  </section>
  `;

  const tabs = productDetailEl.querySelectorAll('.product_detail_tab');
  const contents = productDetailEl.querySelectorAll('.product_detail_content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 모든 탭, 컨텐츠 비활성화
      tabs.forEach(t => t.classList.remove('is_active'));
      contents.forEach(c => c.classList.remove('is_active'));

      // 클릭한 탭 활성화 + 해당 컨텐츠 활성화
      tab.classList.add('is_active');
      const targetId = tab.dataset.tab;
      const targetContent = productDetailEl.querySelector(`#${targetId}`);
      if (targetContent) targetContent.classList.add('is_active');
    });
  });



});