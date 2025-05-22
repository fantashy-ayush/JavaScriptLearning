const email="Aks@gmail.com"

if (email) {
    console.log("got user email");
    
} else {
    console.log("dont have user email");
} 

//  falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy value
//"0", 'false', " ", [], {}, function(){}
//if (email.length===0) {
//    console.log("Array is empty");
//}
//const emptyobj={}
//
//if(Object.keys(emptyobj).length === 0){
//    console.log("Object is empty");
//}

// Nullish coalescing operator(??): null undefnied
let val1;
//val1 = 5 ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//ternary operator
// condition ? true : False
const iceTeaPerice=100
iceTeaPerice <= 80 ? console.log("less than 80") : console.log("more than 80");

