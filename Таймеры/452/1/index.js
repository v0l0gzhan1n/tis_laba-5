let i = 0;

function printNumber() {
  console.log(i);
  i++;
  
  setTimeout(printNumber, 1000);
}

printNumber();