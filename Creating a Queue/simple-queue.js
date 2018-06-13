var Queue = (() => {
const qKey = {};
const items = new WeakMap();
class Queue {
constructor() {
	items.set(qKey, []);
}
add(element) {
	let queue = items.get(qKey);
	queue.push(element);
}
remove() {
	let queue = items.get(qKey);
	return queue.shift();
}
peek() {
	let queue = items.get(qKey);
	return queue[queue.length - 1];}
front() {
	let queue = items.get(qKey);
	return queue[0];
}
clear() {
	items.set(qKey, []);
}
size() {
	return items.get(qKey).length;
  }
}
return Queue;
})();

//Testing The Queue
 
 var simpleQueue = new Queue;
 simpleQueue.add(10);
 simpleQueue.add(20);
 simpleQueue.add(30);
 simpleQueue.add(40);

console.log(simpleQueue.items); //returns undefined
console.log(simpleQueue.size()); //prints 4
console.log(simpleQueue.remove()); //prints 10
console.log(simpleQueue.size()); //prints 3
simpleQueue.clear();  
console.log(simpleQueue.size()); //prints 0

