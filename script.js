// =========================
// ELEMENTS
// =========================

const box = document.getElementById("box");

const transparency = document.getElementById("Transparency");
const transparencyTxt = document.getElementById("TransparencyTxt");

const colorInput = document.getElementById("color");
const hexText = document.getElementById("hextext");

const borderRadius = document.getElementById("BorderRadius");
const borderRadiusTxt = document.getElementById("BorderRadiusTxt");

const rotate = document.getElementById("Rotate");
const rotateTxt = document.getElementById("RotateTxt");

const Setcfig = document.getElementById("Set");
const Resetvals = document.getElementById("Reset");

const txt = document.getElementById("txt");
const checkbox = document.getElementById("checkbox");

const sound = document.getElementById("sound");
const LM = document.getElementById("LM")

const emj = document.getElementById("Emj");
const emjtxt = document.getElementById("emojitxt")


// =========================
// INITIAL VALUES
// =========================

colorInput.value = "#dba4ef";

transparencyTxt.textContent = transparency.value + "%";
hexText.textContent = "Hex: " + colorInput.value;
borderRadiusTxt.textContent = borderRadius.value + "px";
rotateTxt.textContent = rotate.value + "deg";


// =========================
// LIVE INPUT UPDATES
// =========================

// TRANSPARENCY
transparency.addEventListener("input", () => {
    const value = Number(transparency.value);

    transparencyTxt.textContent = value + "%";

    transparencyTxt.classList.toggle("max", value === 100 );
});




// COLOR
colorInput.addEventListener("input", () => {
    hexText.textContent = "Hex: " + colorInput.value;
});


// BORDER RADIUS
borderRadius.addEventListener("input", () => {
    const value = Number(borderRadius.value);

    borderRadiusTxt.textContent = value + "px";
    borderRadiusTxt.classList.toggle("max", value === 100);
});


// ROTATE

rotate.addEventListener("input", function () {
    const value = Number(rotate.value);

    rotateTxt.textContent = value + "deg";
    rotateTxt.classList.toggle("max", value === 360);
});


// =========================
// APPLY SETTINGS
// =========================

Setcfig.addEventListener("click", function () {

    // SOUND
    if (checkbox.checked) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0;
    }

    // Modes

const elements = document.querySelectorAll("*");

    if (LM.checked === true) {
       document.body.classList.add("light");
    }
    else {
        document.body.classList.remove("light");
    }

    // APPLY STYLES
    box.style.backgroundColor = colorInput.value;
    box.style.rotate = rotate.value + "deg";
    box.style.borderRadius = borderRadius.value + "px";
    box.style.opacity = transparency.value / 100;

    // EMOJI LOGIC

    if (emj.value === "1") {
        emjtxt.textContent = "❤️"
    }
    else if (emj.value === "2") {
        emjtxt.textContent = "🩷"
    }
    else if (emj.value === "3") {
        emjtxt.textContent = "🐶"
    }
    else if (emj.value === "4") {
        emjtxt.textContent = "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    }
    else if (emj.value === "0") {
        emjtxt.textContent = ""
    }


});


// =========================
// RESET SETTINGS
// =========================

Resetvals.addEventListener("click", function () {

    colorInput.value = "#ff0000";
    transparency.value = "100";
    rotate.value = "15";
    borderRadius.value = "0";

    // reset UI text
    transparencyTxt.textContent = transparency.value + "%";
    hexText.textContent = "Hex: " + colorInput.value;
    borderRadiusTxt.textContent = borderRadius.value + "px";
    rotateTxt.textContent = rotate.value + "deg";

    // reset box
    box.style
    box.style.backgroundColor = colorInput.value;
    box.style.opacity = transparency.value / 100;
    box.style.rotate = "0deg";
    box.style.borderRadius = borderRadius.value + "px";
});

const background = document.getElementById("background");
const start = document.getElementById("Start");
const main = document.getElementById("Main");
const LB = document.getElementById("LB");
const WB = document.getElementById("WB")

LB.classList.add("show");
main.style.display = "none";

start.addEventListener("click", function () {
    background.play();
    WB.textContent = "Loading Configurations"
    start.hidden = true;
    setTimeout(function () {
        main.style.display = "block";
        LB.classList.remove("show");
    }, 3000);
});