// Get input fields and button
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');

// Get result elements
const bmiResult = document.getElementById('bmi-result');
const bmiCategory = document.getElementById('bmi-category');

// Add event listener to calculate button
calculateBtn.addEventListener('click', calculateBMI);
