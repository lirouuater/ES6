const products = [
    {name: 'Notebook', price: 2500.00, category: 'technology'},
    {name: 'T-shirt', price: 15.99, category: 'clothes'},
    {name: 'socks', price: 25.15, category: 'clothes'},
    {name: 'Airpods', price: 8.00, category: 'technology'}
 
]

// quero fazer uma liquidação de roupas: 

products.map((product)=> {
    if(product.category === 'clothes') {
        product.onSale = true
    }
})

console.log(products)