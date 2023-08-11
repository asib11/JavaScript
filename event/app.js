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

//type 4
const pink = document.getElementById("pink");
pink.addEventListener("click", makePink);

function makePink(){
    document.body.style.backgroundColor = "pink";
}

//type 4 other

const goldenrod = document.getElementById("goldenrod");
goldenrod.addEventListener("click",function(){
    document.body.style.backgroundColor = "goldenrod";
})

//type 4 final

document.getElementById("purple").addEventListener("click",()=>document.body.style.backgroundColor = "purple" )