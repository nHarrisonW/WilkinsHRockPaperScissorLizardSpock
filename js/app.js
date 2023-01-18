let selectText = document.getElementsByClassName('selectText');
let Button1 = document.getElementById('Button1');
let Button2 = document.getElementById('Button2');

Button1.addEventListener('click', function () {
    OnePlayer(params);
})
Button2.addEventListener('click', function () {
    TwoPlayer(params);
})