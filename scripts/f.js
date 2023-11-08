// let expression = new Date().getDay()
// console.log(expression);
// switch (expression) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("MSaturdayay");
//         break;

//     default: console.log("This is something else");

// }
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "\n";
// }
// console.log(text)
// let number = 9
// for (let v = 3; v < number; v--){
//     console.log(v);
// }
// let food= ["apple", "mango", "Pineapple", "Grapes" ]
// // console.log(food[0])
// for( let index = 3; index< food.length; index++){
//     console.log(food[index])

// }

let person={
    fname:"John",
    lname:"Doe",
    age:25
}
console.log(person["fname"]);
let txt =""
for(let x in person){
    console.log(x);
    console.log(person[x]);
    txt+= person[x]
}
console.log(txt);