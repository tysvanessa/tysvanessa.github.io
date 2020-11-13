const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breedselector');

//POPULATE SELECT DROPDOWN MENU WITH BREEDS LIST FROM DOG.CEO API
fetch(BREEDS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        const breedsObject = data.message; // can't simply return the message; we're looking at the KEYS in the object that is the breeds list
        const breedsArray = Object.keys(breedsObject); // returns an array

        for (let i = 1; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })
    
// Defining the img tag that we want to update later on
const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function changeNewImage(url) {
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(url)
        .then (function(response) {
            return response.json();
        })
        .then (function(data) {
            img.src = data.message; // updating the image tag with the new image taken from the API
        })
}

img.addEventListener('load', function(){
    spinner.classList.remove('show');
    img.classList.add('show');
})

// LISTEN FOR OPTION CHANGE AND CHANGE THE IMAGE
select.addEventListener('change', function(event) {            
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    changeNewImage(url);
})

// Some reflections on this exercise:
// - I over-complicated the loading spinner and load event thing in my mind, but I had a certain intuition that made me consider it could be about showing and hiding classes in the classList
// - However, I was still guessing around when it came to writing the DOM-related stuff.