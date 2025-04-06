// main.js - Hanventures 웹사이트를 위한 언어 전환 기능 (자세한 주석 포함)
// main.js - Language switching functionality for Hanventures with detailed comments

// ==============================
// 📦 문서 로드 완료 이벤트 등록 / Wait for full document load
// ==============================
document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 🌐 언어 전환 버튼들 선택 / Select language switch buttons
  // ==========================================
  const langButtons = document.querySelectorAll(".lang-btn"); // .lang-btn 클래스를 가진 모든 요소 선택

  // =============================================================
  // 🌍 번역 대상 요소들 선택 / Select all elements with data-lang
  // =============================================================
  const translatableElements = document.querySelectorAll("[data-lang]"); // data-lang 속성이 있는 모든 요소

  // ===================================================================
  // 🔁 각 언어 버튼에 클릭 이벤트 등록 / Add click listeners to language buttons
  // ===================================================================
  langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // 링크 기본 동작(페이지 이동) 방지 / Prevent link navigation

      // ==============================================================
      // 🎯 모든 버튼에서 active 클래스 제거 / Clear current active state
      // ==============================================================
      langButtons.forEach((btn) => btn.classList.remove("active"));

      // ======================================================
      // ✅ 클릭된 버튼에 active 클래스 추가 / Highlight selected button
      // ======================================================
      button.classList.add("active");

      // =============================================================
      // 🗣️ 클릭된 버튼의 텍스트에서 언어 정보 가져오기 / Get selected language text
      // 예: '한국어' 또는 'English'
      // =============================================================
      const selectedLang = button.textContent.trim();

      // ====================================================================================
      // 🔄 선택된 언어에 따라 data-lang 속성을 비교하고 콘텐츠 표시 여부 결정 / Toggle visibility
      // ====================================================================================
      translatableElements.forEach((el) => {
        if (el.dataset.lang === selectedLang || el.dataset.lang === "both") {
          el.style.display = "block"; // ✅ 해당 언어 또는 공통 콘텐츠는 표시 / Show matching or shared content
        } else {
          el.style.display = "none"; // ❌ 일치하지 않는 언어 콘텐츠는 숨김 / Hide non-matching content
        }
      });
    });
  });
});
