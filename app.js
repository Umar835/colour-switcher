const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Target button by ID
const button = document.getElementById('btn')
//Taget color
const color = document.querySelector('.color')

//button gets random colour from array when clicked.
button.addEventListener('click', function(){
    const randomNumber = getRandomNumber()
   document.body.style.backgroundColor = colors[randomNumber]
   color.textContent = colors[randomNumber]
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}