/*type annotations
var number1:number;
number1=10
console.log(number1)

var fname:string;
fname="john"
console.log(fname)

objects:
var loginstatus:boolean|number
loginstatus=1
console.log(loginstatus)
var employee:object
employee={
    fname:"john",
    email:"john@123",
    age:34,
    manager:true
}
console.log(employee)
var employee:{
fname:string,
email:string,
age:number,
manager:boolean|string
}
employee={
    fname:"john",
    email:"john@123",
    age:34,
    manager:true
}
console.log(employee)

var userDetails:(number|string)[]
userDetails=["john",45,34,67]
userDetails.push("manager")
console.log(userDetails)

var experience:[number,string]
experience=[3,'Wipro']
console.log(experience)
function add(a:number,b:number):number{
 return a+b
   // return "done"
}
console.log(add(10,20))*/
var add;
add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));
