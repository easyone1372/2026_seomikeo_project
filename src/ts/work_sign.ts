// work.ts

class WorkSignpost {
  private signMt: HTMLElement | null;
  private signIs: HTMLElement | null;
  private workContent: HTMLElement | null;
  private otherContainer: HTMLElement | null;
  private infoMountain: HTMLElement | null;
  private infoIsland: HTMLElement | null;

  constructor() {
    this.signMt = document.getElementById("sign-mt");
    this.signIs = document.getElementById("sign-is");
    this.workContent = document.querySelector(".work_content");
    this.otherContainer = document.querySelector(".other_container");
    this.infoMountain = document.querySelector(".info_mountain");
    this.infoIsland = document.querySelector(".info_island");

    this.init();
  }

  private init(): void {
    // MT 표지판 클릭 이벤트
    if (this.signMt) {
      this.signMt.addEventListener("click", () => {
        this.showMountain();
      });
    }

    // IS 표지판 클릭 이벤트
    if (this.signIs) {
      this.signIs.addEventListener("click", () => {
        this.showIsland();
      });
    }

    // MT OK 버튼 - work_klk.html로 이동
    const mtOkBtn = document.querySelector(".info_mt_ok_btn");
    if (mtOkBtn) {
      mtOkBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // 팝업 닫기 방지
        window.location.href = "/work_page/work_klk.html";
      });
    }

    // IS OK 버튼 - work_bbjh.html로 이동
    const isOkBtn = document.querySelector(".info_is_ok_btn");
    if (isOkBtn) {
      isOkBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // 팝업 닫기 방지
        window.location.href = "/work_page/work_bbjh.html";
      });
    }

    // BACK 버튼들 - 초기 화면으로 복귀
    const backBtns = document.querySelectorAll(".work_back_btn");
    backBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // 팝업 닫기 방지
        this.closeInfo();
      });
    });

    // 정보 팝업 배경 클릭 시 닫기 (이미지나 버튼이 아닌 영역)
    if (this.infoMountain) {
      this.infoMountain.addEventListener("click", (e) => {
        if (e.target === this.infoMountain) {
          this.closeInfo();
        }
      });
    }

    if (this.infoIsland) {
      this.infoIsland.addEventListener("click", (e) => {
        if (e.target === this.infoIsland) {
          this.closeInfo();
        }
      });
    }
  }

  private showMountain(): void {
    // 이전 팝업 즉시 제거
    this.infoIsland?.classList.remove("active");

    // 표지판 왼쪽으로 이동
    this.workContent?.classList.add("move-left");
    this.workContent?.classList.remove("move-right");

    // 배경 이미지 표시
    this.otherContainer?.classList.add("show-mountain");
    this.otherContainer?.classList.remove("show-island");

    // MT 표지판 기울이기
    this.signMt?.classList.add("selected");
    this.signIs?.classList.remove("selected");

    // 정보 팝업 표시
    setTimeout(() => {
      this.infoMountain?.classList.add("active");
    }, 400);
  }

  private showIsland(): void {
    // 이전 팝업 즉시 제거
    this.infoMountain?.classList.remove("active");

    // 표지판 오른쪽으로 이동
    this.workContent?.classList.add("move-right");
    this.workContent?.classList.remove("move-left");

    // 배경 이미지 표시
    this.otherContainer?.classList.add("show-island");
    this.otherContainer?.classList.remove("show-mountain");

    // IS 표지판 기울이기
    this.signIs?.classList.add("selected");
    this.signMt?.classList.remove("selected");

    // 정보 팝업 표시
    setTimeout(() => {
      this.infoIsland?.classList.add("active");
    }, 400);
  }

  private closeInfo(): void {
    // 모든 상태 초기화
    this.workContent?.classList.remove("move-left", "move-right");
    this.otherContainer?.classList.remove("show-mountain", "show-island");
    this.signMt?.classList.remove("selected");
    this.signIs?.classList.remove("selected");
    this.infoMountain?.classList.remove("active");
    this.infoIsland?.classList.remove("active");
  }
}

// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  new WorkSignpost();
});

export default WorkSignpost;
