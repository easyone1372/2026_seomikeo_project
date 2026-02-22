// form_stamp.ts
class FormStamp {
    constructor() {
        this.stampMt = document.getElementById("stamp-mt");
        this.stampIs = document.getElementById("stamp-is");
        this.stampNv = document.getElementById("stamp-nv");
        this.popupMt = document.querySelector(".form_popup_mt");
        this.popupIs = document.querySelector(".form_popup_is");
        this.popupNv = document.querySelector(".form_popup_nv");
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
        // NV 스탬프 클릭
        if (this.stampNv) {
            this.stampNv.addEventListener("click", () => {
                this.openPopup("nv");
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
        if (this.popupNv) {
            this.popupNv.addEventListener("click", (e) => {
                const target = e.target;
                // 링크 아이콘 클릭은 제외
                if (target.closest(".popup_icon")) {
                    return;
                }
                if (e.target === this.popupNv) {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (type === "mt") {
            // MT 스탬프 클릭 상태로 변경
            (_a = this.stampMt) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            (_b = this.stampIs) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
            (_c = this.stampNv) === null || _c === void 0 ? void 0 : _c.classList.remove("active");
            // MT 팝업 표시
            (_d = this.popupMt) === null || _d === void 0 ? void 0 : _d.classList.add("active");
            (_e = this.popupIs) === null || _e === void 0 ? void 0 : _e.classList.remove("active");
            (_f = this.popupNv) === null || _f === void 0 ? void 0 : _f.classList.remove("active");
        }
        else if (type === "is") {
            // IS 스탬프 클릭 상태로 변경
            (_g = this.stampIs) === null || _g === void 0 ? void 0 : _g.classList.add("active");
            (_h = this.stampMt) === null || _h === void 0 ? void 0 : _h.classList.remove("active");
            (_j = this.stampNv) === null || _j === void 0 ? void 0 : _j.classList.remove("active");
            // IS 팝업 표시
            (_k = this.popupIs) === null || _k === void 0 ? void 0 : _k.classList.add("active");
            (_l = this.popupMt) === null || _l === void 0 ? void 0 : _l.classList.remove("active");
            (_m = this.popupNv) === null || _m === void 0 ? void 0 : _m.classList.remove("active");
        }
        else if (type === "nv") {
            // NV 스탬프 클릭 상태로 변경
            (_o = this.stampNv) === null || _o === void 0 ? void 0 : _o.classList.add("active");
            (_p = this.stampMt) === null || _p === void 0 ? void 0 : _p.classList.remove("active");
            (_q = this.stampIs) === null || _q === void 0 ? void 0 : _q.classList.remove("active");
            // NV 팝업 표시
            (_r = this.popupNv) === null || _r === void 0 ? void 0 : _r.classList.add("active");
            (_s = this.popupMt) === null || _s === void 0 ? void 0 : _s.classList.remove("active");
            (_t = this.popupIs) === null || _t === void 0 ? void 0 : _t.classList.remove("active");
        }
        // 스크롤 방지
        document.body.style.overflow = "hidden";
    }
    closeAllPopups() {
        var _a, _b, _c, _d, _e, _f;
        // 모든 팝업 닫기
        (_a = this.popupMt) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        (_b = this.popupIs) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
        (_c = this.popupNv) === null || _c === void 0 ? void 0 : _c.classList.remove("active");
        // 모든 스탬프 초기 상태로
        (_d = this.stampMt) === null || _d === void 0 ? void 0 : _d.classList.remove("active");
        (_e = this.stampIs) === null || _e === void 0 ? void 0 : _e.classList.remove("active");
        (_f = this.stampNv) === null || _f === void 0 ? void 0 : _f.classList.remove("active");
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