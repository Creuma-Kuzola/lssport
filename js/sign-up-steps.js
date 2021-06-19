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


// .active-checked-item

const modalities = document.querySelectorAll('.checkbox-modality');
let flags = [false, false, false];

for (let i = 0; i < modalities.length; i++) {
    modalities[i].addEventListener('click', (event) => {
        if (flags[i] == false) {
            modalities[i].parentElement.classList.add('active-checked-item');
            flags[i] = true;
        } else {
            modalities[i].parentElement.classList.remove('active-checked-item');
            flags[i] = false;
        }
    });
}

const sendMessages = document.querySelectorAll('.radio-send-way');
let flagsMessages = [false, false];

for (let i = 0; i < sendMessages.length; i++) {
    sendMessages[i].addEventListener('click', (event) => {

        for (let j = 0; j < sendMessages.length; j++) {
            sendMessages[j].parentElement.classList.remove('active-checked-item');
        }

        if (flagsPayment[i] == false) {
            sendMessages[i].parentElement.classList.add('active-checked-item');
            flagsPayment[i] = true;
        } else {
            sendMessages[i].parentElement.classList.remove('active-checked-item');
            sendMessages[i].checked = false;
            flagsPayment[i] = false;
        }
    });
}

const  payments = document.querySelectorAll('.radio-payment-way');
let flagsPayment = [false, false, false];

for (let i = 0; i < payments.length; i++) {
    payments[i].addEventListener('click', (event) => {

        for (let j = 0; j < payments.length; j++) {
            payments[j].parentElement.classList.remove('active-checked-item');
        }

        if (flagsPayment[i] == false) {
            payments[i].parentElement.classList.add('active-checked-item');
            flagsPayment[i] = true;
        } else {
            payments[i].parentElement.classList.remove('active-checked-item');
            payments[i].checked = false;
            flagsPayment[i] = false;
        }
    });
}

