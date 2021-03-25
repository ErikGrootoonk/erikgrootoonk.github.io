const hamburger_btn = document.querySelector(".hamburger");
const dropdown = document.querySelector(".navLinks");




hamburger_btn.addEventListener("click", openMenu);

function openMenu() {
    console.log("you clicked");
    dropdown.classList.toggle("active");
}


 