const myNum=[7,8,3]

//const myTotal=myNum.reduce(function(acc, currval){
//    console.log(`acc : ${acc} and current value : ${currval}`);
//    return acc+currval
//},0)

const myTotal=myNum.reduce((acc,curr) => acc+curr,0)

//console.log((myTotal));

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const price1 = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(price1);
