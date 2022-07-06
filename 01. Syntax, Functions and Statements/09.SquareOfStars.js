function square(input) {
    let figure='';
    if (isNaN(input) || input === '0') {
        input = 5;
    }

    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            figure += '* ';
        }
        figure.trimEnd();
        figure += '\n';
    }
    console.log(figure);
}

square(7);