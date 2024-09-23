function updateMetrics() {
    // Get starting and current values
    const startingWeight = parseFloat(document.getElementById("starting-weight").textContent);
    const currentWeight = parseFloat(document.getElementById("current-weight").textContent);
    const startingBodyFat = parseFloat(document.getElementById("starting-body-fat").textContent);
    const currentBodyFat = parseFloat(document.getElementById("current-body-fat").textContent);

    // Calculate and update values
    const weightLost = startingWeight - currentWeight;
    const bodyFatLost = startingBodyFat - currentBodyFat;
    const progressPercentage = (weightLost / startingWeight) * 100;

    document.getElementById("weight-lost").textContent = weightLost.toFixed(2) + " lbs";
    document.getElementById("body-fat-lost").textContent = bodyFatLost.toFixed(1) + "%";
    document.querySelector('.progress-bar-inner').style.width = `${progressPercentage}%`;
    document.querySelector('p').textContent = `Progress: ${progressPercentage.toFixed(2)}%`;
}
