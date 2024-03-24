const gifts = ["Teddy bear", "barbie doll", "remote control car"];

for(let i = 0; i < gifts.length; i++){
    console.log(`I wrapped ${gifts[i]} and added a note`);
};

function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for attending the ${eventName} event!`);
    }
    return messages;
}

// Example usage:
let names = ["Guadalupe", "Ollie", "Aki"];
let eventName = "surprise";
let cards = writeCards(names, eventName);
console.log(cards);

let k = 10;
function coundtdown(){
    while (k < 0)
    k--
};

function writeCards(namesArray, eventName) {
    const cards = [];
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

