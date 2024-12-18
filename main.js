"use strict";

const input = prompt("Enter an integer N:");

if (input === null) {
  alert("You have cancelled the entry");
} else if (!input.trim()) {
  alert("Error: the entered string is empty");
} else if (isNaN(input) || !Number.isInteger(+input)) {
  alert("Error: the entered value is not an integer");
} else {
  const n = Math.abs(+input);
  const results = [];

  for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {
      results.push(i);
    }
  }

  alert(`Numbers whose square does not exceed N ${n}: ${results.join(", ")}`);
}
