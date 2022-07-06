function demo(speed, area) {
    let speedLimit = 0;
    let difference = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            }
            break;
        case 'city':
            speedLimit = 50;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
            }
            break;
    }

    if (difference == 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    } 
    
    if (difference < 21) {
        status = 'speeding';
    } else if (difference < 41) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

demo(40, 'city');
demo(21, 'residential');
demo(200, 'motorway');