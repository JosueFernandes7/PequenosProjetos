const numbersButtons = document.querySelectorAll("[data-number]"); 
const operationsButtons = document.querySelectorAll("[data-operation]"); 
const clearButton = document.querySelector("[data-clear]"); 
const delNumberButton = document.querySelector("[data-del]"); 
const resultButton = document.querySelector("[data-result]"); 

const previousText = document.querySelector("[data-previous]"); 
const currentText = document.querySelector("[data-current]"); 

// console.log(clearButton);
class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear(); // remove o undefined padrão do previous e do current
  }

  formatNumber(number) {
    const numberFormated = number.toLocaleString('pt-BR',{
      maximumFractionDigits: 3,
    });
    return numberFormated;
  }
  removeElement() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
  calculate() {
    let result;
    let previousNum = parseFloat(this.previousOperand);
    let currentNum = parseFloat(this.currentOperand);

    if (isNaN(previousNum) || isNaN(currentNum)) return;

    switch (this.operation) {
      case "+":
        result = previousNum + currentNum;
        break;
      case "-":
        result = previousNum - currentNum;
        break;
      case "÷":
        result = previousNum / currentNum;
        if (currentNum == 0) result = undefined;
        break;
      case "*":
        result = previousNum * currentNum;
        break;
    }
    this.currentOperand = result;
    this.previousOperand = "";
    this.operation = undefined;
  }
  getOperation(operation) {
    // nao deixa iniciar com operation
    if(this.previousOperand == '' && this.currentOperand == '') return 
    // pode modificar o operation mesmo sem calcular
    if(operation && this.currentOperand === '') {
        this.operation = operation;
        return 
    }
    if(this.currentOperand === '') return
    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  getNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return; // se ja tiver ponto encerra a funcao
    this.currentOperand = this.currentOperand + number.toString();
  }
  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = ""; // zera a ordem de operacoes
  }
  updateScreen() {
    const previous = +this.previousOperand || this.previousOperand
    this.previousText.innerText = this.formatNumber(previous) + (this.operation || "");

    const current = +this.currentOperand || this.currentOperand
    this.currentText.innerText = this.formatNumber(current);
    
  }
}

const calculator = new Calculator(previousText, currentText);


clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateScreen();
});

numbersButtons.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.getNumber(number.innerText);
    calculator.updateScreen();
  });
});
operationsButtons.forEach((operations) => {
  operations.addEventListener("click", () => {
    calculator.getOperation(operations.innerText);
    calculator.updateScreen();
  });
});

resultButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateScreen();
});

delNumberButton.addEventListener("click", () => {
  calculator.removeElement();
  calculator.updateScreen();
});
