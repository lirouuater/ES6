//classes no ES6//

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100); // lógica de desconto de 10%
    }


}

const shirt = new Product('camiseta', 20);

console.log(shirt.name);
console.log(shirt.price);
console.log(shirt.productWithDiscount(10));


const tenis = new Product('oakley', 100);

console.log(tenis.name);
console.log(tenis.price);
console.log(tenis.productWithDiscount(50));