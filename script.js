const input = document.querySelector('input[type="text"]');
const resultDiv = document.querySelector('#result');

input.addEventListener('change', () => {
  const decimal = parseInt(input.value.trim(), 10);
  const binary = decimalToBinary(decimal);
  resultDiv.textContent = binary;
});

function decimalToBinary(decimal) {
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary || '0';
}

module.exports = threeSum;
