const message = "    TASTE THE RAINBOW!  ";
const whisper = message.toLowerCase().trim()

// search method 
const word = "skateboard";
const facialHair = word.slice(5).replace("o", "e");

//literal

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

const roll = `roll: "You rolled a ${die1} and a ${die2}. They sum to ${die1+die2}"`