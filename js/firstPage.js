

let app = new Vue({
    el: '.main-container',
    data: {
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
        actualNewsTab: 'futebol'
    },
    methods: {
        changeCurrentNews(event) {
            app.actualNewsTab = event.target.innerText.toLowerCase();
            const listItens = document.querySelector('.list:nth-child(2)').children;

            for (let i = 0; i < listItens.length; i++) {
                if (listItens[i].textContent.toLowerCase() == event.target.innerText.toLowerCase()) {
                    listItens[i].classList.add('active')
                } else {
                    listItens[i].classList.remove('active')
                }
            }
        }
    },
})
