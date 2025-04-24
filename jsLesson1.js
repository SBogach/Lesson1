let numberVar = 5; //Создали переменную numberVar со значением 5
const stringVar = "stringVarValue"; // Создали переменную stringVar со значением "stringVarValue"

console.log(numberVar); // Вывели переменную numberVar
console.log(stringVar); // Вывели переменную stringVar
console.log(numberVar, stringVar); // Вывели обе переменные 

/* Изменили значение numberVar
после чего вывели переменные снова */
numberVar = 5 * 2;

console.log(numberVar);
console.log(stringVar);
console.log(numberVar, stringVar);

//--------------------------------------------

let num1 = 1_000_000_000_0;
console.log(num1);

let num2 = 0.00001
console.log(num2);

let str1 = "123";
let num3 = +str1;

let num4 = 0.3;
let num5 = 0.6;
let num7;
num7 = Math.ceil(num4);
num7 = Math.floor(num4);
num7 = Math.round(num4);
num7 = Math.ceil(num5);
num7 = Math.floor(num5);
num7 = Math.round(num5);

let num8 = "asdf512341";
let num9 = "asasdfzvcxdf5124123341";

console.log(isNaN(+num8) == isNaN(+num9));

//--------------------------------------------
let stringans = "JAVASCRIPT";
stringans = stringans.toLowerCase();

let stringans2 = "stringans";
stringans2 = stringans2[0].toUpperCase() + stringans2.slice(1);

function truncate (str, maxLength) {
  if (str.length > maxLength) {
    return str.substr(0, maxLength - 1) + "...";
  } else {
    return str;
  }
}
console.log(truncate("abcdef", 4));
console.log(truncate("abcdef", 9));
