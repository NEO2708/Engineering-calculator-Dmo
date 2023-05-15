let result = document.getElementById('result');

function input(value) {
    result.value += value;
}

function clearAll() {
    result.value = "";
}

function erase() {
    result.value = result.value.slice(0, -1);
}

function operation(operation) {
    switch (operation) {
        case 'sqrt':
            result.value = Math.sqrt(result.value);
            break;
        case 'power':
            result.value = Math.pow(result.value, 2);
            break;
        case 'sin':
            result.value = Math.sin(result.value);
            break;
        case 'cos':
            result.value = Math.cos(result.value);
            break;
        case 'tan':
            result.value = Math.tan(result.value);
            break;
        case 'log':
            result.value = Math.log10(result.value);
            break;
        case 'pi':
            result.value = Math.PI;
            break;
        case 'e':
            result.value = Math.E;
            break;
        case '=':
            result.value = eval(result.value);
            break;
        default:
            result.value += operation;
            break;
    }
}
