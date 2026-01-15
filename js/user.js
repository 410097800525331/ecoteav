document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
    회원 / 사업자 / 법인 노출
  ========================== */
  const memberRadios = document.querySelectorAll('input[name="member_kind"]');
  const bizRadios = document.querySelectorAll('input[name="biz_type"]');

  const bizOnly = document.querySelectorAll(".biz_only");
  const corpOnly = document.querySelector(".corp_only");

  function updateMemberType() {
    const memberType = document.querySelector('input[name="member_kind"]:checked').value;

    if (memberType === "business") {
      bizOnly.forEach(el => el.style.display = "flex");
      updateBizType();
    } else {
      bizOnly.forEach(el => el.style.display = "none");
      corpOnly.style.display = "none";
    }
  }

  function updateBizType() {
    const bizType = document.querySelector('input[name="biz_type"]:checked')?.value;
    const bizPersonalOnly = document.querySelectorAll('.biz_personal_only');

    if (bizType === "corp") {
      corpOnly.style.display = "block";
      bizPersonalOnly.forEach(el => el.style.display = "none");
    } else {
      corpOnly.style.display = "none";
      bizPersonalOnly.forEach(el => el.style.display = "flex");
    }
  }


  memberRadios.forEach(radio =>
    radio.addEventListener("change", updateMemberType)
  );

  bizRadios.forEach(radio =>
    radio.addEventListener("change", updateBizType)
  );

  updateMemberType();
  updateBizType();


  /* ==========================
    전체 동의 체크박스
  ========================== */
  const agreeAll = document.getElementById("agree_all");
  const agreeItems = document.querySelectorAll(".agree_item");

  agreeAll.addEventListener("change", () => {
    agreeItems.forEach(item => {
      item.checked = agreeAll.checked;
    });
  });

  agreeItems.forEach(item => {
    item.addEventListener("change", () => {
      agreeAll.checked = [...agreeItems].every(i => i.checked);
    });
  });


  /* ==========================
    다음 주소 검색
  ========================== */
  const btnPostcode = document.getElementById("btn_postcode");

  btnPostcode.addEventListener("click", () => {
    new daum.Postcode({
      oncomplete: function (data) {
        document.getElementById("postcode").value = data.zonecode;
        document.getElementById("address").value = data.roadAddress || data.jibunAddress;
        document.getElementById("detail_address").focus();
      }
    }).open();
  });

});

// 약관 동의
const agreeAll = document.getElementById('agree_all');
const agreeItems = document.querySelectorAll('.agree_item');

// 전체 동의 클릭 시
agreeAll.addEventListener('change', function () {
  agreeItems.forEach(item => {
    item.checked = agreeAll.checked;
  });
});

// 개별 동의 클릭 시 전체동의 상태 반영
agreeItems.forEach(item => {
  item.addEventListener('change', function () {
    const allChecked = [...agreeItems].every(i => i.checked);
    agreeAll.checked = allChecked;
  });
});

const form = document.querySelector('form');
const requiredAgrees = document.querySelectorAll('.agree_item.required');

form.addEventListener('submit', function (e) {
  const ok = [...requiredAgrees].every(item => item.checked);
  if (!ok) {
    e.preventDefault();
    alert('필수 약관에 동의해주세요.');
  }
});