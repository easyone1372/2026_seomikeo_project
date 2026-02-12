// navigation.ts
const navBtnEvent = document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById(
    "home-btn",
  ) as HTMLAnchorElement;
  const workBtn = document.getElementById(
    "work-btn",
  ) as HTMLAnchorElement;
  const formBtn = document.getElementById(
    "form-btn",
  ) as HTMLAnchorElement;
  const creditBtn = document.getElementById(
    "credit-btn",
  ) as HTMLAnchorElement;

 if(homeBtn){
  homeBtn.addEventListener("click", () => {
    console.log("Home button clicked");
    window.location.href = "index.html";
  });
 }

 if(workBtn){
  workBtn.addEventListener("click", () => {
    console.log("Work button clicked");
    window.location.href = "work.html";
  });

  }
  if(formBtn){
  formBtn.addEventListener("click", () => {
    console.log("Form button clicked");
    window.location.href = "form.html";
  });}

  if(creditBtn){
  creditBtn.addEventListener("click", () => {
    console.log("Credit button clicked");
    window.location.href = "credit.html";
  });}

});

export default navBtnEvent;