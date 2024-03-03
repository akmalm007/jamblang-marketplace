// Mendapatkan lebar layar pengguna
var screenWidth = window.screen.width;

// Menyimpan lebar layar dalam variabel CSS
document.documentElement.style.setProperty(
  "--screen-width",
  screenWidth + "px"
);

// ====CAROUSEL FUNCTION
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showItem(index) {
  const newPosition = -index * 100 + "%";
  document.querySelector(
    ".carousel-wrapper"
  ).style.transform = `translateX(${newPosition})`;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

function changeTitle(title) {
  document.getElementById("category-title").textContent = title;
  var navLinks = document
    .getElementsByClassName("category-nav-links")[0]
    .getElementsByTagName("li");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }
  var activeLink = document.querySelector('a[href="#product-category"]:focus');
  if (activeLink) {
    activeLink.parentElement.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const countElement = document.getElementById("count");
  let count = 0;

  decrementButton.addEventListener("click", function () {
    count = Math.max(0, count - 1);
    countElement.textContent = count;
  });

  incrementButton.addEventListener("click", function () {
    count += 1;
    countElement.textContent = count;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heartButton = document.getElementById("heartButton");

  heartButton.addEventListener("click", function () {
    heartButton.style.color = "red";
  });
});
