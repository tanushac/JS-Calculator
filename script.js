
      const display = document.getElementById('display');

      function clearDisplay() {
        display.value = '';
      }

      function deleteLastChar() {
        display.value = display.value.toString().slice(0, -1);
      }

      function appendToDisplay(char) {
        display.value += char;
      }

      function calculateResult() {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = 'Error';
        }
      }
    
