function calculateMacros() {
  // Get user input
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activityLevel = parseInt(document.getElementById("activityLevel").value);

  // Calculate recommended macros
  const recommendedProtein = weight * 2.2;
  const recommendedFats = weight / 2;
  const recommendedCarbs = weight;

  // Display results
  document.getElementById("results").innerHTML = `
    <p>Recommended Macros:</p>
    <p>Protein: ${recommendedProtein.toFixed(2)} grams daily</p>
    <p>Carbohydrates: ${recommendedCarbs.toFixed(2)} grams daily</p>
    <p>Fats: ${recommendedFats.toFixed(2)} grams daily</p>
  `;
}
