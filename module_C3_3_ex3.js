function createObjectWithoutPrototype(){
    return Object.create(null)
}

const emptyObj = createObjectWithoutPrototype()
console.log(emptyObj.__proto__)
