function addCalculateItem(value) {
    document.getElementById('displayNum').value += value;
}

function evalCalculateItem() {

    var displayn = document.getElementById('displayNum').value;
    if (displayn != '') {
        document.getElementById('displayResult').value = eval(document.getElementById('displayNum').value);
    } 
    if (displayn != '') {
        document.getElementById('displayNum').placeholder = document.getElementById('displayNum').value;
    }
    document.getElementById('displayNum').value = '';
}

function reset_calculate() {
    document.getElementById('displayNum').placeholder = 0;
    document.getElementById('displayNum').value = '';
    document.getElementById('displayResult').value = '';
}

function clearineitem() {
    var dnvalue = document.getElementById('displayNum').value;
    var dnrep = dnvalue.slice(0, -1);
    document.getElementById('displayNum').value = dnrep;
}
