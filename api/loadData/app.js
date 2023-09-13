function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => displayData(json))
};

function displayData(data){
    const ul = document.getElementById('data');
    for (const i of data){
        const li = document.createElement('li');
        li.innerText = i.name;
        ul.appendChild(li);
    }
};