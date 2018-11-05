To include in your project:

import {getAndRemoveAdjacentAt} from '@writetome51/array-get-and-remove-adjacent-at';

Function removes and returns adjacent array items beginning at specified index:

getAndRemoveAdjacentAt(startingIndex, howManyToRemove, array): any[]

startingIndex can be positive or negative.


Example:

let arr = [1,2,3,4,5,6];

let removed = getAndRemoveAdjacentAt(2, 3, arr);

removed is now [3,4,5].  arr is now [1,2,6]