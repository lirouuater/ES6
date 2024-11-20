//spread operator // 

const array1 = [1,2,3]
const array2 = [4,5,6]


const array3 = [...array1, ...array2] // junta os dois arrays em um array3 

console.log(array3);

const array4 = [1, ...array2, 7,8,9]// adiciona elementos no array4 , 

console.log(array4);



const carName = {name: 'fiesta'}
const carColor = {color: 'blue'}
const otherInfos = {doors: 4, wheels:4}

const car = {...carName, ...carColor, ...otherInfos} // junta os objetos em um array

console.log(car);