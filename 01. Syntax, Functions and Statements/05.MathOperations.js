function calc(a, b, operation) {
    let result;
    switch (operation) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '/': result = a / b; break;
        case '*': result = a * b; break;
        case '%': result = a % b; break;
        case '**': result = a ** b; break;
    }
    console.log(result);
}

calc(3, 4, '*');