console.log("Js is ready to go!");


const lightSwitch = document.getElementById("lightswitch");
const lamp = document.getElementById("lamp")


lightSwitch.addEventListener("click", function switcher(){

if (lamp.src.includes("white_lamp.png")) {
    lamp.src = "./img/yellow_lamp.png"
    lightSwitch.innerHTML = "Accendi"
} else {
    lamp.src = "./img/white_lamp.png"
    lightSwitch.innerHTML = "Spegni"
}
})
