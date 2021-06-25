
let app = new Vue({
    el: '.main-container',
    data: {
        userName: 'Ricardo Lopes',
        age: 18,
        modalitiesLiked: [
            {
                'name': 'automobilismo',
                'imageUrl': '../../icons/emojione_racing-car@3x.svg'
            },
            {
                'name': 'atletismo',
                'imageUrl': '../../icons/fxemoji_running@3x.svg'
            },
            {
                'name': 'futebol',
                'imageUrl': '../../icons/twemoji_soccer-ball.svg'
            }
        ],
        nationalities: {
            'angolana': {
                'icon': 'emojione_flag-for-angola@3x.svg'
            }
        },
        paymentsLogs: [
            {
                'value': 1000,
                'type': 'Pre-pago',
                'date': '15/06/2021'
            },
            {
                'value': 2000,
                'type': 'Factura',
                'date': '15/04/2021'
            },
            {
                'value': 4000,
                'type': 'Pre-pago',
                'date': '22/06/2021'
            }
        ],
        paymentsLogsShowed: [
            {
                'value': 1000,
                'type': 'Pre-pago',
                'date': '15/06/2021'
            },
            {
                'value': 2000,
                'type': 'Factura',
                'date': '15/04/2021'
            },
            {
                'value': 4000,
                'type': 'Pre-pago',
                'date': '22/06/2021'
            }
        ],
        notifications: [
            {
                'time': '20:22',
                'header': 'Final da Champions',
                'desc': 'A grande final inglesa da Champions Legue'
            }
        ],
        gender: true,
        news: {
            'futebol': [
                {
                    'title': 'Bayer passou o caminhão no Barça 8 x 2',
                    'imageUrl': '../img/outras-img/saurav-rastogi-wxggXydWNdE-unsplash.jpg'
                },
                {
                    'title': 'Chelsea o grande vencedor das Champions',
                    'imageUrl': '../img/outras-img/janosch-diggelmann-ZBZStqTOXFU-unsplash.jpg'
                },
                {
                    'title': 'Sporting Campeão de Portugal',
                    'imageUrl': '../img/outras-img/wp1985960-sporting-cp-wallpapers.png'
                },
                {
                    'title': 'Liga das Nações dando o que falar',
                    'imageUrl': '../img/outras-img/wp3635411-uefa-nations-league-wallpapers.jpg'
                }
            ],
            'automobilismo': [
                {
                    'title': 'Record mundial de velocidade batido',
                    'imageUrl': '../img/outras-img/pexels-quentin-tricoire-2712852.jpg'
                },
                {
                    'title': 'Elon Shuma, vencedor da F1',
                    'imageUrl': '../img/outras-img/pexels-chris-peeters-12795.jpg'
                }
            ],
            'atletismo': [
                {
                    'title': 'Alidali venceder da ultra maratona',
                    'imageUrl': '../img/outras-img/pexels-run-ffwpu-2524739.jpg'
                },
                {
                    'title': 'Sara Tumer consagrada mulher mais rápida do mundo',
                    'imageUrl': '../img/outras-img/pexels-run-ffwpu-2403474.jpg'
                },
                {
                    'title': 'Cheque as previsões das olimpiadas',
                    'imageUrl': '../img/outras-img/pexels-element-digital-1293269.jpg'
                },
                {
                    'title': 'Sara Tumer promove exercícios fisicos para o público de graça',
                    'imageUrl': '../img/outras-img/pexels-rodnae-productions-7551758.jpg'
                }
            ],
        },
        paymentFilterValue: '1'
    },
    methods: {
        remove(modalityName) {
            let newArray = [];

            for (let i = 0; i < app.modalitiesLiked.length; i++) {
                if (app.modalitiesLiked[i].name != modalityName) {
                    newArray.push(app.modalitiesLiked[i]);
                }
            }
            app.modalitiesLiked = newArray;
        },
        changeGender(gender) {
            const elements = document.querySelectorAll('.gender-icon-container');

            if (gender == 'female') {
                elements[0].classList.remove('gender-selected');
                elements[1].classList.add('gender-selected');
            } else {
                elements[0].classList.add('gender-selected');
                elements[1].classList.remove('gender-selected');
            }
        },
        filterPayments(event) {
            const value = event.target.value;
            const paymentsSelected = [];

            for (let i = 0; i < app.paymentsLogs.length; i++) {
                if (value == '2' && app.paymentsLogs[i].type.toLowerCase() == 'pre-pago') {
                    paymentsSelected.push(app.paymentsLogs[i]);
                } else if (value == '3' && app.paymentsLogs[i].type.toLowerCase() == 'mensal') {
                    paymentsSelected.push(app.paymentsLogs[i]);
                } else if (value == '4' && app.paymentsLogs[i].type.toLowerCase() == 'factura') {
                    paymentsSelected.push(app.paymentsLogs[i]);
                } else if (value == '1') {
                    paymentsSelected.push(app.paymentsLogs[i]);
                }
            }
            console.log(paymentsSelected)
            app.paymentsLogsShowed = paymentsSelected;
        }
    },
})

document.querySelector('.remove-modifications').addEventListener('click', () => {
    window.location.replace('../firstPage.html');
})
