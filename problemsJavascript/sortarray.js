let arr=[2 ,4, 1, 4, 5];
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


