
const accButtons = document.querySelectorAll(".accordion_btn");

accButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const content = document.querySelector(targetId);
    const icon = btn.querySelector(".acc_icon");
    const item = btn.parentElement;

    // 이미 열려 있으면 닫기
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      item.classList.remove("active");
      icon.textContent = "+";
      return;
    }

    // 다른 모든 아코디언 닫기
    document.querySelectorAll(".accordion_content").forEach((con) => {
      con.classList.remove("open");
    });
    document.querySelectorAll(".accordion_item").forEach((it) => {
      it.classList.remove("active");
    });
    document.querySelectorAll(".acc_icon").forEach((ic) => {
      ic.textContent = "+";
    });

    // 현재 아이템 열기
    content.classList.add("open");
    item.classList.add("active");
    icon.textContent = "−";
  });
});