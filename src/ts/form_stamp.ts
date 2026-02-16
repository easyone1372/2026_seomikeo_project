// form_stamp.ts

class FormStamp {
  private stampMt: HTMLElement | null;
  private stampIs: HTMLElement | null;
  private popupMt: HTMLElement | null;
  private popupIs: HTMLElement | null;

  constructor() {
    this.stampMt = document.getElementById("stamp-mt");
    this.stampIs = document.getElementById("stamp-is");
    this.popupMt = document.querySelector(".form_popup_mt");
    this.popupIs = document.querySelector(".form_popup_is");

    this.init();
  }

  private init(): void {
    // MT 스탬프 클릭
    if (this.stampMt) {
      this.stampMt.addEventListener("click", () => {
        this.openPopup("mt");
      });
    }

    // IS 스탬프 클릭
    if (this.stampIs) {
      this.stampIs.addEventListener("click", () => {
        this.openPopup("is");
      });
    }

    // 팝업 닫기 버튼들
    const closeButtons = document.querySelectorAll(".popup_close");
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.closeAllPopups();
      });
    });

    // 팝업 배경 클릭 시 닫기
    if (this.popupMt) {
      this.popupMt.addEventListener("click", (e) => {
        if (e.target === this.popupMt) {
          this.closeAllPopups();
        }
      });
    }

    if (this.popupIs) {
      this.popupIs.addEventListener("click", (e) => {
        if (e.target === this.popupIs) {
          this.closeAllPopups();
        }
      });
    }

    // ESC 키로 팝업 닫기
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAllPopups();
      }
    });
  }

  private openPopup(type: "mt" | "is"): void {
    if (type === "mt") {
      // MT 스탬프 클릭 상태로 변경
      this.stampMt?.classList.add("active");
      this.stampIs?.classList.remove("active");

      // MT 팝업 표시
      this.popupMt?.classList.add("active");
      this.popupIs?.classList.remove("active");
    } else {
      // IS 스탬프 클릭 상태로 변경
      this.stampIs?.classList.add("active");
      this.stampMt?.classList.remove("active");

      // IS 팝업 표시
      this.popupIs?.classList.add("active");
      this.popupMt?.classList.remove("active");
    }

    // 스크롤 방지
    document.body.style.overflow = "hidden";
  }

  private closeAllPopups(): void {
    // 모든 팝업 닫기
    this.popupMt?.classList.remove("active");
    this.popupIs?.classList.remove("active");

    // 모든 스탬프 초기 상태로
    this.stampMt?.classList.remove("active");
    this.stampIs?.classList.remove("active");

    // 스크롤 복원
    document.body.style.overflow = "";
  }
}

// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  new FormStamp();
});

export default FormStamp;
