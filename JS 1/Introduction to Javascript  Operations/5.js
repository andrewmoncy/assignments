function calculateSimpleInterest(p,r,t){
let simpleInterest=(p*r*t)/100;
return simpleInterest;
}
let principal=1000;
let rate=12;
let time=3;
console.log(`Calculated simple interest is = ${calculateSimpleInterest(principal,rate,time)}`);