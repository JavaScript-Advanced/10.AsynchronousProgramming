function circleArea(input) {
    if (isNaN(input)) {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`);
    } else {
        let area = Math.PI * input * input;
        console.log(area.toFixed(2));
    }
}

circleArea(5);