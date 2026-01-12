console.log("Js is ready to go!");

const lightSwitch = document.getElementById("lightswitch");
const lamp = document.getElementById("lamp")
const bg = document.querySelector(" .bg-dark")
const textLight = document.querySelector(" .text-white")
console.log(textLight);



lightSwitch.addEventListener("click", function switcher(){

if (lamp.src.includes("white_lamp.png")) {
    lamp.src = "./img/yellow_lamp.png";
    lightSwitch.innerHTML = "Spegni";
    lightSwitch.classList.remove("btn-light");
    lightSwitch.classList.add("btn-dark");
    bg.classList.remove("bg-dark");
    textLight.classList.remove("text-white");
    textLight.classList.add("text-danger");
    textLight.innerHTML = "Sei un tipo coraggioso!"

} else {
    lamp.src = "./img/white_lamp.png";
    lightSwitch.innerHTML = "Accendi";
    lightSwitch.classList.remove("btn-dark");
    lightSwitch.classList.add("btn-light");
    bg.classList.add("bg-dark");
    textLight.classList.remove("text-danger");
    textLight.classList.add("text-white")
    textLight.innerHTML = "Hai il coraggio di cliccare?"
}
})
