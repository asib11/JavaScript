// for of works on arry
//for in works on object

// 3 way to looping object
// assign in a array then loop
const student = {name: 'Asib', id: 31, intake: 40, cse: true};
const keys = Object.keys(student);
for (const key of keys){
    console.log(key, student[key]);
}

// for in
for (const key in student){
    console.log(key,student[key]);
}

// advance
const pair = Object.entries(student);
for (const [key,value] of pair){
    console.log(key, value);
}