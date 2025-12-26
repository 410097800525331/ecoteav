const grid = document.getElementById('product_grid');

/* 카드 렌더 */
function renderCard(item) {
  return `
    <a class="product_card"
       href="/basic/shop_product_detail.html?id=${encodeURIComponent(item.id)}"
       data-category="${item.category}"
       data-id="${item.id}">

      <div class="card_img_wrap">
        <img src="${item.img}" alt="${item.id}">
        <span class="discount_badge">${item.discount}%</span>

        <div class="card_hover">
          <button type="button">🛒</button>
          <button type="button">♡</button>
          <button type="button">≡</button>
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
    </a>
  `;
}

/* 렌더 */
shopProducts.forEach(item => {
  grid.insertAdjacentHTML('beforeend', renderCard(item));
});

/* 필터 */
const filterBtns = document.querySelectorAll('.filter_btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const cards = document.querySelectorAll('.product_card');

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    cards.forEach(card => {
      const category = card.dataset.category;
      card.style.display =
        filter === 'all' || category === filter ? 'block' : 'none';
    });
  });
});
