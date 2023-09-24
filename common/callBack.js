function food(meal, name){
    meal(name);
}

function breakfast(name){
    console.log('breakfast done', name);
}
function lunch(name){
    console.log('lunch done', name);
}
function dinner(name){
    console.log('dinner done', name);
}

food(breakfast,'Asib');
food(lunch,'Asib');
food(dinner,'Asib');