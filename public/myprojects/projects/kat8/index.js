const navContainer = document.querySelector(".nav-container");
const aEl = document.querySelectorAll(".nav-a");
const burger = document.querySelector(".burger-wrapper");
const navbar = document.querySelector(".navbar");
const allSections = document.querySelectorAll(".sector");

let sectionSize = [];
let scrollSectionSize = [];

// MOBILE ANIMATION
const svgContainer = document.querySelector(".bottom-content .svg-container");
const text = document.querySelector(".bottom-content .text");
const fontBoxes = document.querySelectorAll(".about .font-box");
const layoutPrice = document.querySelectorAll(".layout-price");
const h3 = document.querySelectorAll(".contact h3");
const h4 = document.querySelectorAll(".contact h4");
const input = document.querySelector(".contact input");
const textarea = document.querySelector(".contact textarea");
const button = document.querySelector(".contact button");
const socialBox = document.querySelectorAll(".contact .social-box");

// WINDOW ANIMATIOOOON
const fontWrapper = document.querySelector(".about .font-wrapper");
const priceBox = document.querySelector(".price .price-box");
const layout7 = document.querySelector(".contact #layout7");
//

function setActive(index) {
  aEl.forEach((el, key) => {
    if (key === index) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function checkSize() {
  let size = window.innerWidth;

  if (size > 1024) {
    navbar.dataset.statement = "window";
    svgContainer.classList.remove("active");
    text.classList.remove("active");
    fontBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    layoutPrice.forEach((price) => {
      price.classList.remove("active");
    });
    h3.forEach((elH3) => {
      elH3.classList.remove("active");
    });
    h4.forEach((elH4) => {
      elH4.classList.remove("active");
    });
    input.classList.remove("active");
    textarea.classList.remove("active");
    button.classList.remove("active");
    socialBox.forEach((social) => {
      social.classList.remove("active");
    });
  } else {
    navbar.dataset.statement = "mobile";
  }
}

function setSectionSize() {
  sectionSize.push(0);
  allSections.forEach((sector, index) => {
    if (index === 2) {
      sectionSize.push(sectionSize[index] + sector.clientHeight);
    } else {
      sectionSize.push(sectionSize[index] + sector.clientHeight);
    }
  });

  sectionSize.pop();
  sectionSize.shift();
}

function setScrollActive() {
  if (window.scrollY > 100) {
    navContainer.classList.add("active");
  } else {
    navContainer.classList.remove("active");
  }

  let y = 0;

  for (let x = 0; x < sectionSize.length; x++) {
    if (window.scrollY > sectionSize[x] - 50) {
      y++;
    }
  }

  aEl.forEach((el, index) => {
    if (index === y) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  if (navbar.dataset.statement === "mobile") {
    if (svgContainer.getBoundingClientRect().top > 200) {
      svgContainer.classList.add("active");
    }
    if (text.getBoundingClientRect().top <= window.innerHeight / 4) {
      text.classList.add("active");
    }

    fontBoxes.forEach((box) => {
      if (box.getBoundingClientRect().top <= window.innerHeight - 150) {
        box.classList.add("active");
      }
    });

    layoutPrice.forEach((price) => {
      if (price.getBoundingClientRect().top <= window.innerHeight - 100) {
        price.classList.add("active");
      }
    });

    h3.forEach((elH3) => {
      if (elH3.getBoundingClientRect().top <= window.innerHeight - 50) {
        elH3.classList.add("active");
      }
    });

    h4.forEach((elH4) => {
      if (elH4.getBoundingClientRect().top <= window.innerHeight - 50) {
        elH4.classList.add("active");
      }
    });

    if (input.getBoundingClientRect().top <= window.innerHeight - 50) {
      input.classList.add("active");
    }

    if (textarea.getBoundingClientRect().top <= window.innerHeight - 50) {
      textarea.classList.add("active");
    }

    if (button.getBoundingClientRect().top <= window.innerHeight - 50) {
      button.classList.add("active");
    }

    socialBox.forEach((social) => {
      if (social.getBoundingClientRect().top <= window.innerHeight - 50) {
        social.classList.add("active");
      }
    });
  } else {
    if (svgContainer.getBoundingClientRect().top > 200) {
      svgContainer.classList.add("active");
    }
    if (text.getBoundingClientRect().top <= window.innerHeight / 2) {
      text.classList.add("active");
    }
    if (fontWrapper.getBoundingClientRect().top <= window.innerHeight / 2) {
      fontWrapper.classList.add("active");
    }
    if (priceBox.getBoundingClientRect().top <= window.innerHeight / 2) {
      priceBox.classList.add("active");
    }
    if (layout7.getBoundingClientRect().top <= window.innerHeight / 2) {
      layout7.classList.add("active");
    }
  }
}
setActive(0);
checkSize();
setSectionSize();
setScrollActive();

aEl.forEach((el, index) => {
  el.addEventListener("click", () => {
    setActive(index);
    if (navbar.dataset.statement === "mobile") {
      navbar.classList.remove("active");
      burger.classList.remove("active");
    }
  });
});

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  burger.classList.toggle("active");
});

window.addEventListener("resize", checkSize);

window.addEventListener("scroll", setScrollActive);
