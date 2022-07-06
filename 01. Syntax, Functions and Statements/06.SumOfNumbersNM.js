function range(first, second) {
    let a = Number(first);
    let b = Number(second);
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum+=i;
    }

    console.log(sum);
}

range('-8','20');