const { HashMap, HashSet } = require('./hashmap');

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.length());
console.log(test.capacity);

test.set('apple', 'green');
test.set('dog', 'white');
console.log(test.length());
console.log(test.capacity);

test.set('moon', 'silver');
console.log(test.length());
console.log(test.capacity);

test.set('moon', 'white');
console.log(test.get('moon'));
console.log(test.length());

console.log(test.get('apple'));
console.log(test.get('unicorn'));
console.log(test.has('kite'));
console.log(test.has('unicorn'));
console.log(test.remove('kite'));
console.log(test.remove('kite'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test.length());

const set = new HashSet();
set.add('a');
set.add('b');
set.add('a');
console.log(set.keys());
console.log(set.length());