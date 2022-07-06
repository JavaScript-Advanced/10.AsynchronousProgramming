//function declaration
function printFullName(firstName, lastName) {
    console.log(firstName + ' '+ lastName);
}

//function invokation
printFullName('Remzi', 'Chaushev');

//function expression
let countDown = function(number){
    for (let i=number; i>0; i--){
        console.log(i);
    }
}

countDown(10);

//Arrow function

let countUp = (max) => {
    for (let i = 0; i < max; i++) {
        console.log(i);
    }
}

countUp(10);

//Return v alue
let sum = (a,b) =>{
    return a+b;
};

console.log(sum(4,4));

//Method
let firstName = 'Remzi';
console.log(firstName.toUpperCase());