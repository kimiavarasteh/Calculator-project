// const calculator = document.querySelector('.calculator')
// const keys = document.querySelector('.calculator__keys')
// const display = document.querySelector('.calculator__display')

// keys.addEventListener('click', e => {
//   if (e.target.matches('button')) {
//     // Do something
//     const key = e.target
//     const action = key.dataset.action
//     const keyContent = key.textContent
//     const displayedNum = display.textContent
//     if(!action){
//       console.log('number key!')
//     }
//     if(
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ){
//       console.log('operator key!')
//     }
//     if(action === 'decimal'){
//       console.log('decimal key!')
//     }
//     if (action === 'clear') {
//       console.log('clear key!')
//     }
//     if (action === 'calculate') {
//       console.log('equal key!')
//     }
    
//   }
// })

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      // Operator key
      setOperator(action, displayedNum);
      key.classList.add('is-depressed');
    }

    if (action === 'decimal') {
      // Decimal key
      addDecimal();
    }

    if (action === 'clear') {
      // Clear key
      clearDisplay();
    }

    if (action === 'calculate') {
      // Calculate key
      calculate(displayedNum);
      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  
    }
  }
});

function appendNumber(number) {
  display.textContent += number;
}

function setOperator(operator, displayedNum) {
  calculator.dataset.operator = operator;
  calculator.dataset.firstValue = displayedNum;
  display.textContent = '';
}

function addDecimal() {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
}

function clearDisplay() {
  display.textContent = '';
}

function calculate(displayedNum) {
  const operator = calculator.dataset.operator;
  const firstValue = parseFloat(calculator.dataset.firstValue);
  const secondValue = parseFloat(displayedNum);

  if (operator === 'add') {
    display.textContent = firstValue + secondValue;
  }

  if (operator === 'subtract') {
    display.textContent = firstValue - secondValue;
  }

  if (operator === 'multiply') {
    display.textContent = firstValue * secondValue;
  }

  if (operator === 'divide') {
    display.textContent = firstValue / secondValue;
  }
}