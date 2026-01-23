const consultation_contents = {
  blending: {
    title: 'OEM / ODM 상담 신청',
    subPost: '당신이 원하는 茶는 무엇입니까?<br>Tea 상품 제작 의도를 파악하고, 최상의 기획과 효율적인 예산 활용을 돕기 위한 자료로 활용됩니다.',
    formLabel: '핵심 차茶 원료',
    placeholder: '희망 원료를 입력해주세요.',
  },
  flavor: {
    title: '향료 상담 신청',
    subPost: '에코티브의 전문 향료 개발팀이 맞춤형 솔루션을 제공합니다.<br>식품, 음료, 디퓨저, 화장품 등 다양한 제품에 적용 가능한 향료 상담을 신청하세요.',
    formLabel: '희망 향 노트(Top / Middle / Base)',
    placeholder: '예: Top: 시트러스 / Middle: 장미 / Base: 바닐라',
  },
  visit: {
    title: '방문 상담 신청',
    subPost: '에코티브 본사에 방문하여 맞춤형 TEA 상담을 받아보세요.<br>담당자가 일정 확인 후 방문 확정 연락을 드립니다.',
    formLabel: '상담 요청 내용',
    placeholder: '상담받고자 하는 내용을 입력해주세요.',
  },
};

// consultation_contents.forEach(consultation_content => {
$(document).ready(function () {
  const type = $("#consultation_wrap_s").data("type");
  const data = consultation_contents[type];

  if (!data) {
    console.error("잘못된 data-type 입니다.");
    return;
  }

  const consultationTop = `
    <div class="form_wrap">
      <h3><a class="line" href="/basic/inquiry_faq.html">자주 묻는 질문</a></h3>
      <h2>${data.title}</h2>
      <div class="container">
        <p>${data.subPost}</p>
        <p><span class="red">*</span> 필수 입력 항목입니다</p>
      </div>
      <form>
        <!-- form 1 -->
        <div class="form_row">
          <label class="form_label">업체명(회사명) <span class="red">*</span></label>
          <div class="form_field">
            <input type="text" name="company" placeholder="사업자등록증 미발급 시 성함 기재" required>
          </div>
        </div>
        <div class="form_row">
          <label class="form_label">담당자(성함/직위) <span class="red">*</span></label>
          <div class="form_field">
            <input type="text" name="manager" required>
          </div>
        </div>
        <div class="form_row">
          <label class="form_label">이메일 <span class="red">*</span></label>
          <div class="form_field">
            <input type="email" name="email" required>
          </div>
        </div>
        <div class="form_row">
          <label class="form_label">연락처 <span class="red">*</span></label>
          <div class="form_field">
            <input type="tel" name="phone" required>
          </div>
        </div>
      </form>
      `;
  const consultationBottom = `
      <div class="form_wrap">
        <!-- form 3 -->
          <div class="form_row">
            <label class="form_label">${data.formLabel}</label>
            <div class="form_field">
              <textarea name="ingredient" placeholder="${data.placeholder}"></textarea>
            </div>
          </div>
          <div class="form_row">
            <label class="form_label">참고할 제품 링크<br>또는 기획 컨셉</label>
            <div class="form_field">
              <textarea name="concept" placeholder="구체적인 내용을 입력하시면 보다 전문적인 상담이 가능합니다. (링크 또는 아이디어를 입력해주세요.)"></textarea>
            </div>
          </div>
          <div class="form_field privacy">
            <label>
              <input type="checkbox" required> 개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
          <!-- btn -->
          <button type="submit" class="btn_ basic_btn_b">상담 신청하기</button>
      </div>
  `;

  $("#consultation_wrap_s").append(consultationTop);
  $("#consultation_wrap_e").append(consultationBottom);
});