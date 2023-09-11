class Players{
    #salary // Private field '#salary' must be declared in an enclosing class.

    constructor(name, age , salary){
        this.name = name; //public
        this._age = age; // protected
        this.#salary = salary; // private
    }

    calculateSalary(){
        return `anual salary ${this.#salary*12}`
    }
}

const sakib = new Players('sakib', 35, 120000);
console.log(sakib.calculateSalary());
console.log(sakib._age);