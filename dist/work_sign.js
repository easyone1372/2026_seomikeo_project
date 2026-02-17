// work.ts
class WorkSignpost {
    constructor() {
        this.signMt = document.getElementById("sign-mt");
        this.signIs = document.getElementById("sign-is");
        this.workContent = document.querySelector(".work_content");
        this.otherContainer = document.querySelector(".other_container");
        this.infoMountain = document.querySelector(".info_mountain");
        this.infoIsland = document.querySelector(".info_island");
        this.init();
    }
    init() {
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
                e.stopPropagation();
                document.body.classList.add("page-transitioning");
                setTimeout(() => {
                    window.location.href = "/2026_SMK_project/work_page/work_klk.html";
                }, 150);
            });
        }
        // IS OK 버튼 - work_bbjh.html로 이동
        const isOkBtn = document.querySelector(".info_is_ok_btn");
        if (isOkBtn) {
            isOkBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                document.body.classList.add("page-transitioning");
                setTimeout(() => {
                    window.location.href = "/2026_SMK_project/work_page/work_bbjh.html";
                }, 150);
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
    showMountain() {
        var _a, _b, _c, _d, _e, _f, _g;
        // 이전 팝업 즉시 제거
        (_a = this.infoIsland) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        // 표지판 왼쪽으로 이동
        (_b = this.workContent) === null || _b === void 0 ? void 0 : _b.classList.add("move-left");
        (_c = this.workContent) === null || _c === void 0 ? void 0 : _c.classList.remove("move-right");
        // 배경 이미지 표시
        (_d = this.otherContainer) === null || _d === void 0 ? void 0 : _d.classList.add("show-mountain");
        (_e = this.otherContainer) === null || _e === void 0 ? void 0 : _e.classList.remove("show-island");
        // MT 표지판 기울이기
        (_f = this.signMt) === null || _f === void 0 ? void 0 : _f.classList.add("selected");
        (_g = this.signIs) === null || _g === void 0 ? void 0 : _g.classList.remove("selected");
        // 정보 팝업 표시
        setTimeout(() => {
            var _a;
            (_a = this.infoMountain) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        }, 400);
    }
    showIsland() {
        var _a, _b, _c, _d, _e, _f, _g;
        // 이전 팝업 즉시 제거
        (_a = this.infoMountain) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        // 표지판 오른쪽으로 이동
        (_b = this.workContent) === null || _b === void 0 ? void 0 : _b.classList.add("move-right");
        (_c = this.workContent) === null || _c === void 0 ? void 0 : _c.classList.remove("move-left");
        // 배경 이미지 표시
        (_d = this.otherContainer) === null || _d === void 0 ? void 0 : _d.classList.add("show-island");
        (_e = this.otherContainer) === null || _e === void 0 ? void 0 : _e.classList.remove("show-mountain");
        // IS 표지판 기울이기
        (_f = this.signIs) === null || _f === void 0 ? void 0 : _f.classList.add("selected");
        (_g = this.signMt) === null || _g === void 0 ? void 0 : _g.classList.remove("selected");
        // 정보 팝업 표시
        setTimeout(() => {
            var _a;
            (_a = this.infoIsland) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        }, 400);
    }
    closeInfo() {
        var _a, _b, _c, _d, _e, _f;
        // 모든 상태 초기화
        (_a = this.workContent) === null || _a === void 0 ? void 0 : _a.classList.remove("move-left", "move-right");
        (_b = this.otherContainer) === null || _b === void 0 ? void 0 : _b.classList.remove("show-mountain", "show-island");
        (_c = this.signMt) === null || _c === void 0 ? void 0 : _c.classList.remove("selected");
        (_d = this.signIs) === null || _d === void 0 ? void 0 : _d.classList.remove("selected");
        (_e = this.infoMountain) === null || _e === void 0 ? void 0 : _e.classList.remove("active");
        (_f = this.infoIsland) === null || _f === void 0 ? void 0 : _f.classList.remove("active");
    }
}
// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
    new WorkSignpost();
});
export default WorkSignpost;
//# sourceMappingURL=work_sign.js.map