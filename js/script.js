// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik diluar elemen utk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Mengambil semua section konten dan semua link di dalam navbar-nav
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navbar-nav a");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     // Angka 70 adalah perkiraan tinggi/jarak navbar Anda dari atas layar
//     if (window.scrollY >= sectionTop - 70) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     // Hapus class 'active' dari semua menu terlebih dahulu
//     link.classList.remove("active");

//     // Jika href menu cocok dengan section yang sedang dilihat, tambahkan class 'active'
//     if (link.getAttribute("href") === `#${current}`) {
//       link.classList.add("active");
//     }
//   });
// });
