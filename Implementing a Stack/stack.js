var Stack = (() => {
	const sKey= {};
//Create a WeakMap()
	const items = new WeakMap();

class Stack {
//Define a constructor
   constructor() {
		items.set(sKey, [])
	}
	
//Implement the Stack Methods
   push(element){
  	let stack =  items.get(sKey);
  	stack.push(element);
   }
   pop(){
   	let stack = items.get(sKey);
   	return stack.pop();
   }
   peek(){
    let stack = items.get(sKey);
    return stack[stack.length-1]

   }
   clear(){
   items.set(sKey, []);
   }
   size(){
   	return items.get(sKey).length;
   }
 
 }
 return Stack;

}) ();

/* 
//To make it suitable for Multi-Environment
// AMD
if (typeof define === 'function' && define.amd) {
define(function () { return Stack; });

// NodeJS/CommonJS
} else if (typeof exports === 'object') {
if (typeof module === 'object' && typeof module.exports ==='object') {
exports = module.exports = Stack;
}
// Browser
} else {
window.Stack = Stack 
-->
*/


//Testing The Stack

var stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.items); //prints undefined -> cannot be accessed directly\
console.log(stack.size); //prints out 2
console.log(stack.peek()); //prints out 20
console.log(stack.pop()); //prints out 20
console.log(stack.size()); //prints out 1
stack.clear();
console.log(stack.size()); //prints out 0

















