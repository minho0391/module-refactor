import Header from "./module/header.js";
import Footer from "./module/footer.js";

let headerModule = new Header();
headerModule.render();

let footerModule = new Footer();
footerModule.render();

const questions = document.querySelectorAll(".qnalist details");

questions.forEach(question => {
  question.addEventListener("click", e => {
    e.preventDefault();

    let isOpen = question.hasAttribute("open");

    questions.forEach(q => {
      q.removeAttribute("open");
    });

    if (!isOpen) {
      question.setAttribute("open", "");
    }
  });
});

const portfolioSwiper = new Swiper(".portfolio-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    prevEl: ".portfolio .prev",
    nextEl: ".portfolio .next",
  },
});
