let userHeight = 170; // User's height in cm
let userWeight = 65; // User's weight in kg
let userBMI = 0; // User's BMI
let userActivity = 1.2; // User's activity level
let userGender = ''; // User's gender
let userAge = 25; // User's age
let userName = ''; // User's name

/* VARIABLES FOR BMI CALCULATION */
let resultCalcBMI = 0; // Result of BMI calculation
let resultBMI = ''; // BMI category

/* VARIABLES FOR IDEAL WEIGHT CALCULATION */
let idealWeight = 0; // Ideal weight

/* VARIABLES FOR METABOLIC CALCULATION */
let resultMetabolic = 0; // Metabolic rate result

/* FUNCTION TO CALCULATE BMI */
function calcBMI(height, weight) {
  resultCalcBMI = weight / ((height / 100) * (height / 100));
  userBMI = resultCalcBMI - (resultCalcBMI % 0.01); // Round to two decimals
  //console.log(`BMI Value: ${userBMI}`);
}

/* FUNCTION TO VALIDATE BMI */
function validateBMI(bmi) {
  if (bmi < 18.50) {
    resultBMI = 'Underweight';
  } else if (bmi >= 18.50 && bmi <= 24.99) {
    resultBMI = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.99) {
    resultBMI = 'Overweight';
  } else if (bmi >= 30 && bmi <= 34.99) {
    resultBMI = 'Obesity grade 1';
  } else if (bmi >= 35 && bmi <= 39.99) {
    resultBMI = 'Obesity grade 2';
  } else {
    resultBMI = 'Obesity grade 3';
  }
  //console.log(`BMI Type: ${resultBMI}`);
}

/* FUNCTION TO CALCULATE IDEAL WEIGHT */
function calcWeight(height, gender) {
  let userGenderCalc = gender.toUpperCase();

  if (userGenderCalc == 'MALE') {
    idealWeight = (height - 100) * 0.90;
  } else {
    idealWeight = (height - 100) * 0.85;
  }
  //console.log(`Ideal Weight: ${idealWeight}kg`);
}

/* FUNCTION TO CALCULATE METABOLIC RATE */
function calcMetabolic(height, weight, activity, gender, age) {
  let userGenderCalc = gender.toUpperCase();

  if (userGenderCalc == 'MALE') {
    resultMetabolic = parseInt(((13.75 * weight) + (5 * height) - (6.76 * age) + 66.5) * activity);
  } else {
    resultMetabolic = parseInt(((9.56 * weight) + (1.85 * height) - (4.68 * age) + 665) * activity);
  }
  //console.log(`Caloric Expenditure: ${resultMetabolic} calories`);
}

/* FUNCTION TO EXECUTE ALL CALCULATIONS */
function calcAll() {
  /* Execute BMI Calculation */
  calcBMI(userHeight, userWeight);

  /* Execute BMI Validation */
  validateBMI(userBMI);

  /* Execute Ideal Weight Calculation */
  calcWeight(userHeight, userGender);

  /* Execute Metabolic Rate Calculation */
  calcMetabolic(userHeight, userWeight, userActivity, userGender, userAge);
}
