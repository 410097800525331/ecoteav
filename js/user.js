document.addEventListener("DOMContentLoaded", () => {
  // 비밀번호 체크
  function isValidPassword(pw) {
    const lengthCheck = pw.length >= 10 && pw.length <= 16;
    const hasLetter = /[a-zA-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pw);

    return lengthCheck && hasLetter && hasNumber && hasSpecial;
  }

  // 연락처
  $(document).on('input', 'input[name="phone"]', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

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

  // 사업자등록번호
  function isValidBizNumber(bizNo) {
    const nums = bizNo.replace(/[^0-9]/g, '');
    if (nums.length !== 10) return false;

    const check = [1, 3, 7, 1, 3, 7, 1, 3, 5];
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += check[i] * parseInt(nums[i]);
    }

    sum += Math.floor((check[8] * parseInt(nums[8])) / 10);
    const result = (10 - (sum % 10)) % 10;

    return result === parseInt(nums[9]);
  }


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

  function isAllRequiredAgreed(form) {
    let valid = true;

    $(form).find('.agree_item.required').each(function () {
      if (!$(this).is(':checked')) {
        valid = false;
        return false;
      }
    });

    return valid;
  }
  
  $(document).on('submit', '#join_wrap form', function (e) {
    const pw = $(this).find('input[name="password"]').val();
    const pwConfirm = $(this).find('input[name="password_confirm"]').val();
    const bizNoInput = $(this).find('input[name="biz_number"]');

    // 비밀번호 조건
    if (!isValidPassword(pw)) {
      alert('비밀번호는 10~16자이며 영문, 숫자, 특수문자를 모두 포함해야 합니다.');
      e.preventDefault();
      return false;
    }

    // 비밀번호 일치
    if (pw !== pwConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      e.preventDefault();
      return false;
    }

    // 필수 약관
    if (!isAllRequiredAgreed(this)) {
      alert('필수 약관에 모두 동의해주세요.');
      e.preventDefault();
      return false;
    }

    // 사업자번호 (입력된 경우만)
    if (bizNoInput.length && bizNoInput.val().trim() !== '') {
      if (!isValidBizNumber(bizNoInput.val())) {
        alert('유효하지 않은 사업자등록번호입니다.');
        bizNoInput.focus();
        e.preventDefault();
        return false;
      }
    }
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