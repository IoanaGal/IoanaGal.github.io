function checkValue() {
    var radios = document.getElementsByName('1');
    var value;
    var correct=1;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "c")
                correct++;
        }
    }
    var radios = document.getElementsByName('2');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "a")
                correct++;
        }
    }
    var radios = document.getElementsByName('3');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "c")
                correct++;
        }
    }
    var radios = document.getElementsByName('4');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "d")
                correct++;
        }
    }
    var radios = document.getElementsByName('5');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "c")
                correct++;
        }
    }
    var radios = document.getElementsByName('6');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "c")
                correct++;
        }
    }
    var radios = document.getElementsByName('7');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "b")
                correct++;
        }
    }
    var radios = document.getElementsByName('8');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "d")
                correct++;
        }
    }
    var radios = document.getElementsByName('9');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;
            if (value == "e")
                correct++;
        }
    }
    document.getElementById("check").value="Nota obținută este:"+correct;
}