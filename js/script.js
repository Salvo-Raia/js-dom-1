console.log("Js is ready to go!");

const lightSwitch = document.getElementById("lightswitch");
const lamp = document.getElementById("lamp")
const bg = document.querySelector(" .bg-dark")


lightSwitch.addEventListener("click", function switcher(){

if (lamp.src.includes("white_lamp.png")) {
    lamp.src = "./img/yellow_lamp.png"
    lightSwitch.innerHTML = "Spegni";
    lightSwitch.classList.remove("btn-light");
    lightSwitch.classList.add("btn-dark")
    bg.classList.remove("bg-dark")

} else {
    lamp.src = "./img/white_lamp.png"
    lightSwitch.innerHTML = "Accendi"
    lightSwitch.classList.remove("btn-dark");
    lightSwitch.classList.add("btn-light")
    bg.classList.add("bg-dark")
}
})
