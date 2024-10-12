// Get input fields and button
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');

// Get result elements
const bmiResult = document.getElementById('bmi-result');
const bmiCategory = document.getElementById('bmi-category');

// Add event listener to calculate button
calculateBtn.addEventListener('click', calculateBMI);
// Function to calculate BMI
function calculateBMI() {
    // Retrieve user input values
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validate input
    if (!weight || !height) {
        alert('Please fill out both fields');
        return;
    }
    if (weight <= 0 || height <= 0) {
        alert('Please enter positive numbers');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Round BMI to two decimal places
    const roundedBMI = bmi.toFixed(2);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    
  }
