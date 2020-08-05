import { errorIfIndex_howMany_orArray_areNotValid }
	from 'error-if-index-how-many-or-array-are-not-valid';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from 'error-if-array-too-short-to-meet-adjacent-items-request';


// Use this as a replacement for Array.splice() when removing items from `array`.
// This does strict type-checking for all 3 parameters.
// `startingIndex` can be negative or positive.

export function getAndRemoveAdjacentAt(startingIndex, howMany, array): any[] {
	errorIfIndex_howMany_orArray_areNotValid(startingIndex, howMany, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howMany, array.length);
	return array.splice(startingIndex, howMany);
}
