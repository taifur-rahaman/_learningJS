let massMark = 78, massJohn = 92; // Mass in kilograms
let heightMark = 1.69, heightJohn = 1.95; // Height in metres

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

console.log(bmiJohn, bmiMark)

if(bmiJohn > bmiMark){
    console.log("John's bmi is greater than Mark's bmi");
}
else if (bmiJohn < bmiMark){
    console.log("Mark's bmi is greater than John's bmi");
}
