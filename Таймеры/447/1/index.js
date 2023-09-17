let number = 100;
      let timerId;
      
      function startTimer() {
        timerId = setInterval(decrementValue, 1000);
      }
      
      function decrementValue() {
        number--;
        console.log(number);
        
        if (number === 0) {
          stopTimer();
        }
      }
      
      function stopTimer() {
        clearInterval(timerId);
      }
      
      document.getElementById("start").addEventListener("click", startTimer);
      document.getElementById("stop").addEventListener("click", stopTimer);