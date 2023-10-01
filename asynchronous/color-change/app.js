const colorChange = (color, delay, doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor = color;
        doNext && doNext();
    }, delay)
}

colorChange('red', 1000,()=>{
    colorChange('yellow',1000,()=>{
        colorChange('green',1000,()=>{
            colorChange('blue',1000,()=>{
                colorChange('teal',1000,()=>{
                    colorChange('orange',1000,()=>{
        
                    })
                })
            })
        })   
    })
})