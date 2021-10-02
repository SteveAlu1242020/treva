window.addEventListener("scroll", function () {
    let nav = document.getElementById("nav_wrapper");
    nav.classList.toggle("sticky", window.scrollY > 10);
});