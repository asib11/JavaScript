document.cookie.split('; ').map(c =>{
    const data = c.split('=');
    console.log(`name: ${data[0]}, value: ${data[1]}`)
})