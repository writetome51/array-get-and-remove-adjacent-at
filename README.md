# getAndRemoveAdjacentAt\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): T[]

Beginning at `startingIndex`, it removes and returns `howMany` adjacent items from `array`.  
`startingIndex` can be positive or negative.  
Intended as a replacement for Array.prototype.splice() when removing items from `array`.  
This does strict validation for all 3 parameters.


## Examples
```js
let arr = [1,2,3,4,5,6];
getAndRemoveAdjacentAt(1, 3, arr);
// --> [2,3,4]
// arr is now [1,5,6]

arr = [1, 2, 3, 4, 5, 6, 7, 8];
getAndRemoveAdjacentAt(-4, 2, arr);
// --> [5,6]
// arr is now [1,2,3,4,7,8].

arr = [1, 2, 3, 4, 5, 6];
getAndRemoveAdjacentAt(-2, 3, arr); // requesting 1 too many items.
// Error: 'the array does not have enough items to fulfill your request'

getAndRemoveAdjacentAt(0, 1, []); // index 0 doesn't exist on empty array.
// Error: 'The entered index is not valid.  Whether positive or negative, 
// it exceeds the index range of the array.'
```

## Installation
`npm i  @writetome51/array-get-and-remove-adjacent-at`

## Loading
```js
import {getAndRemoveAdjacentAt} 
    from '@writetome51/array-get-and-remove-adjacent-at';
```
