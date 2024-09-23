function calculateMacros() {
  // Get user input
  const goal = document.getElementById("goal").value;
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activityLevel = parseInt(document.getElementById("activityLevel").value);

  // Calculate BMR
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Adjust BMR for activity level
  bmr *= activityLevel;

  // Determine macro ratios based on goal
  let proteinRatio = 0.3;
  let carbRatio = 0.5;
  let fatRatio = 0.2;
  if (goal === "weightLoss") {
    proteinRatio = 0.35;
    carbRatio = 0.4;
    fatRatio = 0.25;
  } else if (goal === "muscleGain") {
    proteinRatio = 0.4;
    carbRatio = 0.5;
    fatRatio = 0.1;
  }

  // Calculate recommended macros
  const recommendedProtein = bmr * proteinRatio;
  const recommendedCarbs = bmr * carbRatio;
  const recommendedFats = bmr * fatRatio;

  // Display results
  document.getElementById("results").innerHTML = `
    <p>Recommended Macros:</p>
    <p>Protein: ${recommendedProtein.toFixed(2)} grams</p>
    <p>Carbohydrates: ${recommendedCarbs.toFixed(2)} grams</p>
    <p>Fats: ${recommendedFats.toFixed(2)} grams</p>
  `;
}
