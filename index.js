
function writeCards(names, event){
    let messages = [];
    for(let i = 0; i < names.length; i++){
        let msg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(msg);       
    }
    return messages;
}

function countDown(n){
    while(n >= 0){
        console.log(n--);
    }

    
}

