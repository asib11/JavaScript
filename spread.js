arr1 = [1,2,3];
arr2 = [4,5,6];
console.log([...arr1, ...arr2]);

//spread object
obj1 = {name: "asib",id:31};
obj2 = {intake: 40, section: 1};

console.log({...obj1, ...obj2});

//rest

function sum(...nums){
    return nums.reduce((total, i) => total+i)
}

console.log(sum(1,2,3,4,5));