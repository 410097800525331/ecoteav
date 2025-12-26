const grid = document.getElementById('product_grid');

/* 카드 렌더 함수 */
function renderCard(item, type) {
  return `
  <a class="product_card" href="/basic/shop_product_detail.html?type=herbal&id=${encodeURIComponent(item.id)}">
    <div class="product_card"
         data-type="${type}"
         data-id="${item.id}">
      <div class="card_img_wrap">
        <img src="${item.img}" alt="${item.id}">
        <span class="discount_badge">${item.discount}%</span>

        <div class="card_hover">
          <button>🛒</button>
          <button>♡</button>
          <button>≡</button>
        </div>
      </div>

      <div class="card_info">
        <div>${item.id}</div>
        <h3>${item.desc}</h3>
        <p class="card_price">
          <del>${item.price.toLocaleString()}원</del>
          <strong>${item.sale.toLocaleString()}원</strong>
        </p>
      </div>
    </div>
    </a>
  `;
}

/* 허브/홍차 */
herbalProducts.forEach(item => {
  grid.insertAdjacentHTML('beforeend', renderCard(item, 'herbal'));
});

/* 블랙티 (있다면) */
blackteaProducts?.forEach(item => {
  grid.insertAdjacentHTML('beforeend', renderCard(item, 'blacktea'));
});

/* 카드 클릭 → 상세 이동 */
grid.addEventListener('click', e => {
  const card = e.target.closest('.product_card');
  if (!card) return;

  const type = card.dataset.type;
  const id = card.dataset.id;

  location.href =
    `/product_detail.html?type=${type}&id=${encodeURIComponent(id)}`;
});
