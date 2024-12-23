function printNumber(num: number): void {
  console.log(num);
}

function calculate(a: number, b: number): number {
  const result = a + b; 
  printNumber(result);
  return result;
}

const result = calculate(5, 10); // Correct usage