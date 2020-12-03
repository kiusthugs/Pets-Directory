const pets = [
    {
        name: 'Joey',
        animal: 'Dog',
        type: 'Australian Shepard',
        age: 8,
        picture: 'img/aussie.jpg'
    },
    {
        name: 'Patches',
        animal: 'Cat',
        type: 'Domestic Shorthair',
        age: 1,
        picture: 'img/tabby.jpg' 
    },
    {
        name: 'Pugsley',
        animal: 'Dog',
        type: 'Pug',
        age: 6,
        picture: 'img/pug.jpg' 
    },
    {
        name: 'Simba',
        animal: 'Cat',
        type: 'Persian',
        age: 5,
        picture: 'img/persian.jpg' 
    },
    {
        name: 'Comet',
        animal: 'Dog',
        type: 'Golden Retriever',
        age: 3,
        picture: 'img/golden.jpg' 
    },
]

let page = ''

for ( let i = 0; i < pets.length; i++ ) {
    page += `
        <h2>${pets[i].name}</h2>
        <p>${pets[i].animal} | ${pets[i].type}</p>
        <p>Age: ${pets[i].age}</p>
        <img src=${pets[i].picture} alt=${pets[i].type}>
    `
} 

document.querySelector('.directory').innerHTML = page;