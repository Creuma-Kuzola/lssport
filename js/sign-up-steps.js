let stepIndex = 0;
const stepDivs = document.querySelectorAll(".step-container");
const nextButtons = document.querySelectorAll('.submit-button');

for (let i = 0; i < stepDivs.length; i++) {
    nextButtons[i].onclick = (event) => {
        if (stepIndex + 1 < stepDivs.length) {
            stepIndex += 1;

            for (let j = 0; j < stepDivs.length; j++) {
                stepDivs[j].classList.remove('step-container-active');
                if (stepIndex == j) {
                    stepDivs[j].classList.add('step-container-active');
                    stepDivs[j].classList.remove('step-container-hidden');
                } else {
                    stepDivs[j].classList.add('step-container-hidden');
                }
            }
            if (stepIndex == stepDivs.length - 1) {
                nextButtons[stepDivs.length - 1].innerText = "Terminar";
            }
        } else {
            nextButtons[stepIndex].onclick = (event) => {
                window.location.pathname = '/index.html';
            }
        }
    }
}