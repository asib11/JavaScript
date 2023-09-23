const student = {name: 'Asib', id: 31, intake: 40, cse: true};
//key access
const key = Object.keys(student);
console.log(key);

//value access
const value = Object.values(student);
console.log(value);

//pair access
const pair = Object.entries(student);
console.log(pair)

// detele pair
delete student.cse
console.log(student);

// seal object
//const seal = Object.seal(student); // you can not add or delete any pair but you can modify value

//freeze object
// const freeze = Object.freeze( student) // you can not do any changing