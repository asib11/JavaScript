const myPromise = new Promise((resolve, reject) =>{
    const num = Math.floor(Math.random()*10);
    console.log(num);
    if(num>5){
        resolve(50)
    }else{
        reject('less then 5')
    }
})

myPromise
.then(data => console.log('adding:',data+12))
.catch(error => console.log(error))