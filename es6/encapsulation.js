class Players{
    #salary // Private field '#salary' must be declared in an enclosing class.

    constructor(name, age , salary){
        this.name = name;
        this._age = age;
        this.#salary = salary;
    }

    calculateSalary(){
        return this.#salary*12
    }
}

const sakib = new Players('sakib', 35, 120000);
console.log(sakib.calculateSalary());
console.log(sakib.age);