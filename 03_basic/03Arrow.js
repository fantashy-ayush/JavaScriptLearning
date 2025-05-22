const user={
    username:"Ayush Sharma",
    price: 999,

    welcomeMeassage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }
}
/*
user.welcomeMeassage()
user.username="Prajjwal Dobriyal"
user.welcomeMeassage()
console.log(this);

function chai(){
    let username="Ayush"
    console.log(this.username);
}
chai()
*/

const chai=() => {
    let username="Ayush"
    console.log(this);
    
}
//chai()
/*
const addtwo = (num1, num2)=>{
    return num1 + num2
}
const addtwo = (num1, num2)=>  num1 + num2
*/
const addtwo = (num1, num2)=> ({username:"Ayush"})
//console.log(addtwo());

//console.log(addtwo(3,4));

const myarray=[1,2,3,4,5,6,7]
//myarray.forEach(() => ())