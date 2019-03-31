"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_how_many_or_array_are_not_valid_1 = require("error-if-index-how-many-or-array-are-not-valid");
var error_if_array_too_short_to_meet_adjacent_items_request_1 = require("error-if-array-too-short-to-meet-adjacent-items-request");
// Use this as a replacement for Array.splice() when removing items from array.
// This replacement does strict type-checking for all 3 parameters.
// startingIndex can be negative or positive.
function getAndRemoveAdjacentAt(startingIndex, howManyToRemove, array) {
    error_if_index_how_many_or_array_are_not_valid_1.errorIfIndex_howMany_orArray_areNotValid(startingIndex, howManyToRemove, array);
    error_if_array_too_short_to_meet_adjacent_items_request_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howManyToRemove, array.length);
    if (howManyToRemove > 0)
        return array.splice(startingIndex, howManyToRemove);
    else
        throw new Error('The number of items to remove must be greater than zero');
}
exports.getAndRemoveAdjacentAt = getAndRemoveAdjacentAt;
