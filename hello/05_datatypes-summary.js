// primitive 

// 7 types : String,Number ,null ,undefined, boolean,symbol,BigInt




// const score = 100
// const scorevalue= 100.3
// const isloggedIn = false 
// const outsideTemp = undefined
// const isName ='Gojo satoru'
// let userEmail; //value will undefined 

// console.log(isName);

// const id = Symbol('123') 
// hamesha unique hona chahiye data type - symbol

// const anotherid = Symbol('123')
// console.log(id==anotherid); // false 

// const bigNumber =  354524254242n

// reference (non  primitive ) 
 
// Array, Objects, Functions
  
// const hero = ['megumi','nobara','maki'] // array like list 
// let myobj ={
//     name:'gojo',    
//     age : 22,
// }
// //like dict 

// funtions  type - function 

// const myfunction = function(){
//       console.log('hell world')
// }
 
// myfunction()

// console.log(typeof bigNumber)


// type val     Result

// undefined    'undefinded'
// null          'object '
// boolean        'boolean'
// number         'number '
// string          'string' 

//++++++++++++++++++++++++++++++++++++++++

//stack (peimitive ),heap(non premitive)

// let mytyname = 'shubham bansal'
// let anothername  = 'gojo satoru'
// console.log(mytyname);
// console.log(anothername)// same concept python waala copy krke bhi variable ki original value same rhaegi 


let userone = {
    email :'user@google.com',
    upi : '65468'
 }

let usertwo = userone
usertwo.email= 'shub@gmail.com'
console.log(userone.email); // yeh alg cheej hai isme original value change bhi hogyi hai 
console.log(usertwo.email);



