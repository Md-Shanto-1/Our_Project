const form = document.querySelector('.calculator form');
const carInput = form.querySelectorAll('input')[0];
const electricityInput = form.querySelectorAll('input')[1];
const plasticInput = form.querySelectorAll('input')[2];
const result = form.querySelector('.mock-result strong');

const CAR_FACTOR = 2.31; 
const ELECTRICITY_FACTOR = 0.65; 
const PLASTIC_FACTOR = 0.003;   


form.addEventListener('input', calculate);

function calculate() {

  const car = parseFloat(carInput.value) || 0;
  const electricity = parseFloat(electricityInput.value) || 0;
  const plastic = parseFloat(plasticInput.value) || 0;

  const carCO2 = car * CAR_FACTOR;
  const electricityCO2 = electricity * ELECTRICITY_FACTOR;
  const plasticCO2 = plastic * PLASTIC_FACTOR;

  const totalCO2 = carCO2 + electricityCO2 + plasticCO2;

  result.textContent = totalCO2.toFixed(2) + " kg CO₂/দিন";
}