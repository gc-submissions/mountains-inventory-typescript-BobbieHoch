interface Products{
    name: string;
    price: number;


}
const product: Products[] = [
        { name: "motor", price: 10.00 },
        { name: "sensor", price: 12.50 },
        { name: "motor", price: 1.00 }
    ];

function calcAverageProductPrice(array: Products[]): number { 
    let result: number = 0
    for (let item of array) {
        result += item.price
    }
    return result / array.length
}
console.log(calcAverageProductPrice(product));

export { calcAverageProductPrice, Products }