//singleton
const mysym=Symbol("key1")
const jsuser={
    name:"Ayush",
    [mysym]:"AYuhs",
    age:22,
    location:"jaipur",
    email:"aks@gmail.com",
    isloggedin:true
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])

jsuser.email="proximity@gmail.com"
//Object.freeze(jsuser)
jsuser.email="mhdsbukfw@gmail.com"
console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello bhai ki haal chaal")
}
jsuser.greeting2=function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())