// work_klk.ts

class KlkAnimation {
  private imageBox: HTMLElement | null;
  private fullImageBox: HTMLElement | null;
  private animationComplete: boolean = false;

  constructor() {
    this.imageBox = document.querySelector(".klk_image_box");
    this.fullImageBox = document.querySelector(".klk_full_image_box");

    this.init();
  }

  private init(): void {
    // 애니메이션 완료 시간 계산 (마지막 애니메이션 완료 시점)
    // 앞 캐릭터 char_3: 5.2s + 0.8s = 6s
    setTimeout(() => {
      this.animationComplete = true;
      if (this.imageBox) {
        this.imageBox.classList.add("animation-complete");
      }
    }, 6000);

    // 이미지 박스 클릭/호버 이벤트
    if (this.imageBox && this.fullImageBox) {
      // 호버로 팝업 표시
      this.imageBox.addEventListener("mouseenter", () => {
        if (this.animationComplete) {
          this.showFullImage();
        }
      });

      // 팝업 클릭 시 닫기
      this.fullImageBox.addEventListener("click", () => {
        this.hideFullImage();
      });

      // ESC 키로 팝업 닫기
      document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          this.hideFullImage();
        }
      });
    }
  }

  private showFullImage(): void {
    if (this.fullImageBox) {
      this.fullImageBox.classList.add("active");
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    }
  }

  private hideFullImage(): void {
    if (this.fullImageBox) {
      this.fullImageBox.classList.remove("active");
      // 스크롤 복원
      document.body.style.overflow = "";
    }
  }
}

// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  new KlkAnimation();
});

export default KlkAnimation;
