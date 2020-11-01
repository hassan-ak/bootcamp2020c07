// Call BAck Hell
console.log("******************\n***  CallBack  ***\n******************")
console.log("Order Dinner")
function prepareSoup(callback){
    console.log("Preparing Soup")
    setTimeout(() => {
        callback("Soup is Ready") 
    }, 1000);
}
function prepareBiryani(callback){
    console.log("Preparing Biryani")
    setTimeout(() => {
        callback("Biryani is Ready") 
    }, 3000);
}
function prepareTea(callback){
    console.log("Preparing Tea")
    setTimeout(() => {
        callback("Tea is Ready") 
    }, 5000);
}
function soupCallBack(value){
    console.log(value)
prepareBiryani(biryaniCallBack)
}
function biryaniCallBack(value){
    console.log(value)
    prepareTea(teaCallBack)
}
function teaCallBack(value){
    console.log(value)
}
prepareSoup(soupCallBack)

