function a(){
    console.log('a');
    b();
    console.log('aa'); 
}
function b(){
    console.log('b');
    c();
    console.log('bb'); 
}
function c(){
    console.log('c');
    console.log('cc'); 
}
function x(){
    console.log('x');
    y();
    console.log('xx'); 
}
function y(){
    console.log('y');
    console.log('yy'); 
}

const timeoutId = setTimeout(()=>{
    console.log('i am set timeout')
},3000);

const timeoutId2 = setTimeout(()=>{
    console.log('i am set timeout2')
},2000);

a();
x();