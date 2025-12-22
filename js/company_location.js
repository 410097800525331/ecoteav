location_content.forEach(location_content => {
  const location = `
    <div class="location_inner">
      <h2>${location_content.title}</h2>
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