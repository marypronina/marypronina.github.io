function processVisibility(swtch) {
    const progressBar = document.querySelector("#progress_bar");

    progressBar.classList.toggle("hidden");
}

function processAnimation(swtch) {
    const progressCircle = document.querySelector(".progress-circle");

    progressCircle.classList.toggle("animated");
}

function drawProgress(value) {
    const progressBar = document.querySelector(".progress-circle");

    const countedValue = (value * 289) / 100;
    progressBar.style.strokeDasharray = `${countedValue} 299`;
}

document.addEventListener('DOMContentLoaded', () => {
    const valueInput = document.querySelector("#valueInput");
    valueInput.addEventListener("input", () => drawProgress(valueInput.value));

    const animateSwitch = document.querySelector("#animation-switch");
    animateSwitch.addEventListener("change", () => processAnimation(animateSwitch));

    const visibilitySwitch = document.querySelector("#visibility-switch");
    visibilitySwitch.addEventListener("change", () => processVisibility(visibilitySwitch));
}, false);
