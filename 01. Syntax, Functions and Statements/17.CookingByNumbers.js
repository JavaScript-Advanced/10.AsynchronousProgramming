function demo(inputNumber, a, b, c, d, e) {
    let number = Number(inputNumber);
    let arrOfCommands = [a, b, c, d, e];

    let dice = function(){
        return Math.sqrt(number);
    }

    for (let i = 0; i < arrOfCommands.length; i++) {
        switch (arrOfCommands[i]) {
            case 'chop': number /= 2; break;
            case 'dice': number = dice(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.80; break;
        }
        console.log(number);
    }
}

demo('32', 'chop', 'chop', 'chop', 'chop', 'chop');
demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet');