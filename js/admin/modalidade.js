
let app = new Vue({
    el: '.main-container',
    data: {
        modalities: [
            {
                'name': 'automobilismo',
                'imageUrl': '../../icons/emojione_racing-car@3x.svg',
                'descricao': 'O atletismo é das actividades fisicas que acabam proporciando de maneira excepcional todas as partes do corpo ao mesmo tempo',
                'activities': ['Prova de 100m', 'Prova de 200m', 'Prova de Maratona']
            },
            {
                'name': 'atletismo',
                'imageUrl': '../../icons/fxemoji_running@3x.svg',
                'descricao': 'o',
                'activities': []
            },
            {
                'name': 'Galope',
                'imageUrl': '../../icons/noto_horse-racing-medium-dark-skin-tone@3x.svg',
                'descricao': 'o',
                'activities': []
            },
            {
                'name': 'futebol',
                'imageUrl': '../../icons/twemoji_soccer-ball.svg',
                'descricao': 'O',
                'activities': []
            }
        ],
        modalityFocus: 'futebol',
        modalityIndex: 0
    },
    methods: {
        
    },
})
