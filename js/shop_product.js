const detail = document.getElementById('product_detail');

// 1. URL 파라미터
const params = new URLSearchParams(location.search);
const id = params.get('id');

// 2. 상품 찾기
const product = shopProducts.find(item => item.id === id);

// 3. 방어
if (!product) {
  detail.innerHTML = '<p>상품 정보를 찾을 수 없습니다.</p>';
  throw new Error('product not found');
}

// 4. 렌더
detail.innerHTML = `
  <div class="product_detail_inner">
    <div class="product_image_area">
      <div class="product_image_wrap">
        <img src="${product.img}" alt="${product.id}">
      </div>
    </div>

    <div class="product_info_area">
      <h2>${product.id}</h2>
      <p>${product.price.toLocaleString()}원</p>

      <ul class="product_meta">
        <li>
          <span>할인판매가</span>
          <strong>${product.sale.toLocaleString()}원</strong>
        </li>
        <li><span>배송방법</span> 택배</li>
        <li><span>배송비</span> 2,500원</li>
        <li><span>원산지</span> ${product.desc || '-'}</li>
      </ul>

      <div class="product_option">
        <span>${product.id}</span>
        <input type="number" value="1" min="1">
        <strong>${product.sale.toLocaleString()}원</strong>
      </div>

      <div class="total_price">
        TOTAL <strong>${product.sale.toLocaleString()}원</strong>
      </div>

      <button class="btn_ basic_btn_b">바로 구매하기</button>
    </div>
  </div>
`;