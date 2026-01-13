const location_content = [
  {
    title: '에코티브',
    address: '서울특별시 서초구 서운로 26길 5 토탈에코빌딩 B1',
    phone: '010-0000-0000',
    mail: 'ecoteav@gmail.com',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2321084302034!2d127.0197713764281!3d37.50244342779977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca10050dfb68d%3A0x6f661477fdcdef7e!2z7JeQ7L2U7Yuw67iMKGVjb3RlYXYp!5e0!3m2!1sko!2skr!4v1762406561762!5m2!1sko!2skr",
    location1: '1. 경부고속도로 이용 시 → 양재IC 진출 → 서초대로 진입 → 서초역 방면 직진 → 토탈에코빌딩 도착<br> 2. 도심 방면에서 오실 경우 → 교대역 교차로 → 서초중앙로 직진 → 서운로 26길 우회전 → 토탈에코빌딩 도착',
    location2: '1. 지하철: (신분당선) 신논현역 도보 약 3분<br> 2. 버스:',
  },
  {
    title: 'OO공장',
    address: '서울특별시 서초구 서운로 26길 5 토탈에코빌딩',
    phone: '010-0000-0000',
    mail: 'ecoteav@gmail.com',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2321084302034!2d127.0197713764281!3d37.50244342779977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca10050dfb68d%3A0x6f661477fdcdef7e!2z7JeQ7L2U7Yuw67iMKGVjb3RlYXYp!5e0!3m2!1sko!2skr!4v1762406561762!5m2!1sko!2skr",
    location1: '1. 경부고속도로 이용 시 → 양재IC 진출 → 서초대로 진입 → 서초역 방면 직진 → 토탈에코빌딩 도착<br> 2. 도심 방면에서 오실 경우 → 교대역 교차로 → 서초중앙로 직진 → 서운로 26길 우회전 → 토탈에코빌딩 도착',
    location2: '1. 지하철: (신분당선) 신논현역 도보 약 3분<br> 2. 버스:',
  },
];

location_content.forEach(location_content => {
  const location = `
    <div class="location_inner">
      <h2 data-aos="fade-up" data-aos-delay="100">${location_content.title}</h2>
      <p>
        <i class="fa-solid fa-location-dot"></i> ${location_content.address}<br>
        Tel&nbsp;&nbsp;${location_content.phone}&nbsp;&nbsp;&nbsp;&nbsp; mail&nbsp;&nbsp;${location_content.mail}
      </p>
      <div class="map_wrap">
        <iframe
          src=${location_content.map}
          style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <hr>
      <div class="directions">
        <div>오시는 방법</div>
        <p>
          <b>자가용 이용 시</b><br>
          ${location_content.location1}
        </p>
        <p>
          <b>대중교통 이용 시</b><br>
          ${location_content.location2}
        </p>
      </div>
    </div>
  `;

  $("#company_location_wrap").append(location);
});