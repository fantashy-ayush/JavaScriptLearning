//Array
const Array =[1,2,3,4,5]
console.log(Array[0])
Array.unshift(9)
console.log(Array)

// Array method

Array.push(6)
Array.push(7)
Array.pop()
console.log(Array)

console.log(Array.includes(9))
console.log(Array.indexOf(5))

const myn1 =Array.slice(1,3)

console.log(myn1);
console.log("B",Array);

const myn2=Array.splice(1,3)
console.log(myn2);
console.log(Array)

console.log("Ayush is successful")