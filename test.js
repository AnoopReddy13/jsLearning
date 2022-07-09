var sum = 0;
"use strict";
for (var i=0; i<5; i++) {
    sum += i;
}
console.log(sum);


var a1 = "28";
function conToInt(str) {
    return parseInt(str)
}
console.log(conToInt("28"));

let a2 = 35;
a2 = 55;
console.log(a2)

function testi() {
    for (let i=0; i < 5; i++) {
        let b = 14;
        console.log(i);
    }
    console.log(i);

}

testi();

let num = [1,2,3,4,5,6];
let result = num.filter(n => n%2 === 0)
                .map(n => n*2)
                .reduce((a,b)=>a+b);
console.log(result);

const realNumberArray = [2,3.5,-5,6,8.3,9];

const squaredIntegers = (arr) => arr.filter(num => Number.isInteger(num) && num >0).map(m => m*m);
console.log(squaredIntegers(realNumberArray));