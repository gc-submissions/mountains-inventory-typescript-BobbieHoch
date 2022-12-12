import { Panels } from "./products";

export interface InventoryItem {
    product: string;
    price: number;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: "motor", price: 10.0, quantity: 10 },
    { product: "sensor", price: 12.5, quantity: 4 },
    { product: "LED", price: 1.0, quantity: 20 },
];

export function calcInventoryValue(array: InventoryItem[]) {
    if (!inventory.length) return 0;

    let total = 0;
    inventory.forEach(
        (item) => (total += item.price * item.quantity)
    );

    return total;
}
const addedTotal = calcInventoryValue(inventory);
console.log(addedTotal);

// Declare a function called calcInventoryValue. It takes one parameter, an array of InventoryItem objects. It returns a number, the total value of all the products in the inventory array provided as an argument. If the array argument is empty, return 0.


// Call calcInventoryValue, passing it your inventory array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log the variable. (Hint: It prints 170).
