/**
 *
 * @param n number to be rounded round
 * @param positions decimal positions depth to round
 * @returns the rounded number
 */
export declare function round(n: number, positions?: number): number;
/**
 *
 * @param start start value
 * @param end end value
 * @returns the percent difference
 *
 * ## Example
 * ```ts
 * percDiff(100,90)
 * // output: -10
 *
 * percDiff(90,100)
 * // output: 10
 * ```
 */
export declare function percDiff(start: number, end: number): number;
/**
 *
 * @param value the value tu be multiplied by the given percent value
 * @param percent percent value
 * @returns the value multiplied by percent
 *
 * ## Example
 * ```ts
 * calculatePercent(100,10)
 * // output: 110
 *
 * calculatePercent(100,-10)
 * // output: 90
 * ```
 */
export declare function calculatePercent(value: number, percent: number): number;
/**
 * ```
 * Weighted Mean =  Σwx/Σw
 * ```
 *
 * The weighted arithmetic mean is similar to an ordinary arithmetic mean,
 * except that instead of each of the data points contributing equally to the final average,
 * some data points contribute more than others.
 * If all the weights are equal, then the weighted mean is the same as the arithmetic mean.
 *
 * @example
 * ```js
 * weightedArithmeticMean([[251,0.1], [360, 0.5], [210, 0.7]]);
 * // => 270.8461538461539
 * ```
 *
 * @link https://en.wikipedia.org/wiki/Weighted_arithmetic_mean
 */
export declare function weightedArithmeticMean(value: number[], weight: number[]): number;
/**
 * gets the precision of a number (how many decimal digits)
 *
 * @example
 * ```js
 * getPrecision(1.1) //1
 * getPrecision(1.12) //2
 * getPrecision(1) //0
 * getPrecision(0) //0
 * ```
 */
export declare function getPrecision(n?: number): number;
/**
 *
 * returns the nearest multiple of a number
 * @example
 * ```js
 * getNearestMultiple(11, 2) // 12
 * getNearestMultiple(11, 3) // 12
 * getNearestMultiple(5,  2) // 6
 * getNearestMultiple(0.5, 0.2)  // 0.4
 * ```
 */
export declare function getNearestMultiple(n: number, multiple: number): number;
//# sourceMappingURL=math.d.ts.map