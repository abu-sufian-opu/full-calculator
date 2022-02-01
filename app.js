let localValue = [];

function calValue(value) {
    localValue.push(value)

    document.querySelector('.display1').innerHTML = localValue.join('')
}


function allClear() {
    document.querySelector('.display1').innerHTML = 0;
    document.querySelector('.display2').innerHTML = 0;
    localValue = []
}

function back() {
    localValue.pop()

    document.querySelector('.display1').innerHTML = localValue.join('')
}

function eql() {

    if (localValue == "") {
        alert('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡')
    } else if ((localValue.join('')).includes('!')) {
        localValue.pop()
        let num = (localValue.join('')) * 1;
        const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);
        let numres = factorial(num);
        document.querySelector('.display2').innerHTML = numres;
        document.querySelector('.display1').innerHTML = 0;
        localValue = [];
    } else if ((localValue.join('')).includes('^')) {
        let index = localValue.join('').split('^');
        const [a, b] = index;
        let result = Math.pow(a, b);
        document.querySelector('.display2').innerHTML = result;
        localValue = [];
    } else if ((localValue.join('')).includes('π')) {
        let pye = localValue.join('').split('π');
        let result = 1;
        pye.map((pi) => {
           result = result * pi;
        })
        document.querySelector('.display2').innerHTML = Math.PI * result;

        localValue = [];

    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    else {
        let result = localValue.join('');
        document.querySelector('.display2').innerHTML = math.evaluate(result);

        document.querySelector('.display1').innerHTML = 0;
        localValue = [];
    }



}