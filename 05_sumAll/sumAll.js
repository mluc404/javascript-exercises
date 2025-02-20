const sumAll = function(start,end) {


    // use 2 variables i and k
    // i = the first interger, k = i + 1
    // while i < the second interger, increment i by 1 and assign it to k.
    // the current sum = sum + k
    // then set i = k

    // check if interger and -1
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR'
    }

    let sum = 0;
    if (start <= end) {
        for (let i=start; i<=end; i++) {
            sum += i;
            console.log(sum)
        }
    } else {
        for (let i=start; i>=end; i--) {
            sum += i;
            // console.log(sum)
        }
    }
    console.log(sum)
    return sum
    
};


sumAll(-1,4)
// Do not edit below this line
module.exports = sumAll;
