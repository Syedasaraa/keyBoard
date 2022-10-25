const keys = document.querySelectorAll('.keys');
const display = document.querySelector('.display textarea');
let keyValue = '';
keys.forEach(function (key) {
    for (let i = 0; i < key.children.length; i++) {
        key.children[i].addEventListener('click', function () {
           keyValue += key.children[i].getAttribute('value');
            display.value = keyValue.toLocaleLowerCase();
        })
           
    }
});

    

