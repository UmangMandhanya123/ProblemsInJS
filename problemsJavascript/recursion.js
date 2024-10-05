let num=5;
let fact=1;
function factorial(n){
    if(n>num){
        return;
    }
    else{
        fact=fact*n;
        console.log(fact);
        n++;
        factorial(n);
    }
}
factorial(1)