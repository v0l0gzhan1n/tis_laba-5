function TimerStarter() {
  let  counter = document.getElementById("counter");
  let count = parseInt(counter.textContent);
    
  let  timer = setInterval(function() {
    count--;
    counter.textContent = count;
    
    if (count == 0) {
      clearInterval(timer);
    }
  }, 1000);
}