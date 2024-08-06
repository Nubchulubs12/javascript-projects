// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const background = document.getElementById("shuttleBackground");
    const backgroundHeight = parseInt(window.getComputedStyle(background)["height"]);
    const backgroundWidth = parseInt(window.getComputedStyle(background)["width"]);
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = (backgroundWidth - 75)/2 + "px";
    let status = document.getElementById("flightStatus");
    
    let height = document.getElementById("spaceShuttleHeight")
    let width = document.getElementById("spaceShuttleWidth");


    const takOff = this.document.getElementById("takeoff");
    takOff.addEventListener("click", event => {
        if (status.innerHTML !== "Shuttle in flight") {
        let response = window.confirm("Confirm tat the shuttle is ready for takeoff.")
        if (response) {
            
            status.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            height.innerHTML = "10000";
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }}
    });

const land = document.getElementById("landing");
landing.addEventListener("click", event => {
this.window.alert("The shuttle is landing. Landing gear engaged.");
status.innerHTML = "The shuttle has landed";
background.style.backgroundColor = "green";
height.innerHTML = "0";
width.innerHTML = "0";
rocket.style.bottom = "0px";
rocket.style.left = (backgroundWidth - 75)/2 + "px";
});


const abort = document.getElementById("missionAbort");
abort.addEventListener("click", event => {
if (window.confirm("Confirm that you want to abort the mission.")) {
    status.innerHTML = "Mission aborted.";
    background.style.backgroundColor = "red";
    height.innerHTML = "0";
    width.innerHTML = "0";
    rocket.style.bottom = "0px";
    rocket.style.left = (backgroundWidth - 75)/2 + "px";
    
}
});

const up = document.getElementById("up");
up.addEventListener("click", event => {
    if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.bottom) < backgroundHeight-75) {
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
    height.innerHTML = parseInt(height.innerHTML) + 10000;
    }
    });

const down = document.getElementById("down");
down.addEventListener("click", event => {
    if (status.innerHTML === "Shuttle in flight" && this.parseInt(rocket.style.bottom) !== 0) {
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
    height.innerHTML = parseInt(height.innerHTML) - 10000;
    }
    });


const right = document.getElementById("right");
    right.addEventListener("click", event => {
        if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.left) < backgroundWidth-75)  {
            width.innerHTML = parseInt(width.innerHTML) + 10000;
            rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        
    
    }
    });

const left = document.getElementById("left");
    left.addEventListener("click", event => {
        if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.left) > 0) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        width.innerHTML = parseInt(width.innerHTML) - 10000;
        }
        });





});