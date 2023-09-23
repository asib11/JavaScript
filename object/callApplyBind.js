const player ={
    name: 'sakib',
    age: 35,
    monthlySalary: 15000,
    annualSalary: function(){
        return this.monthlySalary*12;
    },
    summary: function(monthName){
        return `${this.name}'s annual salary is ${this.annualSalary()} and he withdraws it in ${monthName}`; 
    },
    //setter
    monthlyExpenses: function(home,pocketMoney){ //set a value
        this.monthlySalary = this.monthlySalary - home -pocketMoney;
        return `reminder ${this.monthlySalary}`;
    }
};

const player2 = {
    name: 'mahmudullah',
    monthlySalary: 280000
}

//3 way to use one object method to another object (borrow)
//call
const monthlyExpenses2 =player.monthlyExpenses.call(player2,10000,3000);
console.log(monthlyExpenses2);

//apply
console.log(player.monthlyExpenses.apply(player2,[10000,4000]));

//bind
const monthlyExpenses3 = player.monthlyExpenses.bind(player2);
console.log(monthlyExpenses3(10000, 5000))