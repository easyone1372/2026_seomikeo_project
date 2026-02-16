// form_stamp.ts
class FormStamp {
    constructor() {
        this.stampMt = document.getElementById("stamp-mt");
        this.stampIs = document.getElementById("stamp-is");
        this.popupMt = document.querySelector(".form_popup_mt");
        this.popupIs = document.querySelector(".form_popup_is");
        this.init();
    }
    init() {
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
    openPopup(type) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (type === "mt") {
            // MT 스탬프 클릭 상태로 변경
            (_a = this.stampMt) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            (_b = this.stampIs) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
            // MT 팝업 표시
            (_c = this.popupMt) === null || _c === void 0 ? void 0 : _c.classList.add("active");
            (_d = this.popupIs) === null || _d === void 0 ? void 0 : _d.classList.remove("active");
        }
        else {
            // IS 스탬프 클릭 상태로 변경
            (_e = this.stampIs) === null || _e === void 0 ? void 0 : _e.classList.add("active");
            (_f = this.stampMt) === null || _f === void 0 ? void 0 : _f.classList.remove("active");
            // IS 팝업 표시
            (_g = this.popupIs) === null || _g === void 0 ? void 0 : _g.classList.add("active");
            (_h = this.popupMt) === null || _h === void 0 ? void 0 : _h.classList.remove("active");
        }
        // 스크롤 방지
        document.body.style.overflow = "hidden";
    }
    closeAllPopups() {
        var _a, _b, _c, _d;
        // 모든 팝업 닫기
        (_a = this.popupMt) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        (_b = this.popupIs) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
        // 모든 스탬프 초기 상태로
        (_c = this.stampMt) === null || _c === void 0 ? void 0 : _c.classList.remove("active");
        (_d = this.stampIs) === null || _d === void 0 ? void 0 : _d.classList.remove("active");
        // 스크롤 복원
        document.body.style.overflow = "";
    }
}
// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
    new FormStamp();
});
export default FormStamp;
//# sourceMappingURL=form_stamp.js.map