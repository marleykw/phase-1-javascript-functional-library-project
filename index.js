function myEach(collection, alert) {
   //let newCollection = console.log(Object.values(collection))
    Object.values(collection).forEach(element=> {
        let value = alert(element)
    })
    return collection //Object.values(collection)
}

function myMap(collection, callback) {
    let newArray = []
    Object.values(collection).forEach(element => {
        let value = callback(element)
        newArray.push(value)
    });
    console.log(newArray)
    return newArray
}