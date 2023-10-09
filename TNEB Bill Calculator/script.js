document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateBtn').addEventListener('click', calculateBill);
});

function calculateBill() {
    const consumedUnits = parseFloat(document.getElementById('consumedUnits').value);
    const depositeRequired = document.getElementById('depositeRequired').value;
    let billAmount = 0;

    if (consumedUnits >= 0 && consumedUnits <= 100) {
        // 0 to 100 units: Free of charge
        billAmount = 0;
    } else if (consumedUnits <= 200) {
        // 101 to 200 units: Rs.1.5 per unit
        billAmount = (consumedUnits - 100) * 1.5;
    } else if (consumedUnits <= 500) {
        // 201 to 500 units: Rs.2 per unit for next 100, Rs.3 per unit for balance
        billAmount = 100 * 1.5 + (consumedUnits - 200) * 3;
    } else {
        // Above 500 units: Rs.3.5 per unit for 101-200, Rs.4.6 per unit for 201-500, Rs.6.6 per unit for over 500
        billAmount = 100 * 1.5 + 100 * 3 + (consumedUnits - 500) * 6.6;
    }

    // Check if a deposit is required
    if (depositeRequired === 'yes') {
        billAmount += 1000; // Example deposit amount of Rs.1000
    }

    // Display the result
    document.getElementById('result').innerHTML = `Total Bill Amount: ₹ ${billAmount.toFixed(2)}`;
}
