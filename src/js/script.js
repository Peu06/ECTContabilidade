document.addEventListener("DOMContentLoaded", () => {
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileArea = document.getElementById("mobile_area");

    mobileBtn.addEventListener("click", () => {
        mobileArea.classList.toggle("navbar__mobile-area--active");
        mobileBtn.querySelector('i').classList.toggle('fa-x');
    });
});
