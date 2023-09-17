let number = 100;

function decreaseNumber() {
  number--;
  console.log(number);
}

setInterval(decreaseNumber, 1000);