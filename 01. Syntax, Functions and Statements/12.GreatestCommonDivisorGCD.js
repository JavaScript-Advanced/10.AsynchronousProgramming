function calc(a, b) {
    let first = Number(a);
    let second = Number(b);

    let max = Math.max(first, second);

    if (first > 0 && second > 0) {
        for (let i = 2; i <= max; i++) {
            if (first % i == 0 && second % i == 0) {
                console.log(i);
                return;
            }
        }
    }

    console.log(1);
}

calc(18, 5);