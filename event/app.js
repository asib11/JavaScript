//type 1 direct
//<button onclick="document.body.style.backgroundColor = 'red'">red</button>

//type 2
function makeColorBlue(){
    document.body.style.backgroundColor = 'blue';
}

//type 3

const yellowColor = document.getElementById('makeColorYellow');
yellowColor.onclick = makeYellow;

function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}

//type 3 other

const greenColor = document.getElementById("makeColorGreen");
greenColor.onclick = () =>(document.body.style.backgroundColor = 'green');