// function show() {
//     const a = document.querySelector(".log-btn");
//     setTimeout(() => {
//         a.style.background = "darkblue";
//         a.style.boxShadow = "none";
//     }, 10);
// }

const slide = document.querySelector(".menu");
const slidebar = document.querySelector(".sidebar");
const slidebars = document.querySelector(".iicon");

slide.addEventListener('click', () => {
    slidebar.classList.toggle('active');
});
slidebars.addEventListener('click', () => {
    slidebar.classList.remove('active');
});