import { errorIfIndex_howMany_andArray_areNotValid }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndex_howMany_andArray_areNotValid';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest';


// Use this as a replacement for Array.splice() when removing items from array.
// This replacement does strict type-checking for all 3 parameters.
// startingIndex can be negative or positive.

export function getAndRemoveAdjacentAt(startingIndex, howManyToRemove, array): any[] {
	errorIfIndex_howMany_andArray_areNotValid(startingIndex, howManyToRemove, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howManyToRemove, array);
	if (howManyToRemove > 0) return array.splice(startingIndex, howManyToRemove);
	else throw new Error('The number of items to remove must be greater than zero');
}
