import {validateAdjacentItemsOperationArgs}
	from '@writetome51/validate-adjacent-items-operation-args';


// Use this as a replacement for Array.prototype.splice() when removing items from `array`.
// This does strict type-checking for all 3 parameters.
// `startingIndex` can be negative or positive.

export function getAndRemoveAdjacentAt(startingIndex, howMany, array) {
	validateAdjacentItemsOperationArgs(startingIndex, howMany, array);
	return array.splice(startingIndex, howMany);
}
