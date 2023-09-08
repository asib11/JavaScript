const numbers = [1,2,3,4,5];
const result = numbers.map(x => x**2);
console.log(result);

//string

const text = ['asib', 'ahmed', 'hamza'];
const upperText = text.map(x => x[0].toUpperCase()+x.slice(1)); //slice work
console.log(upperText);

text.forEach(x => console.log(x.toUpperCase())); // no return given