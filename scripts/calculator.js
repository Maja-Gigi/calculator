let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  saveCalculation();
}

// Mogu i napraviti funkciju za spremanje izračuna
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-display-calculation').innerHTML = calculation;
}