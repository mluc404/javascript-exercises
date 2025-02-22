const getTheTitles = function(arr) {
    let output = []
    
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i].title)
        output = output.concat(arr[i].title);
    } 
    return output
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books));

// function Person(inputName) {
//     this.name = inputName
//     this.introduceSelf = `Hi! I'm ${this.name}.`
//     }
// let minh = new Person('Minh')
// console.log(minh.introduceSelf)

// let c = ['a'].concat(['b'])

// console.log(typeof(c))
// console.log(c)

// let d = [1,2]
// console.log(typeof(d))
// Do not edit below this line
module.exports = getTheTitles;
