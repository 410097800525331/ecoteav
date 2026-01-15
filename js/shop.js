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
          <button type="button"><img src="/assets/img/icon_202108231507467600.png" alt="cart"></button>
          <button type="button"><img src="/assets/img/icon_202108231507563600.png" alt="cart"></button>
          <!-- <button type="button">♡</button> -->
          <button type="button">≡</button>
        </div>
      </div>

      <div class="card_info">
        <h4>${item.id}</h4>
        <div>${item.desc}</div>
        <div class="card_price">
          <del>${item.price.toLocaleString()}원</del>
          <b>${item.sale.toLocaleString()}원</b>
        </div>
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

    filterBtns.forEach(b => b.classList.remove('is_active'));
    btn.classList.add('is_active');

    cards.forEach(card => {
      const category = card.dataset.category;
      card.style.display =
        filter === 'all' || category === filter ? 'block' : 'none';
    });
  });
});