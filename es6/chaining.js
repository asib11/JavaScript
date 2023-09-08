const nestedObj = {
    name: 'Asib Ahmed',
    programming : [
        {comailerLanguage :['c/c++', 'java'], scriptLanguage: 'JavaScript'}, 
        {web: ['html','css'], backend: {jsBase: 'node.js', windowsBase: '.net'}}
    ]
};

console.log(nestedObj.name);
console.log(nestedObj.programming[1].backend?.jsBase);