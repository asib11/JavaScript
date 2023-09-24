function stopWatch(){
    let counter = 0;
    return function (){
        counter++;
        return counter;
    }
}

const watch = stopWatch();
const watch2 = stopWatch();

console.log(watch());
console.log(watch());
console.log(watch2());
console.log(watch());
console.log(watch2());
console.log(watch2());
console.log(watch());
console.log(watch2());