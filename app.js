//Create Object

//Object Literal

// const client = {
//     name:'Juan',
//     balance:1000,
//     membership : function(){
//         let name;
//         if(this.balance > 1000){
//             name='Gold';
//         }
//         else if(this.balance > 500){
//             name='Platinum';
//         }
//         else{
//             name = 'Normal';
//         }
//
//         return name;
//     }
// }


// console.log(client);
// console.log(client.name);
// console.log(client.balance);
// console.log(client.membership());


//Object Constructor: More powerful and helps in creating more dynamic behaviour

// function Client(name,balance){
//     this.name = name;
//     this.balance = balance;
//     this.membership = function(){
//         let name;
//         if(this.balance > 1000){
//             name='Gold';
//         }
//         else if(this.balance > 500){
//             name='Platinum';
//         }
//         else{
//             name = 'Normal';
//         }
//
//         return name;
//     }
// }
//
// const person = new Client('Juan',1000);
// const person2 = new Client('Karen',600);
//
// console.log(person.membership());
// console.log(person2);






//Other constructors in javaScript


const name1 = "Karen";
const name2 = new String('Karen');//String constructor

console.log(name1, typeof name1);
console.log(name2, typeof name2);

if(name1==name2){
    console.log("Same Value");
}
else{
    console.log("Different Value");
}

if(name1===name2){
    console.log("Same Data Type");
}
else{
    console.log("Different Data Type");
}

const number1 = 10;
const number2 = new Number(20);

console.log(number1);
console.log(number2);

const boolean1 = true;
const boolean2 = new Boolean(false);

console.log(boolean1);
console.log(boolean2);



//function

// const function1 = function(a,b){
//     return a+b;
// }
//
// const function2 = new Function('a','b','return a + b');
//
// console.log(function1(5,3));
// console.log(function2(500,300));
//
//
//
//
// //Objects
// const person1 = {name:'John'};
//
// const person2 = new Object({name:'John'});
//
// console.log(person1);
// console.log(person2);
//
//
// const array1 = [1,2,3,4];
// const array2 = new Array(1,2,3,4,5);
//
// console.log(array1);
// console.log(array2);

//Object Prototype



















d
