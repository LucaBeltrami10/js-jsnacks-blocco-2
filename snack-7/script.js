/* Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {'varietà' : 'Nera',
    'peso' : '1',
    'lunghezza' : '50'
    },
    {'varietà' : 'Romanesca',
    'peso' : '0.3',
    'lunghezza' : '12'
    },
    {'varietà' : 'Fiorentina',
    'peso' : '0.6',
    'lunghezza' : '10'
    },
    {'varietà' : 'Napoletana',
    'peso' : '0.2',
    'lunghezza' : '17'
    },
    {'varietà' : 'Tonda',
    'peso' : '0.6',
    'lunghezza' : '5'
    },
    {'varietà' : 'Trombetta',
    'peso' : '0.8',
    'lunghezza' : '18'
    },
    {'varietà' : 'Gialla',
    'peso' : '0.9',
    'lunghezza' : '15'
    },
    {'varietà' : 'Rugosa friulana',
    'peso' : '1.1',
    'lunghezza' : '14'
    },
    {'varietà' : 'Patisson',
    'peso' : '2',
    'lunghezza' : '30'
    },
    {'varietà' : 'Crookneck',
    'peso' : '0.5',
    'lunghezza' : '10'
    }
]

let pesoTotaleZucchine = 0

for ( let i = 0; i < zucchine.length; i++){
    console.log(`La varietà: ${zucchine[i].varietà}, lunga: ${zucchine[i].lunghezza}cm, PESA : ${zucchine[i].peso}kg`)
    pesoTotaleZucchine += parseInt(zucchine[i].peso)
}

console.log(pesoTotaleZucchine)