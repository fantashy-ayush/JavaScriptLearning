//  Primitive
// 7 type : string, number, boolean, null, undefined, Symbol, BigInt
// Reference (non primitive)
// Array, object, functions


const score=100  //int
const ScoreValue = 100.3  // string

const isloggedin=false //boolean
const outsideTemp= null // null
let userEmail; //undefined

const id =Symbol('123')
const anotherID=Symbol('123')

console.log(id==anotherID);

//const bignumber =  5576889945614865n

const heros=["Ayush", "prajjwal", "rishab"];
let myObj={
    name: "Ayush",
    age: 22
}

const myFunction =function(){
    console.log("hello world");
}

console.log(typeof(isloggedin))

console.log(typeof(myFunction))

// https://262.ecma-international.org/5.1/#sec-11.4.3
