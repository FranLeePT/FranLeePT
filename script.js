function calculate() {
  const startingWeight = parseFloat(document.getElementById("startingWeight").value);
  const goalWeight = parseFloat(document.getElementById("goalWeight").value);

  // Assuming a caloric deficit of 500 calories per day for a 1-pound weekly weight loss
  const caloricDeficit = 500;
  const weeksInSixMonths = 26;

  // Calculate the total weight to lose
  const totalWeightLoss = startingWeight - goalWeight;

  // Calculate the estimated weekly weight loss
  const estimatedWeeklyWeightLoss = caloricDeficit * 7 / 3500;

  // Calculate the estimated number of weeks to reach goal
  const estimatedWeeksToGoal = totalWeightLoss / estimatedWeeklyWeightLoss;

  // Check if the estimated time is within 6 months
  const result = estimatedWeeksToGoal <= weeksInSixMonths ?
    `You can reach your goal weight in approximately ${estimatedWeeksToGoal.toFixed(2)} weeks.` :
    `Reaching your goal weight in 6 months might be challenging. Consider increasing your caloric deficit or adjusting your goal weight.`;

  document.getElementById("result").textContent = result;
}
