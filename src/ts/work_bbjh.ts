// work_bbjh.ts

class BbjhAnimation {
  private imageBox: HTMLElement | null;
  private fullImageBox: HTMLElement | null;
  private animationComplete: boolean = false;

  constructor() {
    this.imageBox = document.querySelector(".bbjh_image_box");
    this.fullImageBox = document.querySelector(".bbjh_full_image_box");

    this.init();
  }

  private init(): void {
    console.log("BbjhAnimation 초기화됨");
    console.log("imageBox:", this.imageBox);
    console.log("fullImageBox:", this.fullImageBox);

    // 애니메이션 완료 시간 계산 (마지막 애니메이션 완료 시점)
    // 캐릭터 2: 3.2s + 0.8s = 4s
    setTimeout(() => {
      this.animationComplete = true;
      console.log("애니메이션 완료!");
      if (this.imageBox) {
        this.imageBox.classList.add("animation-complete");
      }
    }, 4000);

    // 이미지 박스 클릭/호버 이벤트
    if (this.imageBox && this.fullImageBox) {
      // 호버로 팝업 표시
      this.imageBox.addEventListener("mouseenter", () => {
        console.log("마우스 호버, 애니메이션 완료:", this.animationComplete);
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
            console.log("좌우 범위 벗어남, 팝업 닫기");
            this.hideFullImage();
          }
        }
      });

      // 팝업 배경 클릭 시 닫기
      this.fullImageBox.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        // 링크 아이콘이나 그 자식 요소를 클릭한 경우 팝업 닫지 않음
        if (target.closest(".bbjh_full_link_icon")) {
          console.log("링크 아이콘 클릭됨, 팝업 유지");
          return;
        }

        // 배경이나 이미지를 클릭한 경우만 닫기
        if (
          e.target === this.fullImageBox ||
          target.classList.contains("bbjh_full_image") ||
          target.closest(".bbjh_full_image > img")
        ) {
          console.log("팝업 배경 클릭, 닫기");
          this.hideFullImage();
        }
      });

      // ESC 키로 팝업 닫기
      document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          console.log("ESC 키 눌림, 팝업 닫기");
          this.hideFullImage();
        }
      });
    } else {
      console.error("요소를 찾을 수 없음!");
    }
  }

  private showFullImage(): void {
    console.log("showFullImage 호출됨");
    if (this.fullImageBox) {
      this.fullImageBox.classList.add("active");
      console.log("active 클래스 추가됨");
      console.log(
        "팝업 opacity:",
        window.getComputedStyle(this.fullImageBox).opacity,
      );
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    }
  }

  private hideFullImage(): void {
    console.log("hideFullImage 호출됨");
    if (this.fullImageBox) {
      this.fullImageBox.classList.remove("active");
      console.log("active 클래스 제거됨");
      // 스크롤 복원
      document.body.style.overflow = "";
    }
  }
}

// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  new BbjhAnimation();
});

export default BbjhAnimation;
