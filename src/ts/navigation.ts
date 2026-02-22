// navigation.ts
const navBtnEvent = document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn") as HTMLAnchorElement;
  const workBtn = document.getElementById("work-btn") as HTMLAnchorElement;
  const formBtn = document.getElementById("form-btn") as HTMLAnchorElement;
  const creditBtn = document.getElementById("credit-btn") as HTMLAnchorElement;

  // 로컬 서버용 현재 위치가 work_page 안인지 확인
  // const isInWorkPage = window.location.pathname.includes("/work_page/");
  // const prefix = isInWorkPage ? "../" : "./";

  const navigateWithTransition = (url: string) => {
    document.body.classList.add("page-transitioning");
    setTimeout(() => {
      window.location.href = url;
    }, 150);
  };

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/index.html");
      // 로컬 개발용 경로
      // navigateWithTransition(`${prefix}index.html`);
    });
  }

  if (workBtn) {
    workBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/work_page/work.html");

      // 로컬 개발용 경로
      // navigateWithTransition(
      //   isInWorkPage ? "./work.html" : "./work_page/work.html",
      // );
    });
  }

  if (formBtn) {
    formBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/form.html");
      // navigateWithTransition(`${prefix}form.html`);
    });
  }

  if (creditBtn) {
    creditBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/credit.html");
    });
  }
});

//   if (creditBtn) {
//     creditBtn.addEventListener("click", () => {
//       // GitHub Pages용 경로
//       // navigateWithTransition("/2026_SMK_project/credit.html");
//       // 로컬 개발용 경로
//       navigateWithTransition(`${prefix}credit.html`);
//     });
//   }
// });

export default navBtnEvent;
