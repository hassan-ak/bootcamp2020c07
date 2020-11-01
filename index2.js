
// CallBacks.
console.log("******************\n***  CallBack  ***\n******************")
console.log("Order Food")
function prepareFood(callback){
    setTimeout(() => {
        console.log("prepare Food")
        callback("Food is Ready")
    }, 1000);
}
function myCallBack(value){
    console.log("value = ",value)
}
prepareFood(myCallBack);
console.log("Food Prepared")
console.log("")
console.log("")


