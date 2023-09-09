const numbers = [4,3,5,6,12,13,87,32,44,54,45,67];
const numbersResult = numbers.filter(x => x%2 === 0);
console.log(numbersResult);

// find : it take only immidiate first result

const numbersResultFind = numbers.find(x => x%2 === 0);
console.log(numbersResultFind);
