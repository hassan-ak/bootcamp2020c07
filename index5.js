// Call BAck Hell Pyramid Promises
console.log("******************\n***  Promisses  ***\n******************")
console.log("Order Dinner")

function prepareSoup(data){
    let promise = new Promise(function(resolve,reject){
        console.log("Preparing Soup")
        setTimeout(() => {
            if (data !== 2) {
                resolve("Soup is Ready")
            }else {
                reject("Value not acceptable");
            }
             
    }, 1000);
    });  
    return promise;
}

function prepareBiryani(){
    let promise = new Promise(function(resolve,reject){
        console.log("Preparing Biryani")
        setTimeout(() => {
            resolve("Biryani is Ready") 
    }, 3000);
    })
    return promise;
}


function prepareTea(){
    let promise = new Promise(function(resolve,reject){
        console.log("Preparing Tea")
        setTimeout(() => {
            resolve("Tea is Ready") 
    }, 5000);
    })
    return promise;
}
// let promise = prepareSoup(2);
let promise = prepareSoup();
promise.then(function (value) {
    console.log(value)
    return prepareBiryani()
})
.then(function(value1) {
    console.log(value1)
    return prepareTea()
})
.then(function(value2) {
    console.log(value2)
})
.catch(function (error) {
    console.log(error)
})


/*
prepareSoup(function (value){
                                console.log(value)
                                prepareBiryani(function (value){
                                                            console.log(value)
                                                            prepareTea(function (value){
                                                                                    console.log(value)
                                                            })
                                })
})
*/

