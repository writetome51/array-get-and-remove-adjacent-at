# getAndRemoveAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Beginning at `startingIndex`, it removes and returns `howMany` adjacent items  from `array`.  
`startingIndex` can be positive or negative.


## Examples
```
let arr = [1,2,3,4,5,6];
let removed = getAndRemoveAdjacentAt(2, 3, arr);

// removed is now [3,4,5].  arr is now [1,2,6]

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAdjacentAt(-4, 2, arr);

// removed is now [7,8].  arr is now [1,2,3,4,5,6,9,10].

arr = [1, 2, 3, 4, 5, 6];
removed = getAndRemoveAdjacentAt(-4, 5, arr); // requesting 1 too many items.
// Error: 'the array does not have enough items to fulfill your request'
```


## Installation
`npm i  @writetome51/array-get-and-remove-adjacent-at`

## Loading
```
// if using TypeScript:
import {getAndRemoveAdjacentAt} from '@writetome51/array-get-and-remove-adjacent-at';
// if using ES5 JavaScript:
var getAndRemoveAdjacentAt = 
    require('@writetome51/array-get-and-remove-adjacent-at').getAndRemoveAdjacentAt;
```