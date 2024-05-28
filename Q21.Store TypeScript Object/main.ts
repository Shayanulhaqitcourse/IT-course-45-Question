interface item {
    name:string
    price:number
}
const book: item ={
    name: `Esential Type Script`
    price:450
}
const fruit: item ={
    name: `apple`
    price:200
}
console.log(`book name: ${book.name}, price: ${book.price}`);
console.log(`fruit name: ${fruit.name}, price: ${fruit.price}`);
