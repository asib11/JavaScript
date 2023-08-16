const btn = document.querySelector("#post-btn");
btn.addEventListener('click',()=> {
    const input = document.getElementById("text");
    const tweetBox = input.value;
    const postList = document.getElementById("post-list");
    const p = document.createElement("p");
    p.innerText = tweetBox;
    postList.append(p);
    input.value = '';
});

document.getElementById("delete").addEventListener("keyup", (event)=>{
    const text = event.target.value;
    const deleteBtn = document.getElementById("delete-btn");
    if (text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    } else{
        deleteBtn.setAttribute('disabled', true);
    }
});

document.getElementById('delete-btn').addEventListener('click', ()=>{
    document.getElementById('h1').style.display = 'none'
})

