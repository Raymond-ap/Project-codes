const btnsWrapper = document.querySelector(".form-btns");
const btnsToggle = document.querySelectorAll(".form-btn");
const formsContent = document.querySelectorAll(".form-content");

// current year
const curYear = new Date().getFullYear();
document.querySelector(".allright .year").innerHTML = curYear;

btnsWrapper.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btnsToggle.forEach((btn) => {
      btn.classList.remove("active-btn");
      e.target.classList.add("active-btn");
    });
    formsContent.forEach((page) => {
      page.classList.remove("active");
    });
    const content = document.getElementById(id);
    content.classList.add("active");
  }
});
