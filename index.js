// Code your solutions in this file
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  

  
  countDown(10);
  