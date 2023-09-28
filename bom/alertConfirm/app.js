// alert 
const alertShow = ()=>{
    alert('please do click me');
}

//confirm
const confirmShow = ()=>{
    const result = confirm('are you sure?');
    if (result === true){
        alert('successful');
    }else{
        console.log('better luck next time');
    }
};

//prompt

const promptShow = ()=>{
    const name = prompt('plase inter your name');
    console.log(name);
}