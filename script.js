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

let startingWeight = 0;
let estimatedWeeklyWeightLoss = 0;

function calculate() {
  // ... (rest of your calculate() function)

  // Update global variables
  startingWeight = parseFloat(document.getElementById("startingWeight").value);
  estimatedWeeklyWeightLoss = caloricDeficit * 7 / 3500;

  // ... (rest of your chart configuration)
}

// Create a Chart.js chart
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length:   
 weeksInSixMonths }, (_, i) => i + 1), // Weeks 1 to 26
        datasets: [{
            label: 'Weight Loss Over Time',
            data: Array.from({ length: weeksInSixMonths }, (_, i) => startingWeight - estimatedWeeklyWeightLoss * i), // Weight at each week
            borderColor: 'rgba(255, 99, 132, 1)', // Red
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
