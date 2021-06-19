const blackBackground = document.querySelector('.black-background');
const form = document.querySelector('.politic-detail-form');
const closeItemForm = document.querySelector('.close-item');
const editPayments = document.querySelectorAll('.edit-payment');
const paymentName = document.querySelector(".payment-name");
const paymentPrice = document.querySelector(".payment-price");


let flagHidden = true;

const paymentsRates = [
    {
        paymentName: 'Pré-Pago',
        price: 1000
    },
    {
        paymentName: 'Mensal',
        price: 2000
    },
    {
        paymentName: 'Factura',
        price: 1500
    }
]


for (let i = 0; i < editPayments.length; i++) {
    editPayments[i].addEventListener('click', (event) => {
        paymentName.setValue(paymentsRates[i].paymentName);
        paymentName.setValue(paymentsRates[i].price);

        alert("Entrou");

        if (flagHidden == true) {
            alert("Entrou1");
            
            blackBackground.style.display = 'block';
            blackBackground.style.opacity = '1';

            setTimeout(() => {
                form.style.display = 'flex';
                form.style.opacity = '1';
            }, 600);

            flagHidden = false;
        }
    });

}
closeItemForm.onClick = (event) => {
    blackBackground.style.opacity = '0';
    form.style.opacity = '0';

    setTimeout(() => {
        form.style.display = 'none';
        blackBackground.style.display = 'none';
    }, 600);

    flagHidden = true
}
