let Duplicate = [6, 2, 3, 2, 4, 1, 5];
let arr=Duplicate.filter(
    (value, index) => Duplicate.indexOf(value) === index
);
console.log(arr); 

//sort
let swap;
for(let i =0;i <arr.length;i++){
    for(let j=i ; j < arr.length;j++){
        if(arr[i]>arr[j]){
            swap=arr[i];
            arr[i]=arr[j];
            arr[j]=swap;
        }
    }
}
console.log(arr);


