import Header from "./module/header.js";
import Footer from "./module/footer.js";

let headerModule = new Header();
headerModule.render();

let footerModule = new Footer();
footerModule.render();

const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  navigation: {
    prevEl: ".testimonial .prev",
    nextEl: ".testimonial .next",
  },
});
