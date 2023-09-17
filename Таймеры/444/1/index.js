let number = 10;

function decreaseNumber() {
  console.log(number);
  number--;
  
  if (number === -1) {
    clearInterval(timerId);
  }
}

let timerId = setInterval(decreaseNumber, 1000);