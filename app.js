console.log("script linked");

// *****VARIABLES*****
// *****VARIABLES*****
// *****VARIABLES*****
const one = document.querySelector(".one");
const screen = document.getElementById("screen");
const miniScreen = document.getElementById("mini-screen");
const clear = document.querySelector(".c");
const two = document.querySelector(".two");
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
const period = document.querySelector(".period");
const negative = document.querySelector(".negative");






// *****NUMBERS*****
// *****NUMBERS*****
// *****NUMBERS*****
one.addEventListener( "click", () => {
    screen.value += 1;
    console.log(screen.value.length)
})

clear.addEventListener("click", () => {
    screen.value = "";
})

two.addEventListener("click", () => {
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

period.addEventListener( "click", () => {
    let lastChar = screen.value.charAt(screen.value.length - 1);
    let decimalCounter = 0;
    let currentString = screen.value;
    for (i = 0; i <currentString.length; i++) {
        if (currentString.charAt(i) === ".") {
            decimalCounter = decimalCounter + 1;
        }
    }
    console.log(decimalCounter);
    if (lastChar === ".") {
        
    } else if (screen.value.includes(".") & !screen.value.includes("+")) {
        
     }  else if (decimalCounter >= 2) {

     } else {
        screen.value += ".";
    }
} );





// *****OPERATORS*****
// *****OPERATORS*****
// *****OPERATORS*****
clear.addEventListener("click", () => {
    screen.value = "";
})

deleteButton.addEventListener( "click", () => {
     let display = screen.value;
     let displayString = display.toString();
     let cutoff = displayString.slice(0,-1);   
     screen.value = cutoff;
 })

negative.addEventListener( "click", () => {
    
})


plus.addEventListener("click", () => {
    let value2String = screen.value.toString();
    if (value2String.includes("/")) {

    } else if (value2String.includes("+")) {
        
    } else if (value2String.includes("x")) {

    } else if (value2String.includes("-")) {

    } else if (screen.value === "") {

    } else {
        screen.value += "+";
    }
})

multiply.addEventListener("click", () => {
    let value2String = screen.value.toString();
    if (value2String.includes("/")) {

    } else if (value2String.includes("+")) {
        
    } else if (value2String.includes("x")) {

    } else if (value2String.includes("-")) {

    } else if (screen.value === "") {

    } else {
        screen.value += "x";
    }
})

division.addEventListener("click", () => {
    let value2String = screen.value.toString();
    if (value2String.includes("/")) {

    } else if (value2String.includes("+")) {
        
    } else if (value2String.includes("x")) {

    } else if (value2String.includes("-")) {

    } else if (screen.value === "") {

    } else {
        screen.value += "/";
    }
})

minus.addEventListener("click", () => {
    let value2String = screen.value.toString();
    if (value2String.includes("/")) {

    } else if (value2String.includes("+")) {
        
    } else if (value2String.includes("x")) {

    } else if (value2String.includes("-")) {

    } else if (screen.value === "") {

    } else {
        screen.value += "-";
    }
})

equals.addEventListener("click", () => {
    let value2String = screen.value.toString();
    let splitByAddition = value2String.split("+");
    let splitByMultiplication = value2String.split("x");
    let splitByDivision = value2String.split("/");
    let splitBySubtraction = value2String.split("-");
    if (value2String.includes("+")) {
        screen.value = parseFloat(splitByAddition[0]) + parseFloat(splitByAddition[1]);
    } else if (value2String.includes("x")) {
        screen.value = parseFloat(splitByMultiplication[0]) * parseFloat(splitByMultiplication[1]);
    } else if (value2String.includes("/")) {
        screen.value = parseFloat(splitByDivision[0]) / parseFloat(splitByDivision[1]);
    } else if (value2String.includes("-")) {
        screen.value = parseFloat(splitBySubtraction[0]) - parseFloat(splitBySubtraction[1]);
    }
});













