const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"]; 
const colors = ["green", "black", "red", "orange", "white"];

const btn1 = document.getElementById ("btn1");
const btn2 = document.getElementById ("btn2");
const reset = document.getElementById ("Reset");
const text = document.querySelector (".black");

btn1.addEventListener("click", function(){
    const randomNumber = getRandomNumber2();
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber]
}) 

btn2.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){

         hexColor += hex[getRandomNumber()];
    }    
    document.body.style.backgroundColor = hexColor;
    text.textContent = hexColor;
});

reset.addEventListener("click", function() {
    document.body.style.backgroundColor = "#eaf2ff";
    text.textContent = "#eaf2ff";



});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
} 
function getRandomNumber2(){
    return Math.floor(Math.random() * colors.length);
} 

