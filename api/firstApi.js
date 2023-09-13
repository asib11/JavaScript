const student = {name: 'Asib', Id: 31, intake: 40, course: ['cse', 'eee', 'math']}
const jsonStringify = JSON.stringify(student);
console.log(jsonStringify);

const jsonObj = JSON.parse(jsonStringify);
console.log(jsonObj);