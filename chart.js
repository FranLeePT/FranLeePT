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