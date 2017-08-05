var keys = document.querySelectorAll('.button');
var screen = document.querySelector('.screen');
var equal = document.querySelector('.equal');
var del = document.querySelector('.delete');


for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function () {
        output = this.innerHTML;
        screen.innerHTML += output;


    });

    equal.addEventListener('click', function () {
        screen.innerHTML = eval(screen.innerHTML)


    });

    del.addEventListener('click', function () {
        screen.innerHTML = ""


    });
}
















