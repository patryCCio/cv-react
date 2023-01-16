const navbar = document.querySelector(".navbar");
const hexagons = document.querySelectorAll(".hexagon");
const allSections = document.querySelectorAll(".sector");

const cardWrapper = document.querySelectorAll(".card-box .card-wrapper");
const h2Info = document.querySelector(".info #info-h2");
const infoCards = document.querySelectorAll(".info-card-wrapper .info-card");
const h3Contact = document.querySelector(".contact .contact-content h3");
const h4Contact = document.querySelector(".contact .contact-content h4");
const formInputLabel = document.querySelectorAll(".contact .form-input label");
const formInput = document.querySelectorAll(".contact .form-input input");
const formInputButton = document.querySelector("#form-input-button");
const formInputTextarea = document.querySelector("#form-input-textarea");

let sectionSize = [];
let scrollSectionSize = [];

function checkSize() {
  if (window.innerWidth > 1024) {
    navbar.dataset.statement = "window";
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
  let y = 0;
  let screenSize = 0;
  if (navbar.dataset.statement === "mobile") {
    screenSize = 150;
  } else {
    screenSize = 250;
  }

  for (let x = 0; x < sectionSize.length; x++) {
    if (window.scrollY > sectionSize[x] - 250) {
      y++;
    }
  }

  allSections.forEach((el, index) => {
    if (index === y) {
      el.classList.add("active");
    }
  });

  cardWrapper.forEach((card) => {
    if (card.getBoundingClientRect().top <= window.innerHeight - screenSize) {
      card.classList.add("active");
    }
  });

  if (h2Info.getBoundingClientRect().top <= window.innerHeight - screenSize) {
    h2Info.classList.add("active");
  }

  infoCards.forEach((card) => {
    if (card.getBoundingClientRect().top <= window.innerHeight - screenSize) {
      card.classList.add("active");
    }
  });

  if (
    h3Contact.getBoundingClientRect().top <=
    window.innerHeight - screenSize
  ) {
    h3Contact.classList.add("active");
  }

  if (
    h4Contact.getBoundingClientRect().top <=
    window.innerHeight - screenSize
  ) {
    h4Contact.classList.add("active");
  }

  formInputLabel.forEach((card) => {
    if (card.getBoundingClientRect().top <= window.innerHeight - screenSize) {
      card.classList.add("active");
    }
  });

  formInput.forEach((card) => {
    if (card.getBoundingClientRect().top <= window.innerHeight - screenSize) {
      card.classList.add("active");
    }
  });

  if (
    formInputButton.getBoundingClientRect().top <=
    window.innerHeight - 5
  ) {
    formInputButton.classList.add("active");
  }

  if (
    formInputTextarea.getBoundingClientRect().top <=
    window.innerHeight - screenSize
  ) {
    formInputTextarea.classList.add("active");
  }
}

// function setScrollActive() {
//
//   if (navbar.dataset.statement === "mobile") {
//     if (svgContainer.getBoundingClientRect().top > 200) {
//       svgContainer.classList.add("active");
//     }
//     if (text.getBoundingClientRect().top <= window.innerHeight / 4) {
//       text.classList.add("active");
//     }

//     fontBoxes.forEach((box) => {
//       if (box.getBoundingClientRect().top <= window.innerHeight - 150) {
//         box.classList.add("active");
//       }
//     });

//     layoutPrice.forEach((price) => {
//       if (price.getBoundingClientRect().top <= window.innerHeight - 100) {
//         price.classList.add("active");
//       }
//     });

//     h3.forEach((elH3) => {
//       if (elH3.getBoundingClientRect().top <= window.innerHeight - 50) {
//         elH3.classList.add("active");
//       }
//     });

//     h4.forEach((elH4) => {
//       if (elH4.getBoundingClientRect().top <= window.innerHeight - 50) {
//         elH4.classList.add("active");
//       }
//     });

//     if (input.getBoundingClientRect().top <= window.innerHeight - 50) {
//       input.classList.add("active");
//     }

//     if (textarea.getBoundingClientRect().top <= window.innerHeight - 50) {
//       textarea.classList.add("active");
//     }

//     if (button.getBoundingClientRect().top <= window.innerHeight - 50) {
//       button.classList.add("active");
//     }

//     socialBox.forEach((social) => {
//       if (social.getBoundingClientRect().top <= window.innerHeight - 50) {
//         social.classList.add("active");
//       }
//     });
//   } else {
//     if (svgContainer.getBoundingClientRect().top > 200) {
//       svgContainer.classList.add("active");
//     }
//     if (text.getBoundingClientRect().top <= window.innerHeight / 2) {
//       text.classList.add("active");
//     }
//     if (fontWrapper.getBoundingClientRect().top <= window.innerHeight / 2) {
//       fontWrapper.classList.add("active");
//     }
//     if (priceBox.getBoundingClientRect().top <= window.innerHeight / 2) {
//       priceBox.classList.add("active");
//     }
//     if (layout7.getBoundingClientRect().top <= window.innerHeight / 2) {
//       layout7.classList.add("active");
//     }
//   }
// }

checkSize();
setSectionSize();
setScrollActive();

hexagons.forEach((hexagon) => {
  hexagon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

window.addEventListener("resize", checkSize);
window.addEventListener("scroll", setScrollActive);
