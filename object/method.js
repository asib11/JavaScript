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
}

console.log(player.summary('July'));
console.log(player.monthlyExpenses(7000,2000));