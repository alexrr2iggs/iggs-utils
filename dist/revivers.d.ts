/**
 * @link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter
 */
export declare type Reviver<T> = (key: string, value: any) => T;
/**
 * revive
 * @param _key
 * @param value
 * @returns
 */
export declare const ISO_8601StringtoDate: Reviver<Date>;
/**
 * merge multiple reviver in one, the resulted value is equal to the result of the first reviver that resolve,
 * so reviver order determine theire priority
 *
 * @param revivers
 * @returns
 * @link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter
 */
export declare function mergeRevivers(...revivers: Reviver<any>[]): Reviver<any>;
//# sourceMappingURL=../src/dist/revivers.d.ts.map