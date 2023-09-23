// 8 ways to get undefine
//1. variable that is not initialize will give
let a;
console.log(a); //will get undefine

//2. function with no return
function add(a,b){
    a+b;
}
console.log(add(10,5)) // get undefine

//3. parameter that is not passed will give undefine
function para(a,b,c,d){
    return a,b,c,d;
}
console.log(para(10,5)) //get undefine

//4. if return has nothing on the right side will give undefined
//5. property that does not exists on an obaject will give undefined
//6. array element outside of the index rage
//7. deleting an element inside an array
//8. set a value directly to undefined
// example: const some = undefined;//get undefined. should use const some = null;