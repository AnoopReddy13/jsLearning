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

/*const increment = function(num, value =1){
    return num + value;
};
const increment1 = increment(5);
console.log(increment1);*/

const increment = function(){
    return function increment(num, value =1) {
        return num + value;
    }
};
console.log(increment()(7));
const increment2 = increment()(5);
console.log(increment2);
//console.log(increment(5));

/*const sum1 = function(){
    return function sum1(x,y,z) {
        const args = [x,y,z];
        return args.reduce((a,b) => a+b);
    }
};
console.log(sum1(1,2,3));*/

var mulLineString = "This \n\
is \n\
a \n\
multiline \n\
string";

console.log(mulLineString);

//simple feilds

const createPerson = (name,age,gender) => ({name,age,gender});
console.log(createPerson("Anoop",24,"Male"));