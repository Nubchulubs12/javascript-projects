//Code Your Solution Below
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rocketForm');

    form.addEventListener('submit', () => {
        const testName = form.elements['testName'];
        const flightDate = form.elements['flightDate'];
        const rocketType = form.elements['rocketType'];
        const rocketBoosters = form.elements['rocketBoosters'];
        const windRating = form.elements['windRating'];

        
        if (!testName.value.trim()) {
            alert('Please enter the test name.');
            testName.focus();
            preventDefault();
            return;
        }

        if (!flightDate.value) {
            alert('Please enter the test date.');
            flightDate.focus();
            preventDefault();
            return;
        }

        if (!rocketType.value) {
            alert('Please select the rocket type.');
            rocketType.focus();
            preventDefault();
            return;
        }

        if (!rocketBoosters.value || rocketBoosters.value <= 0) {
            alert('Please enter a valid number of rocket boosters.');
            rocketBoosters.focus();
            preventDefault();
            return;
        }

        
        const windRatingChecked = Array.from(windRating).some(radio => radio.checked);
        if (!windRatingChecked) {
            alert('Please select a wind rating.');
            preventDefault();
            return;
        }
    });
});