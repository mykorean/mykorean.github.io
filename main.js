// main.js - Language switching functionality for Hanventures
// main.js - Hanventures 웹사이트를 위한 언어 전환 기능

// Wait for the entire document to be loaded
// 전체 문서가 로드된 후 실행

document.addEventListener("DOMContentLoaded", function () {
  // Select all language buttons
  // 모든 언어 전환 버튼 선택
  const langButtons = document.querySelectorAll(".lang-btn");

  // Select all elements that can be translated (contain data-lang attribute)
  // 번역 가능한 모든 요소 선택 (data-lang 속성이 있는 요소)
  const translatableElements = document.querySelectorAll("[data-lang]");

  // Loop through each language button and attach click event listener
  // 각 언어 버튼에 클릭 이벤트 리스너 연결
  langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior / 기본 링크 동작 방지

      // Remove 'active' class from all buttons
      // 모든 버튼에서 'active' 클래스 제거
      langButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      // 클릭된 버튼에 'active' 클래스 추가
      button.classList.add("active");

      // Get the selected language from button text (e.g., 한국어 or English)
      // 버튼의 텍스트를 기준으로 선택된 언어 판단
      const selectedLang = button.textContent.trim();

      // Show/hide elements based on their data-lang attribute
      // 각 요소의 data-lang 속성에 따라 표시/숨김 처리
      translatableElements.forEach((el) => {
        if (el.dataset.lang === selectedLang || el.dataset.lang === "both") {
          el.style.display = "block"; // Show element / 요소 보이기
        } else {
          el.style.display = "none"; // Hide element / 요소 숨기기
        }
      });
    });
  });
});
