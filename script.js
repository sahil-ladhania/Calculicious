// Selection Of An Element.
const inputScreen = document.getElementById('display');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const add = document.getElementById('+');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const substract = document.getElementById('-');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const multiply = document.getElementById('*');
const clear = document.getElementById('C');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const divide = document.getElementById('/');
const percentage = document.getElementById('%');
const equals = document.getElementById('=');

// Creating Data Structure To Store Inputs.
const inputFeild = [];

// Creating Function For Updating Display.
const updateInputScreen = () => {
    inputString = inputFeild.join(' ');
    inputScreen.value = inputString;
}

// Creating Function For Calculating Result.
const calculateResult = () => {
    
}

// Logic For Showing Input On Screen.
seven.addEventListener('click' , () => {
    inputFeild.push(7);
    updateInputScreen();
});
eight.addEventListener('click' , () => {
    inputFeild.push(8);
    updateInputScreen();
});
nine.addEventListener('click' , () => {
    inputFeild.push(9);
    updateInputScreen();
});
four.addEventListener('click' , () => {
    inputFeild.push(4);
    updateInputScreen();
});
five.addEventListener('click' , () => {
    inputFeild.push(5);
    updateInputScreen();
});
six.addEventListener('click' , () => {
    inputFeild.push(6);
    updateInputScreen();
});
one.addEventListener('click' , () => {
    inputFeild.push(1);
    updateInputScreen();
});
two.addEventListener('click' , () => {
    inputFeild.push(2);
    updateInputScreen();
});
three.addEventListener('click' , () => {
    inputFeild.push(3);
    updateInputScreen();
});
zero.addEventListener('click' , () => {
    inputFeild.push(0);
    updateInputScreen();
});
dot.addEventListener('click' , () => {
    inputFeild.push('.');
    updateInputScreen();
});
// Logic For Addition.
add.addEventListener('click' , () => {
    inputFeild.push('+');
    updateInputScreen();
});
// Logic For Substraction.
substract.addEventListener('click' , () => {
    inputFeild.push('-');
    updateInputScreen();
});
// Logic For Multiplication.
multiply.addEventListener('click' , () => {
    inputFeild.push('*');
    updateInputScreen();
});
// Logic For Division.
divide.addEventListener('click' , () => {
    inputFeild.push('/');
    updateInputScreen();
});
// Logic For Percentage.
percentage.addEventListener('click' , () => {
    inputFeild.push('%');
    updateInputScreen();
});
// Logic For Final Result.
equals.addEventListener('click' , () => {
    
});
// Logic For Clearing Screen.
clear.addEventListener('click' , () => {
    inputFeild.length = 0;
    updateInputScreen();
});