const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Modal Open Function
const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

//Modal Close Function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
