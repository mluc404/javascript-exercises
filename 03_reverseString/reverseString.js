const reverseString = function(str) {
    let strArr = str.split('')
    let output = ''
    for (let i=strArr.length-1; i>=0; i--) {
        output+= strArr[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
