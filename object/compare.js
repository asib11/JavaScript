obj1 = { a: 1, b: 2, c: 3 };
obj2 = { a: 1, c: 3, b: 2 };

obj1Keys = Object.keys(obj1);
obj2Keys = Object.keys(obj2);

function comapre(obj1Keys, obj2Keys) {
    if (obj1Keys.length === obj2Keys.length) {
        for (const key of obj1Keys) {
            if (obj1Keys[key] !== obj2Keys[key]) {
                return false;
            }else{
                return true;
            }
        }
    } else{
        return false;
    }
}

console.log(comapre(obj1Keys, obj2Keys));