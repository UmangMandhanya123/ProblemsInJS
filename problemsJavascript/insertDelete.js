let arr = [1, 2, 3, 4, 5];
let insertPosition = 2; 
let deletePosition = 4; 
let valueToInsert = 6;

let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (i === insertPosition) {
        arr1.push(valueToInsert); 
    }
    arr1.push(arr[i]);
}

console.log("Array after insertion:", arr1);

let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (i !== deletePosition) { 
        arr2.push(arr1[i]);
    }
}

console.log("Array after insertion and deletion:", arr2);
