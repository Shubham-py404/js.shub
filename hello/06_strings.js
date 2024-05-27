// const name = 'shubham'
// const repoCount = 59
// console.log(name + repoCount + 'value');

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// note -- use `` for use that mathod 

const gameName = new String('shubham')
console.log(gameName[0]); // simple indexing 
console.log(gameName.__proto__); // its a syntax and gives object {}
console.log(gameName.length);

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString = gameName.substring(0,4) // not work with neg value
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringone = '     shubham        ' // wants to remove space 
console.log(newStringone);
console.log(newStringone.trim());

const url = 'https://shubham.com/hii%20noopiece'
console.log(url.replace('%20','-'));

console.log(url.includes('hii'));



// convert in array 
const hell = 'shub-ham'
console.log(hell.split('-')); //same python output - list 