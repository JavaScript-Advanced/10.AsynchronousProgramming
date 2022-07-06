function calc(input){
    let text = input.toString();
    let isSame = true;
    let sum=0;

    for (let i = 0; i < text.length; i++) {
        sum+= +text[i];
    }

    for (let i = 0; i < text.length-1; i++) {
        if (text[i] !== text[i+1]) {
            isSame=false;
        }
    }
    
    console.log(isSame);
    console.log(sum);
}

calc(222);