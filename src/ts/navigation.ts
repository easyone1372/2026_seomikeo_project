// navigation.ts
const navBtnEvent = document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn") as HTMLAnchorElement;
  const workBtn = document.getElementById("work-btn") as HTMLAnchorElement;
  const formBtn = document.getElementById("form-btn") as HTMLAnchorElement;
  const creditBtn = document.getElementById("credit-btn") as HTMLAnchorElement;

  const navigateWithTransition = (url: string) => {
    document.body.classList.add("page-transitioning");
    setTimeout(() => {
      window.location.href = url;
    }, 150);
  };

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/index.html");
    });
  }

  if (workBtn) {
    workBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/work_page/work.html");
    });
  }

  if (formBtn) {
    formBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/form.html");
    });
  }

  if (creditBtn) {
    creditBtn.addEventListener("click", () => {
      navigateWithTransition("/2026_SMK_project/credit.html");
    });
  }
});

export default navBtnEvent;
