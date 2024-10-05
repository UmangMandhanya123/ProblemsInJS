let arr = [1, 2, 3, 4, 5, 6, 7];
let largest = Number.MIN_VALUE;
let sLargest = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        sLargest = largest;
        largest = arr[i];
    } else if (arr[i] > sLargest && arr[i] != largest) {
        sLargest = arr[i];
    }
}

console.log(sLargest);
