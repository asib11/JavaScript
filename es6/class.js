class Human{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
        this.hand = 2;
        this.leg = 2;
    }

    outPutResult(){
        return `this human name is ${this.name} , sex: ${this.sex} and has ${this.hand} hands`; //this must be use when use any attribute
    }
};

const gai = new Human('asib', 'male');
console.log(gai.outPutResult());