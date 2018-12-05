const conf = {
    API : {
        END_POINT : 'https://pokeapi.co/api/v2'
    },
    SPRITE_URL : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon',
    BASE_STAT_TYPES : [
        {
            name : 'electric',
            stats : {
                hp : 63.2,
                attack : 69.5,
                defense : 66.5,
                specialattack : 89,
                specialdefense : 73.7,
                speed: 82.9
            }
        },
        {
            name : 'fire',
            stats : {
                hp : 69.5,
                attack : 81.5,
                defense : 67.3,
                specialattack : 90.6,
                specialdefense : 73.3,
                speed: 76.2
            }
        },
        {
            name : 'water',
            stats : {
                hp : 70.3,
                attack : 71.6,
                defense : 72.7,
                specialattack : 72.5,
                specialdefense : 69,
                speed: 64.7
            }
        },
        {
            name : 'grass',
            stats : {
                hp : 66,
                attack : 31.1,
                defense : 73.2,
                specialattack : 72.2,
                specialdefense : 71.4,
                speed: 59.8
            }
        },
        {
            name : 'ice',
            stats : {
                hp : 78.6,
                attack : 81,
                defense : 76.6,
                specialattack : 82.1,
                specialdefense : 79.4,
                speed: 66.7
            }
        },
        {
            name : 'fighting',
            stats : {
                hp : 74.9,
                attack : 102.9,
                defense : 73.3,
                specialattack : 67.2,
                specialdefense : 72.1,
                speed: 74.7
            }
        },
        {
            name : 'poison',
            stats : {
                hp : 62.6,
                attack : 69.5,
                defense : 64.1,
                specialattack : 68.8,
                specialdefense : 67.2,
                speed: 64
            }
        },
        {
            name : 'ground',
            stats : {
                hp : 74.9,
                attack : 89.4,
                defense : 83.7,
                specialattack : 58,
                specialdefense : 62.6,
                speed: 59.5
            }
        },
        {
            name : 'flying',
            stats : {
                hp : 70.7,
                attack : 78.6,
                defense : 67.2,
                specialattack : 74.3,
                specialdefense : 70.7,
                speed: 85.4
            }
        },
        {
            name : 'psychic',
            stats : {
                hp : 70.4,
                attack : 68.1,
                defense : 71.9,
                specialattack : 91.5,
                specialdefense : 84,
                speed: 76.1
            }
        },
        {
            name : 'bug',
            stats : {
                hp : 56.6,
                attack : 70.7,
                defense :  71.5,
                specialattack : 54.1,
                specialdefense : 64.5,
                speed: 60.5
            }
        },
        {
            name : 'rock',
            stats : {
                hp : 66.6,
                attack : 89.3,
                defense : 106.3,
                specialattack : 57.9,
                specialdefense : 71.8,
                speed: 50.1
            }
        },
        {
            name : 'ghost',
            stats : {
                hp : 62.7,
                attack : 76,
                defense : 81,
                specialattack : 75.7,
                specialdefense : 74.9,
                speed: 61.9
            }
        },
        {
            name : 'dragon',
            stats : {
                hp : 82.7,
                attack : 102.6,
                defense : 84,
                specialattack : 91.3,
                specialdefense : 84,
                speed: 77.9
            }
        },
        {
            name : 'dark',
            stats : {
                hp : 70.5,
                attack : 94.8,
                defense : 70.1,
                specialattack : 74.7,
                specialdefense : 67.5,
                speed: 76.3
            }
        },
        {
            name : 'steel',
            stats : {
                hp : 64.4,
                attack : 90.9,
                defense : 113.5,
                specialattack : 71.8,
                specialdefense : 82.3,
                speed: 56.6
            }
        },
        {
            name : 'fairy',
            stats : {
                hp : 68.4,
                attack : 56.5,
                defense : 64.4,
                specialattack : 72.5,
                specialdefense : 78.7,
                speed: 54
            }
        },
    ]
}

export default conf;