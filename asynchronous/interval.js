const timeoutId = setTimeout(()=>{
    console.log('i am set timeout')
},3000);

console.log('i am synchronous');
console.log('i am synchronous');
console.log('i am synchronous');
console.log('i am synchronous');
//clearTimeout(timeoutId);

//set interval
let num = 0;
const intervalId = setInterval(()=>{
    console.log(++num);
    if (num === 10){
        clearInterval(intervalId)
    }
},1000);