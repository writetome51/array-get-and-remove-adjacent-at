"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfIndex_howMany_andArray_areNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndex_howMany_andArray_areNotValid");
var errorIfArrayTooShortToMeetAdjacentItemsRequest_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest");
// Use this as a replacement for Array.splice() when removing items from array.
// This replacement does strict type-checking for all 3 parameters.
// startingIndex can be negative or positive.
function getAndRemoveAdjacentAt(startingIndex, howManyToRemove, array) {
    errorIfIndex_howMany_andArray_areNotValid_1.errorIfIndex_howMany_andArray_areNotValid(startingIndex, howManyToRemove, array);
    errorIfArrayTooShortToMeetAdjacentItemsRequest_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howManyToRemove, array);
    return array.splice(startingIndex, howManyToRemove);
}
exports.getAndRemoveAdjacentAt = getAndRemoveAdjacentAt;
