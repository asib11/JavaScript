//desturcture array
const num = [1,2,3,4,5,6];
const [one, two, ...other] = num;

console.log(one);
console.log(other);

//destructure object
const obj = {
    name: "asib",
    id:31,
    intake : 40,
    section: 1,
    dept: "CSE",
    cgpa: 3.75
};

const {name,id} = obj; //make just veriable
console.log(name);
const {name: name1} = obj;
console.log(name1)


