//arrow functions//

const sum = function sum(a,b) {
    return a + b
}

console.log(sum(1,2));


// agora com arrow function//
 
const sumArrow = (a, b) => {
    return a + b
}

//pode ser escrita como
// const sumArrow = (a, b) => a + b       (economiza linhas de escrita)

console.log(sumArrow(1,2))


const greeting = (name) => {
    if(name) {
        return 'Olá ' + name + '!';
    } else {
        return 'oi';
    }
}

console.log(greeting('Rafael'));
console.log(greeting());



//sem argumentos//
const sayHello = () => console.log('hello!');

sayHello();



//conceito do THIS em arrow functions//
 
const user = {
    name: 'Rafael',
    sayUserName() {
        var self = this;
        setTimeout(function(){
            console.log(self);
            console.log('username: ' + self.name);
        }, 1000);
    },
    sayUserNameArrow() {
        setTimeout(()=> {
            console.log('username: ' + this.name);
        }, 700)
    },

}

user.sayUserName();
user.sayUserNameArrow();
