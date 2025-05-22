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
