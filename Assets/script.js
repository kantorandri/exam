const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");
const navigation = document.querySelector(".webMobile");
const overlay = document.querySelector(".overlay");

openIcon.addEventListener("click", () => {
  navigation.classList.toggle("active");
  closeIcon.style.display = "block";
  openIcon.style.display = "none";
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
});

closeIcon.addEventListener("click", () => {
  navigation.classList.toggle("active");
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  overlay.style.display = "none";
  document.body.style.overflowY = "auto";
});
