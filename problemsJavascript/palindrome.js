let str="nayan";
let str1="";
for(let i=str.length-1 ; i >= 0;i--){
    str1=str1+str[i];
}
if (str1 === str) {
    console.log(`${str} is a palindrome.`);
} else {
    console.log(`${str} is not a palindrome.`);
}