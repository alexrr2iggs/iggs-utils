"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gen = exports.lastEl = exports.isSorted = exports.forEachConsPairs = exports.arrayDifferences = void 0;
/**
 *
 * @param a1 array to compare
 * @param a2 array to compare
 * @returns return the array difference a1-a2
 */
function arrayDifferences(a1 = [], a2 = []) {
    const retVal = [];
    for (let i = 0; i < a1.length; i++)
        retVal.push(Math.abs((a1[i] || 0) - (a2[i] || 0)));
    return retVal;
}
exports.arrayDifferences = arrayDifferences;
/**
 * executes the provided function fn once for each pair of consecutive elements of the provided array.
 *
 * @example
 * ```js
 * const array=[1,2,3,4];
 *
 * forEachConsPairs(array,console.log);
 *
 * // prints
 * // 1 2
 * // 2 3
 * // 3 4
 * ```
 *
 */
function forEachConsPairs(array, fn) {
    if (!(array === null || array === void 0 ? void 0 : array.length) || typeof fn !== 'function')
        return;
    for (let i = 1; i < array.length; i++) {
        const item1 = array[i - 1];
        const item2 = array[i];
        fn(item1, item2);
    }
}
exports.forEachConsPairs = forEachConsPairs;
/**
 * check if the givven array is sorted or not.
 *
 * @example <caption>check array of numbers </caption>
 * ```js
 *  isSorted([1,2,3])	//true
 *  isSorted([1,3,2])	//false
 * ```
 *
 *  @example <caption>check array of strings</caption>
 *```js
 *  isSorted(['a','b','c'])	//true
 *  isSorted(['a','c','b'])	//false
 * ```
 *
 *   @example <caption>check array of objects, with compareFn</caption>
 * ```js
 *  isSorted([{ x:1}, { x:2}, { x:3}], (o1,o2)=> o1.x-o2.x) // true
 *  isSorted([{ x:1}, { x:3}, { x:2}], (o1,o2)=> o1.x-o2.x) // false
 * ```
 *
 * @param array array to check if is sorted
 * @param compareFn function to use for comparison operation
 */
function isSorted(array, compareFn = genericSortFunction) {
    if (!(array === null || array === void 0 ? void 0 : array.length))
        return;
    for (let i = 1; i < array.length; i++) {
        const item1 = array[i - 1];
        const item2 = array[i];
        if (compareFn(item1, item2) > 0)
            return false;
    }
    return true;
}
exports.isSorted = isSorted;
const genericSortFunction = (item1, item2) => {
    try {
        return item1 === item2 ? 0 : item1 > item2 ? 1 : -1;
    }
    catch (error) {
        return 0;
    }
};
/**
 * get the last element of an aray.
 *
 * @example <caption>simply does:</caption>
 * simply does:
 * ```js
 *  array[array.length - 1];
 * ```
 */
function lastEl(array) {
    return array === null || array === void 0 ? void 0 : array[(array === null || array === void 0 ? void 0 : array.length) - 1];
}
exports.lastEl = lastEl;
/**
 * generate an array, of specified length using the generate function
 *
 * @example <caption>Generate an array with numbers from 0 to 9</caption>
 * ```js
 *  gen(10, i => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
function gen(length, genFn) {
    const retVal = new Array(length);
    for (var i = 0; i < length; i++)
        retVal[i] = genFn(i);
    return retVal;
}
exports.gen = gen;
//# sourceMappingURL=collectionOpperations.js.map