function loadCmntData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => commentData(data))
};

function commentData(data){
    const commentDiv = document.getElementById('container');
    for (const c of data){
        const div = document.createElement('div')
        div.innerHTML = `
        <h2>name: ${c.name}</h2>
        <p>comment: ${c.body}</p>
        `;
        commentDiv.appendChild(div);
    } 

}

loadCmntData();