console.log("script linked");

// *****VARIABLES*****
// *****VARIABLES*****
// *****VARIABLES*****
const one = document.querySelector(".one");
const screen = document.getElementById("screen");
const clear = document.querySelector(".c");
const two = document.getElementsByClassName('two');
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const deleteButton = document.querySelector(".delete");
const plus = document.querySelector(".plus");
const equals = document.querySelector(".equals");





// *****NUMBERS*****
// *****NUMBERS*****
// *****NUMBERS*****
one.addEventListener( "click", () => {
    screen.value += 1;
})

clear.addEventListener("click", () => {
    screen.value = "";
})

two[0].addEventListener("click", () => {
    screen.value += 2;
})

three.addEventListener("click", () => {
    screen.value += 3;
})

four.addEventListener( "click", () => {
    screen.value += 4;
})

five.addEventListener( "click", () => {
    screen.value += 5;
})

six.addEventListener( "click", () => {
    screen.value += 6;
})

seven.addEventListener( "click", () => {
    screen.value += 7;
})

eight.addEventListener( "click", () => {
    screen.value += 8;
})

nine.addEventListener( "click", () => {
    screen.value += 9;
})






clear.addEventListener("click", () => {
    screen.value = "";
})






deleteButton.addEventListener( "click", () => {
     let display = screen.value;
     let displayString = display.toString();
     let cutoff = displayString.slice(0,-1);   
     screen.value = cutoff;
 })

 let sumA = screen.value 

 plus.addEventListener("click", () => {
    screen.value += "+";
})

equals.addEventListener("click", () => {
    let currentValue = screen.value;
    let currentValue2Number = Number(currentValue);

    console.log(currentValue2Number);
})



console.log(sumA);















