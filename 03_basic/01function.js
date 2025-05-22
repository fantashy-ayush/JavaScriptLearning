function saymyname() {
    console.log("A")
    console.log("y")
    console.log("u")
    console.log("s")
    console.log("h")
}
//saymyname()

function addtwono(number1,number2){

    //let result = number1+number2
    return number1+number2
}
const result = addtwono(3,7)
//console.log(`result : ${result}`);

function loginusermsg(username= "Ayush"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginusermsg("Paro"));

function calculatecartprice(var1,var2,...num1){
    return num1
}
//console.log(calculatecartprice(200,500,100,2000));

const user={
    username: "ayush",
    price: 499
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
 //handleobject(user)
handleobject({
    username:"Ayushisgreat",
    price: 399
 })
const mynewarray=[200,400,500,600]
function return2ndvalue(getArray){
    return getArray[1]
}

//console.log(return2ndvalue(mynewarray));
console.log(return2ndvalue([200,400,500,100]));
