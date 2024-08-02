function init() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', () => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "green";
    });
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "";
    });
    missionAbort.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", () => {
        let confirmation = confirm('Are you sure you want to abort the mission?');
        if (confirmation) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.';
        };
    });


}


window.addEventListener("load", init);
