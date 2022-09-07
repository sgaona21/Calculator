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
const zero = document.querySelector(".zero");
const deleteButton = document.querySelector(".delete");
const plus = document.querySelector(".plus");
const equals = document.querySelector(".equals");
const multiply = document.querySelector(".multiply");
const division = document.querySelector(".division");
const minus = document.querySelector(".minus");





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

zero.addEventListener( "click", () => {
    screen.value += 0;
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


plus.addEventListener("click", () => {
    screen.value += "+";
})

multiply.addEventListener("click", () => {
    screen.value += "x";
})

division.addEventListener("click", () => {
    screen.value += "/";
})

minus.addEventListener("click", () => {
    screen.value += "-";
})

equals.addEventListener("click", () => {
    let value2String = screen.value.toString();
    let splitByAddition = value2String.split("+");
    let splitByMultiplication = value2String.split("x");
    let splitByDivision = value2String.split("/");
    let splitBySubtraction = value2String.split("-");
    if (value2String.includes("+")) {
        screen.value = parseInt(splitByAddition[0]) + parseInt(splitByAddition[1]);
    } else if (value2String.includes("x")) {
        screen.value = parseInt(splitByMultiplication[0]) * parseInt(splitByMultiplication[1]);
    } else if (value2String.includes("/")) {
        screen.value = parseInt(splitByDivision[0]) / parseInt(splitByDivision[1]);
    } else if (value2String.includes("-")) {
        screen.value = parseInt(splitBySubtraction[0]) - parseInt(splitBySubtraction[1]);
    }
});
















