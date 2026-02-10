const screen = document.querySelector(".calculator__screen");
const buttons = document.querySelectorAll(".btn");

var currentValue = "";
var previousValue = "";
var operator = "";

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.innerHTML;

    if (!isNaN(value)) {
      currentValue += value;
      // displayValue += value;
      screen.value = currentValue;
    }

    if (value === "+" || value === "-" || value === "×" || value === "/") {
      previousValue = currentValue;
      operator = value;
      // screen.value = previousValue + " " + operator;
      currentValue = "";
    };

    if (value === "=") {
      let result;

      if (operator === "+") {
        result = Number(previousValue) + Number(currentValue);
      }
      else if (operator === "-") {
        result = Number(previousValue) - Number(currentValue);
      }
      else if (operator === "×") {
        result = Number(previousValue) * Number(currentValue);
      }
      else if (operator === "/") {
        result = Number(previousValue) / Number(currentValue);
      }

      screen.value = result;
      currentValue = result;
    }

    if (value === "AC") {
      currentValue = "";
      previousValue = "";
      operator = "";
      screen.value = "";
    }

    if (value === "DEL") {
      currentValue = currentValue.slice(0, -1);
      screen.value = currentValue;
    }

  });
});