// making the navbar toggle button work
const navToggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".nav-links-list");

navToggle.addEventListener("click", () => {
  const clicked = navToggle.getAttribute("aria-checked");
  const expanded = navbar.getAttribute("aria-expanded");

  if (clicked == "false" && expanded == "false") {
    navbar.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-checked", "true");
  } else {
    navbar.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-checked", "false");
  }
});

// setting the bookmark to work
const bookmark = document.querySelector(".bookmark");
const bookmarkIcon = document.querySelector(".bookmark-icon");
const bookmarkText = document.querySelector(".bookmark-text");

bookmark.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("marked");
  const checked = bookmark.getAttribute("aria-checked");

  if (checked == "false") {
    bookmarkText.innerText = "Bookmarked";
    bookmark.setAttribute("aria-checked", "true");
  } else {
    bookmarkText.innerText = "Bookmark";
    bookmark.setAttribute("aria-checked", "false");
  }
});

// progress
const progress = document.querySelector(".progress");
const amountText = document
  .querySelector(".amount-backed")
  .children[0].innerText.slice(1, 7);

const amount = parseInt(amountText.replace(/,/g, ""));
const progressPer = (amount / 100000) * 100;

progress.style.width = `${progressPer}%`;

// styling the radio selected option
const option = document.querySelectorAll(".option");
const radBtn = document.querySelectorAll(`input[type="radio"]`);

function addBorder(index) {
  for (let i = 0; i < option.length; i++) {
    if (i == index) {
      option[i].classList.add("checked");
    } else {
      option[i].classList.remove("checked");
    }
  }
}

setInterval(() => {
  for (let index = 0; index < radBtn.length; index++) {
    if (radBtn[index].checked) {
      addBorder(index);
    }
  }
}, 100);

// modals

const modalBackProject = document.querySelector(".back-project__modal");
const modalBackProjectOpen = document.querySelector(".back-project");
const modalBackProjectClose = document.querySelector(".close-modal");

modalBackProjectOpen.addEventListener("click", () => {
  const visible = modalBackProject.getAttribute("data-visible");

  if (visible == "false") {
    modalBackProject.setAttribute("data-visible", "true");
  }
});

modalBackProjectClose.addEventListener("click", () => {
  const visible = modalBackProject.getAttribute("data-visible");

  if (visible == "true") {
    modalBackProject.setAttribute("data-visible", "false");
  }
});

// modal completed
const modalCompleted = document.querySelector(".modal-completed");
const modalCompletedOpen = document.querySelectorAll(".continue");
const modalCompletedClose = document.querySelector(".got-it");
const selectReward = document.querySelectorAll(".select-product");

for (let index = 0; index < modalCompletedOpen.length; index++) {
  modalCompletedOpen[index].addEventListener("click", () => {
    const visible = modalCompleted.getAttribute("data-visible");
    const visiblilityModalBack = modalBackProject.getAttribute("data-visible");

    if (visiblilityModalBack == "true") {
      modalBackProject.setAttribute("data-visible", "false");
    }

    if (visible == "false") {
      modalCompleted.setAttribute("data-visible", "true");
    }
  });
}

modalCompletedClose.addEventListener("click", () => {
  const visible = modalCompleted.getAttribute("data-visible");

  if (visible == "true") {
    modalCompleted.setAttribute("data-visible", "false");
  }
});

for (let index = 0; index < selectReward.length; index++) {
  selectReward[index].addEventListener("click", () => {
    const visible = modalCompleted.getAttribute("data-visible");

    if (visible == "false") {
      modalCompleted.setAttribute("data-visible", "true");
    }
  });
}
