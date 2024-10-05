let arr = [1, 2, 3, 4, 5];
let position = 2; 
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("after removing");
for (let i = 0; i < arr.length; i++) {
    if (i !== position) {
        arr2.push(arr[i]); 
    }
}

console.log(arr2); 
