const display = document.getElementById('displayLine');
let operation;
let value1;

function SetNum(num){
    display.value += num;
}

function AddParentheses(AddP){
    if(display.value.includes(')')){
        return
    }
    if(!display.value.includes('(')){
        display.value += '(';
    }
    else{
        display.value += ')';
    }
}

function AddPoint(){
    if(display.value.includes('.')){
        return
    }
    else{
        display.value += '.';
    }
}

function MakeOperation(op){
    if(op === 'clear'){
        display.value = ""
    }
    operation = op
    value1 = display.value
    display.value = ""
}

function equal(){
    let value2;
    if(operation === '+'){
        value2 = display.value
        display.value = Number(value1) + Number(value2)
    }

    else if(operation === '-'){
        value2 = display.value
        display.value = Number(value1) - Number(value2)
    }

    else if(operation === 'x'){
        value2 = display.value
        display.value = Number(value1) * Number(value2)
    }

    else if(operation === '/'){
        value2 = display.value
        display.value = Number(value1) / Number(value2)
    } else{
        display.value = 'Error'
    }
}
