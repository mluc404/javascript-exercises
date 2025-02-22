const findTheOldest = function (arr) {

    // Create varible for max age, initial value = 0
    // Loop thru the array
    // At the current index, compute the age
    // If the current age > max age => set max age = current age; and max index = current index
    // After the looop, return the element at the max index

    let maxAge = 0;
    let maxInd = 0;

    for (let i = 0; i < arr.length; i++) {
        let currAge = 0;
        if (arr[i].yearOfDeath == undefined) {
            currAge = 2025 - arr[i].yearOfBirth
        } else {
            currAge = arr[i].yearOfDeath - arr[i].yearOfBirth
        }
        if (currAge > maxAge) {
            maxAge = currAge
            maxInd = i
        }
    }
    return arr[maxInd]
};


const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people).name)




let carly = {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
};

console.log(carly.age == undefined)

// Do not edit below this line
module.exports = findTheOldest;
