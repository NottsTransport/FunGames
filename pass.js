LB.classList.add("show");

const mypass = "1";

const main = document.getElementById("Main");
main.style.display = "none"


const paswordbtn = document.getElementById("paswordbtn")
const pass = document.getElementById("pass")

paswordbtn.addEventListener("click", function () {
    if (pass.value === mypass) {
        LB.classList.remove("show");
        main.style.display = "block"
    } else {
        pass.style.border = "1px solid red";
    }
});