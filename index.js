// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, value){
    let messageNames = [];
    for (let i = 0; i <names.length; i++){
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);   
    }
    return messageNames;
}

function countDown(number){
    while (number >=0) {
    console.log (number)
    number --
    }
}