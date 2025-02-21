const palindromes = function (str) {
    // Select only letters and numbers, and lowercase
    str = str.replace(/[^a-zA-Z0-9]/g,'')
    let strCleaned = str.toLowerCase()
    console.log(strCleaned)

    // // Solution1: Compare 2 Arrays
    // arr = Array.from(strCleaned)
    // let arrRev = arr.toReversed()
    // return arr.every((val, ind)=> val===arrRev[ind])
   
    // //  Solution 2: Compare 2 Strings
    // let str2 = arrRev.toString()
    // let str2clean = str2.replaceAll(',','')
    // return strCleaned===str2clean

    // Most Efficient Solution:

    let newStr = strCleaned.split('').reverse().join('')
    
    return strCleaned === newStr

};

// palindromes('Racecar!')
palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
