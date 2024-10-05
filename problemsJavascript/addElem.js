let arr=[1 ,2 ,3 , 4, 5];
let position=2;
let value=6
let arr1=[];
for(let i = 0 ; i < arr.length ;i++){
    if(i === position){
        arr1[arr1.length]=value;
    }
    arr1[arr1.length]=arr[i];
}
console.log(arr1);