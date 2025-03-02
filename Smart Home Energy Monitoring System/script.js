let energyData = [20, 30, 40, 50, 60, 45, 55]; 
let labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let budget = 100; 


let ctx = document.getElementById("energyChart").getContext("2d");
let energyChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Energy Usage (kWh)",
            data: energyData,
            backgroundColor: "blue",
        }]
    }
});


function setBudget() {
    let inputBudget = document.getElementById("budget").value;
    if (inputBudget) {
        budget = inputBudget;
        checkBudget();
    }
}


function checkBudget() {
    let totalUsage = energyData.reduce((a, b) => a + b, 0);
    let alertBox = document.getElementById("alert");

    if (totalUsage > budget) {
        alertBox.innerHTML = "⚠️ Alert: Energy usage exceeded the budget!";
    } else {
        alertBox.innerHTML = "✅ Within budget.";
    }
}

checkBudget(); 