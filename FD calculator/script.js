function calculateMaturityAmount() {
    var principalAmount = parseFloat(
      document.getElementById("principalAmount").value,
    );
    var interestRate = parseFloat(
      document.getElementById("interestRate").value,
    );
    var investmentYears = parseFloat(
      document.getElementById("investmentYears").value,
    );

    var maturityAmount =
      principalAmount +
      (principalAmount * interestRate * investmentYears) / 100;

    document.getElementById(
      "result",
    ).textContent = `₹${maturityAmount.toFixed(2)}`;

    return false;
  }