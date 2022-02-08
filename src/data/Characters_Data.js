const fighters = {
    Rook: {
        name: 'Rook',
        type: 'Basic',
        attack: 5, 
        defense: 5,
        speed: 5,
        health: 20,
        moves: [1, 2, 3, 4],
        sprite: require('../images/Rook.gif'),
        defenses: {
            basic: 1,
            flame: 1,
            warrior: 2
        }
    },
    Starr: {
        name: 'Starr',
        type: 'Flame',
        attack: 8,
        defense: 3,
        health: 15,
        moves: [5, 6, 7, 8],
        defenses: {
            basic: 1,
            flame: 0.5,
            warrior: 1
        }
    },
    Tartane:{
        name: 'Tartane',
        type: 'Warrior',
        attack: 10,
        defense: 12,
        health: 20,
        moves: [9, 10, 11, 12],
        defenses: {
            basic: 1,
            flame: 1,
            warrior: 1
        }
    }
}

export default fighters;