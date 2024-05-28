let car : string = `subaru`;
let age : number = 25;
let numbers : number[] = [1, 2, 3, 4];

//Test 1 : Equality [True]
console.log("Is car == `subaru`? I predict True");
console.log(car == `subaru`);

//Test 2 : Strict equality [False]
console.log("Is car === `subaru`? I predict Falsee");
console.log(car === `subaru`);

//Test 3 : Inequality [True]
console.log("Is car != `Toyota`? I predict True");
console.log(car != `Toyota`);

//Test 4 : Inequality [False]
console.log("Is car !== `subaru`? I predict False");
console.log(car !== `subaru`);

//Test 5 : LowerCase Converstion [True]
console.log("Is car.toLowerCase() ==  `subaru`? I predict True");
console.log(car.toLowerCase() == `subaru`);

//Test 6 : LowerCase Converstion [False]
console.log("Is car === car.toLoweCase? I predict False");
console.log(car === car.toLowerCase());

//Test 7 : Equality [True]
console.log("Is age == 25? I predict True");
console.log(age == 25);

//Test 8 : Inequality [False]
console.log("Is age != `25`? I predict True");
console.log(age != 25);

//Test 9 :Greator than [False]
console.log("Is age > 30? I predict False");
console.log(age > 30);

//Test 10 : Less than or equalto [True]
console.log("Is age <= 25? I predict True");
console.log(age <= 25);

//Test 11 : And [True]
console.log("Is age > 20 && age < 30? I predict True");
console.log(age > 20 && age < 30);

//Test 12 : Or[False]
console.log("Is age > 30 || age < 18? I predict False");
console.log(age > 30 || age < 18);

//Test 13 : In Array [True]
console.log("Is 3 in numbers? I predict True");
console.log(3 in numbers);

//Test 14 : Not in Array [False]
console.log("Is 5 not in numbers? I predict False");
console.log(5 not in numbers);