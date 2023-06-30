// Get the burger radio buttons
const burgerRadios = document.querySelectorAll('input[name="burger"]');
// Get the sauce checkboxes
const sauceCheckboxes = document.querySelectorAll('input[name="sauce"]');
// Get the toppings checkboxes
const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');
// Get the sides radio buttons
const sidesRadios = document.querySelectorAll('input[name="side"]');
// Get the drink radios
const drinkRadios = document.querySelectorAll('input[name="drink"]');
// Get the total element
const totalElement = document.getElementById('total');
// Define the base price of the burger
const basePrice = 5.99;
// Create variables to store the total and drink price
let total = basePrice;
let sidePrice = 0;
let drinkPrice = 0;

// Add event listeners to the burger radios
burgerRadios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    if (radio.checked) {
      // Update the total based on the selected burger value
      total -= basePrice; // Subtract the previous burger price
      total += basePrice; // Add the new burger price
      totalElement.textContent = 'Total: £' + total.toFixed(2);
    }
  });
});

// Add event listeners to the sauce checkboxes
sauceCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // Add the sauce value to the total
      total += parseFloat(checkbox.value) || 0;
    } else {
      // Subtract the sauce value from the total
      total -= parseFloat(checkbox.value) || 0;
    }
    totalElement.textContent = 'Total: £' + total.toFixed(2);
  });
});

// Add event listeners to the toppings checkboxes
toppingsCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // Add the topping value to the total
      total += parseFloat(checkbox.value) || 0;
    } else {
      // Subtract the topping value from the total
      total -= parseFloat(checkbox.value) || 0;
    }
    totalElement.textContent = 'Total: £' + total.toFixed(2);
  });
});

// Add event listeners to the sides radios
sidesRadios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    if (radio.checked) {
      // Subtract the previous side price
      total -= sidePrice;
      // Update the side price with the newly selected side
      total += parseFloat(radio.value) || 0;
      sidePrice = parseFloat(radio.value) || 0;
      totalElement.textContent = 'Total: £' + total.toFixed(2);
    }
  });
});

// Add event listeners to the drink radios
drinkRadios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    if (radio.checked) {
      // Subtract the previous drink price
      total -= drinkPrice;
      // Update the drink price with the newly selected drink
      drinkPrice = parseFloat(radio.value) || 0;
      // Add the new drink price to the total
      total += drinkPrice;
      totalElement.textContent = 'Total: £' + total.toFixed(2);
    }
  });
});
