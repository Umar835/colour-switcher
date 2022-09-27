const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Target button by ID
const button = document.getElementById('btn')
//Taget color
const color = document.querySelector('.color')

//button gets random color from array when clicked.
button.addEventListener('click', function(){
   document.body.style.backgroundColor = getRandomNumber()
   color.textContent = getRandomNumber()
})
function getRandomNumber(){
    return colors[Math.floor(Math.random() * colors.length)]
}