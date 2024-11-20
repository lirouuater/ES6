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





// Herança no ES6 //

class ProductWithAttributes extends Product {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }
    showColor() {
        console.log('as cores são:')
        this.color.forEach((color)=> {
            console.log(color);
        });
    }
}


const hat = new ProductWithAttributes('chapeludo', 20.99, ['red', 'blue', 'green']);
console.log(hat.name);
console.log(hat.price);
console.log(hat.showColor()); 