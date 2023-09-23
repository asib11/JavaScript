//1.create object literals

const player = {};
player.name = 'asib ahmed'; //properties
player.age = 26;
player.bat = () => console.log('he is a cricketer'); //method
console.log(player);
player.bat(); //method call

//simple way
const baby = {
    name: 'asib',
    age: 26, 
    annualSalary: ()=>{
        return 1000*12
    }
};
console.log(baby);
console.log(baby.annualSalary());

// 2. object constractor
const person = new Object();
console.log(person); //get empty obaject

//3. create method object
// const item = Object.create(null) //must be add parameter at least one
const item = Object.create(player);
console.log(item); // it gets empty object
console.log(item.age); //chaining

//4. class obaject es6
class Person1{
    name='ahmed';
    address = 'kushtia';
    constructor(age){
        this.age = age;
    }
};

const person1 = new Person1('26');
console.log(person1);

//5. function obaject
function Car(model, price){
    this.model = model;
    this.price = price;
}

const bmw = new Car('i8', 1000);
console.log(bmw)