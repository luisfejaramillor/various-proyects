/* const alphabet = ['A','B','C','D','E','F']
const numbers = [1,2,3,4,5,6]

const combined = [...alphabet, ...numbers]





const sumAndMultiply = (a,b)=>{
    return [a+b, a*b, a/b]
}

const [sum, mul, division = "nothing to show up"] = sumAndMultiply(5,5)

console.log(sum, mul, division) */

/* const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const show = ({name, age}, {address})=>{
        console.log(name, age)
        console.log(address)
}

show(personOne, personTwo) */
/* 
const sum = (a,b)=> a+b

const isPostive = number => number>0

const randomNumber = ()=> Math.random()

const button = document.querySelector(".test")

button.addEventListener("click", ()=> console.log("Click"))


class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(() => {
            console.log(this.name)
        }, 100);
    }
}


const person1 = new Person("Felipe")

person1.printNameArrow()
 */

 let iniCount = 0
const countEl = document.getElementById("count-el")
const saveButton = document.getElementById("save-btn") 
const spanEl = document.getElementById("previous-span")
const incrementBtn = document.getElementById("increment-btn")
incrementBtn.addEventListener("click",()=>{
    iniCount++
    countEl.innerHTML= iniCount
})

saveButton.addEventListener("click",()=>{
    error.innerHTML= `Something went wrong`
    let p = document.createElement("p")
    p.innerHTML= ` ${iniCount} -`
    spanEl.appendChild(p)
    iniCount = 0
    countEl.innerHTML= iniCount
}) 

/* const welcomeEl = document.querySelector(".welcome-el")

let [name, greetings] = ["Felipe", "You must buy a motorcycle"]

welcomeEl.innerHTML = `Hello ${name}, you have a message: ${greetings}` */


/* let firstName = "Felipe"
let lastName = " Jaramillo"
let fullName = `Hello ${firstName}${lastName} welcome back!`

const grettings = ()=>{
    console.log(fullName)
}

grettings() */
/* let myPoints = 3


const add3Points = ()=>{
    myPoints+=3
}

const remove1Point = ()=>{
    myPoints--
}
add3Points()
remove1Point()
add3Points()
remove1Point()
add3Points()

console.log(myPoints)

console.log(`my points: ` + 5 + 9) */


/* let num1 = 8
let num2 = 2
const calculator = document.querySelector(".calculator")

calculator.addEventListener("click", (e)=>{
    if(e.target.className === "add"){
        console.log(num1+num2)
    }else if(e.target.className==="subtract"){
        console.log(num1-num2)
    }
    else if(e.target.className==="divide"){
        console.log(num1/num2)
    }
    else if(e.target.className==="multiply"){
        console.log(num1*num2)
    }
}) */

/* let firstCard = Math.floor(Math.random() * (12 - 2 + 1) ) + 2;
let secondCard = Math.floor(Math.random() * (12 - 2 + 1) ) + 2
let [isAlive, blackJack] = [true, false]
let resultSum = firstCard + secondCard
console.log(resultSum)
const showResults = ()=>{
    if(resultSum < 21){
        console.log("Want another card?")
        isAlive=true
        console.log(`Is alive? ${isAlive}`)
    }else if(resultSum === 21){
        console.log("Blackjack!")
        blackJack=true
        console.log(`The player has won`)
    }else{
        console.log("You're out")
        isAlive = false
        console.log(`Is alive? ${isAlive}`)
    }
}

showResults() */


/* const order = (pro)=>{
        console.log(`The order has been placed. Please process it`)
       setTimeout(() => {
           pro()
       }, 2000);
}

const production = ()=>{
        console.log(`Production completed!`)
}

order(production) */
/* let text = ""

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate", "peanuts"]
}


for(let e in stocks){
    text += stocks[e]
}

console.log(text) */

/*   const checker1 = (a, b)=>{
    if(a === 100 || b === 100){
        console.log("It is 100!")
    }else if(a + b === 100){
        console.log("The sum is 100!")
    }else{
        console.log("It is not 100 :( holi")
    }
}

checker1(50,40)   */

/* const checker = (a,b) => a === 100 || b === 100 || a+b === 100 ? console.log("It is 100!") : console.log("Not 100")

checker(50, 50) 


let phrase = "script.js"
 
let splited = phrase.split(".").unshift("holi")

console.log(splited) */


/* const replacer = (str) => str.split("").map(e => e.replace(e, (String.fromCharCode(e.charCodeAt(e)+1))))

 
let result = replacer("automovil").join("")
console.log(result)  */



const replacer2 = (str) =>
 str.split("")
 .map(e => String.fromCharCode(e.charCodeAt(0)+1))
 .join("") 

console.log(replacer2("abcd"))