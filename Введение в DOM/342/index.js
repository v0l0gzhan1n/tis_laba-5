let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function() {
   func1();
});

button2.addEventListener('click', function() {
   func2();
});

function func1() {
   alert(1);
}

function func2() {
   alert(2);
}
