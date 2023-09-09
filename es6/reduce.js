const numbers = [4,3,5,6,12,13,87,32,44,54,45,67];
const numberReduce = numbers.reduce((previous, Current ) => previous+Current , 0);
console.log(numberReduce);


const nestedObj = {
    name: 'Asib Ahmed',
    programming : [
        {compailerLanguage :['c/c++', 'java'], scriptLanguage: 'JavaScript'}, 
        {web: ['html','css'], backend: {jsBase: 'node.js', windowsBase: '.net'}}
    ]
};

//dot noation
const web = 'web';
console.log(nestedObj.programming[1][web]);

//braket notation
console.log(nestedObj['programming'][0]['compailerLanguage']);
