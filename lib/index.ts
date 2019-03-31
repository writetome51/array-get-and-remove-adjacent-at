import { errorIfIndex_howMany_orArray_areNotValid }
	from 'error-if-index-how-many-or-array-are-not-valid';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from 'error-if-array-too-short-to-meet-adjacent-items-request';


// Use this as a replacement for Array.splice() when removing items from array.
// This replacement does strict type-checking for all 3 parameters.
// startingIndex can be negative or positive.

export function getAndRemoveAdjacentAt(startingIndex, howManyToRemove, array): any[] {
	errorIfIndex_howMany_orArray_areNotValid(startingIndex, howManyToRemove, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howManyToRemove, array.length);
	if (howManyToRemove > 0) return array.splice(startingIndex, howManyToRemove);
	else throw new Error('The number of items to remove must be greater than zero');
}
