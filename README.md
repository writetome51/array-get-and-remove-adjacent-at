# getAndRemoveAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Beginning at `startingIndex`, it removes and returns `howMany` adjacent items from `array`.  
`startingIndex` can be positive or negative.


## Examples
```js
let arr = [1,2,3,4,5,6];
getAndRemoveAdjacentAt(2, 3, arr);
// --> [3,4,5]
// arr is now [1,2,6]

arr = [1, 2, 3, 4, 5, 6, 7, 8];
getAndRemoveAdjacentAt(-4, 2, arr);
// --> [5,6]
// arr is now [1,2,3,4,7,8].

arr = [1, 2, 3, 4, 5, 6];
getAndRemoveAdjacentAt(-4, 5, arr); // requesting 1 too many items.
// Error: 'the array does not have enough items to fulfill your request'
```

## Installation
`npm i  @writetome51/array-get-and-remove-adjacent-at`

## Loading
```js
import {getAndRemoveAdjacentAt} 
    from '@writetome51/array-get-and-remove-adjacent-at';
```
