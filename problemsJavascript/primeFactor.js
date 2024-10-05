let num=24;
let result=[];
let div=2;
while(num>=2){
    if(num%div===0){
        result.push(div);
        num=num/div;
    }else{
        div++;
    }
}
console.log(result);