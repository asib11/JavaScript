class Human{
    constructor(name){
        this.name = name;
        this.hand = 2;
        this.leg = 2;
    }

    defination(){
        return `${this.name} has ${this.hand} and ${this.leg}`;
    }
};

class Baby extends Human{
    constructor(name){
        super(name);
        this.cute = true;
    }

    babyDefination(){
        return `${this.defination()}, and its a very cute baby`
    }
};

const baby = new Baby('asib');
console.log(baby.babyDefination())