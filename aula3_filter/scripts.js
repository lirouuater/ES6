const array = [1,2,3,4,5];
const highNumbers = array.filter((n) => {
    if(n >= 3) {
        return n;
    }

})

console.log(highNumbers);


const users = [
    { name: 'Rafaela', available: true},
    { name: 'Rafael', available: false},
    { name: 'Marcos', available: true},
    { name: 'João', available: false},
    { name: 'Maria', available: true}
]

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);    //usuários que não estão disponíveis 

console.log(availableUsers);
console.log(notAvailableUsers);