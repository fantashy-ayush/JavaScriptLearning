// for of

//["","",""]

const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);  
}

const greeting="hello world"
for (const greet of greeting) {
    //console.log(`each char is ${greet}`);
}


//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('BG', "Bangladesh")
map.set('BG', "Bangladesh")

console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);  
}

//const myobject={
//    'game1': 'NFS',
//    'game2': 'Spiderman'
//}
//
//for (const element of object) {
//    
//}