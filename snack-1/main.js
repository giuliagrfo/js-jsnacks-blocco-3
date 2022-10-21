/* Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


// Crea un array composto da 10 automobili

const cars = [
    {
        marca: 'DS',
        modello: 'Crossback',
        alimentazione: 'benzina'
    },
    {
        marca: 'Suzuki',
        modello: 'Vitara',
        alimentazione: 'diesel'
    },
    {
        marca: 'Lancia',
        modello: 'Ypsilon',
        alimentazione: 'benzina'
    },
    {
        marca: 'BMW',
        modello: 'x6',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'elettrica'
    },
    {
        marca: 'Opel',
        modello: 'Astra',
        alimentazione: 'benzina'
    },
    {
        marca: 'Wolkswagen',
        modello: 'T-roc',
        alimentazione: 'elettrica'
    },
    {
        marca: 'Dacia',
        modello: 'Duster',
        alimentazione: 'gpl'
    },
    {
        marca: 'Jeep',
        modello: 'Renegade',
        alimentazione: 'elettrica'
    },
    {
        marca: 'Audi',
        modello: 'Q2',
        alimentazione: 'diesel'
    },
]


// Dividi le automobili in 3 array separati: 

// nel primo array solo le auto a benzina
const benzina = cars.filter(car => {
    if  (car.alimentazione === 'benzina') {
        return true
    }
});
console.log(benzina);


// nel secondo solo le auto a diesel
const diesel = cars.filter(car => {
    if  (car.alimentazione === 'diesel') {
        return true
    }
});
console.log(diesel);


// nel terzo il resto delle auto
const car = cars.filter(car => {
   if (car.alimentazione != 'benzina' && car.alimentazione != 'diesel'){
    return true
   }
});
console.log(car);