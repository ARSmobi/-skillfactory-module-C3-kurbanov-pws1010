function keyViewer(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`)
        }
    }
}

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = Object.create(obj1);
obj2.d = 4
obj2.e = 5
obj2.f = 6

keyViewer(obj2);
