//VARIABLES//

//Decarling Variables
var num = 5;
let name = "Murray"
const isItMorning = true;
const myArr = [1, 2, 3]

//reassigning VARIABLES
num = 10
// console.log(num)

name = 'Kelsey'
// console.log(name)


// isItMorning = false; 
//Can't change because variable const will not change. 
// console.log(isItMorning)

myArr.push(4)
// console.log(myArr)


//* DATATYPES *//
let string = 'Hello world! String One here.'
let stringTwo = "Hello world! I am string two."
let stringThree = `Hello world! String three and backticks.`


let numString = '1'
let numStringTwo = 2


//concatenation
let greeting = string + ' ' + stringTwo
// console.log(greeting)

//template strings
let newGreeting = `${string} ${stringTwo}`
// console.log(newGreeting)

let sum = numString + numStringTwo
// console.log(sum)
//this will give the number 12 even though numString is a string. 

//NUMBERS
let number = 50
let numberTwo = 10

//
let numberSum = number + numberTwo;
// console.log(numberSum)

// number = number + numberTwo
//Here are the shorthands and how to write them.
// number += numberTwo
number *= numberTwo
// number /= numberTwo
// console.log(number)


//incrament
// number++
// console.log(number) this console.log will give you 501. Because it's multipling the nuymber above and then adding 1 with the ++
//decrement
// number--

//BOOLEAN
let isItTrue = true;
let isItFalse = false;

//UNDEFINED and NULL
let isNotDefined
// console.log(isNotDefined) will show undefinded

let noValue = null;
// console.log(noValue) You're still showing avariable that is assigned to null, but it means NOTHING. No value has been assigned to the variable yet.
//* BE CAREFUL when assigning a varabile to null. If you make it a 'const' variable it will not change later. So you can't call it a different variable later. It HAS to be 'let' */

//ARRAYS
let strArr = ['Hello', 'World', '!', 5, true, undefined, null]

// 57 mins.
//accessing the array through bracket notation. 
// console.log(strArr[5])

//How to check the length of an array
// console.log(strArr.length)

//To get the last item in the array. 
// console.log(strArr[strArr.length - 1])

//assign items in an array
//reassign items in an array
strArr[6] = null
strArr[2] = '!!!!'
// console.log(strArr)

//OBJECTS
//1 hour

//Objects have Object keys that we define. In this example it's 'name:' and they can have values assigned to them. In this example it would be 'Matt'. 

let userObj = {
    name: "Matt",
    age: 28,
    car: 'Geo Metro'
}

//two ways to access these. Brackett Notation and Dot Notation

//bracket Notation - it has to be as "string" to access the key value in an object
// userObj['name']
// console.log(userObj['name'])
//Dot notation
// console.log(userObj.age)

//Assigning a new Key into the object
userObj.faveIceCream = "Cookie Dough Chocolate Chip"
// console.log(userObj)

//Reassigned a key in the object
userObj.age = 27
// console.log(userObj)



//* IF/ELSE, TERNARIES, TRUTHY/FALSY *// 
//1 hour 15 mins

//falsy values: false, 0, '', null, undefined, NaN
// if (2 + 2 === 5) {
//     console.log('condition met')
// } else if (userObj.faveIceCream) {
//     console.log('Cookie dough for the win!')
// } else {
//     console.log('none were true')
// }

//You can run as many 'if' statements in a function as you'd like. 

//1 hour 30 min

// with the double handlebars --> || <-- it is basically and OR so is this one or the other is a truthy statement. 
// if (2 + 2 === 4 || 2 + 2 === 5) {
//     console.log('2 is true')
// }


//with the double --> && <-- that means that both have to be turthy for it to continue or run. 
// if (2 + 2 === 4 && 2 + 2 === 5) {
//     console.log('2 is true')
// }

//=, ==, ===,  
// 1 Hour 34 mins

//TURNARY OPERATORS - syntax - condition ? exprIfTrue : exprIfFalse
// '7' == 7 ? console.log('true') : console.log('false')
// '7' === 7 ? console.log('true') : console.log('false')

//1 Hour 45 mins - this example was asked. 

// function messageBasedOnAge(age) {
//     return age < 18 ? "Not quite old enough, sorry." :
//         (age === 18) ? console.log("Congrats on being an adult!") :
//             (age > 18) ? console.log("Somebody is really getting up there, huh?") :
//                 " "
// }
// messageBasedOnAge(34)

//* FUNCTIONS *//
//1 hour 48 mins

//Declarations
function declFunc() {
    return 'Hello world!'
}
// Functions will not run until they are invoked. (I had to run this in a text editor, so I had to wrap it in a console.log() to see it in the console.)
// console.log(declFunc())


//2 hours 2 min  ---------------------------------------??????????????? Rewatch this part. 
//Question was asked - so could you give an example of a time when you wouldn't need a return in the function and why?
//example given

let count = 0;
let expFunc = function () {
    count += 2
}

expFunc()
// console.log(count)

//2 Hours 5 min
//He explans the differents in writing functions ---------???????????? Rewatch!!!!!



//Arrow Functions
//2 hours 9 mins

let arrowFunc = () => {
    return 'Hellow World'
}

let arrowFuncTwo = () => 'Hello World!'

// let arrowFuncThree = (num1) => {
//     return 5 + num1
// }

// let arrowFuncThree = (num1) => 5 + num1; //same function as above. 

let arrowFuncThree = num1 => 5 + num1; //Another example of the same function. 


// console.log(arrowFuncThree(5))
// console.log(arrowFuncThree(10))


//* FOR LOOPS *//
//2 hours 30 min

for (let i = 1; i <= 10; i++) {
    // console.log(i)
}
//All 3 arguments are required for a for loop. It also has to have a 'let' variable

// running a for loop backwards
for (let i = 10; i >= 1; i--) {
    // console.log(i)
}

//Skipping numbers
for (let i = 10; i >= 1; i -= 2) {
    // console.log(i)
}

// 2 hours 40 min. 

let loopArr = ['Hello', 10, true, false, 'World'];

for (let i = 0; i < loopArr.length; i++) {
    // console.log(loopArr[i]) // finding the actual values that are in the array. 
    loopArr[i] = 'Redacted' //changing the values int eh array. 
}

// console.log(loopArr) // seeing the changes in the values of the array. 

//2 hours 48 min
let numArr = [1001, 22, 45, 99, 100, 203]
//created a new variable to store odd numbers
let oddArr = []
let evenArr = []

//===, !==, !true   
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 !== 0) {
        oddArr.push(numArr[i])
    } else {
        evenArr.push(numArr[i])
    }
}

// console.log(oddArr)
// console.log(evenArr)


//3 hours 2 mins
//for in loops
let carObj = {
    make: 'Geo',
    model: 'Metro',
    year: 1980,
    color: 'Hot Pink'
}

for (let key in carObj) {
    // console.log(key)//access the keys of the object
    // console.log(carObj[key])//bracket notation is REQUIRED in for in loops to access the values. 
}

//Nested Data
//3 hours 8 minues
let carArr = [{ make: 'Geo', model: 'Metro' }, { make: 'Tesla', model: 'Cybertruck' }, { make: 'DMC', model: 'DeLorean' }]

for (let i = 0; i < carArr.length; i++) {//this is the one looping over the array
    for (let key in carArr[i]) { // one is looping over the objects that are in the array.
        // console.log(carArr[i])
        // console.log(carArr[i][key])
        // carArr[i]['make'] = 'Geo' //This is updating the value of the objects key values 
        // carArr[i]['model'] = 'Metro'
    }
}
// console.log(carArr)//this was to show that you can reassign the values in the object.


//Anything beyond this point is in the 2nd recording 

//* ARRAY METHODS *//
//2nd recording - 01 mins

let movieArr = ['Star Wars', 'Lord of the Rings', 'Harry Potter']

// movieArr[3] = "Breakfast Club" // hard code in anohter value 
// console.log(movieArr)

// movieArr.push('Brekfast Club', "Cool Runnings") //Add a value to the end of the array
// console.log(movieArr)


// movieArr.pop() // remove a value to the end of the array. 
// console.log(movieArr)

// movieArr.shift() // this will remove a value from the front of the array. 
// console.log(movieArr)

// movieArr.unshift('Cool Runnings')
// console.log(movieArr)


// 15 mins
//SLICE AND SPLICE

let strArrTwo = ['WR1', 'DevMountain', 'JavaScript', 'HTML', 'CSS']

//to copy and array
// let fullCopy = strArrTwo.slice()
// console.log(fullCopy)

// let skipTheFrontCopy = strArrTwo.slice(2)// starts at the value of 2 and copies the rest of the array. 
// console.log(skipTheFrontCopy) 

// let frontCopy = strArrTwo.slice(0, 3);//This is copying the array UP TO the 3rd spot. 
// console.log(frontCopy)

//25 min
//SPLICE

// strArrTwo.splice(2)
// console.log(strArrTwo)

// strArrTwo.splice(1, 1) //this is telling where the splice starts and how many you want to be removed. So this removes 'DevMountain'.
// console.log(strArrTwo)


// strArrTwo.splice(0, 1, "Hello")//This starts the splice at the value of '0' and delete '1' values and ADD the 'Hello' string. 
// console.log(strArrTwo)


//CALLBACK FUNCTIONS
//38 mins

// function callBack() {
//     return 'hello world!'
// }

// function higherOrder(cb) {
//     return cb()
// }

// console.log(higherOrder(callBack))

//Higher order functions will always take callback functions. 

function callBack(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function higherOrder(cb, num1, num2) {
    return cb(num1, num2)
}

// console.log(higherOrder(callBack, 10, 30))
// console.log(higherOrder(subtract, 10, 30))


//Higher Order Array Methods
//54 mins
// Map, Filter, Reduce
let highOrderNumArr = [10, 20, 30, 40, 50];

let forLoopArr = []
for (let i = 0; i < highOrderNumArr.length; i++) {
    forLoopArr.push(highOrderNumArr[i] * 2)
}

// console.log(forLoopArr)

// let mappedArr = highOrderNumArr.map(function (element) {
//     return element * 2
// })

// console.log(mappedArr)
// console.log(highOrderNumArr)

let mappedArr = highOrderNumArr.map((element) => element * 2)//using Arrow Function that is doing the same thing as above
// console.log(mappedArr)


let arrOfObjs = [
    { name: 'Matt', age: 27 },
    { name: 'Andrew', age: 27 },
    { name: 'Joseph', age: 35 }
]

// let mappedObjArr = arrOfObjs.map(element => {
//     element.age = "redacted"
//     return element
// })
// console.log(mappedObjArr)

// let mappedObjArr = arrOfObjs.map(element => { //showing a if statment with the .map function. 
//     if (element.name === "Matt") {
//         element.age = "redacted"
//     }
//     return element
// })
// console.log(mappedObjArr)

//FILTER & REDUCE
//1 hour 30 minutes
//Filter
let numArrFive = [9, 8, 7, 6, 5, 4, 3]

let forLoopFilter = []
for (let i = 0; i < numArrFive.length; i++) {
    if (numArrFive[i] % 2 === 0) {
        forLoopFilter.push(numArrFive[i])
    }
}
// console.log(forLoopFilter)

let filterArr = numArrFive.filter(function (element) {//this is doing the same thing as above
    return element % 2 === 0;
})
// console.log(filterArr)

let arrowFilterArr = numArrFive.filter(element => element % 2 === 0)
//this is doing the same thing as above but just using a arrow function. 
// console.log(arrowFilterArr)


//REDUCE
//1 hour 44 mins
let priceArr = [9.99, 19.99, 29.99, 39.99];

let priceSum = 0;
for (let i = 0; i < priceArr.length; i++) {
    priceSum += priceArr[i]
}
// console.log(priceSum)

let reduceSum = priceArr.reduce(function (acc, element) {
    return acc + element
})

// console.log(reduceSum)

let produceReduce = priceArr.reduce(function (acc, element) {
    return acc * element
})

// console.log(produceReduce)

let arrowReduceSum = priceArr.reduce((acc, element) => acc + element, 10)
// console.log(arrowReduceSum)





//* CONTEXT, CONSTRUCTOR FUNCTIONS, AND PROTOTYPE METHODS *//

//2 hours 2 mins

function defaultCtx() {
    if (this === window) {
        console.log("This is the Window")
    }
}

// console.log(defaultCtx())

let heroObj = {
    name: 'Kirby',
    sayHello: function () {
        return this.name;
    }
}

// console.log(heroObj.sayHello())

let heroTwo = {
    sayHello: function () {
        return `${this.name} says ${greeting} and craves justice`
    }
}

let sanic = {
    name: 'Sanic'
}

let peter = {
    name: 'Spider Man'
}

//Got distracting and was not able to keep up on this section. 
// console.log(heroTwo.sayHello.apply(sanic))
// console.log(heroTwo.sayHello.apply(peter))
// let sanicGreeting = heroTwo.sayHello.bind(sanic)
// sanicGreeting('I gotta go slow')


//Constructor Function
function Heros(name, superpower, awesome) {
    this.name = name
    this.superpower = superpower
    this.awesome = awesome
}

Heros.prototype.catchPhrase = function (phrase) {
    return `${this.name} says ${phrase}`
}

let hawkeye = new Heros("Hawkeye", 'Super Vision, mad bow and arrow skills', true)
// console.log(hackeye)
hawkeye.catchPhrase('I see better from a distance')

let darthVader = new Heros("Darth Vader", 'Menacing, lovely voice', true)
// console.log(darthVader)

// console.log(Heros(hawkeye))


//HTML & CSS 2 hours and 35 minutes









//My questions - 
//Make sure we cover SCOPE

//Practicing For Loops

let murrArr = [123, 543, 6785, 765, 896, 9907]

function tester(murrArr) {
    for (let i = 0; i < murrArr.length; i++) {
        console.log(i)
    }
}