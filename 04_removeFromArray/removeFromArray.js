const removeFromArray = function(arr, ...theArgs) {
    // let i = arr.indexOf(num)
    // arr.splice(i,1)
    // return arr
    // console.log('arr:', arr)
    // console.log('the rest: ', theArgs)


    // solution 1: return a new array
    // let arr2 = []
    // for (let i in theArgs) {
    //     console.log(theArgs[i])
    //     arr2= arr.filter(num => num !== theArgs[i])
    //     for (let k =0; k<3; k++) {
    //         console.log('k: ', k)
    //     }
    // }
    // console.log(arr2)

    // solution 2: modify in place. Costs O(n^2) at worst
    for (let i in theArgs) {
        for (let k=arr.length-1; k>=0; k--) {
            if (arr[k] === theArgs[i]) {
                arr.splice(k,1)
            }
        }
    }
    console.log(arr)
    return arr
};

removeFromArray([1,2,3,3], 3)

// Do not edit below this line
module.exports = removeFromArray;
