import { getAndRemoveAdjacentAt } from './getAndRemoveAdjacentAt';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Test 1
let removed = getAndRemoveAdjacentAt(0, 1, arr);
if (removed.length === 1 && removed[0] === 1) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 1B
if (arr.length === 9 && arr[0] === 2) console.log('test 1B passed');
else console.log('test 1B FAILED');


// Test 2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAdjacentAt(0, 2, arr);
if (removed.length === 2 && removed[0] === 1 &&
	removed[1] === 2) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 2B
if (arr.length === 8 && arr[0] === 3) console.log('test 2B passed');
else console.log('test 2B FAILED');


// Test 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAdjacentAt(1, 2, arr);
if (removed.length === 2 && removed[0] === 2 &&
	removed[1] === 3) console.log('test 3 passed');
else console.log('test 3 FAILED');

// Test 3B
if (arr.length === 8 && arr[0] === 1 && arr[1] === 4) console.log('test 3B passed');
else console.log('test 3B FAILED');


// Test 4
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAdjacentAt(4, 4, arr);
if (removed.length === 4 && removed[0] === 5 &&
	removed[1] === 6 && removed[3] === 8) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAdjacentAt(-4, 2, arr);
if (removed.length === 2 && removed[0] === 7 &&
	removed[1] === 8) console.log('test 5 passed');
else console.log('test 5 FAILED');

// Test 5B
if (arr.length === 8 && arr[6] === 9 && arr[7] === 10) console.log('test 5B passed');
else console.log('test 5B FAILED');


// Test 6
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAdjacentAt(-4, 4, arr);
if (removed.length === 4 && removed[0] === 7 &&
	removed[3] === 10) console.log('test 6 passed');
else console.log('test 6 FAILED');

// Test 6B
if (arr.length === 6 && arr[0] === 1 && arr[5] === 6) console.log('test 6B passed');
else console.log('test 6B FAILED');


// Test 7
let errorsTriggered = 0;
try {
	getAndRemoveAdjacentAt(); // needs arguments
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(arr, 1, 2); // first arg must be integer
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt('', 2, arr); // first arg must be integer
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(-1, -1, arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(-1, '1', arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(-1, 7, arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(-1, 1, {prop: 1});
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(6, 1, arr);
}
catch (e) {
	++errorsTriggered;
}
try {
	getAndRemoveAdjacentAt(-1, 0, arr); // howMany can't be zero.
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 9) console.log('test 7 passed');
else console.log('test 7 FAILED');
