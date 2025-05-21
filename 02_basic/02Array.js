const marvel_heroes=["thor","Ironman","spiderman"]
const DC_heros=["Superman","Flash", "batman"]

marvel_heroes.push(DC_heros)
console.log(marvel_heroes)
const newarr=marvel_heroes.concat(DC_heros)
console.log(newarr)

const allheroes=[...DC_heros, ...marvel_heroes]
console.log(allheroes)

const arr1=[1,2,3,[4,5,6],[7,8,[5,6,6]]]
const arr2=arr1.flat(Infinity)
console.log(arr2)

console.log(Array.isArray("AyushKumarSharma"))
console.log(Array.from("AyushKumarSharma"))
console.log(Array.from({name: "AyushKumarSharma"}))