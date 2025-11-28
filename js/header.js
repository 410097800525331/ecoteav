// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 햄버거 열기/닫기
  const hamburgerBtn = document.getElementById("hamburger_btn");
  const closeBtn = document.getElementById("close_btn");
  const mobileNav = document.getElementById("mobile_nav");

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      mobileNav.style.right = "0px";
      closeBtn.style.display = "flex";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileNav.style.right = "-300px";
      closeBtn.style.display = "none";
    });
  }

  // 모바일 메뉴 아코디언
  const mobileBtns = document.querySelectorAll(".mobile_menu_btn");

  mobileBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      const icon = btn.querySelector(".toggle_icon");
      const isOpen = submenu.classList.contains("open");

      if (isOpen) {
        submenu.classList.remove("open");
        icon.textContent = "+";
        btn.classList.remove("active");
      } else {
        submenu.classList.add("open");
        icon.textContent = "-";
        btn.classList.add("active");
      }
    });
  });

  // 헤더 그림자 (forEach 바깥으로 이동)
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });
});
