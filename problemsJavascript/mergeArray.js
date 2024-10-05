let arr=[1 ,2, 3];
let arr1=[3 , 4 ,5];

let arr3=[...arr, ...arr1];
console.log(arr3);
let arr4=[];

for(let i= arr3.length-1;i>=0;i--){
    arr4.push(arr3[i]);
}
console.log(arr4);
let swap;
for(let i=0; i < arr4.length;i++){
    for(let j=i;j <arr4.length;j++){
        if(arr4[i]>arr4[j]){
            swap=arr4[i];
            arr4[i]=arr4[j];
            arr4[j]=swap;
        }
    }
}
console.log(arr4);