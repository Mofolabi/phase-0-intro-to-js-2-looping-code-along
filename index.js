function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message);
    }
    return messages;
}


// Countdown Function

function countDown(n){
    while(n >= 0){
        console.log(n)
        n--;
    }
}
