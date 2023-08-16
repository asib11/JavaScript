const input = document.getElementById("text");
const btn = document.querySelector("#post-btn");
btn.addEventListener('click',()=> {
    const tweetBox = input.value;
    console.log(tweetBox);
});
