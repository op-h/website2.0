function performConversion() {
  const inputType = document.getElementById('input-type').value;
  const outputType = document.getElementById('output-type').value;
  const inputValue = document.getElementById('input-value').value.trim();
  const outputValue = document.getElementById('output-value');

  let result = '';

  try {
    if (inputValue !== '') {
      let decimalValue;

      switch (inputType) {
        case 'binary':
          decimalValue = parseInt(inputValue, 2);
          break;
        case 'decimal':
          decimalValue = parseInt(inputValue, 10);
          break;
        case 'hexadecimal':
          decimalValue = parseInt(inputValue, 16);
          break;
        case 'octal':
          decimalValue = parseInt(inputValue, 8);
          break;
        case 'ascii':
          decimalValue = inputValue.split('').map(char => char.charCodeAt(0)).join(' ');
          break;
        default:
          throw new Error('Invalid input type');
      }

      switch (outputType) {
        case 'binary':
          result = decimalValue.toString(2);
          break;
        case 'decimal':
          result = decimalValue.toString(10);
          break;
        case 'hexadecimal':
          result = decimalValue.toString(16).toUpperCase();
          break;
        case 'octal':
          result = decimalValue.toString(8);
          break;
        case 'ascii':
          result = String.fromCharCode(...inputValue.split(' ').map(Number));
          break;
        default:
          result = 'Invalid output type';
      }
    }
  } catch (e) {
    result = 'Error in conversion';
  }

  outputValue.value = result;
}
