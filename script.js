const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate');
const resultDiv   
 = document.getElementById('result');

calculateButton.addEventListener('click',   
 () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height)) {
    resultDiv.textContent = 'Please enter valid weight and height   
 values.';
    return;
  }

  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});