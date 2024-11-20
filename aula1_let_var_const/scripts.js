// 1- var, let e const//

 var x = 10
 var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}


console.log(x)



let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

// exemplo de escopo de bloco 

let i = 100
for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)


//const com escopo de bloco 
 
function logName() {
    const name = 'Rafael'
    console.log(name)
}

const name = 'João'

logName()

console.log(name)