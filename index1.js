// Sync Prog.
console.log("**************************************\n***  Sync Functions / programmimg  ***\n**************************************")
console.log("Order Food")
function prepareFood(){
    console.log("prepare Food")
}
prepareFood();
console.log("Food Prepared")
console.log(" \n \n")


// Async Prog.
console.log("**************************************\n***  Async Functions / programmimg  **\n**************************************")
console.log("Order Food")
function prepareFood1(){
    setTimeout(() => {
        console.log("prepare Food")
    }, 3000);
}
prepareFood1();
console.log("Food Prepared")