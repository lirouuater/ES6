//destructuring  ''transforma um array em variáveis''//

const fruits = ['apple', 'banana', 'orange']     //array de frutas

const [f1, f2, f3] = fruits        //destructuring

console.log(f1);
console.log(f2);
console.log(f3);



//mais um exemplo, porém com tag {} e // 

const productDetails =  {
    name: 'notebook',
    price: 2500.00,
    category: 'technology',
    color: 'Shadow Black'
}

const {name: productName, category: productCategory, color, price} = productDetails;

console.log(`O nome do produto é ${productName}, o preço dele é ${price} ele é categorizado como ${productCategory} `);
console.log(color); 

