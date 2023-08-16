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
