//old way
function nameing(first,last){
    // if (last === undefined){
    //     last ="Ahmed";
    // }
    last= typeof last !== "undefined" ? last: "Ahmed"; //one line 

    console.log(`${first} ${last}`);
}

nameing("Asib","OK");

//new way
function nameing2(first,last="Ahmed"){
    console.log(`${first} ${last}`)
}

nameing2("Asib")