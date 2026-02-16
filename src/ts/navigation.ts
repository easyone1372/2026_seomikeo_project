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
      console.log("Home button clicked");
      navigateWithTransition("/index.html");
    });
  }

  if (workBtn) {
    workBtn.addEventListener("click", () => {
      console.log("Work button clicked");
      navigateWithTransition("/work_page/work.html");
    });
  }
  if (formBtn) {
    formBtn.addEventListener("click", () => {
      console.log("Form button clicked");
      navigateWithTransition("/form.html");
    });
  }

  if (creditBtn) {
    creditBtn.addEventListener("click", () => {
      console.log("Credit button clicked");
      navigateWithTransition("/credit.html");
    });
  }
});

export default navBtnEvent;
