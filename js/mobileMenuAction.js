let flagMenu = false;
const hamburgerLine1 = document.querySelector('.menu-hamburguer-line:nth-child(1)');
const hamburgerLine2 = document.querySelector('.menu-hamburguer-line:nth-child(2)');
const hamburgerLine3 = document.querySelector('.menu-hamburguer-line:nth-child(3)');

function hamburgerMenuAnimation() {
    flagMenu == false ? closeMenuAnimation() : openMenuAnimation();
}

function closeMenuAnimation() {
    hamburgerLine1.style.transform = 'rotate(45deg)';
    hamburgerLine1.style.top = '50%';

    hamburgerLine2.style.transform = 'rotate(360deg)';
    hamburgerLine2.style.opacity = '0';

    hamburgerLine3.style.transform = 'rotate(-45deg)';
    hamburgerLine3.style.top = '50%';
}

function openMenuAnimation() {
    hamburgerLine1.style.transform = 'rotate(0deg)';
    hamburgerLine1.style.top = '0';

    hamburgerLine2.style.transform = 'rotate(0)';
    hamburgerLine2.style.opacity = '1';

    hamburgerLine3.style.transform = 'rotate(0)';
    hamburgerLine3.style.top = '100%';
}


document.querySelector('.menu-hamburguer').addEventListener('click', (event) => {
    document.querySelector('.menu-mobile').style.top = flagMenu == false ? '5%' : '-100%';
    hamburgerMenuAnimation();
    flagMenu = !flagMenu;
});