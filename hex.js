const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Target button by ID
const button = document.getElementById('btn');
//Taget color
const color = document.querySelector('.color');

//button gets random colour from array when clicked.
button.addEventListener('click', function(){
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
      hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
