const grid = document.getElementById('product_grid');

herbalProducts.forEach(item => {
  const card = `
    <div class="product_card">
      <div class="card_img_wrap">
        <img src="${item.img}" alt="${item.title}">
        <span class="discount_badge">${item.discount}%</span>

        <div class="card_hover">
          <button>🛒</button>
          <button>♡</button>
          <button>≡</button>
        </div>
    <div class="card_info">
        <h3>${item.title}</h3>
        <div>${item.desc}</div>
        <p class="card_price">
          <del>${item.price.toLocaleString()}원</del>
          <strong>${item.sale.toLocaleString()}원</strong>
        </p>
      </div>
    </div>
  `;
  grid.insertAdjacentHTML('beforeend', card);
});
blackteaProducts.forEach(item => {
  const card = `
    <section class="product_card">
      <div class="card_img_wrap">
        <img src="${item.img}" alt="${item.title}">
        <span class="discount_badge">${item.discount}%</span>

        <div class="card_hover">
          <button>
            <img src="https://tgetea.com/web/upload/icon_202108231507467600.png" alt="장바구니"></button>
          <button>♡</button>
          <button>≡</button>
        </div>
    <div class="card_info">
        <h3>${item.title}</h3>
        <div>${item.desc}</div>
        <p class="card_price">
          <del>${item.price.toLocaleString()}원</del>
          <strong>${item.sale.toLocaleString()}원</strong>
        </p>
      </div>
    </div>
  `;
  grid.insertAdjacentHTML('beforeend', card);
});