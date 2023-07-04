/*? no js js needed from me */
// hamBtn
const hamBtn = document.querySelector(".hamBtn");
const hamBtnCheck = document.querySelector(".hamBtn input");
const navigasi = document.querySelector(".navigasi");
const navList = document.querySelectorAll(".navigasi ul li a");
const colSum = document.querySelectorAll("#about .col, summary");

hamBtn.addEventListener("click", () => {
  navigasi.classList.toggle("modal");
});

function scrollAnimate(height) {
  if (window.scrollY >= height) {
    colSum[0].classList.add("scroll");
    setTimeout(() => {
      colSum[1].classList.add("scroll");
    }, 100);
    setTimeout(() => {
      colSum[2].classList.add("scroll");
    }, 200);
    setTimeout(() => {
      colSum[3].classList.add("scroll");
    }, 300);
  } else {
    colSum.forEach((element) => {
      element.classList.remove("scroll");
    });
  }
}

// scroll parallax
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 1) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
  scrollAnimate(300, 0.3);
});

// menu click
navList.forEach((e) => {
  e.addEventListener("click", () => {
    navigasi.classList.toggle("modal");
    hamBtnCheck.checked = false;
  });
});

// booking
function message() {
  const allInput = document.querySelectorAll("#contact form input");
  const options = document.getElementById("select").value;
  const additional = document.querySelector("#contact form textarea");

  const url =
    "https://api.whatsapp.com/send?phone=6285810574384&text=Halo%20Bukit%20Bunder%2C%20Saya%20Mau%20Booking%20Camp%20Disana%20Ya%20!%0ANama%20%3A%20*" +
    allInput[0].value +
    "*%0ATanggal%20%3A%20*" +
    allInput[1].value +
    "*%0AJumlah%20Orang%20%3A%20*" +
    allInput[2].value +
    "*%0APilihan%20Paket%20%3A%20*" +
    options +
    "*%0APesan%20Tambahan%20%3A%20*" +
    additional.value +
    "*";
  window.open(url);
}
const sendWa = document.getElementById("sendWa");
sendWa.addEventListener("click", () => {
  message();
});

// preview detail gallery
const gallery = document.querySelectorAll("#gallery .card a");
const review = document.querySelector(".detail-preview");
console.info(gallery);
gallery.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    review.classList.add("modal");
  });
  review.addEventListener("click", () => {
    review.classList.remove("modal");
  });
});
