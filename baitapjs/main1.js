// data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// calculate BMIs
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// create a boolean variable 'markHigherBMI'
let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

// calculate BMIs
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

// create a boolean variable 'markHigherBMI'
markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);