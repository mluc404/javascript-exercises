const repeatString = function(str, num) {
    let strReturn = ''

    if (num < 0) return 'ERROR'
    if (str == '') return ''

    for (let i=0; i<num; i++) {
        strReturn += str
    }
    return strReturn
};

// Do not edit below this line
module.exports = repeatString;
