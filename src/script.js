// Add an event listener to the form with the ID 'tva-form'
document.getElementById('tva-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the default form submission behavior

     // Define a class to hold price data and perform tax-related calculations
    class PriceData {
        constructor(ttcPrice, taxRate) {
            // Initialize and calculate class variables
            this.ttcPrice = ttcPrice;
            this.taxRate = taxRate;
            this.htP = ttcPrice / (1 + taxRate / 100);
            this.taxAmount = this.ttcPrice - this.htP;
        }
    }

     // Retrieve the TTC price and tax rate entered by the user
    const priceTTC = parseFloat(document.getElementById('p').value);
    const taxRate = parseFloat(document.getElementById('tr').value);

     // Validate input: check if inputs are valid numbers and positive
    if (isNaN(priceTTC) || isNaN(taxRate) || priceTTC <= 0 || taxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

     // Get the section where results will be displayed
    const resultsSection = document.getElementById('results');

    // Create an instance of PriceData with the input values
    const priceData = new PriceData(priceTTC, taxRate);

    // Update the 'results' section with the calculated values
    resultsSection.innerHTML = `
        <p><strong>Prix HT :</strong> ${priceData.htP.toFixed(2)} €</p>
        <p><strong>Part TVA :</strong> ${priceData.taxAmount.toFixed(2)} €</p>
        <p><strong>Prix TTC :</strong> ${priceData.ttcPrice.toFixed(2)} €</p>
    `;
});