function bodymassindex(mass,height){
    let bmi=mass/(height**2);
    return bmi;
}
let weight=70;
let heightinmeter=1.75;
console.log(`The BMI is = ${bodymassindex(weight,heightinmeter)}`);