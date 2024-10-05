//two strigs
let a="abc", b="xyz";
let temp;
temp=a;
a=b;
b=temp;
console.log(a , b);

//swap arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
        const temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
    }
} 
console.log(arr1);
console.log(arr2);
