function calc(first, second, third){
    let length = first.length + second.length + third.length;
    let average = Math.floor(length/3);
    console.log(length);
    console.log(average);
}

calc('chocolate', 'ice cream', 'cake');
