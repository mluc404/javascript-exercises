const sumAll = function(start,end) {



    // check if interger and not negative
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
