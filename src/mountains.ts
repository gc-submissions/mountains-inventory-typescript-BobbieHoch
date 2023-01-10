//boolean string number null undefined symbol bigint

//objects are a way of grouping data together
//interface/////////////////establish property:type/////////////////////////
interface Mountain{
    name: string,
    height: number
    //optional property
    hasBeenClimbed?:boolean
}
//IMPLEMENT---MUST HAVE ALL THE PROPERTIES
// let newMountain: Mountain = {
//     name: "Kilaminjaro",
//     height: 1000
 
// }           INTERFACE []<BRACKETS TELL ME IT IS AN ARRAY OF
let mountains: Mountain[] = [
    { name: "Kilimangaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];

//function signature
  // Option 1 - done with regular For Loop(Array is made up of items(important word))
function findNameOfTallestMountain1(array:Mountain[]) : string {
    let result:string = '';
    let newHeight:number = 0;
    for(let item of array){
        if(item.height > newHeight){
            newHeight = item.height;
            result = item.name;
        }
    }
    return result;
}
// Option 2 - forEach Loop
function findNameOfTallestMountain2(array:Mountain[]) : string {
    if(mountains.length) {
        let tallest: Mountain = mountains[0];
        mountains.forEach((mountain) => {
            if(mountain.height > tallest.height) {
                tallest = mountain;
            }
        });
        return tallest.name;
    } else {
        return "";
    }
}
// Option 3 - .reduce() method
function findNameOfTallestMountain3(array:Mountain[]) : string {
    let tallestMountain = mountains.reduce((prev, current) => (prev.height > current.height) ? prev: current);
    return tallestMountain.name;
}
console.log(findNameOfTallestMountain1(mountains));
//npm run start:dev

let thisVariableCanBeAnything: any;
let stringOrNumber: string|number;
stringOrNumber = "Robert";

//     {function, interface}
export {findNameOfTallestMountain1, Mountain}


//optional parameter -Interface Property or parameter
function Calculate(a: number, b: number, c?: number) {
    
}
Calculate(1, 2);
Calculate(1, 2, 3);
