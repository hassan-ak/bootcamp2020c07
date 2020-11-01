// Call BAck Hell Pyramid
console.log("***********************\n***  Async & await  ***\n***********************")
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


async function startProcess() {
    try {
        let soup = await prepareSoup();
        console.log(soup)
        let biryani = await prepareBiryani();
        console.log(biryani)
        let tea = await prepareTea();
        console.log(tea)
    } catch (error) {
        console.log(error)
    }
}
startProcess()