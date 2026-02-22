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
    setTimeout(() => {
      this.animationComplete = true;
      if (this.imageBox) {
        this.imageBox.classList.add("animation-complete");
      }
    }, 6000);

    // 이미지 박스 클릭/호버 이벤트
    if (this.imageBox && this.fullImageBox) {
      this.imageBox.addEventListener("mouseenter", () => {
        if (this.animationComplete) {
          this.showFullImage();
        }
      });

      // 전역 마우스 이동 감지 - 이미지 박스의 좌우 범위 체크
      document.addEventListener("mousemove", (e: MouseEvent) => {
        // 팝업이 열려있을 때만 체크
        if (this.fullImageBox?.classList.contains("active") && this.imageBox) {
          const rect = this.imageBox.getBoundingClientRect();
          const mouseX = e.clientX;

          // 마우스가 이미지 박스의 좌우 범위를 벗어났는지 체크
          if (mouseX < rect.left || mouseX > rect.right) {
            this.hideFullImage();
          }
        }
      });

      // 팝업 배경 클릭 시 닫기
      this.fullImageBox.addEventListener("click", (e: MouseEvent) => {
        // 배경(fullImageBox)을 직접 클릭한 경우만 닫기
        if (e.target === this.fullImageBox) {
          this.hideFullImage();
        }
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
